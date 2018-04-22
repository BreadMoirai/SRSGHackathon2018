class Background /*extends level*/{

	constructor() {
		setup();
		this.day = loadImage('Assets/DayImage.jpg');
		this.night = loadImage('Assets/NightImage.jpg');
		this.time = 0;

	}

	setup(){
		canvas = createCanvas(xDim,yDim);

	}
	
	draw(){

	}

	process(entities, deltaTime) {
		this.time += deltaTime;

		if(this.time > 1000)
		{
			background(night);
			this.time = 0;
		}
		else
		{
			background(day);
		}

	}
}