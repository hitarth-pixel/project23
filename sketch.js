var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;

var boxBottom,boxLeft,boxRight;

var engine, world;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	engine = Engine.create();
	world = engine.world;
    
    packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor="darkgreen";

	/*boxBottom=new Box(350,648,200,20);
	boxRight=new Box(462,448,20,200);
	boxLeft=new Box(238,448,20,200);*/

	boxBottom=new Box(460,648,200,20);
	boxRight=new Box(572,448,20,100);
	boxLeft=new Box(348,448,20,100);


	

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0 , isStatic:true});
	World.add(world, packageBody);
	
    //Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
    Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background("lightblue");
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  boxBottom.display();
  boxLeft.display();
  boxRight.display();
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	        	Matter.Body.setStatic(packageBody, false);
    }
}
