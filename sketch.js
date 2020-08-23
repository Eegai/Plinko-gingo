const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var particles=[];
var plinkos=[];
var divisions=[];
var divH=300;
var ground;

function setup() {
  createCanvas(480,900);

  engine = Engine.create();
  world = engine.world;
  
  for(var k=0;k<=width;k=k+80)
  {
    divisions.push(new Division(k,height-divH/2,10,divH));
  }
  for(var j=40;j<=width;j=j+50)
  {
    plinkos.push(new Plinko(j,100,1));
  }
  for(var j=15;j<=width;j=j+50)
  {
    plinkos.push(new Plinko(j,150,1));
  }
  for(var j=22.5;j<=width;j=j+50)
  {
    plinkos.push(new Plinko(j,200,1));
  }

  for(var j=30;j<=width;j=j+50)
  {
    plinkos.push(new Plinko(j,250,1));
  }

  for(var j=10;j<=width;j=j+50)
  {
    plinkos.push(new Plinko(j,300,1));
  }

  for(var j=25;j<=width;j=j+50)
  {
    plinkos.push(new Plinko(j,350,1));
  }
  

  
  
  ground=new Ground(width/2,height+20,width,10);
   
  Engine.run(engine);
  //createSprite(400, 200, 50, 50);
}

function draw() {
  background("wheat");  
  ground.display();
  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-10,width/2+10) ,7,8));
  }
  console.log(frameCount);
  for(var j=0;j<particles.length;j++)
  {
    particles[j].display();
  }
  for(var k=0;k<divisions.length;k++)
  {
    divisions[k].display();
  }
  for(var i=0;i<plinkos.length;i++)
  {
    plinkos[i].display();
  }
  
  drawSprites();
}