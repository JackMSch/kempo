let b = document.getElementById("t");

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

const allBelts = [yellow,orange,purple,blue,green];

b.addEventListener("click", function() {
    let belt = allBelts[parseInt(Math.random()*allBelts.length)];
    let utterThis = new SpeechSynthesisUtterance(belt[parseInt(Math.random()*belt.length)]);
    synth.speak(utterThis);
});