let cells = [];
let WIDTH = 1200;
let HEIGHT = 1600;
let y = 0;
let w = 4;

let rule = [0,1,0,1,1,0,1,0];

function setup() {
  createCanvas(WIDTH, HEIGHT);
  let total = WIDTH/w;
  for (let i=0; i<total; i++){
    cells[i] = 0
  }
  cells[floor(total/2)] = 1
}

function draw() {
  for (let i=0; i<cells.length; i++){
    let x = i * w;
    fill(255 - cells[i]*255);
    square(x,y,w);
  }
  y+=w
  let new_gen = [];
  for (let i=0; i<cells.length; i++){
    let left = cells[(i - 1 + cells.length) % cells.length];
    let right = cells[(i + 1) % cells.length];
    new_gen[i]=(calc_next(cells[i],left,right));
  }
  
  cells = new_gen;
}

function calc_next(cell,left,right){
  let num = "" + left + cell + right;
  let dec = 7 - parseInt(num, 2);
  return rule[dec]
}