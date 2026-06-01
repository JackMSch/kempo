let b = document.getElementById("t");
let startButton = document.getElementById("start");
let stopButton = document.getElementById("stop");
let speedSlider = document.getElementById("speedSlider");
let speedSliderLabel = document.getElementById("speedSliderLabel")

let data = {}

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
    tech = allBelts[parseInt(Math.random()*allBelts.length)];
    console.log(tech);
    let utterThis = new SpeechSynthesisUtterance(tech);
    synth.speak(utterThis);
    if (!data[tech]) {
        data[tech] = 1;
    }
    else {
        data[tech] += 1;
    }
}
b.addEventListener("click", function() {
    sayRandomTech();
});

startButton.addEventListener("click", function() {
    if (!active) {
        sayRandomInterval = setInterval(sayRandomTech, 1000*speedSlider.value);
        active = true;
    }
});

stopButton.addEventListener("click", function() {
    console.log("STOP")
    clearInterval(sayRandomInterval);
    if (active) {
        active = false;
        console.table(data);
        data = {};
    }
});

speedSlider.addEventListener("input", function() {
    speedSliderLabel.textContent = "Speed: " + speedSlider.value;
});