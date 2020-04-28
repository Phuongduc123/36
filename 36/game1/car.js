class car {
	constructor(game){
		this.game = game;
		this.image = null;
		this.isImageLoaded = false;
		this.start = false;

		this.x = CAR_START_X;
		this.y = CAR_START_Y;
		 this.loadImage();
	}
	loadImage(){
		this.image = new Image;
		this.image.onload = () => {
			this.isImageLoaded = true;
		}
		this.image.src = 'images/oto.png';
	}
	update(){

		if(this.start){
		
			this.x += SPEED;
		}

	}
	draw(){
		

		if( ! this.isImageLoaded){
			return;
		}
		this.game.context.drawImage(this.image,this.x,this.y);
	}
}