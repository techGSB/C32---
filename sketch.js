
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var gr,g1,g2;
var b1,b2,b2,b4,b5,b6,b7,b8,b9,b10,b11,b12,b13,b14,b15,b16,b17,b18,b19,b20,b21,b22;
var stone;
var bg;
var score = 0;
var backgroundImg
function preload()
{getBackgroundImg();

	
}

function setup() {
  if(backgroundImg)
    
  background(backgroundImg);

	createCanvas(1345, 650);


	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.
 
  gr = new Ground(600,620,1500,20);  
  g1 = new Ground(760,550,250,15);
  g2 = new Ground(1110,450,250,15);
  b1 = new Box(660,522,40,40);
  b2 = new Box(705,522,40,40);
  b3 = new Box(750,522,40,40);
  b4 = new Box(795,522,40,40);
  b5 = new Box(840,522,40,40);
  b6 = new Box(705,480,40,40);
  b7 = new Box(750,480,40,40);
  b8 = new Box(795,480,40,40);
  b9 = new Box(775,438,40,40);
  b10 = new Box(725,438,40,40);
  b11 = new Box(750,396,40,40);
  b12 = new Box(1010,396,40,40);


  b13 = new Box(1055,396,40,40);
  b14 = new Box(1100,396,40,40);
  b14 = new Box(1145,396,40,40);
  b15 = new Box(1190,396,40,40);
  b16= new Box(1100,350,150,40);
  b17 = new Box(1059,305,40,40);
  b18 = new Box(1099,305,40,40);
  b19 = new Box(1144,305,40,40);
  b20 = new Box(1100,256,40,40);


  stone = new Stone(330,438,50);
  launcher = new Launcher(stone.body,{x:234,y:400});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background('white');
  
fill("green");
  noStroke();
  textSize(20);
  text("SCORE: "+score,600,40);
  gr.display();
  g1.display();
  g2.display();
  b1.display();
  b1.score();
  b2.display();
  b2.score();
  b3.display();
  b3.score();
  b4.display();
  b4.score();
  b5.display();
  b5.score();
  b6.display();
  b6.score();
b7.display();
b7.score();
b8.display();
b8.score();
b9.display();
b9.score();
b10.display();
b10.score();
b11.display();
b11.score();
b12.display();
b12.score();
b13.display();
b13.score();
b14.display();
b14.score();
b15.display();
b15.score();
b16.display();
b16.score();

b17.display();
b17.score();
b18.display();
b18.score();
b19.display();
b19.score();
b20.display();
b20.score();
stone.display();
  drawSprites();











  



}

function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX, y:mouseY});
}
function mouseReleased(){
    launcher.fly();
}



function keyPressed(){
	if(keyCode === 32) {
		Matter.Body.setPosition(stone.body, {x:280, y:575})
	 launcher.attach(stone.body);
	}
}


async function getBackgroundImg()
{

var bg = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
var bg1 =await bg.json();
var datetime = bg1.datetime;
var hrs = datetime.slice(11,13);

console.log(hrs); 

if(hrs>=06&&hrs<=18)
{

var bgDay = "bg.png";

}

else

{
    bgDay = "bg2.jpg";

}
backgroundImg = loadImage(bgDay);
}
