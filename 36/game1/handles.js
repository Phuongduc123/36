class handles {
    constructor(game) {
        this.game = game;
        this.checks = [];
        this.listenKeyBoard();
        this.checked();
        this.num = -1;
    }
    checked() {
        for (let i = 0; i < 5; i++) {
            this.checks[i] = 0;
        }
    }
    listenKeyBoard() {
        document.addEventListener('keydown', (event) => {
            //console.log(event.keyCode);
            //console.log(this.game.car.x);
            //console.log(this.num);
            var j = event.keyCode - 48;
            this.num = j;
            if (j == 32 - 48) this.game.car.start = true;
            else
            if ((j < 6) && (this.game.car.x == this.game.array.stations[j - 1].x)) {
                console.log(this.game.car.x);
                this.checks[j - 1] = 1;
                SPEED = 1;
            } else {
                this.checks[(this.game.car.x - 50) / 100 - 1] = -1;

            }
        });
    }
    update() {
        if (this.game.car.x == this.game.array.stations[5].x) {
            //this.game.canvas.style.display = 'none';
            console.log('asc');
        }
        //this.game.canvas.style.display = 'block';
    }
    draw() {
        for (let i = 0; i < 5; i++) {
            if (this.checks[i] == 1) {
                this.game.context.font = "40px Georgia";
                this.game.context.fillText(i + 1, this.game.array.stations[i].x + 20, this.game.array.stations[i].y + 40);
            } else
            if (this.checks[i] == -1) {
                this.game.context.font = "40px Georgia";
                this.game.context.fillText(this.num, this.game.array.stations[i].x + 20, this.game.array.stations[i].y + 40);
            }
        }

    }

}