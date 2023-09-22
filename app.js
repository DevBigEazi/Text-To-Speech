//Steps
// 1. create a speechSynthesisUtterance and save it in a variable, then add evenlistener to the button and connect the speech text to the textarea value and make sure the window speech synthesis speal the speech.

// 2. Populate the select element with different voice options by making a reference to the element first and make the window speak diff voices by using the window.speechSynthesis again with onvoiceschanged arrow fnc. In the fnc block, we need to get the voice and save it in a variable and set the speech voices to be voices[0].Then we can use for each method to loop through each voices and populate them to the select option.

//3.


const listenBtn = document.querySelector("button");
const selectEl = document.querySelector("select");

const speech = new SpeechSynthesisUtterance();
let voices = [];

window.speechSynthesis.onvoiceschanged = () => {
    voices = speechSynthesis.getVoices();
    speech.voice = voices[0];

    voices.forEach((voice, i) => (selectEl.options[i] = new Option(voice.name, i)));
}

//3
selectEl.addEventListener("change", () => {
    speech.voice = voices[selectEl.value];
})

listenBtn.addEventListener("click", () => {
    const textValue = document.querySelector("#text").value
    speech.text = textValue;
    window.speechSynthesis.speak(speech);
});