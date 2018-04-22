class Audio {

	preload() {
		soundFormats('mp3', 'ogg');
		this.sound = loadSound('Assets/soundtrack.mp3')
	}

	start() {
		this.sound.setVolume(1);
		this.sound.play();
	}
}