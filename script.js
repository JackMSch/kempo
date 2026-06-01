let b = document.getElementById("t");
let startButton = document.getElementById("start");
let stopButton = document.getElementById("stop");
let speedSlider = document.getElementById("speedSlider");
let speedSliderLabel = document.getElementById("speedSliderLabel")

let active = false;
let sayRandomInterval = setInterval(sayRandomTech, 10000000000);
clearInterval(sayRandomInterval);

const synth = window.speechSynthesis;

const yellow = [
    "Kimono Grab",
    "Blocking the Kick A",
    "Blocking the Kick B",
    "Headlock A",
    "Headlock B",
    "Headlock C",
    "Pushing the Circle A",
    "Pushing the Circle B",
    "Lever A",
    "Lever B",
    "Crashing Elbows"
];
const orange = [
    "Crash of the Eagle",
    "Tackle Technique 1",
    "Tackle Technique 2",
    "Tackle Technique 3",
    "Tackle Technique 4",
    "Rising Elbow",
    "Dancer",
    "Scimitar",
    "Rocking Elbow",
    "Windmill Guard",
    "Aiming the Spear",
    "Flowing Hands",
    "Spinning from the Sun"
];
const purple = [
    "Spiraling Wrists",
    "Crane Leap",
    "Drawbridge A",
    "Drawbridge B",
    "Kung Fu Cross",
    "Divided Swords",
    "Gift",
    "Crossing Guard",
    "Attack from the Temple A",
    "Attack from the Temple B",
    "Crouching Falcon",
    "Wingbreak"
];
const blue = [
    "Darkness",
    "Sweeping Arm Hook",
    "Flashing Wings",
    "Sleeper",
    "U-Punch",
    "Five Swords",
    "Clawing Panther",
    "Spear of Jade",
    "Double Blades",
    "Plucking a Bird from the Sky"
];
const green = [
    "Knee Sweep",
    "Silk Wind",
    "Grasping Talon",
    "Rising Kick",
    "Crane Kick",
    "Mantis",
    "Raising the Shield",
    "Snapping Twig",
    "Arching Blades",
    "Blocking the Sun"
];

const allBelts = yellow.concat(orange).concat(purple).concat(blue).concat(green);

function sayRandomTech() {
    let utterThis = new SpeechSynthesisUtterance(allBelts[parseInt(Math.random()*allBelts.length)]);
    synth.speak(utterThis);
}
b.addEventListener("click", function() {
    sayRandomTech();
});

startButton.addEventListener("click", function() {
    if (!active) {
        active = true;
        sayRandomInterval = setInterval(sayRandomTech, 1000*speedSlider.value);
    }
});

stopButton.addEventListener("click", function() {
    if (active) {
        clearInterval(sayRandomInterval);
    }
})

speedSlider.addEventListener("input", function() {
    speedSliderLabel.textContent = "Speed: " + speedSlider.value;
})