import {ctx} from './canvas'
  

export const img = document.createElement('img'); // Create <img> element
img.src = 'Bat.png'; // Set src to filename (in /public/)'
document
  .querySelector('#assets')
  .appendChild(img); // Add image to <div id="assets">



export const image = { 
  img, // The image element itself
  ready : img.complete, // true/false (is image loaded)
  draw (x,y,w,h) { // A drawing method
    if (this.ready) { // If image is loaded, draw it...
      ctx.drawImage(this.img,x,y,w,h);
    } else { // Otherwise, draw it in a moment...
      setTimeout(
        ()=>this.draw(x,y,w,h),
        200
      );
    }
  }
}

img.addEventListener('load',()=>{
  console.log('Image is loaded!');
  image.ready=true
});
