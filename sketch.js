let player;
let bgimage;
let playerimage;
let obstacleimage;
let obstacles = [];
let button;
let wordClassifire;

function preload() {
  bgimage = loadImage("background.jpg");
  obstacleimage = loadImage("obstcle.png");
  playerimage = loadImage("player.png");

  let options = {
    probabilityThreshold: 0.85,
  };
  wordClassifire = ml5.soundClassifier("SpeechCommands18w", options);
}

function setup() {
  createCanvas(1730, 805);
  player = new Player();
  wordClassifire.classify(hearword);
}

function hearword(error, results) {
  if (results[0].label === "up") player.jump();
}

function keyPressed() {
  if (key === " " || keyCode === 38) {
    player.jump();
  }
}
function draw() {
  if (random(1) < 0.01) {
    obstacles.push(new Obstacle());
  }
  background(bgimage);
  player.show();
  player.move();

  for (let obs of obstacles) {
    obs.show();
    obs.move();

    if (player.collided(obs)) {
      stroke("cyan");
      textSize(30);
      text("Game-Over", width / 2 - 100, height / 2);
      button = createButton("Restart");
      button.position(width / 2 - 100, height / 2 + 50);
      button.mousePressed(restartGame);
      noLoop();
    }
  }
}

function restartGame() {
  obstacles = [];
  button.remove();
  redraw();
  loop();
}
