class Obstacle extends Entity{
	constructor() {
		super(1200, 700, 20, random(xDim/4)); 
		//xPos, yPos, width, height
		this.xVel = 10;
	}

	draw(){
		rect(this.xPos, this.yPos, this.width, this.height);
		fill(255);
	}

	update() {
		this.xPos -= this.xVel;
	}

}