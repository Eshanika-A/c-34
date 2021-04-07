const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
box1=new Box(800,390,50,50);
box2=new Box(700,200,50,50);
    
}

function draw(){
    background("pink");
    Engine.update(engine);
  box1.display();
  box2.display();

}