function Play(element){
    document.getElementById('play').style.display = 'none';
    document.getElementById('playgr').style.display = 'none';
    let Sounds = document.getElementsByTagName('ul');
   for(let i = 0; i < Sounds.length; i++){
       Sounds[i].style.display = 'none';
   }
}
function Sound(){
    var snd = new Audio(src = 'https://translate.google.com/translate_tts?ie=UTF-8&q=write%20down%20the%20bus%20stop%20number&tl=en&total=1&idx=0&textlen=30&tk=941807.583134&client=webapp&prev=input');
    snd.play();
}
