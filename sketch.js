const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var rand;
var man;
var rain = 100;
var drops = [];

function preload(){
    animation =loadAnimation("images/Walking Frame/walking_8.png","images/Walking Frame/walking_7.png","images/Walking Frame/walking_6.png","images/Walking Frame/walking_5.png","images/Walking Frame/walking_4.png","images/Walking Frame/walking_3.png","images/Walking Frame/walking_2.png","images/Walking Frame/walking_1.png")
}

function setup(){
   
    createCanvas(500,650);

    engine = Engine.create();
    world = engine.world;

    man = createSprite(250,540,200,300);
    man.addAnimation("man",animation);
    man.scale =0.3;
    Engine.run(engine);
}

function draw(){
    background(0);

  rand = random(15,30);


  for(var i =0;i< rain;i++)
  {
      drops.push(new rainDrops(random(0,500),0));
      drops[i].display();
      rain=rain+1;
  }


    
    drawSprites();
}   

function Lightning()
{
  
}