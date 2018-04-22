var entities = [];
var systems = [];
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
	  colorMode(HSB, 360, 100, 100);
  noStroke();
  ellipseMode(RADIUS);
  frameRate(1);
	frameRate(60);

	person1 = new Person();
	playerSystem = new PlayerSystem(person1);
	systems.push(new Background(person1));
	systems.push(playerSystem);
	systems.push(new PhysicsSystem());
	systems.push(new DrawSystem());
	systems.push(new ObstacleSpawnSystem());
	systems.push(new LifeSystem());
	systems.push(new CollisionSystem());

	entities.push(person1);

	// mysound.setVolume(.3);
 //    mysound.play();
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
	textSize(48);
	textStyle(BOLD);
	fill(122, 29, 29)
	text('Game Over', xDim/2 , yDim/2);
}


