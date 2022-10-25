import {ctx, canvas} from './canvas';
import {drawTrident} from './trident';

import {drawocean} from './ocean';

let x = 10;
let y = 10;
let colors= ["green", "red", "orange", "yellow", "purple", "pink",]
let colorIndex = 0 ;

export function animate () {
  // Clear
  ctx.clearRect(0,0,canvas.width,canvas.height);
  // Draw
  drawocean(0,0)
  drawTrident(x,y)
  //Update
  x += 1;
  y += 1;
  // run ourselves again after 1 "tick"
  // (about 1/60th of a second)
  window.requestAnimationFrame(animate);
}

function updatePosition () {
  x = x + 1;
  y = y - 1;
  changeColor();
}
//function updatePosition () {
  //x = x + 1;
  //y = y - 1;
//}

function changeColor () {
  colorIndex += 1;
  canvas.style.border = colors[colorIndex % colors.length]
}