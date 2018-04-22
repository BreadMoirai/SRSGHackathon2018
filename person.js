class Person extends Entity {
	constructor (){
		super();
		this.addComp(new Position(0 ,550));
		this.addComp(new Size(60, 60));
		this.addComp(new Velocity(0, 0));
		this.addComp(new Gravity(g));

		ellipseMode(RADIUS);
  		noStroke();
	}

	draw(x, y, sizeX, sizeY) {
  		for (var x = 0; x <= width; x+=xDim) {
    		this.drawGradient(x, height/2);
  		} 
	}

	drawGradient(x, y) {
		var s = this.getComp(Size);
		var radius = (s.x / 2);
		var h = random(0, 360);
		for (var r = radius; r > radius; --r){
			fill(h, random(255), random(255));
			ellipse();
		} 
	}

}