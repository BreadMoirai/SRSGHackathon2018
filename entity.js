class Entity {
	constructor(xPos, yPos, width, height){
		this.xPos = xPos;
		this.yPos = yPos;
		this.height = height;
		this.width = width;
		this.xVel = 0;
		this.yVel = 0;
		this.components = [];
	}

	update(){
		this.xPos += this.xVel;
		this.yPos += this.yVel;
		if (this.onGround()) {
			this.yVel = 0;
			this.yPos = ground + this.height;
		} else {
			this.yVel += g;
		}
	}


	onGround(){
		return this.yPos - this.height >= ground;
	}

	isDead(){
		if(this.xPos +  this.width < 0)
		{
			return true;
		}
		return false;
	}

	getComponent() {
		var comps = [];
		for (var i = 0; i < arguments.length; i++) {
			var type = arguments[i];
			for (var i = 0; i < this.components.length; i++) {
				var comp = this.components[i];
				if (comp instanceof type) {
					comps.push(comp);
					break;
				}
			}
		}
		return comps;
	}

	getComponent(compType) {
		for (var i = this.components.length - 1; i >= 0; i--) {
			if (this.components[i] instanceof compType) {
				return this.components[i];
			}
		}
	}
}