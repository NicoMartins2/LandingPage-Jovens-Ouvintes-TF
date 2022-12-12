const videoHome = document.querySelector("#backgroundVideo_home");

function onLoadVideo_home(){
    videoHome.play();
}
// Organizing background video

const title = document.querySelector("#title_principal");
const subtitle = document.querySelector("#subtitle");
let text = "Frases transformam vidas";
let text2 = "Um projeto social por Jovens Ouvintes - Tech Ninjas";
let arrayTitle = text.split("");
let arraySubtitle = text2.split("");
let timer;

function textDigit(){
    if(arrayTitle.length > 0){
        title.innerHTML += arrayTitle.shift();
    }else{
        clearTimeout(timer);
    }

    loopTimer = setTimeout("textDigit()", 250);
}

textDigit();
