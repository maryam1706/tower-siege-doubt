const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box , polygon;
var slingShot , ground;
var backgroundImg;

function preload(){

}

function setup(){
    var canvas = createCanvas(1500,500);
    engine = Engine.create();
    world = engine.world;

    base1 = new Base(707,475,520,15); 
    base2 = new Base(1218,330,400,15);

    box1 = new Box(525,427,60,80);
    box2 = new Box(586,427,60,80);
    box3 = new Box(647,427,60,80);
    box4 = new Box(708,427,60,80);
    box5 = new Box(769,427,60,80);
    box6 = new Box(830,427,60,80);
    box7 = new Box(891,427,60,80);

    box8 = new Box(586,346,60,80);
    box9 = new Box(647,346,60,80);
    box10 = new Box(708,346,60,80);
    box11 = new Box(769,346,60,80);
    box12 = new Box(830,346,60,80);

    box13 = new Box(647,265,60,80);
    box14 = new Box(708,265,60,80);
    box15 = new Box(769,265,60,80);

    box16 = new Box(708,185,60,80);

    box17 = new Box(1090,281,60,80);
    box18 = new Box(1151,281,60,80);
    box19 = new Box(1212,281,60,80);
    box20 = new Box(1273,281,60,80);
    box21 = new Box(1335,281,60,80);

    box22 = new Box(1151,200,60,80);
    box23 = new Box(1212,200,60,80);
    box24 = new Box(1273,200,60,80);

    box25 = new Box(1212,119,60,80);

   polygon = new Polygon(10,10,1);
}

function draw(){
    background("grey");

    base1.display();
    base2.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();

    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();

    box13.display();
    box14.display();
    box15.display();

    box16.display();

    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    
    box22.display();
    box23.display();
    box24.display();

    box25.display();

    polygon.display();


}