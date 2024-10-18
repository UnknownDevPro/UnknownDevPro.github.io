const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const audioElement = document.createElement('audio');
const deviceSelect = document.getElementById('device-select');

let mediaRecorder;
let audioChunks = [];
let audioContext;

// Function to list audio output devices
async function listAudioOutputDevices() {
    const devices = await navigator.mediaDevices.enumerateDevices();
    deviceSelect.innerHTML = ''; // Clear previous options

    devices.forEach(device => {
        if (device.kind === 'audiooutput') {
            const option = document.createElement('option');
            option.value = device.deviceId;
            option.textContent = device.label || `Output Device ${deviceSelect.length + 1}`;
            deviceSelect.appendChild(option);
        }
    });
}

// Start recording from the microphone (headphone jack)
startButton.addEventListener('click', async () => {
    // Request microphone access
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });

    // Create a MediaRecorder to capture audio
    mediaRecorder = new MediaRecorder(stream);

    // Process audio chunks
    mediaRecorder.ondataavailable = (event) => {
        audioChunks.push(event.data);
    };

    // Create audio buffer for playback when recording stops
    mediaRecorder.onstop = async () => {
        const audioBlob = new Blob(audioChunks, { type: 'audio/wav' });
        const audioUrl = URL.createObjectURL(audioBlob);
        audioElement.src = audioUrl;
        audioElement.controls = true; // Show audio controls
        document.body.appendChild(audioElement); // Add audio element to the page

        // Set the output device to the selected device
        const selectedDeviceId = deviceSelect.value;
        if (selectedDeviceId) {
            try {
                await audioElement.setSinkId(selectedDeviceId);
                console.log(`Audio output set to: ${deviceSelect.selectedOptions[0].text}`);
            } catch (error) {
                console.error(`Error setting audio output device: ${error}`);
            }
        }

        audioChunks = [];
    };

    // Start the recording
    mediaRecorder.start();

    startButton.disabled = true;
    stopButton.disabled = false;
});

// Stop recording and playback
stopButton.addEventListener('click', () => {
    mediaRecorder.stop();

    startButton.disabled = false;
    stopButton.disabled = true;
});

// Initialize the app
async function init() {
    await listAudioOutputDevices();
}

// Call the init function on page load
init();
