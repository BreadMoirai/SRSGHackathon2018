class Person extends Entity {
	constructor (){
		super();
		this.addComp(new Position(0 ,550));
		this.addComp(new Size(60, 60));
		this.addComp(new Velocity(0, 0));
		this.addComp(new Gravity(g/2));
		this.addComp(new Acceleration());
	}

	draw(x, y, sizeX, sizeY) {
		ellipse(x, y, sizeX, sizeY);
		fill(255);
	}

}