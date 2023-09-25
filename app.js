const listenBtn = document.querySelector("button");
const selectEl = document.querySelector("select");

const speech = new SpeechSynthesisUtterance();
let voices = null;

listenBtn.addEventListener('click', () => {
    const textValue = document.querySelector("textarea").value;
    speech.text = textValue;
    speechSynthesis.speak(speech);
});

speechSynthesis.onvoiceschanged = () => {
    voices = speechSynthesis.getVoices();
    speech.voice = voices[0];
    voices.forEach((voice, i) => selectEl.options[i] = new Option(voice.name, i));
};

selectEl.addEventListener("change", () => {
    speech.voice = voices[selectEl.value];
});