
export let canvas = document.createElement('canvas')
export let ctx = canvas.getContext('2d');
// dark blue background
canvas.style.backgroundColor = '#8cd0ed';
canvas.style.border = '8px solid blue'
canvas.style.transition = "all 1000ms"
document.querySelector('#app')
  .appendChild(canvas);

canvas.width = 500;
canvas.height = 800;

canvas.width = window.innerWidth * 0.8;
canvas.height = window.innerHeight * 0.8;

function resizeCanvas () {
  canvas.width = window.innerWidth * 0.8;
  canvas.height = window.innerHeight * 0.8;
}
window.addEventListener(
  'resize',
  resizeCanvas
);

resizeCanvas()

