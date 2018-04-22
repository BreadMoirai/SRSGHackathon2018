class Entity {
	constructor(){
		this.components = [];
	}

	addComp(comp) {
		this.components.push(comp);
	}

	isDead(){
		if(this.xPos +  this.width < 0)
		{
			return true;
		}
		return false;
	}

	// getComponent() {
	// 	var comps = [];
	// 	for (var i = 0; i < arguments.length; i++) {
	// 		var type = arguments[i];
	// 		for (var i = 0; i < this.components.length; i++) {
	// 			var comp = this.components[i];
	// 			if (comp instanceof type) {
	// 				comps.push(comp);
	// 				break;
	// 			}
	// 		}
	// 	}
	// 	return comps;
	// }

	getComp(compType) {
		for (var i = 0; i < this.components.length; i++) {
			if (this.components[i] instanceof compType) {
				return this.components[i];
			}
		}
	}
}