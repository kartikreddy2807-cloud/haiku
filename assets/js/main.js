// main.js

let grid = document.querySelector('.grid-container');
let divs = document.querySelectorAll('.grid-container div');

function randomize() {
    console.log(divs.length, 'randomize!');

    // this code affects the whole grid (rotate the container)
    if (grid) {
        grid.style.transform = `rotate(${Math.random() * 360}deg)`;
    }

    //just affects the grid divs
   divs.forEach(function (div) {
  let scale = randomNumber(.5, 1.2);
  let translateX = randomNumber(0, 50);
  let translateY = randomNumber(0, 20);
  let rotate = randomNumber(0, 360);

  if (Math.random() > .5) {
    scale = 1;
    translateX = randomNumber(0, 80);
    translateY = randomNumber(0, 80);
  }

    div.style.transform= `scale(${scale}) translate(${translateX}%, ${translateY}%) rotate(${rotate}deg)`;

});

}
document.addEventListener('click', randomize);

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
