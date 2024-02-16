let bouton = document.getElementById('bouton');
let affiche = document.getElementById('display');
let nav = document.getElementById('menu');

bouton.addEventListener("click", () => {
  if(getComputedStyle(nav).display != "block"){      
    nav.style.display = "block";
  } else {
    nav.style.display = "none";
  }
})


let quizz = document.querySelector('.derouleQuizz');
let info = document.querySelector('.derouleInfos');

let sousQuizz = document.querySelector('.sousQuizz');
let sousInfos = document.querySelector('.sousInfos');

let flecheQuizz = document.querySelector('.flecheQuizz');
let flecheInfos = document.querySelector('.flecheInfos');

let fleche1 = document.getElementById('iconeFlecheMenu1');
let fleche2 = document.getElementById('iconeFlecheMenu');


quizz.addEventListener("click", () => {
  if(getComputedStyle(sousQuizz).display != "block") {
    
    if(fleche2.classList.contains('icone-fleche-ferme')) {
      fleche2.classList.remove('icone-fleche-ferme');
    }
      sousQuizz.style.display = "block";
      fleche2.classList.add('icone-fleche-ouvre');
      fleche2.style.animationPlayState = "running";
    // flecheQuizz.style.rotate = "90deg";
  } else {
    sousQuizz.style.display = "none";
    fleche2.classList.remove('icone-fleche-ouvre');
    fleche2.classList.add('icone-fleche-ferme');
    fleche2.style.animationPlayState = "running";
    // flecheQuizz.style.rotate = "0deg";
  }
})

info.addEventListener("click", () => {
  if(getComputedStyle(sousInfos).display != "block") {

    if(fleche1.classList.contains('icone-fleche-ferme')) {
      fleche1.classList.remove('icone-fleche-ferme');
    }

    sousInfos.style.display = "block";
    fleche1.classList.add('icone-fleche-ouvre');
    fleche1.style.animationPlayState = "running";
    // flecheInfos.style.rotate = "90deg";
  } else {
    sousInfos.style.display = "none";
    fleche1.classList.remove('icone-fleche-ouvre');
    fleche1.classList.add('icone-fleche-ferme');
    fleche1.style.animationPlayState = "running";
    // flecheInfos.style.rotate = "0deg";
  }
})


let scroll1 = document.getElementById('img-left-scroll');
let scroll2 = document.getElementById('img-right-scroll');

scroll2.addEventListener('click', () => {
  if(getComputedStyle(scroll1).display != "block") {
    scroll1.style.display = "block";
    scroll2.style.display = "none";
  }
})

scroll1.addEventListener('click', () => {
  if(getComputedStyle(scroll2).display != "block") {
    scroll2.style.display = "block";
    scroll1.style.display = "none";
  }
})