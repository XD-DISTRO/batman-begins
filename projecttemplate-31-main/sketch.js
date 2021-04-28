const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var rain1,rain2,rain3,rain4,rain5,rain6,rain7,rain8,rain9

function preload(){
    
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    
}

function draw(){
    rain1 = new Rain( 20, 10)
    rain2 = new Rain( 40, 60)
    rain3 = new Rain( 25, 70)
    rain4 = new Rain( 60, 30)
    rain5 = new Rain( 8, 80)
    rain6 = new Rain( 0, 90)
    rain7 = new Rain( 10, 20)
    rain8 = new Rain( 90, 30)
    rain9 = new Rain( 60, 10)

}
