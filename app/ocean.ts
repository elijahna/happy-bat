import {canvas,ctx} from './canvas';

let imageElement = document.querySelector('#ocean');
imageElement.play();
export function drawocean (x, y) {
  ctx.drawImage(imageElement, x, y,canvas. width, canvas. height);
  imageElement.play();
}