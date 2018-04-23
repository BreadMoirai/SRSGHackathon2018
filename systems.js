class PhysicsSystem {
	process(entities, deltaTime) {
		for (var i = 0; i < entities.length; i++) {
			var e = entities[i]
			var pos = e.getComp(Position);
			var vel = e.getComp(Velocity);
			var size = e.getComp(Size);
			var grav = e.getComp(Gravity);
			if (pos != null && vel != null) {
				pos.x += vel.x;
				pos.y += vel.y;
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

function easeOutCubic(t, b, c, d) {
	t /= d;
	t--;
	return c*(t*t*t + 1) + b;
}

class PlayerSystem {
	constructor(person) {
		this.person = person;
		this.left = false;
		this.right = false;
	}

	process(entities, deltaTime) {
		var v = this.person.getComp(Velocity);
		if (this.left == this.right) {
			v.x /= 1.1;
		} else if (this.left) {
			v.x = -5;
		} else if (this.right) {
			v.x = 5;
		}
	}

	keyPressed(keyCode) {
		var v = this.person.getComp(Velocity);
		var size = this.person.getComp(Size);
		var pos = this.person.getComp(Position);
		switch(keyCode) {
			case LEFT_ARROW:
				this.left = true;
				break;
			case RIGHT_ARROW:
				this.right = true;
				break;
			case 32:
				if (pos.y + size.y/2 >= ground) {
					v.y -= 20;
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
			}
		}
	}
}

class LifeSystem {
	constructor() {
		this.score = 0;
	}
	process(entities, deltaTime) {
		for (var i = 0; i < entities.length; i++) {
			if (entities[i] instanceof Person) continue;
			if (entities[i].getComp(Position).x < 0) {
				entities.splice(i, 1);
				i--;
				this.score++;
			}
		}	
		fill(10, 145, 155);
		textSize(50);
		text(this.score, xDim - 100, 100);
	}
}

class CollisionSystem {
	process(entities, deltaTime) {
		var collidables = entities.filter(e => e instanceof Obstacle);
		var player = entities.find(e => e instanceof Person);
		var pPos = player.getComp(Position);
		var pSize = player.getComp(Size);
		for (var i = 0; i < collidables.length; i++) {
			var r = collidables[i];
			var rPos = r.getComp(Position);
			var rSize = r.getComp(Size);
			// does it collide?

			if (collideRectCircle(rPos.x - rSize.x/2, rPos.y - rSize.y/2, rSize.x, rSize.y, pPos.x, pPos.y, pSize.x)) {
				// for (var i = 0; i < 10; i++) {
				// 	entities.push(new Particle(pPos.x, pPos.y));
				// }
				gameEnd();
			}	
		}
	}
}

class ParticleSystem {
	process(entities, deltaTime) {
		var particles = entities.filter(e => e instanceof Particle);
		for (var i = 0; i < particles.length; i++) {
			var l = particles[i].getComp(LifeSpan);
			if (l.life++ > l.endTime) {
				entities.splice(entities.indexOf(particles[i]), 1);
			}
		}
	}
}

class Particle extends Entity {
	constructor(x, y) {
		super();
		this.addComp(new Color(random(255), random(255), random(255)));
		this.addComp(new Position(x, y));
		var s = random(300);
		this.addComp(new Size(s, s));
		this.addComp(new LifeSpan(30));
		this.addComp(new Velocity(random(5) - 2.5, random(5) - 2.5));
	}

	draw(x, y) {
		var s = this.getComp(Size);
		var c = this.getComp(Color);
		var p = this.getComp(Position);
		var l = this.getComp(LifeSpan);
		fill(color(c.r, c.g, c.b));
		ellipse(p.x, p.y, s.x * l.life/l.endTime);
	}
}

