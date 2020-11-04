class Ball {
	constructor(x, y, r) {
		var options = {
			isStatic: false,
			density: 2,
			frictionAir: 0.003,
		};
		this.r = r;
		this.body = Matter.Bodies.circle(x, y, r, options);
		World.add(world, this.body);
	}
	display() {
		var pos = this.body.position;
		var angle = this.body.angle;
		push();
		translate(pos.x, pos.y);
		rotate(angle);
		ellipseMode(CENTER);
		fill("cyan");
		circle(0, 0, this.r * 2);
		pop();
	}
}
