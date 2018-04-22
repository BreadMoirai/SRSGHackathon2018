class Obstacle extends Entity{
	constructor() {
		super();
		var height = random(xDim/10, xDim/7);
		var length = random(20, 50)
		this.addComp(new Size(length, height));
		this.addComp(new Position(xDim + 10, ground - height/2));
		this.addComp(new Velocity(-5, 0));
	}

	draw(x, y, w, h){
		var v = this.getComp(Velocity)
		fill(10, 145, 155);
		rect(x - w/2, y - h/2, w, h);
	}

}

class ObstacleSpawnSystem {
	constructor() {
		this.counter = 0;
		this.minCreationTime = 40;
		this.newMinCreationTime = 40;
	}
	process(entities, deltaTime) {
		if (this.minCreationTime < 0)
		{
			var randomNumber = random();
			if (randomNumber > .95) {
				entities.push(new Obstacle());
				this.minCreationTime = this.newMinCreationTime;
				var randomNum = random(1, 100)
				if (random > 80)
				{
					newMinCreationTime--
				}
			}

			this.counter++;
		}
		else
		{
			this.minCreationTime--;
		}
	}
}