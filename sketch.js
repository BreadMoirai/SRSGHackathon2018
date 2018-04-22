var person1;
var entities = [];
var counter = 0;

function setup(){
	createCanvas(xDim, yDim);
	person1 = new Person();
	entities.push(person1);
	entities.push(new Obstacle());

}

function draw(){
	background(0,0,0);
	fill(255);
	//update loop
	for (var i = 0; i < entities.length; i++) {
		entities[i].update();
		entities[i].draw();
		if (entities[i].isDead()) {
			entities.splice(i, 1);
		}
	}

	if(counter%10 == 0){
		entities.push(new Obstacle());
	}


	counter++;
} 

var left = false;
var right = false;
function keyPressed(){
	switch(keyCode) {
		case LEFT_ARROW:
			left = true;
			person1.xVel = -5;
			break;
		case RIGHT_ARROW:
			right = true;
			person1.xVel = 5;
			break;
		case 32:
			if (person1.onGround())
				person1.yVel = -50;
			break;
	}
}

function keyReleased(){
	switch(keyCode) {
		case LEFT_ARROW:
			left = false;
			if (right)
				person1.xVel = 5;
			else 
				person1.xVel = 0;
			break;
		case RIGHT_ARROW:
			right = false;
			if (left)
				person1.xVel = -5;
			else
				person1.xVel = 0;
			break;
	}
}

