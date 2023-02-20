
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine;
var world;
var ground;
var boyrunning;
var boy;
var building;
var bg_img;
var fireAnimation, fire,fire1,fire2
var balloon, balloonImg;


function preload(){

  boyrunning=loadAnimation("boyrunning1.png","boyrunning2.png");
bg_img = loadImage("bg_img.png");
fireAnimation = loadAnimation("fire1.png","fire2.png");
balloonImg = loadImage("balloon.png");

  
}


function setup() {
  createCanvas(windowWidth,windowHeight);

  engine = Engine.create();
  world = engine.world;


  ground = new Ground(200,windowHeight,600,20);


building = createSprite(1000,580,1000,00);
building.scale = 0.5
building.addImage(bg_img);

fire = createSprite(1000,890,600,90);
fire.addAnimation("fire", fireAnimation);
fire.scale = 2;

fire1 = createSprite(1150,890,600,90);
fire1.addAnimation("fire", fireAnimation);
fire1.scale = 2;

fire2 = createSprite(850,900,600,90);
fire2.addAnimation("fire", fireAnimation);
fire2.scale = 2;

balloon = createImg("balloon.png")
balloon.position(300,900);
balloon.size(50,50)
balloon.mouseClicked(balloonBlow);
balloon.scale = 0.1

boy = createSprite(300,900,50,20);
boy.addAnimation("running", boyrunning);




  
  rectMode(CENTER);
}


function draw()
{

  background("white");
  Engine.update(engine);
ground.show();

  
balloon.x = boy.x+30;
balloon.y = boy.y-50;

/*if(keyDown(UP_ARROW)){
  balloonBlow();
}

if (keyDown(RIGHT_ARROW)){
Matter.Body.applyForce(boy,{x:0,y:0},{x:0.01,y:0});
}*/


  drawSprites();
}

function balloonBlow(){
  Matter.Body.applyForce(boy,{x:0,y:0},{x:0,y:-0.1});
}