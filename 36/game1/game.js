class game {
	constructor(){
		this.canvas = null;
		this.context = null;
		this.init();
		this.loop();
		
	}
	init(){
		this.canvas = document.createElement('canvas');
		this.context = this.canvas.getContext('2d');
		this.canvas.width = GAME_WIDTH;
		this.canvas.height = GAME_HEIGHT;
		document.body.appendChild(this.canvas);
		this.car = new car(this);
		this.array = new array(this,this.car);
		this.start = new start(this);
		this.handles = new handles(this);
	}

	loop(){
		this.update();
		this.draw();
		setTimeout( () => this.loop(),10);
	}

	
	update(){
		this.context.clearRect(CAR_START_X, CAR_START_Y, 1000, 70);
		this.car.update();
		this.array.update();
		this.handles.update();
		
	}

	draw(){
		this.start.draw();
		this.array.draw();
		this.car.draw();
		this.handles.draw();
	}

}
var g = new game();