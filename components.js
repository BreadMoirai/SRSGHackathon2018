class Position {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}
}

class Velocity {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}
}

class Size {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}
}

class Gravity {
	constructor(value) {
		this.g = value;
	}
}

class Acceleration {
	constructor(timeTillMax, maxAccel) {
		this.x = 0;
		this.y = 0;
		this.step = 0;
		this.maxTime = timeTillMax;
		this.maxAccel = maxAccel;
	}
}
