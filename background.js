class Background /*s*/{

	constructor(person1) {
		this.person1 = person1;
		this.x1 = 0;
		this.x2 = xDim;
		this.scroll = 2;
  		this.dayImg = loadImage('Assets/DayImage.jpg');
  		this.nightImg = loadImage('Assets/NightImage.jpg');
  		this.time = 0;
	}


	process(entities, deltaTime) {
		this.time += deltaTime;
		if(this.time < 5000) {
			image(this.dayImg,this.x1,0,xDim,yDim);
			image(this.dayImg,this.x2,0,xDim,yDim);
			this.x1 -= this.scroll;
			this.x2 -= this.scroll;
		
			if(this.x1 < -xDim) {
				this.x1 = xDim;
			}
			if (this.x2 < -xDim){
				this.x2 = xDim;
			}
		} else if (this.time = 5000) {
			image(this.nightImg,this.x1,0,xDim,yDim);
			image(this.nightImg,this.x2,0,xDim,yDim);
			this.x1 -= this.scroll;
			this.x2 -= this.scroll;
		
			if(this.x1 < -xDim) {
				this.x1 = xDim;
			}
			if (this.x2 < -xDim){
				this.x2 = xDim;
			}

		} else { 
			image(this.nightImg,this.x1,0,xDim,yDim);
			image(this.nightImg,this.x2,0,xDim,yDim);
			this.x1 -= this.scroll;
			this.x2 -= this.scroll;
		
			if(this.x1 < -xDim) {
				this.x1 = xDim;
			}
			if (this.x2 < -xDim){
				this.x2 = xDim;
			}
		}

		if(this.time >= 10000)
		{
			this.time = 0;
		}
	}

}