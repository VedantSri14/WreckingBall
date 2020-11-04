const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;

function setup() {
	createCanvas(800, 400);
	engine = Engine.create();
	world = engine.world;

	ground = new Ground(400, 380, 800, 20);

	box1 = new Box(650, 345, 50, 50);
	box2 = new Box(650, 295, 50, 50);
	box3 = new Box(650, 245, 50, 50);
	box4 = new Box(650, 195, 50, 50);
	box5 = new Box(650, 145, 50, 50);

	box6 = new Box(700, 345, 50, 50);
	box7 = new Box(700, 295, 50, 50);
	box8 = new Box(700, 245, 50, 50);
	box9 = new Box(700, 195, 50, 50);
	box10 = new Box(700, 145, 50, 50);

	ball1 = new Ball(400, 200, 50);

	rope = new SlingShot(ball1.body, { x: 400, y: 50 });
}

function draw() {
	background(255);
	Engine.update(engine);

	ground.display();

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

	ball1.display();

	rope.display();
}
function keyPressed() {
	if (keyCode === 32) {
		Matter.Body.setPosition(ball1.body, { x: mouseX, y: mouseY });
	}
}
