async function test() {
    const base64Image = '/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAP//////////////////////////////////////////////////////////////////////////////////////wgALCAABAAEBAREA/8QAFBABAAAAAAAAAAAAAAAAAAAAAP/aAAgBAQABPxA=';
    const payload = {
        model: 'telkom-ai-vision-instruct',
        messages: [
            {
                role: 'user',
                content: [
                    {
                        type: 'text',
                        text: `Analyze this person's face carefully and estimate their nationality/ethnic origin based on facial features. Provide specific COUNTRY-BASED ethnicities (e.g. "Indonesian", "Japanese", "Nigerian", "Brazilian", "Indian", "German", etc.) NOT broad regions.

If there is no human face clearly visible in the image, you MUST respond ONLY with this JSON:
{
  "error": "no_face_found"
}

Otherwise, you MUST respond ONLY in this exact JSON format, no other text:
{
  "ethnicities": [
    {"name": "CountryName", "percentage": 0}
  ],
  "dominant": "the most dominant country name",
  "confidence": "high/medium/low"
}`
                    },
                    {
                        type: 'image_url',
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

    const response = await fetch('https://telkom-ai-dag.api.apilogy.id/LargeMultimodalModel/0.0.2/lmm/chat/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'x-api-key': 'NZOQvuXJ7FNYadtqv3tVawdidIf5RXyz'
        },
        body: JSON.stringify(payload)
    });
    const text = await response.text();
    console.log('Status:', response.status);
    console.log('Response:', text);
}
test();
