class Obstacle extends Entity{
	constructor() {
		super();
		var height = random(xDim/4);
		this.addComp(new Size(20, height));
		this.addComp(new Position(xDim + 10, ground - height/2));
		this.addComp(new Velocity(-5, 0));
	}

	draw(x, y, w, h){
		var v = this.getComp(Velocity)
		rect(x - w/2, y - h/2, w, h);
		fill(255);
	}

}

class ObstacleSpawnSystem {
	constructor() {
		this.counter = 0;
	}
	process(entities, deltaTime) {
		if (this.counter%50 == 0) {
			entities.push(new Obstacle())
		}

		this.counter++;
	}
}