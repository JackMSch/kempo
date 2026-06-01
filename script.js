let b = document.getElementById("t");
let i = document.getElementById("i");


const synth = window.speechSynthesis;


b.addEventListener("click", function() {
    let utterThis = new SpeechSynthesisUtterance(i.value);
    synth.speak(utterThis);
});