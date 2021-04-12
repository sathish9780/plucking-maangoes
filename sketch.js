
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var ground1,stone1,tree1,launcher1;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10,mango11,mango12;
var world;
var engine;
var boy;
function preload(){
	boy=loadImage("boy.png");
}

function setup() {
	createCanvas(1300, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    stone1 = new stone(235,420,30)
	tree1 = new tree(1050,580);
	mango1=new mango(1100,100,30);
	mango2=new mango(1170,130,30);
	  mango3=new mango(1010,140,30);
	  mango4=new mango(1000,70,30);
	  mango5=new mango(1100,70,30);
	  mango6=new mango(1000,230,30);
	  mango7=new mango(900,230,25);
	  mango8=new mango(1140,150,25);
	  mango9=new mango(1100,230,25);
	  mango10=new mango(1200,200,25);
	  mango11=new mango(1120,50,25);
	  mango12=new mango(900,160,25);
	  
	  ground1 = new Ground(width/2,600,width,20);
	  launcher1=new launcher(stone1.body,{x:235,y:420});
	  Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);

  textSize(25);
  text("Press Space to get a second Chance to Play!!",50 ,50);
  image(boy,200,340,200,300);
  tree1.display();  
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango6.display();
 mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  mango12.display();
  stone1.display();
  ground1.display();
  launcher1.display();
  
 
}

function mouseDragged(){
	Matter.Body.setPosition(stone1.body, {x:mouseX, y:mouseY}) 
	
}
function mouseReleased(){
	launcher1.fly();
}

function keyPressed(){
	if (keyCode === 32) {
		Matter.Body.setPosition(stone1.body, {x:235, y:420}) 
		  launcherObject.attach(stone1.body);
		}
}
