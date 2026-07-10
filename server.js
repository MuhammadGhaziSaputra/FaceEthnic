const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Increase payload limit for base64 images
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Proxy endpoint to Apilogy API (avoids CORS issues)
app.post('/api/analyze', async (req, res) => {
    try {
        const { base64Image } = req.body;

        if (!base64Image) {
            return res.status(400).json({ error: 'No image provided' });
        }

        const payload = {
            model: "telkom-ai-vision-instruct",
            messages: [
                {
                    role: "user",
                    content: [
                        {
                            type: "text",
                            text: `Analyze this person's face carefully and estimate their nationality/ethnic origin based on facial features. Provide specific COUNTRY-BASED ethnicities (e.g. "Indonesian", "Japanese", "Nigerian", "Brazilian", "Indian", "German", etc.) NOT broad regions.

You MUST respond ONLY in this exact JSON format, no other text:
{
  "ethnicities": [
    {"name": "CountryName", "percentage": 0}
  ],
  "dominant": "the most dominant country name",
  "confidence": "high/medium/low"
}

Rules:
- Use specific country demonyms like "Indonesian", "Japanese", "Korean", "Chinese", "Indian", "Nigerian", "South African", "Brazilian", "Mexican", "American", "British", "German", "French", "Italian", "Thai", "Vietnamese", "Filipino", "Turkish", "Arab", "Ethiopian", etc.
- All percentages must sum to 100
- Include 2-5 ethnicities maximum, only those with percentage > 0
- Be as accurate as possible based on facial features
- Respond ONLY with the JSON, no explanation`
                        },
                        {
                            type: "image_url",
                            image_url: {
                                url: `data:image/jpeg;base64,${base64Image}`
                            }
                        }
                    ]
                }
            ],
            max_tokens: 500,
            temperature: 0,
            stream: false
        };

        // Retry logic for billing/subscription errors
        let rawText, response;
        const maxRetries = 3;

        for (let attempt = 1; attempt <= maxRetries; attempt++) {
            response = await fetch(
                'https://telkom-ai-dag.api.apilogy.id/LargeMultimodalModel/0.0.2/lmm/chat/completions',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                        'x-api-key': 'NZOQvuXJ7FNYadtqv3tVawdidIf5RXyz'
                    },
                    body: JSON.stringify(payload)
                }
            );

            rawText = await response.text();
            console.log(`[Attempt ${attempt}] Status: ${response.status} | ${rawText.substring(0, 120)}`);

            // If success or non-retryable error, break
            if (response.status === 200 || (!rawText.includes('charge to billing failed') && !rawText.includes('subscription is not found'))) {
                break;
            }

            // Wait before retry
            if (attempt < maxRetries) {
                await new Promise(r => setTimeout(r, 1000));
            }
        }

        let data;
        try {
            data = JSON.parse(rawText);
        } catch (e) {
            data = { raw: rawText, parseError: true };
        }

        // Forward billing errors as user-friendly messages
        if (data.message && data.message.includes('charge to billing')) {
            return res.status(402).json({ error: 'API billing error. Please check your Apilogy subscription.' });
        }

        res.json(data);
    } catch (error) {
        console.error('API Error:', error);
        res.status(500).json({ error: 'Failed to analyze image', details: error.message });
    }
});

if (process.env.NODE_ENV !== 'production') {
    app.listen(PORT, () => {
        console.log(`🚀 Race Detector server running at http://localhost:${PORT}`);
    });
}

module.exports = app;
