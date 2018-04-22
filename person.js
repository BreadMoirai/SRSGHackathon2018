class Person extends Entity {
	constructor (){
		super(0, 550, 60, 60);
	}

	draw(){
		ellipse(this.xPos,this.yPos,this.width,this.height);
		fill(255);
	}

}