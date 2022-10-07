import {ctx, canvas} from './canvas';

let ctx = canvas.getContext('2d');
let left=150;
let right = left + 150;
let handle= 225;


export function drawTrident(x,y) {
    ctx.strokeStyle = 'gold';
ctx.stroke();
  ctx.moveTo(left,100)
  ctx.lineTo(200,125)
  ctx.stroke();
  ctx.moveTo(right,100)
  ctx.lineTo(250,125)
  ctx.stroke();
  ctx.moveTo(200,50)
  ctx.lineTo(left,100)
  ctx.stroke();
  ctx.moveTo(250,50)
  ctx.lineTo(right,100)
  ctx.stroke();
  ctx.moveTo(250,125)
  ctx.lineTo(200,125)
  ctx.stroke();
  ctx.moveTo(handle,125)
  ctx.lineTo(handle,275)
  ctx.stroke();
  ctx.moveTo(handle,25)
  ctx.lineTo(handle,100)
  ctx.stroke();
  ctx.moveTo(handle,100)
  ctx.lineTo(200,125)
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(handle,100)
  ctx.lineTo(handle,100)
  ctx.closePath();
  ctx.stroke();
  ctx.moveTo(handle,100)
  ctx.lineTo(250,125)
  ctx.stroke();
}
