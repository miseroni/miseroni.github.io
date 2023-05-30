let mainDiv = document.getElementById("main");

let clicks = [],
  mezerniks = [];
let looping = true;

// LOADING
function preload() {
  for (let i = 0; i < 48; i++) {
    clicks[i] = loadSound("assets/clicks/" + i + "-click.mp3");
  }
  mezerniks[0] = loadSound("assets/clicks/49-click.mp3");
  mezerniks[1] = loadSound("assets/clicks/50-click.mp3");
}

function setup() {}

let textIndex = 0;
let letterIndex = 0;
let letter;

function draw() {
  // PLOT NEXT LETTER IN HTML
  nextLetter();

  // PLAY SOUND
  if (letter == " ") {
    mezerniks[floor(random(mezerniks.length))].play();
  } else {
    clicks[floor(random(clicks.length))].play();
  }

  // WAIT RANDOM AMMOUT OF MILLISEC
  noLoop();
  setTimeout(loop, random(60, 200));
}

let offsetStep = 150;
function fastForward() {
  for (let i = 0; i < offsetStep; i++) {
    nextLetter();
  }
}

function nextLetter() {
  if (letterIndex < texts[textIndex].length) {
    letter = texts[textIndex][letterIndex];
    mainDiv.innerHTML += letter;
    letterIndex++;
  } else {
    nextText();
  }
}

function nextText() {
  mainDiv.innerHTML = "";
  letterIndex = 0;
  if (textIndex >= texts.length - 1) {
    textIndex = 0;
  } else {
    textIndex++;
  }
}
// skakani slov z konce randu na zacatek
// handle konec

setInterval(function () {
  window.scrollTo({
    left: 0,
    top: document.body.scrollHeight,
    behavior: "smooth",
  });
}, 100);
function scroll_to_bottom() {}
