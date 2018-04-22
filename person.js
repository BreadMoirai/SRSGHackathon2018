class Person extends Entity {
	constructor (){
		super();
		this.addComp(new Position(0 ,550));
		this.addComp(new Size(60, 60));
		this.addComp(new Velocity(0, 0));
		this.addComp(new Gravity(g));
		this.s = this.getComp(Size);
		this.radius = (this.s.x / 2);
		this.h = random(0,360);	
	}

	draw(x, y, sizeX, sizeY) {
		colorMode(HSB, 360, 360, 360);
  		noStroke();
  		for (var i = sizeX; i > 0; i--) {
			fill(random(255), random(255), random(255));
			ellipse(x,y,i,i);
  		}
	}
}