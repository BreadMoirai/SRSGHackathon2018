class MovementSystem {
	process(entities) {
		for (var i = entities.length - 1; i >= 0; i--) {
			var [pos, vel, grav] = entities[i].getComponent(Movement, Velocity, Gravity);
			if (pos != null && vel != null) {
				pos.x += vel.x;
				pos.y += vel.y;
			}
			if (vel != null && grav != null) {
				vel.y += grav.g;
			}
		}
	}
}

class DrawSystem {
	process(entities) {
		for (var i = 0; i < entities.length; i++) {
			entities[i].draw();
		}
	}
}