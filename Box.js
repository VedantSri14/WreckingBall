class Box {
	constructor(x, y, width, height) {
		var options = {
			isStatic: false,
			restitution: 0.8,
            density: 0.8,
            frictionAir: 0.003,
		};
		this.width = width;
		this.height = height;
		this.body = Matter.Bodies.rectangle(x, y, width, height, options);
		World.add(world, this.body);
	}
	display() {
		var pos = this.body.position;
		var angle = this.body.angle;
		push();
		translate(pos.x, pos.y);
		rotate(angle);
        rectMode(CENTER);
        fill("cyan");
		rect(0, 0, this.width, this.height);
		pop();
	}
}
