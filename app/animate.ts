import {ctx, canvas} from './canvas';
import {drawTrident} from './trident';

let x = 10;
let y = 10;

function animate(...args: [ts: any] | [ts: any]): void {
    // erase the whole screen
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // draw the balloon
    drawTrident(x, y);
    // Add one to x and y...
    updatePosition();
    // run ourselves again after 1 "tick"
    // (about 1/60th of a second)
    window.requestAnimationFrame(animate);
}

function updatePosition () {
  x = x + 1;
  y = y - 1;
}