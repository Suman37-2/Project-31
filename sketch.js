const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
 
var myEngine,myWorld;

function preload(){
    
}

function setup(){
myEngine=Engine.create();
myWorld=myEngine.world;

createCanvas(1000,800);
drop1=new Drop(400,250,10,10);
    
}

function draw(){
background(0);
drop1.display();    
}   

