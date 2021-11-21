const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var palyer, playerBase, playerArcher;
var baseimage;

function preload() {
  backgroundImg = loadImage("./assets/background.png");
  baseimage = loadImage("./assets/base.png");
  playerimage = loadImage("./assets/player.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;
  angleMode(DEGREES);

var options ={
  isStatic:true

};

  //create player base body
  playerBase = Bodies.rectangle(200, 300, 100, 150, options);
  World.add(world, playerBase);

  //create player body
player = Bodies.rectangle(250,playerBase.position.y - 160, 50, 180, options);
World.add(world, player);


}

function draw() {
  background(backgroundImg);

  Engine.update(engine);

  //show the player image using image() function
  image(playerimage, player.position.x, player.position.y, 90, 150);

  //show the playerbase image using image() function
  image(playerBase, playerBase.position.x, playerBase.position.y, 20, 20);


  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);
}
