var entities = [];
var systems = [];
var person1;
var playerSystem;
var canvas;
var mysound;
var dayImg;
var nightImg;
var x1 = 0;
var x2;
var scrollspeed = 2;


function preload() {
  soundFormats('mp3', 'ogg');
  dayImg = loadImage('Assets/DayImage.jpg');
  nightImg = loadImage('Assets/NightImage.jpg');
  mysound = loadSound('Assets/soundtrackogg.ogg');
}

function setup(){
	// canvas = new Background();
	canvas = createCanvas(xDim,yDim);
	x2 = xDim;

	person1 = new Person();
	playerSystem = new PlayerSystem(person1);

	systems.push(playerSystem);
	systems.push(new PhysicsSystem());
	systems.push(new DrawSystem());
	systems.push(new ObstacleSpawnSystem());
	systems.push(new LifeSystem());

	entities.push(person1);

	mysound.setV
	olume(.3)
 	mysound.play();
}

function draw(){
	// bg = canvas.draw();
	//background(bg);
	//fill(255);

	image(dayImg,x1,0,xDim, yDim);
	image(nightImg,x2,0,xDim,yDim);
	x1 -= scrollspeed;
	x2 -= scrollspeed;

	if (x1 < -xDim) {
		x1 = xDim;
	}
	if (x2 < -xDim){
		x2 = xDim;
	}

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


