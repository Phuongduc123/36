function Back() {
    history.back();
}
var T = setInterval(move, 10);
pos = 200;
x = 1;
pos_ball = 460;
x_ball = 4;
move_ball3 = false;
move_ball2 = false;
move_ball1 = false;
dem = 1;

function move() {
    var car = document.getElementById("car");
    if (pos >= 1100) {
        pos = 200;
        for (var i = 1; i <= 5; i++) {
            var text = "box" + parseInt(i, 10);
            var canvas1 = document.getElementById(text);
            ctx1 = canvas1.getContext('2d');
            ctx1.clearRect(0, 0, 40, 50);

        }
        dem -= 1;
        if (dem == 3) {
            move_ball3 = true;
            pos_ball = 508
        }
        if (dem == 2) {
            move_ball2 = true;
            pos_ball = 484
        }
        if (dem == 1) {
            move_ball1 = true;
            pos_ball = 460;
        }
        console.log(pos_ball)

    }

    if (pos >= 950) x = 1
    else
    if ((pos - 300) % 130 != 0) {
        x = 1;
    } else {
        x = 0;
    }
    document.addEventListener('keydown', (event) => {
        var text = "box" + parseInt(1 + (pos - 300) / 130, 10);
        var canvas1 = document.getElementById(text);
        ctx1 = canvas1.getContext('2d');
        if ((pos - 300) % 130 == 0) {
            ctx1.clearRect(0, 0, 40, 50);
        }
        var j = event.keyCode - 48;
        if (j == (pos - 300) / 130 + 1) {
            x = 1;
            pos += x;
        }
        ctx1.fillStyle = "#FF0000";
        ctx1.font = "30px Arial";
        if (j >= 0 && j <= 9)
            ctx1.fillText(j, 10, 35);
    });

    pos += x;
    car.style.left = pos + "px";

    if (dem != 0)
        var text_ball = "ball" + dem;

    var ball_stop = 900 - 3 - 24 * (3 - dem);
    console.log(text_ball);
    var ball = document.getElementById(text_ball);
    console.log("move_ball", move_ball1, move_ball2, move_ball3);
    if (move_ball3 == true || move_ball1 == true || move_ball2 == true && pos_ball <= ball_stop) {
        pos_ball += x_ball;
        ball.style.left = pos_ball + "px";
        console.log(ball.style.left);
        if (pos_ball == ball_stop) {
            move_ball3 = false;
            move_ball2 = false;
            move_ball1 = false;
        }
    }
    console.log("pos_ball", pos_ball, "ball_stop", ball_stop)

}

function change() {
    document.getElementById('sta2').src = "images/tram.png";
    document.getElementById('sta1').src = "images/tram.png";
    document.getElementById('sta3').src = "images/tram.png";
    document.getElementById('sta4').src = "images/tram.png";
    document.getElementById('sta5').src = "images/tram.png";

}