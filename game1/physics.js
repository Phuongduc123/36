function Back(){
	history.back();
 }
 var T = setInterval(move,10);
 pos = 350;
 x=1;
 function move(){
	var car = document.getElementById("car");
	var sta2 = document.getElementById("sta2");
	pos +=x;
	if (car.style.left== sta2.style.left){
			x=0;
	}
	
	
	
	car.style.left = pos + "px";
	
	

 }
 function change(){
	 document.getElementById('sta2').src = "images/tram.png";
 }