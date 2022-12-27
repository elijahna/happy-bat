import { ctx, canvas } from './canvas';

//let ctx = canvas.getContext('2d');

let r = 0;

export function drawTrident(x, y): void {
  ctx.resetTransform();
  ctx.translate(300, 350);
  // hinkle's circle for reference
  // should be the CENTER of the trident
  //ctx.arc(0, 0, 20, 0, Math.PI * 2);
  ctx.fill();
  ctx.rotate(r);
  r += 0.09

  // Your trident code
  ctx.strokeStyle = 'gold';
  ctx.stroke();
  let movex = -220;
  let movey = -100
  let left = 150 + movex;
  let right = left + 150;
  let handle = 225 + movex;
  ctx.moveTo(left, 100 + movey)
  ctx.lineTo(200 + movex, 125 + movey)
  ctx.stroke();
  ctx.moveTo(right, 100 + movey)
  ctx.lineTo(250 + movex, 125 + movey)
  ctx.stroke();
  ctx.moveTo(200 + movex, 50 + movey)
  ctx.lineTo(left, 100 + movey)
  ctx.stroke();
  ctx.moveTo(250 + movex, 50 + movey)
  ctx.lineTo(right, 100 + movey)
  ctx.stroke();
  ctx.moveTo(250 + movex, 125 + movey)
  ctx.lineTo(200 + movex, 125 + movey)
  ctx.stroke();
  ctx.moveTo(handle, 125 + movey)
  ctx.lineTo(handle, 275 + movey)
  ctx.stroke();
  ctx.moveTo(handle, 25 + movey)
  ctx.lineTo(handle, 100 + movey)
  ctx.stroke();
  ctx.moveTo(handle, 100 + movey)
  ctx.lineTo(200 + movex, 125 + movey)
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(handle, 100 + movey)
  ctx.lineTo(handle, 100 + movey)
  ctx.closePath();
  ctx.stroke();
  ctx.moveTo(handle, 100 + movey)
  ctx.lineTo(250 + movex, 125 + movey)
  ctx.stroke();
  // put the canvas back to normal
  ctx.resetTransform();
}
