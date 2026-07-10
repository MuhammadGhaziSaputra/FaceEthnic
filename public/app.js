


const countryData = {

    'Indonesian':   { flag: '🇮🇩', color: '#ef4444' },
    'Japanese':     { flag: '🇯🇵', color: '#f97316' },
    'Korean':       { flag: '🇰🇷', color: '#3b82f6' },
    'Chinese':      { flag: '🇨🇳', color: '#ef4444' },
    'Thai':         { flag: '🇹🇭', color: '#8b5cf6' },
    'Vietnamese':   { flag: '🇻🇳', color: '#ef4444' },
    'Filipino':     { flag: '🇵🇭', color: '#3b82f6' },
    'Malaysian':    { flag: '🇲🇾', color: '#eab308' },
    'Malay':        { flag: '🇲🇾', color: '#eab308' },
    'Singaporean':  { flag: '🇸🇬', color: '#ef4444' },
    'Cambodian':    { flag: '🇰🇭', color: '#3b82f6' },
    'Burmese':      { flag: '🇲🇲', color: '#22c55e' },
    'Mongolian':    { flag: '🇲🇳', color: '#3b82f6' },
    'Taiwanese':    { flag: '🇹🇼', color: '#3b82f6' },


    'Indian':       { flag: '🇮🇳', color: '#f97316' },
    'Pakistani':    { flag: '🇵🇰', color: '#22c55e' },
    'Bangladeshi':  { flag: '🇧🇩', color: '#22c55e' },
    'Sri Lankan':   { flag: '🇱🇰', color: '#eab308' },
    'Nepali':       { flag: '🇳🇵', color: '#ef4444' },


    'Arab':         { flag: '🇸🇦', color: '#22c55e' },
    'Turkish':      { flag: '🇹🇷', color: '#ef4444' },
    'Iranian':      { flag: '🇮🇷', color: '#22c55e' },
    'Iraqi':        { flag: '🇮🇶', color: '#ef4444' },
    'Lebanese':     { flag: '🇱🇧', color: '#ef4444' },
    'Egyptian':     { flag: '🇪🇬', color: '#eab308' },
    'Israeli':      { flag: '🇮🇱', color: '#3b82f6' },
    'Emirati':      { flag: '🇦🇪', color: '#22c55e' },


    'Nigerian':     { flag: '🇳🇬', color: '#22c55e' },
    'South African':{ flag: '🇿🇦', color: '#22c55e' },
    'Ethiopian':    { flag: '🇪🇹', color: '#22c55e' },
    'Kenyan':       { flag: '🇰🇪', color: '#ef4444' },
    'Ghanaian':     { flag: '🇬🇭', color: '#eab308' },
    'Congolese':    { flag: '🇨🇩', color: '#3b82f6' },
    'Tanzanian':    { flag: '🇹🇿', color: '#3b82f6' },
    'Angolan':      { flag: '🇦🇴', color: '#ef4444' },
    'Namibian':     { flag: '🇳🇦', color: '#3b82f6' },
    'Somali':       { flag: '🇸🇴', color: '#3b82f6' },
    'Cameroonian':  { flag: '🇨🇲', color: '#22c55e' },
    'African':      { flag: '🌍', color: '#22c55e' },


    'British':      { flag: '🇬🇧', color: '#3b82f6' },
    'German':       { flag: '🇩🇪', color: '#eab308' },
    'French':       { flag: '🇫🇷', color: '#3b82f6' },
    'Italian':      { flag: '🇮🇹', color: '#22c55e' },
    'Spanish':      { flag: '🇪🇸', color: '#ef4444' },
    'Russian':      { flag: '🇷🇺', color: '#3b82f6' },
    'Dutch':        { flag: '🇳🇱', color: '#f97316' },
    'Swedish':      { flag: '🇸🇪', color: '#3b82f6' },
    'Norwegian':    { flag: '🇳🇴', color: '#ef4444' },
    'Polish':       { flag: '🇵🇱', color: '#ef4444' },
    'Portuguese':   { flag: '🇵🇹', color: '#22c55e' },
    'Greek':        { flag: '🇬🇷', color: '#3b82f6' },
    'Irish':        { flag: '🇮🇪', color: '#22c55e' },
    'Scottish':     { flag: '🏴󠁧󠁢󠁳󠁣󠁴󠁿', color: '#3b82f6' },
    'Ukrainian':    { flag: '🇺🇦', color: '#3b82f6' },
    'European':     { flag: '🇪🇺', color: '#3b82f6' },


    'American':     { flag: '🇺🇸', color: '#3b82f6' },
    'Brazilian':    { flag: '🇧🇷', color: '#22c55e' },
    'Mexican':      { flag: '🇲🇽', color: '#22c55e' },
    'Canadian':     { flag: '🇨🇦', color: '#ef4444' },
    'Colombian':    { flag: '🇨🇴', color: '#eab308' },
    'Argentine':    { flag: '🇦🇷', color: '#3b82f6' },
    'Peruvian':     { flag: '🇵🇪', color: '#ef4444' },
    'Chilean':      { flag: '🇨🇱', color: '#ef4444' },
    'Cuban':        { flag: '🇨🇺', color: '#3b82f6' },
    'Jamaican':     { flag: '🇯🇲', color: '#22c55e' },
    'Latin American':{ flag: '🌎', color: '#22c55e' },


    'Australian':   { flag: '🇦🇺', color: '#3b82f6' },
    'New Zealander': { flag: '🇳🇿', color: '#3b82f6' },
    'Fijian':       { flag: '🇫🇯', color: '#3b82f6' },
    'Pacific Islander': { flag: '🌊', color: '#06b6d4' },


    'East Asian':       { flag: '🌏', color: '#8b5cf6' },
    'Southeast Asian':  { flag: '🌏', color: '#22c55e' },
    'South Asian':      { flag: '🌏', color: '#f97316' },
    'Middle Eastern':   { flag: '🌍', color: '#eab308' },
};

function getCountryInfo(name) {

    if (countryData[name]) return countryData[name];

    const lower = name.toLowerCase();
    for (const [key, val] of Object.entries(countryData)) {
        if (key.toLowerCase() === lower) return val;
    }

    return { flag: '🏳️', color: '#6b7280' };
}


let video = null;
let stream = null;
let isAutoAnalyzing = false;
let autoAnalyzeTimer = null;
let analysisCount = 0;
let isAnalyzing = false;
let history = [];
let uploadedImageBase64 = null;
let cropper = null;


document.addEventListener('DOMContentLoaded', () => {
    video = document.getElementById('video');

    const slider = document.getElementById('intervalSlider');
    const intervalVal = document.getElementById('intervalValue');
    slider.addEventListener('input', () => {
        intervalVal.textContent = slider.value + 's';
    });
});


async function toggleCamera() {
    const cameraBtn = document.getElementById('cameraBtn');
    const analyzeBtn = document.getElementById('analyzeBtn');
    const statusDot = document.getElementById('statusDot');
    const statusText = document.getElementById('statusText');
    const noCameraState = document.getElementById('noCameraState');
    const faceGuide = document.getElementById('faceGuide');
    const autoBar = document.getElementById('autoBar');

    if (stream) {
        stream.getTracks().forEach(t => t.stop());
        stream = null;
        video.srcObject = null;
        cameraBtn.classList.remove('recording');
        

        if (!uploadedImageBase64) {
            analyzeBtn.disabled = true;
            statusDot.className = 'status-dot';
            statusText.textContent = 'Offline';
            noCameraState.classList.remove('hidden');
            faceGuide.style.opacity = '0.5';
        }
        autoBar.style.display = 'none';

        if (isAutoAnalyzing) {
            document.getElementById('autoToggle').checked = false;
            toggleAutoAnalyze();
        }

        cameraBtn.querySelector('.camera-btn-inner').innerHTML = `
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
                <circle cx="12" cy="13" r="4"/>
            </svg>`;
        return;
    }

    try {
        stream = await navigator.mediaDevices.getUserMedia({
            video: { facingMode: 'user', width: { ideal: 640 }, height: { ideal: 480 } }
        });
        
        clearUploadedImage();

        video.srcObject = stream;
        cameraBtn.classList.add('recording');
        analyzeBtn.disabled = false;
        statusDot.className = 'status-dot active';
        statusText.textContent = 'Ready';
        noCameraState.classList.add('hidden');
        faceGuide.style.opacity = '0.3';
        autoBar.style.display = '';

        cameraBtn.querySelector('.camera-btn-inner').innerHTML = `
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <rect x="6" y="6" width="12" height="12" rx="2"/>
            </svg>`;

        showToast('Camera started!', 'success');
    } catch (err) {
        console.error('Camera error:', err);
        showToast('Cannot access camera. Check permissions.', 'error');
    }
}


function toggleAutoAnalyze() {
    const toggle = document.getElementById('autoToggle');
    const scanOverlay = document.getElementById('scanOverlay');
    const statusDot = document.getElementById('statusDot');
    const statusText = document.getElementById('statusText');

    if (isAutoAnalyzing) {
        isAutoAnalyzing = false;
        clearInterval(autoAnalyzeTimer);
        autoAnalyzeTimer = null;
        scanOverlay.classList.remove('active');
        statusDot.className = 'status-dot active';
        statusText.textContent = 'Ready';
        toggle.checked = false;
    } else {
        if (!stream) return;
        isAutoAnalyzing = true;
        scanOverlay.classList.add('active');
        statusDot.className = 'status-dot analyzing';
        statusText.textContent = 'Scanning...';
        toggle.checked = true;

        captureAndAnalyze();

        const interval = parseInt(document.getElementById('intervalSlider').value) * 1000;
        autoAnalyzeTimer = setInterval(() => {
            if (!isAnalyzing) captureAndAnalyze();
        }, interval);
    }
}


function handleFileUpload(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
        const imgUrl = e.target.result;
        uploadedImageBase64 = imgUrl.split(',')[1];
        

        const imgElement = document.getElementById('uploadedImage');
        imgElement.src = imgUrl;
        imgElement.style.display = 'block';
        

        document.getElementById('video').style.display = 'none';
        document.getElementById('noCameraState').classList.add('hidden');
        document.getElementById('faceGuide').style.display = 'none';
        

        if (cropper) cropper.destroy();
        cropper = new Cropper(imgElement, {
            aspectRatio: 3 / 4,
            viewMode: 1,
            dragMode: 'move',
            autoCropArea: 1,
            cropBoxMovable: false,
            cropBoxResizable: false,
            guides: true,
            center: true,
            highlight: false,
            background: false,
            toggleDragModeOnDblclick: false
        });
        

        document.getElementById('analyzeBtn').disabled = false;
        document.getElementById('statusDot').className = 'status-dot active';
        document.getElementById('statusText').textContent = 'Photo Ready';
        

        if (stream) toggleCamera();
        
        showToast('Photo uploaded!', 'success');
    };
    reader.readAsDataURL(file);
}

function clearUploadedImage() {
    uploadedImageBase64 = null;
    if (cropper) {
        cropper.destroy();
        cropper = null;
    }
    const imgElement = document.getElementById('uploadedImage');
    imgElement.src = '';
    imgElement.style.display = 'none';
    document.getElementById('video').style.display = 'block';
    document.getElementById('faceGuide').style.display = 'block';
    document.getElementById('fileInput').value = '';
}


async function captureAndAnalyze() {
    if ((!stream && !uploadedImageBase64) || isAnalyzing) return;
    isAnalyzing = true;

    const statusText = document.getElementById('statusText');
    const analyzeBtn = document.getElementById('analyzeBtn');
    const scanOverlay = document.getElementById('scanOverlay');
    statusText.textContent = 'Analyzing...';
    analyzeBtn.classList.add('loading');
    scanOverlay.classList.add('active');

    try {
        let base64 = uploadedImageBase64;
        
        if (cropper) {

            const canvas = cropper.getCroppedCanvas({
                width: 480,
                height: 640
            });
            base64 = canvas.toDataURL('image/jpeg', 0.8).split(',')[1];
        } else if (!base64 && stream) {
            const natW = video.videoWidth;
            const natH = video.videoHeight;
            const viewport = document.getElementById('cameraViewport');
            const vW = viewport.clientWidth;
            const vH = viewport.clientHeight;

            // object-fit: cover scale factor
            const S = Math.max(vW / natW, vH / natH);

            // Bounding box dari face-guide
            const guideW = vW * 0.55;
            const guideH = vH * 0.70;
            const nW = guideW / S;
            const nH = guideH / S;
            const nX = (natW - nW) / 2;
            const nY = (natH - nH) / 2;

            const canvas = document.getElementById('captureCanvas');
            const ctx = canvas.getContext('2d');
            
            canvas.width = nW;
            canvas.height = nH;

            // Mirror gambar karena video di-flip
            ctx.translate(nW, 0);
            ctx.scale(-1, 1);

            // Crop dari video asli
            ctx.drawImage(video, nX, nY, nW, nH, 0, 0, nW, nH);

            base64 = canvas.toDataURL('image/jpeg', 0.8).split(',')[1];
        }

        const response = await fetch('/api/analyze', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ base64Image: base64 })
        });

        const text = await response.text();
        
        if (!text || text.trim() === '') {
            // Kemungkinan server timeout (504 dari Vercel) atau tidak ada koneksi backend
            throw new Error(response.ok ? 'Empty response from server.' : 'no_face_found'); 
            // Kita asumsikan timeout pada foto kosong berarti AI gagal mendeteksi wajah dalam waktu yang ditentukan
        }

        let data;
        try {
            data = JSON.parse(text);
        } catch (e) {
            if (text.includes('<html')) {
                throw new Error('Pastikan Anda menjalankan server backend (node server.js), bukan sekadar Live Server.');
            }
            throw new Error(`Invalid response: ${text.substring(0, 50)}`);
        }

        if (data.error) {
            const errMsg = typeof data.error === 'object' ? JSON.stringify(data.error) : data.error;
            throw new Error(errMsg);
        }
        processApiResponse(data);

    } catch (error) {
        console.error('Analysis error:', error);
        if (error.message === 'no_face_found' || error.message.includes('no_face_found') || error.message.includes('No ethnicity data') || error.message === 'Empty response from server.') {
            Swal.fire({
                icon: 'warning',
                title: 'Wajah Tidak Ditemukan',
                text: 'Pastikan wajah terlihat jelas di kamera atau pada foto yang diunggah.',
                confirmButtonText: 'Coba Lagi',
                confirmButtonColor: '#3b82f6',
                background: '#222',
                color: '#fff'
            });
        } else {
            showToast('Analysis failed: ' + error.message, 'error');
        }
    } finally {
        isAnalyzing = false;
        analyzeBtn.classList.remove('loading');
        if (!isAutoAnalyzing) {
            scanOverlay.classList.remove('active');
        }

        if (isAutoAnalyzing) {
            statusText.textContent = 'Scanning...';
        } else if (uploadedImageBase64) {
            statusText.textContent = 'Photo Ready';
        } else if (stream) {
            statusText.textContent = 'Ready';
        }
    }
}


function processApiResponse(data) {
    try {
        let content = '';
        console.log('Full API data:', JSON.stringify(data, null, 2));

        if (data.parseError && data.raw) {
            content = data.raw;
        } else if (data.choices && data.choices[0]) {
            const choice = data.choices[0];
            if (choice.message && choice.message.content) content = choice.message.content;
            else if (choice.text) content = choice.text;
            else content = JSON.stringify(choice);
        } else if (data.message && typeof data.message === 'string') {
            content = data.message;
        } else if (data.ethnicities) {
            content = JSON.stringify(data);
        } else {
            content = JSON.stringify(data);
        }

        console.log('Extracted content:', content);

        let result;
        try {
            result = JSON.parse(content);
        } catch (e) {
            const jsonMatch = content.match(/\{[\s\S]*?"ethnicities"[\s\S]*\}/);
            const errorMatch = content.match(/\{[\s\S]*?"error"[\s\S]*\}/);
            if (jsonMatch) {
                try { result = JSON.parse(jsonMatch[0]); } catch (e2) {
                    const cleaned = jsonMatch[0].replace(/[\r\n]+/g, ' ').replace(/,\s*}/g, '}').replace(/,\s*]/g, ']');
                    result = JSON.parse(cleaned);
                }
            } else if (errorMatch) {
                try { result = JSON.parse(errorMatch[0]); } catch (e3) {}
            }
        }

        if (result && result.error === 'no_face_found') {
            throw new Error('no_face_found');
        }

        if (!result || !result.ethnicities || result.ethnicities.length === 0) {
            throw new Error('No ethnicity data found');
        }

        analysisCount++;
        document.getElementById('scanCount').textContent = analysisCount;
        updateResults(result);
        addToHistory(result);
        showToast('Analysis complete!', 'success');

    } catch (error) {
        console.error('Parse error:', error, 'Raw:', JSON.stringify(data));
        if (error.message === 'no_face_found' || error.message === 'No ethnicity data found') {
            Swal.fire({
                icon: 'warning',
                title: 'Wajah Tidak Ditemukan',
                text: 'Pastikan wajah terlihat jelas di kamera atau pada foto yang diunggah.',
                confirmButtonText: 'Coba Lagi',
                confirmButtonColor: '#3b82f6',
                background: '#222',
                color: '#fff'
            });
        } else {
            showToast('Could not parse response. Try again.', 'error');
        }
    }
}


function updateResults(result) {
    const placeholder = document.getElementById('resultsPlaceholder');
    const list = document.getElementById('resultsList');
    const items = document.getElementById('ethnicityItems');
    const section = document.getElementById('resultsSection');
    const confRow = document.getElementById('confidenceRow');
    const confVal = document.getElementById('confidenceValue');

    placeholder.style.display = 'none';
    list.style.display = '';

    const ethnicities = (result.ethnicities || []).sort((a, b) => b.percentage - a.percentage);

    items.innerHTML = '';
    ethnicities.forEach((eth, index) => {
        if (eth.percentage <= 0) return;

        const info = getCountryInfo(eth.name);
        const isFirst = index === 0;

        const item = document.createElement('div');
        item.className = 'eth-item' + (isFirst ? ' eth-item-dominant' : '');
        item.innerHTML = `
            <div class="eth-flag">${info.flag}</div>
            <div class="eth-info">
                <span class="eth-name">${eth.name}</span>
                <div class="eth-bar-track">
                    <div class="eth-bar-fill" style="width: 0%;"></div>
                </div>
            </div>
            <span class="eth-percentage">${eth.percentage}%</span>
        `;
        items.appendChild(item);


        requestAnimationFrame(() => {
            setTimeout(() => {
                item.querySelector('.eth-bar-fill').style.width = eth.percentage + '%';
            }, 80 + index * 60);
        });
    });

    if (result.confidence) {
        confRow.style.display = 'flex';
        confVal.textContent = result.confidence.toUpperCase();

        confVal.className = 'confidence-value brutal-badge ' + result.confidence.toLowerCase();
    }
}


function addToHistory(result) {
    const ethnicities = (result.ethnicities || []).sort((a, b) => b.percentage - a.percentage);
    const dominant = ethnicities[0] || { name: 'Unknown', percentage: 0 };
    const time = new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    const info = getCountryInfo(dominant.name);

    history.unshift({ dominant, time, flag: info.flag, all: ethnicities.slice(0, 3) });
    if (history.length > 30) history.pop();
    renderHistory();
}

function renderHistory() {
    const body = document.getElementById('historyBody');
    if (!history.length) {
        body.innerHTML = '<div class="history-empty"><p>No scans yet</p></div>';
        return;
    }

    body.innerHTML = history.map((h, i) => `
        <div class="history-entry" style="animation-delay: ${i * 0.03}s">
            <span class="history-entry-flag">${h.flag}</span>
            <div class="history-entry-info">
                <div class="history-entry-name">${h.dominant.name}</div>
                <div class="history-entry-sub">${h.all.map(e => `${e.name} ${e.percentage}%`).join(' · ')}</div>
            </div>
            <div class="history-entry-right">
                <span class="history-entry-pct">${h.dominant.percentage}%</span>
                <span class="history-entry-time">${h.time}</span>
            </div>
        </div>
    `).join('');
}

function clearHistory() {
    history = [];
    renderHistory();
    showToast('History cleared', 'info');
}

function toggleHistory() {
    document.getElementById('historyModal').classList.toggle('open');
}


function showToast(message, type = 'info') {
    const container = document.getElementById('toastContainer');
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;

    const icons = { success: '✓', error: '✕', info: 'ℹ' };
    toast.innerHTML = `
        <div class="toast-icon">${icons[type] || 'ℹ'}</div>
        <span>${message}</span>
    `;

    container.appendChild(toast);
    setTimeout(() => {
        toast.style.animation = 'toastOut 0.3s ease-in forwards';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}
