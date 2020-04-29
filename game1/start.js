class start{
	constructor(game){
		this.game = game;
		this.image = null;
		 this.loadImage();
	}
	loadImage(){
		this.image = new Image;
		this.image.src = 'images/start.png';
	}
	update(){
		
	}

	draw(){

		this.game.context.beginPath();
		this.game.strokeStyle = "black";
		this.game.context.moveTo(START_X, START_Y);
		this.game.context.lineTo(START_X + 1000, START_Y);
		this.game.context.stroke();
		this.game.context.drawImage(this.image,START_X,START_Y-44);
	}

}

