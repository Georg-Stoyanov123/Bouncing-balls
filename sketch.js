
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
//const Body = Matter.Body;

let engine;
let world;
var ball;
var ball2
var ground;
var angle=60;
var angle2=800;
var poly;
var fan;
var wedge;
var wall;
var ball3;
var wedge2;
var wall2;
var wall3;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 1.3,
    frictionAir: 0.01
  }
  var wall3_ops = {
    isStatic: true
  }
  var ball3_ops = {
    restitution: 1.3,
    frictionAir: 0.01
  }
  var wedge2_ops = {
    isStatic: true
  }
  var ball2_ops = {
    restitution: 1.3,
    frictionAir: 0.01
  }
   var wall2_ops = {
     isStatic: true
   }
   var ground_options ={
     isStatic: true
   };
  
  var ops = {
    isStatic: true
  };
  var wallOps = {
    isStatic: true
  }
  

  ground = Bodies.rectangle(200,350,400,20,ground_options);
  World.add(world,ground);
  wedge = Bodies.rectangle(100, 200, 100, 10, ops)
  World.add(world, wedge)
  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  wall = Bodies.rectangle(390, 0, 10, 800, wallOps)
  World.add(world, wall)
  ball2 = Bodies.circle(80, 10, 20, ball2_ops);
  World.add(world,ball2)
  ball3 = Bodies.circle(150, 10, 20, ball3_ops);
  World.add(world,ball3)
  wedge2 = Bodies.rectangle(150, 20, 100, 10, wedge2_ops);
  World.add(world,wedge2)
  wall2 = Bodies.rectangle(0, 0, 10, 800, wall2_ops)
  World.add(world, wall2)
  wall3 = Bodies.rectangle(0, 0, 800, 10, wall3_ops)

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  rect(wall3.position.x, wall3.position.y, 800, 10)
  rect(wall.position.x, wall.position.y, 10, 800);
  rect(wall2.position.x, wall2.position.y, 10, 800)
  ellipse(ball.position.x,ball.position.y,20);
  rect(ground.position.x,ground.position.y,400,20);
  ellipse(ball2.position.x,ball2.position.y,20);
  ellipse(ball3.position.x,ball3.position.y,25)
  push()
  translate(wedge.position.x,wedge.position.y - 70)
  rotate(angle)
  rotate(angle2)
  Matter.Body.rotate(wedge, angle)
  Matter.Body.rotate(wedge2, angle2)
  rect(0, 0, 100, 30)
  rect(150, 150, 100, 10)
  pop()
  angle += 0.1
  angle2 += 0.1
}

