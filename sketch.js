var arrow, ground, balloona, balloonb, balloonc, balloond, bow;
var arrow1, ground1, balloon1, balloon2, balloon3, balloon4, bow1;

var redgroup, pinkgroup, greengroup, arrowgroup;

var score = 0;

var gameState = "play";

function preload() {
  //load your images here
  arrow1 = loadImage("arrow0.png");
  ground1 = loadImage("background0.png");
  balloon1 = loadImage("red_balloon0.png");
  balloon2 = loadImage("pink_balloon0.png");
  balloon3 = loadImage("green_balloon0.png");
  balloon4 = loadImage("blue_balloon0.png");
  bow1 = loadImage("bow0.png");
}

function setup() {
  createCanvas(500, 500);

  //add code here
  ground = createSprite(200, 100);
  ground.addImage(ground1);
  ground.scale = 2;
  ground.x = ground.width / 2;
  ground.velocityX = -1;

  bow = createSprite(420, 200);
  bow.addImage(bow1);
  bow.scale = 1.2;

  redgroup = new Group();
  greengroup = new Group();
  pinkgroup = new Group();
  arrowgroup = new Group();

}

function arrow_1() {
  arrow = createSprite(420, 200);
  arrow.addImage(arrow1);
  arrow.scale = 0.30;
  arrowgroup.add(arrow);
}

function redballoon() {
  balloona = createSprite(60, 50, 10, 10);
  balloona.addImage(balloon1);
  balloona.scale = 0.1;
  balloona.velocityY = 1;
  balloona.y = Math.round(random(0, 200));
  redgroup.add(balloona);
}

function greenballoon() {
  balloonc = createSprite(160, 50, 10, 10);
  balloonc.addImage(balloon3);
  balloonc.scale = 0.1;
  balloonc.velocityY = -3;
  balloonc.y = Math.round(random(200, 400));
  greengroup.add(balloonc);
}

function pinkballoon() {
  balloonb = createSprite(260, 50, 10, 10);
  balloonb.addImage(balloon2);
  balloonb.scale = 1.3;
  balloonb.velocityY = 1;
  balloonb.y = Math.round(random(0, 200));
  pinkgroup.add(balloonb);
}

function draw() {
  //console.log("FRAME COUNT ="+frameCount);
  arrow_1();
  //add code here
  if (gameState == "play") {
    if (frameCount % 190 == 0) {
      redballoon();
    }

    if (frameCount % 160 == 0) {
      pinkballoon();
    }
    if (frameCount % 240 == 0) {
      greenballoon();
    }
    if (mousePressedOver(arrow)) {
      arrow.velocityX = -5;
    }
    if (arrowgroup.isTouching(redgroup)) {
      redgroup.destroyEach();
      arrowgroup.destroyEach();
      score = score + 1;
    }
    if (arrowgroup.isTouching(greengroup)) {
      greengroup.destroyEach();
      arrowgroup.destroyEach();
      score = score + 6;
    }
    if (arrowgroup.isTouching(pinkgroup)) {
      pinkgroup.destroyEach();
      arrowgroup.destroyEach();
      score = score + 2;
    }
    if (arrow.x < 0) {
      arrow.x = 420;
      arrow.velocityX = 0;
    }

    if (ground.x < 180) {
      ground.x = ground.width / 2;
    }

  }
  drawSprites();
  textSize(20);
  fill("brown");
  text("SCORE=" + "  " + score, 350, 30);
}