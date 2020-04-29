function Play(element){
    document.getElementById('play').style.display = 'none';
    document.getElementById('playgr').style.display = 'none';
    let Sounds = document.getElementsByTagName('ul');
   for(let i = 0; i < Sounds.length; i++){
       Sounds[i].style.display = 'none';
   }
}
function Sound(){
    var snd = new Audio(src ="audios/sound1.mp3");
    snd.play();
}
