class station {
	constructor(game,x,y){
		this.game = game;
		this.image = null;
		this.image1 = null
		this.x = x;
		this.y = y;
		this.loadImage();
	}
	loadImage(){
		this.image = new Image;
		this.image1 = new Image;

		this.image.src = 'images/tramblue.png';
		this.image1.src = 'images/request.png';
	}
	update(){
		if(this.x == this.game.car.x ){
			SPEED = 0;
		}

	}
	draw(){
		
		this.game.context.drawImage(this.image,this.x,this.y);
		if( this.x == this.game.car.x && this.x < 650){
			this.game.context.drawImage(this.image1,this.x-85,this.y-108);
			
		}
	}
	drawrequest(){
		
	}
}