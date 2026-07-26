let b = document.getElementById("soloButton");
let startButton = document.getElementById("start");
let stopButton = document.getElementById("stop");
let speedSlider = document.getElementById("speedSlider");
let speedSliderLabel = document.getElementById("speedSliderLabel")
let tn = document.getElementById("techName");
let ct = document.getElementById("countdown");
/*let ab = document.getElementById("all");
let sall = document.getElementById("stop-all");*/
let mir = document.getElementById("mir");
let mirs = document.getElementById("mir-slider");
let mirl = document.getElementById("mir-slider-label")
let mirb = document.getElementById("mirb")
ct.textContent = speedSlider.value;
let timesSlider = document.getElementById("times");
let tsLabel = document.getElementById("times-label");
let abt = document.getElementById("allt");
let sallt = document.getElementById("stop-allt");
let sbox = document.getElementById("splitbox");
let count = 0;
let tcount = 0;
let mcount = 0;
let mtimes = timesSlider.value;

let data = {}

let active = false;
let sayRandomInterval = setInterval(sayRandomTech, 10000000000);
clearInterval(sayRandomInterval);

let ctimerInterval = setInterval(ctimer, 1000);
clearInterval(ctimerInterval);

/*let allTimerInterval = setInterval(sayAllTechniques, 1000000000);
clearInterval(allTimerInterval);*/

let allTimerIntervalMult = setInterval(sayAllTechniquesMult, 1000000000);
clearInterval(allTimerIntervalMult);

function ctimer() {
    count++;
    ct.textContent = (speedSlider.value-count%speedSlider.value);
}

timesSlider.addEventListener("input", function() {
    tsLabel.textContent = "Times: " + timesSlider.value;
    mtimes = timesSlider.value;
});

function gmir() {
    let r = Math.floor(Math.random() * 100);
    if (r < mirs.value && mirb.checked) {
        return true;
    }
    else {
        return false;
    }
}

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

mirs.addEventListener("input", function() {
    mirl.textContent = "Mirror%: " + mirs.value + "%";
});

function sayRandomTech() {
    tech = allBelts[parseInt(Math.random()*allBelts.length)];
    if (gmir()) {
        tech = "Mirror " + tech;
    }
    console.log(tech);
    let utterThis = new SpeechSynthesisUtterance(tech);
    synth.speak(utterThis);
    tn.textContent = tech;
    if (!data[tech]) {
        data[tech] = 1;
    }
    else {
        data[tech] += 1;
    }
}
/*
function sayAllTechniques() {
    window.speechSynthesis.cancel();
    tech = allBelts[tcount%allBelts.length];
    if (gmir()) {
        tech = "Mirror " + tech;
    }
    console.log(tech);
    let utterThis = new SpeechSynthesisUtterance(tech);
    synth.speak(utterThis);
    tn.textContent = tech;
    tcount+=1;
    if (!data[tech]) {
        data[tech] = 1;
    }
    else {
        data[tech] += 1;
    }
}
*/

function sayAllTechniquesMult() {
    window.speechSynthesis.cancel();
    tech = allBelts[tcount%allBelts.length];
    if (gmir() || (sbox.checked && mcount >= mtimes/2)) {
        tech = "Mirror " + tech;
    }
    console.log(tech);
    let utterThis = new SpeechSynthesisUtterance(tech);
    synth.speak(utterThis);
    tn.textContent = tech;
    mcount += 1;
    if (mcount == mtimes) {
        tcount+=1;
        mcount = 0;
    }
    if (!data[tech]) {
        data[tech] = 1;
    }
    else {
        data[tech] += 1;
    }
}

abt.addEventListener("click", function() {
    if (!active) {
        allTimerIntervalMult = setInterval(sayAllTechniquesMult, 1000*speedSlider.value);
        ctimerInterval = setInterval(ctimer, 1000);
        count = 0;
        active = true;
    }
});

sallt.addEventListener("click", function() {
    if (active) {
        console.log("STOP ALL TECHNIQUES");
        clearInterval(allTimerIntervalMult);
        clearInterval(ctimerInterval)
        window.speechSynthesis.cancel();
        active = false;
        console.table(data);
        data = {};
        tcount = 0;
    }
});

/*
ab.addEventListener("click", function() {
    if (!active) {
        allTimerInterval = setInterval(sayAllTechniques, 1000*speedSlider.value);
        ctimerInterval = setInterval(ctimer, 1000);
        count = 0;
        active = true;
    }
});

sall.addEventListener("click", function() {
    if (active) {
        console.log("STOP ALL TECHNIQUES");
        clearInterval(allTimerInterval);
        clearInterval(ctimerInterval)
        window.speechSynthesis.cancel();
        active = false;
        console.table(data);
        data = {};
        tcount = 0;
    }
});
*/

function saySingleRandomTech() {
    window.speechSynthesis.cancel();
    tech = allBelts[parseInt(Math.random()*allBelts.length)];
    if (gmir()) {
        tech = "Mirror " + tech;
    }
    console.log(tech);
    let utterThis = new SpeechSynthesisUtterance(tech);
    synth.speak(utterThis);
    tn.textContent = tech;
}
b.addEventListener("click", function() {
    if (!active) {    
        saySingleRandomTech();
    }
});

startButton.addEventListener("click", function() {
    if (!active) {
        sayRandomInterval = setInterval(sayRandomTech, 1000*speedSlider.value);
        ctimerInterval = setInterval(ctimer, 1000)
        ct.textContent = speedSlider.value;
        count = 0;
        active = true;
    }
});

stopButton.addEventListener("click", function() {
    console.log("STOP");
    clearInterval(sayRandomInterval);
    clearInterval(ctimerInterval)
    window.speechSynthesis.cancel();
    if (active) {
        active = false;
        console.table(data);
        data = {};
    }
});

speedSlider.addEventListener("input", function() {
    speedSliderLabel.textContent = "Speed: " + speedSlider.value;
});