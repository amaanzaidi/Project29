const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var polygon,polygonImg
function preload() {
  polygonImg = loadImage("Polygon.JPG")
}

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  var options = {
    'restitution':0.8,
    'friction':1.5,
    'density':1.5
}
  polygon = Bodies.circle(700,200,20,options);
  World.add(world,polygon)
  ground1 = new Ground(400,400,800,10);
  ground2 = new Ground(400,300,200,10);
  block1 = new Box(330,235,30,40);
  block2 = new Box(360,235,30,40);
  block3 = new Box(390,235,30,40);
  block4 = new Box(420,235,30,40);
  block5 = new Box(450,235,30,40);
  block6 = new Box(360,195,30,40);
  block7 = new Box(390,195,30,40);
  block8 = new Box(420,195,30,40);
  block9 = new Box(390,155,30,40);
  slingshot = new Slingshot(this.polygon,{x:700,y:200})


}

function draw() {
  background("blue");  
  Engine.update(engine);
block1.display();
block2.display();
block3.display();
block4.display();
block5.display();
block6.display();
block7.display();
block8.display();
block9.display();
ground1.display();
ground2.display();
slingshot.display();
imageMode(CENTER);
  image(polygonImg,polygon.position.x,polygon.position.y,40,40)

  drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(polygon,{x:mouseX,y:mouseY});
  }
  function mouseReleased(){
      slingshot.fly();
  }
 