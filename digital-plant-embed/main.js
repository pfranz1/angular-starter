let padding = 50;

let leafSprite;
let potSprite;
let cloudSprite;

let myFont;

let button;

let leaves = [];

let plant;

let drop;
let pot;

let storm;

let lastStormLocation = -1;
let stormLocation = 124;
let stormLocationSlider;

let doGrow = true;
let doRain = true;

function preload() {
  myFont = loadFont("assets/NexaText-Trial-Regular.ttf");

  leafSprite = loadImage("./assets/large-leaf.png");

  potSprite = loadImage("./assets/real-pot-front.png");
  backPotSprite = loadImage("./assets/real-pot-back.png");

  rainSprite = loadImage("./assets/rain-drop.png");

  // cloudSprite = loadImage("./assets/cloud.png") ;
}

let numLeaves = 5;

let toneStarted = false;

let canvas;

// Init in setup
let lastCanvasWidth;
let lastCanvasHeight;

function setup() {
  canvas = createCanvas(canvasWidth, canvasHeight);
  textFont(myFont);
  imageMode(CENTER);
  colorMode("hsb");
  angleMode(DEGREES);

  Leaf.startColor = color(123, 41, 39);
  Leaf.endColor = color(88, 42, 71);
  Leaf.dehydrationColor = color(88, 42, 60);

  Raindrop.spriteSheet = rainSprite;

  Raindrop.outOfBounds = canvasHeight;

  lastCanvasHeight = canvasHeight;
  lastCanvasWidth = canvasWidth;

  let scale = 0.25;
  let potHeight = Pot.tileHeight * scale;
  let potWidth = Pot.tileWidth * scale;

  let potPos = new Position(canvasWidth / 2, canvasHeight - potHeight / 2);

  pot = new Pot(potSprite, backPotSprite, potHeight, potWidth, potPos);

  let plantPosition = new Position(
    canvasWidth / 2,
    canvasHeight - potHeight / 2,
  );

  plant = new Plant(numLeaves, plantPosition, pot);

  // drop = new Raindrop(new Position(canvasWidth / 2 + 200,150));
  storm = new Storm(
    cloudSprite,
    Storm.ranks * 5,
    new Position(canvasWidth / 2, -Raindrop.size * 2),
    500,
    plant.leaves,
    pot,
    canvasHeight,
  );
  storm.isRaining = true;

  FallingLeaf.killPlaneHeight = canvasHeight + 100;

  hydrationLow = color(98, 14, 76);
  hydrationHigh = color(209, 87, 38);

  // Is this a good way to do this? No! But I can't be bothered to add the breaking through the whole data flow? Also, no!
  if (canvasWidth <= SMALL_MODE) {
    this.handleBreak(true, false);
  }
}

let hydrationLow;
let hydrationHigh;

let flipFlop = false;

function draw() {
  clear();

  plant.draw();

  stormLocation = 255 / 2;

  if (
    frameCount % 30 == 0 &&
    ((Math.random() > 0.2 && plant.averageHydration < 0.75) ||
      plant.averageHydration < 0.5) &&
    !storm.isRaining
  ) {
    storm.isRaining = true;
  }

  if (frameCount > 500 && plant.averageHydration > 0.95 && storm.isRaining) {
    storm.isRaining = false;
  }

  if (lastStormLocation != stormLocation) {
    let stormCenter = (stormLocation / 255) * canvasWidth;
    storm.pos = new Position(stormCenter, storm.pos.y);
    lastStormLocation = stormLocation;
  }
  // console.log(stormLocationPercent);

  storm.draw();

  if (doGrow && frameCount % 10 == 0) {
    plant.doGrowTick();
  }

  if (frameCount % 4 == 0) {
    plant.doGravityTick();
  }

  if (frameCount % 30 == 0) {
    plant.calcAverageHydration();
  }
}

let canvasWidth = window.innerWidth - 5;
let canvasHeight = window.innerHeight - 5;

window.onresize = function () {
  canvasWidth = window.innerWidth - 5;
  canvasHeight = window.innerHeight - 5;

  updateForSize(canvasWidth, canvasHeight);
};

function handleBreak(smallBreak, bigBreak) {
  // Just restart the plant if it is a small break or a big break
  if (smallBreak || bigBreak) {
    // Default to big break value
    let potScale = 0.25;
    let potMove = -20;
    if (smallBreak) {
      potScale = 0.2;
      potMove = potMove * -1;
    }

    pot.resize(potScale);
    pot.move(0, potMove);

    let maxStemLength = 500;
    let maxLeafSize = 100;
    let maxAge = 2500;
    if (smallBreak) {
      maxStemLength = 300;
      maxLeafSize = 80;
      maxAge = 2000;
    }

    Leaf.maxHeight = maxStemLength;
    Leaf.matureSize = maxLeafSize;
    Leaf.maxAge = maxAge;
    Plant.leafSize = maxLeafSize * 0.75; // used as a proxy for the leaf size
  }
}

const SMALL_MODE = 588;
function updateForSize(w, h) {
  resizeCanvas(w, h);
  FallingLeaf.killPlaneHeight = h + 250;

  let xChange = w - lastCanvasWidth;
  let yChange = h - lastCanvasHeight;

  // Changed width breakpoints
  const smallBreak = lastCanvasWidth > SMALL_MODE && w <= SMALL_MODE;
  const bigBreak = lastCanvasWidth <= SMALL_MODE && w > SMALL_MODE;

  handleBreak(smallBreak, bigBreak);
  if (smallBreak || bigBreak) {
    plant.dropAllLeaves();
    storm.isRaining = true;
  }

  // Move it around
  pot.move(xChange / 2, yChange);
  plant.move(xChange / 2, yChange);
  storm.move(xChange / 2);

  Raindrop.outOfBounds += yChange;
  FallingLeaf.killPlaneHeight += yChange;

  lastCanvasWidth = w;
  lastCanvasHeight = h;

  draw();
}

function keyPressed() {
  if (key == "g") {
    doGrow = !doGrow;
  }
}

function mousePressed() {
  plant.onTap(new Position(mouseX, mouseY));
}

function touchStarted(event) {
  plant.onTap(new Position(mouseX, mouseY));
}
