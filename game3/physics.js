
check = [];
for(let i = 0; i < 5; i++){
   check[i] = false;
}

var level = 0; 


var t = setInterval(move, 3);
var T = setInterval(note,3);
var B = setInterval(moveBall,3);
var replay = setInterval(replay,3);

var pos0 = 275;
var pos1 = 0;
function move() {
   var k = 0;
   for(let i = 0; i < 5; i++){
      if(check[i]==true) k++;
   }
   if(k==5 ){
      document.getElementById("note1").style.display = "none";
      document.getElementById("note2").style.display = "none";
      document.getElementById("note3").style.display = "none";
      document.getElementById("note4").style.display = "none";
      document.getElementById("note5").style.display = "none";
   var box = document.getElementById("box0");

  
    pos0 -= 1;
    box.style.left = pos0 + "px";
    var box1 = document.getElementById("box1");
    var box2 = document.getElementById("box2");
    var box3 = document.getElementById("box3");
    var box4 = document.getElementById("box4");
    var box5 = document.getElementById("box5");
    console.log(box5.style.left)
    pos1 -= 1;
    box1.style.left = pos1+"px";
    box2.style.left = pos1+"px";
    box3.style.left = pos1+"px";
    box4.style.left = pos1+"px";
    box5.style.left = pos1+"px";


   }


}
var posB3 = 508;
var posB2 = 484;
var posB1 = 460;
function moveBall(){
   var ball1 = document.getElementById("ball1");
   var ball2 = document.getElementById("ball2");
   var ball3 = document.getElementById("ball3");
   if(level == 1 && posB3 <=897){
      posB3 +=5;
      ball3.style.left = posB3 + "px";
      
   }
   if(level == 2 && posB2 <=873){
      posB2 +=5;
      ball2.style.left = posB2 + "px";
      
   }
   if(level == 3 && posB1 <=849){
      posB1 +=5;
      ball1.style.left = posB1 + "px";
      
   }
   
}
function note(){
   if(check[0] ==true && check[1]==false){
      
      document.getElementById("note2").style.display = "block";
   }
   if(check[1] ==true && check[2]==false){
      
      document.getElementById("note3").style.display = "block";
   }
   if(check[2] ==true && check[3]==false){
      
      document.getElementById("note4").style.display = "block";
   }
   if(check[3] ==true && check[4]==false){
      
      document.getElementById("note5").style.display = "block";
   }
   
}

function replay(){

      if(box5.style.left == "-850px"){
         box5.style.display = "none";
      }
      
     
      if(box4.style.left == "-725px"){
         box4.style.display = "none";
      }
      
     
      if(box3.style.left == "-600px"){
         box3.style.display = "none";
      }
     
     
      if(box2.style.left == "-475px"){
         box2.style.display = "none";
      }
      
     
      if(box1.style.left == "-350px"){
         box1.style.display = "none";
      }
     
      if(box0.style.left == "50px"){
         box0.style.display = "none";
      }

      
     
   
    if(box5.style.left == "-850px" && level < 3){
      for(let i =0; i <5 ; i++) {check[i] = false;}
      if(level <2){
       box0.style.top = "440px";
       box0.style.left = "275px";
      }
       level ++;
      if(level==1){
         
         box1.style.top = "-200px";   
         box1.style.left = "400px";
         box2.style.top = "-200px";   
         box2.style.left = "-100px";
         box3.style.top = "-280px";   
         box3.style.left = "-50px";
         box4.style.top = "-280px";   
         box4.style.left = "150px";
         box5.style.top = "-300px";   
         box5.style.left = "-650px";
         //level ++;
         pos0 = 275;
         pos1 = 0;
         box0.style.display = "block";
         box1.style.display = "block";
         box2.style.display = "block";
         box3.style.display = "block";
         box4.style.display = "block";
         box5.style.display = "block";
      }
      
      if(level==2){
         //console.log("ccc")
         document.getElementById('box1').style.top = "-200px";   
         document.getElementById('box1').style.left = "230px";
         document.getElementById('box2').style.top = "-270px";   
         document.getElementById('box2').style.left = "240px";
         document.getElementById('box3').style.top = "-250px";   
         document.getElementById('box3').style.left = "-230px";
         document.getElementById('box4').style.top = "-200px";   
         document.getElementById('box4').style.left = "-500px";
         document.getElementById('box5').style.top = "-180px";   
         document.getElementById('box5').style.left = "0px";
         //level ++;
         pos0 = 275;
         pos1 = 0;
         box0.style.display = "block";
         box1.style.display = "block";
         box2.style.display = "block";
         box3.style.display = "block";
         box4.style.display = "block";
         box5.style.display = "block";
      }
    }
}
function Back(){
   history.back();
}
function playGame(){
   document.getElementById('play').style.display = "none";
   document.getElementById('playgr').style.display = "none";
}
function Sound(){
   var snd = new Audio(src ="audios/sound.mp3");
   snd.play();
}

function dragstartHandler(evt) {
    evt.dataTransfer.setData("MyDraggedElementId", evt.target.id);
  }
   
 
  function dragHandler(evt,element) {
    console.log(evt.x,evt.y)
    

  }
   
   
 
  function dragoverHandler(evt) {
      evt.preventDefault(); // Important!!
  }
   
  function dropHandler(evt,element) {
     evt.preventDefault(); // Important!!
   //console.log(element.id)
     var elementId = evt.dataTransfer.getData("MyDraggedElementId");
     //console.log(elementId)
     console.log(document.getElementById(elementId).style.left);
     if(elementId == 'box1' && element.id == 'drop1'){
      document.getElementById(elementId).style.left = "0px"
      document.getElementById(elementId).style.top = "0px"
     evt.target.appendChild(document.getElementById(elementId));
     console.log(document.getElementById(elementId).style.left);
     
     check[0]=true;
     }
     if(elementId == 'box2' && element.id == 'drop2'&&check[0]==true){
      document.getElementById(elementId).style.left = "0px"
      document.getElementById(elementId).style.top = "0px"
      evt.target.appendChild(document.getElementById(elementId));
     
      check[1]=true;
     }
     if(elementId == 'box3' && element.id == 'drop3'&&check[1]==true){
      document.getElementById(elementId).style.left = "0px"
      document.getElementById(elementId).style.top = "0px"
      evt.target.appendChild(document.getElementById(elementId));
      
      
      check[2]=true;
     }
     if(elementId == 'box4' && element.id == 'drop4'&&check[2]==true){
      document.getElementById(elementId).style.left = "0px"
      document.getElementById(elementId).style.top = "0px"
      evt.target.appendChild(document.getElementById(elementId));
      check[3]=true;
     }
     if(elementId == 'box5' && element.id == 'drop5' &&check[3]==true){
      document.getElementById(elementId).style.left = "0px"
      document.getElementById(elementId).style.top = "0px"
      evt.target.appendChild(document.getElementById(elementId));
      check[4]=true;

     }
   
     
  }
   
 