let order =[];
let clickedOrder =[];
let score = 0;

const blue = document.querySelector(".blue");
const yellow = document.querySelector(".yellow")
const green = document.querySelector(".green")
const red = document.querySelector(".red")

let shuffleOrder = () => {
  let colorOrder = Math.floor(Math.random()*4)
  order[order.length] = colorOrder
  clickedOrder=[];

  for (let i in order) {
    let elementColor = createColorElement(order[i]);
    lightColor(elementColor,Number(i)+1);
  }
}
// acende e apaga as luzes 

let lightColor = (element, number) => {
  number = number *500;
  setTimeout(()=>{
    element.classList.add('selected');
  }, number -250);
  setTimeout(()=>{
    element.classList.remove('selected')
  },number);

}

// checa os acertos

let checkOrder =()=>{
  for(let i in clickedOrder){
    if(clickedOrder != order[i]){
      gameOver()
      break;
    }
  }
  if(clickedOrder.length == order.length){
    alert(`Pontuação: ${score}\nVocê acertou! Iniciando prócimo nível`);
    nextLevel();
  }
}

//função para o clique do player 
let click = (color) => {
  clickedOrder[clickedOrder.length] = color;
  createColorElement(color).classList.add('selected');

  setTimeout(() => {
      createColorElement(color).classList.remove('selected');
      checkOrder();
  },250);
}

//função que retorna a cor
let createColorElement = (color) => {
  if(color == 0) {
      return blue;
  } else if(color == 1) {
      return yellow;
  } else if (color == 2) {
      return green;
  } else if (color == 3) {
      return red;
  }
}

//próximo nível 

let nextLevel = () => {
  score++;
  shuffleOrder();
}

//funcao para game over
let gameOver = () => {
  alert(`Pontuação: ${score}!\nVocê perdeu o jogo!\nClique em OK para iniciar um novo jogo`);
  order = [];
  clickedOrder = [];

  playGame();
}

//funcao de inicio do jogo
let playGame = () => {
  alert('Bem vindo ao Gênesis! Iniciando novo jogo!');
  score = 0;

  nextLevel();
}

//eventos de clique para as cores
blue.onclick = () => click(0);
yellow.onclick = () => click(1);
green.onclick = () => click(2);
red.onclick = () => click(3);


//inicio do jogo
playGame();