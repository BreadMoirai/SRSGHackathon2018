class PhysicsSystem {
	process(entities, deltaTime) {
		for (var i = 0; i < entities.length; i++) {
			var e = entities[i]
			var pos = e.getComp(Position);
			var vel = e.getComp(Velocity);
			var size = e.getComp(Size);
			var grav = e.getComp(Gravity);
			var accel = e.getComp(Acceleration);
			if (pos != null && vel != null) {
				pos.x += vel.x;
				pos.y += vel.y;
			}
			if (vel && accel) {
				vel.x += accel.x;
				vel.y += accel.y;
			}
			if (vel != null && grav != null) {
				if (size != null) {
					if (pos.y + size.y/2 < ground) {
						vel.y += grav.g;
					} else {
						vel.y = 0;
						pos.y = ground - size.y/2;
					}
				} else {
					if (pos.y < ground) {
						vel.y += grav.g;
					} else {
						vel.y = 0;
						pos.y = ground;
					}
				}
			}
		}
	}
}



class PlayerSystem {
	constructor(person) {
		this.person = person;
		this.left = false;
		this.right = false;
	}

	process(entities, deltaTime) {
		var a = this.person.getComp(Acceleration);
		if (this.left && this.right) {
			return;
		} else if (this.right) {
			if (a.maxAccel - a.x < .0001) {
				return;
			}
			if (a.x < 0) {
				a.x = 0;
				a.step = 0;
			}
			var t = a.step + deltaTime;
			var c = a.maxTime;
			var d = a.maxAccel;
			var td = t / d;
			a.x -= c*t*t*t*t;
			a.step = t;
		}
	}

	keyPressed(keyCode) {
		var v = this.person.getComp(Velocity);
		var size = this.person.getComp(Size);
		var pos = this.person.getComp(Position);
		var a = this.person.getComp(Acceleration);
		switch(keyCode) {
			case LEFT_ARROW:
				this.left = true;
				break;
			case RIGHT_ARROW:
				this.right = true;
				break;
			case 32:
				if (pos.y + size.y/2 >= ground) {
					v.y -= 50;
				}
				break;
		}
	}

	keyReleased(keyCode) {
		switch(keyCode) {
		case LEFT_ARROW:
			this.left = false;
			break;
		case RIGHT_ARROW:
			this.right = false;
			break;
		}
	}
}

class DrawSystem {
	process(entities, deltaTime) {
		for (var i = 0; i < entities.length; i++) {
			var e = entities[i];
			var pos = e.getComp(Position);
			var size = e.getComp(Size);
			if (pos != null && size != null) {
				entities[i].draw(pos.x, pos.y, size.x, size.y);	
			} else if (pos != null) {
				entities[i].draw(pos.x, pos.y);
			} else {
				entities[i].draw();
			}

		}
	}
}

class LifeSystem {
	process(entities, deltaTime) {
		for (var i = 0; i < entities.length; i++) {
			if (entities[i].isDead()) {
				entities.splice(i, 1);
				i--;
			}
		}
	}
}