
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var polygon, polygonImg;
var score = 0;

function preload(){
  polygonImg = loadImage("polygon.png");
}

function setup(){
  createCanvas(900, 400);

  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  ground = new Ground();

  stand1 = new Stand(390, 300, 250, 10);

  stand2 = new Stand(700, 200, 200, 10);

   //level one
   block1 = new Block(300,275,30,40);
   console.log(block1);
   block2 = new Block(330,275,30,40);
   block3 = new Block(360,275,30,40);
   block4 = new Block(390,275,30,40);
   block5 = new Block(420,275,30,40);
   block6 = new Block(450,275,30,40);
   block7 = new Block(480,275,30,40);
   //level two
   block8 = new Block(330,235,30,40);
   block9 = new Block(360,235,30,40);
   block10 = new Block(390,235,30,40);
   block11 = new Block(420,235,30,40);
   block12 = new Block(450,235,30,40);
   //level three
   block13 = new Block(360,195,30,40);
   block14 = new Block(390,195,30,40);
   block15 = new Block(420,195,30,40);
   //top
   block16 = new Block(390,155,30,40);
 
   //set 2 for second stand
   //level one
   blocks1 = new Block(640,175,30,40);
   blocks2 = new Block(670,175,30,40);
   blocks3 = new Block(700,175,30,40);
   blocks4 = new Block(730,175,30,40);
   blocks5 = new Block(760,175,30,40);
   //level two
   blocks6 = new Block(670,135,30,40);
   blocks7 = new Block(700,135,30,40);
   blocks8 = new Block(730,135,30,40);
   //top
   blocks9 = new Block(700,95,30,40);

  polygon = Bodies.circle(50, 200, 20);
  World.add(world, polygon);
 
  slingShot = new SlingShot(this.polygon, {x:100, y:200});

  

}

function draw(){
 background("orange");
  textSize(35);
  fill("white");
  text("Score:"+score, 600, 40);
   
  Engine.update(engine);

  fill("lightgreen")
  block1.display();

  fill("yellow");
  block2.display();
  
  fill("pink");
  block3.display();
  
  fill("lightgreen");
  block4.display();
  
  fill("yellow");
  block5.display();
  
  fill("pink");
  block6.display();
  
  fill("lightgreen");
  block7.display();
  

  fill("yellow");
  block8.display();
 
  fill("pink");
  block9.display();
  
  fill("lightgreen");
  block10.display();
  
  fill("yellow");
  block11.display();

  fill("pink");
  block12.display();
 

  fill("lightgreen");
  block13.display();
  
  fill("yellow");
  block14.display();
  
  fill("pink");
  block15.display();
  

  fill("lightgreen");
  block16.display();
  
  
  fill("pink");
  blocks1.display();
 
  fill("yellow");
  blocks2.display();
  
  fill("lightgreen");
  blocks3.display();
 
  fill("pink");
  blocks4.display();
  
  fill("yellow");
  blocks5.display();
  

  fill("lightgreen");
  blocks6.display();
  
  fill("pink");
  blocks7.display();
  
  fill("yellow");
  blocks8.display();
  

  fill("lightgreen");
  blocks9.display();
  
  slingShot.display();
  ground.display();
  stand1.display();
  stand2.display();

  
  imageMode(CENTER);
  image(polygonImg, polygon.position.x, polygon.position.y, 40, 40);

  block1.score();
  console.log(score);
  block2.score();
  block3.score();
  block4.score();
  block5.score();
  block6.score();
  block7.score();
  block8.score();
  block9.score();
  block10.score();
  block11.score();
  block12.score();
  block13.score();
  block14.score();
  block15.score();
  block16.score();

  blocks1.score();
  blocks2.score();
  blocks3.score();
  blocks4.score();
  blocks5.score();
  blocks6.score();
  blocks7.score();
  blocks8.score();
  blocks9.score();

}

function mouseDragged(){
  //if(gameState!=="launched"){
  Matter.Body.setPosition(this.polygon, {x: mouseX, y: mouseY});
  //}
}

function mouseReleased(){
  slingShot.fly();
  //gameState = "launched";
}

function keyPressed(){
  if(keyCode === 32){
      slingShot.attach(this.polygon);
  }
}

async function getBackgroundImg(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();
  //console.log(responseJSON);
  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11, 13);
  if(hour>=06 && hour<=20){
      background("orange");
  }
  else{
     background("blue");
  }
}