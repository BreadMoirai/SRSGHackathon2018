var entities = [];
var systems = [];
var life;
var canvas;
var person1;
var playerSystem;
var mysound;
var bg;


function preload() {
  soundFormats('mp3', 'ogg');
  // mysound = loadSound('Assets/soundtrackogg.ogg');
}

function setup(){
	canvas = createCanvas(xDim,yDim);

	person1 = new Person();
	playerSystem = new PlayerSystem(person1);
	systems.push(new Background(person1));
	systems.push(playerSystem);
	systems.push(new PhysicsSystem());
	systems.push(new DrawSystem());
	systems.push(new ObstacleSpawnSystem());
	life = new LifeSystem();
	systems.push(life);
	systems.push(new CollisionSystem());

	entities.push(person1);

	// mysound.setVolume(.3);
 	// mysound.play();
}

function draw(){

	let deltaTime = window.performance.now() - canvas._pInst._lastFrameTime;
	//update loop
	for (var i = 0; i < systems.length; i++) {
		systems[i].process(entities, deltaTime)
	}
} 

function keyPressed(){
	playerSystem.keyPressed(keyCode);
}

function keyReleased(){
	playerSystem.keyReleased(keyCode);
}

var gameEnd = function gameOver()
{

	background('#000000');
	fill(10, 145, 155);
	textSize(48);
	textStyle(BOLD);
	stroke(5);
	text('Game Over.\nPress F5 to reload\nSCORE: ' + life.score, xDim/2 - 100 , yDim/2);
	noLoop();
}


