const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const audioElement = document.createElement('audio');

let audioContext;
let mediaStreamSource;
let mediaRecorder;
let audioChunks = [];

startButton.addEventListener('click', async () => {
    // Request microphone access
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });

    // Create an AudioContext
    audioContext = new (window.AudioContext || window.webkitAudioContext)();
    mediaStreamSource = audioContext.createMediaStreamSource(stream);

    // Create a MediaRecorder to capture audio
    mediaRecorder = new MediaRecorder(stream);

    // Process audio chunks
    mediaRecorder.ondataavailable = (event) => {
        audioChunks.push(event.data);
    };

    // Create audio buffer for playback
    mediaRecorder.onstop = async () => {
        const audioBlob = new Blob(audioChunks, { type: 'audio/wav' });
        const audioUrl = URL.createObjectURL(audioBlob);
        audioElement.src = audioUrl;
        audioElement.controls = true; // Show audio controls
        document.body.appendChild(audioElement); // Add audio element to the page
        audioChunks = [];
    };

    mediaRecorder.start();

    startButton.disabled = true;
    stopButton.disabled = false;
});

stopButton.addEventListener('click', () => {
    mediaRecorder.stop();

    startButton.disabled = false;
    stopButton.disabled = true;
});
