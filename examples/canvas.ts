export const canvas = document.createElement('canvas');
document.querySelector('#app').appendChild(canvas);
export const ctx = canvas.getContext('2d')
// default canvas size
setCanvasSize(600,600);

export function setCanvasSize (width : number, height : number) {
  canvas.width = height;
  canvas.height = height;
  canvas.style.width = `${width}px`
  canvas.style.width = `${height}px`
  canvas.style.border = '6px solid black';
}