$(document).ready(function() {
  let x = 'X',
      o = 'O',
      turns = 0;

  

});

let x = document.getElementById('X'),
    o = document.getElementById('O');
  x.addEventListener('click', () => { player1.marking = 'X'; player2.marking = 'O'});
  o.addEventListener('click', () => { player1.marking = 'O'; player2.marking = 'X'});

let turns = 1;

const Player = class {
  constructor(type, marking) {
    this.type = type;
    this.marking = marking;
  }

  nextMove() {

  }

  chooseMarking() {
    
  }
}

let player1 = new Player('human', 'X'),
    player2 = new Player('cpu', 'O');

let tds = Array.from(document.querySelectorAll('td'));
for(const td of tds) {
  td.addEventListener('click', function() {
    if(td.textContent === '' && turns % 2 === 1) {
      td.textContent = player1.marking;
      turns++;
      AIMove(); }
   
  });
}

function AIMove() {
  let i = Math.round(Math.random() * 10);
  if(tds[i].textContent !== undefined && tds[i].textContent === '' || tds[i].textContent != player1.marking) {
    tds[i].textContent = player2.marking;
    turns++;
  }
}

function checkSpots() {
  
}


//Game Winning Moves
/*
1. .one .two .three
2. .one .four .seven
3. .one .five .nine

4. .two .five .eight

5. .three .two .one
6. 
2. .four .five .six
3. .seven .eight .nine
4. 

*/

