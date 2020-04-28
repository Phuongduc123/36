class array{
	constructor(game){
		this.game = game;
		this.stations = [];
		this.x = STATION_START_X;
		this.y = STATION_START_Y;
		this.createStations();
	}
	update() {
		for(let i = 0; i <5; i++){
			if(this.game.car.x == this.stations[i].x){
				SPEED = 0;
			}
		}
	}

	createStations() {
		let a = 0;
		for(let i = 0; i < 8; i++){
			this.x = STATION_START_X + a;
			this.y = STATION_START_Y;
			let newStation = new station(this.game,this.x,this.y);
			a+=100;
			this.stations.push(newStation);
		}
		this.stations[4].image.src = 'images/tram.png';
	}

	draw() {
		this.stations.forEach((station) => {
			station.draw();
		});
	}
}