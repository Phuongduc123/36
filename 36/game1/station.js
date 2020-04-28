class station {
	constructor(game,x,y){
		this.game = game;
		this.image = null;
		
		this.x = x;
		this.y = y;

		 this.loadImage();
	}
	loadImage(){
		this.image = new Image;

		this.image.src = 'images/tramblue.png';
	}
	update(){
		if(this.x == this.game.car.x ){
			SPEED = 0;
		}

	}
	draw(){
		
		this.game.context.drawImage(this.image,this.x,this.y);
	}
}