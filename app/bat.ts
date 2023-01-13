import { ctx } from './canvas';
import { addAnimation, pause, resume } from './animation';

import { triangle, t, r, i, a } from './background';

export const img = document.createElement('img'); // Create <img> element
img.src = 'Bat.png'; // Set src to filename (in /public/)
document
  .querySelector('#assets')
  .appendChild(img); // Add image to <div id="assets">



// Create an object for managing our image...
export const bat = {
  img, // The image element itself
  ready: img.complete, // true/false (is image loaded already?)
  frameWidth: 32,
  frameHeight: 32,
  totalFrames: 7,
  frame: 0,
  x: 8,
  y: 200,
  fallingSpeed: 0,
  speed : 120,
  score : 0,
  stop: false,
  detectCollision() {
    // this.x is left side, this.y is top
    // Bat nose is around 55 over, 35 down
    let triangles = [triangle, t, r, i, a]
    // for every triangle in our list, check for collision
    triangles.forEach(
      (triangle) => {
        if (triangle.detectCollision(this.x + 55, this.y + 35)) {
          // If we do collide...
          // move to top for now...
          //this.y = 0;
          // pause the gmae
          pause();

          // Later make this freeze this canvas.
        }
      }
    )

    // if you want to check RIGHT side, use...
    // triangle.detectCollision(this.x+90,this.y)
  },
  update(elapsed) {
    this.score += .1
    this.detectCollision();
    this.y += this.fallingSpeed * elapsed / 1000;
    if (this.y < 0) {
      // when we hit the top
      this.y = 0;
      this.fallingSpeed = 0;
    }
    if (this.y > 400) {
      // when we hit the bottom
      this.fallingSpeed = 0;
    } else {
      // gravity!
      if (this.y >= 350) { this.y = 350; this.fallingSpeed = 0 }
      else {

        this.fallingSpeed += 150 * elapsed / 1000;
      }

    }
  },
  draw() {
    // If the image isn't loaded, wait...
    if (!this.ready) {
      setTimeout(
        () => this.draw(),
        100
      )
      console.log('Warning: Image not yet ready...', this.img);
      return
    }
    // Make frame number less than # of frames (i.e. if we ask
    // for frame 12 but have only 8 frames, we'll get frame 4)
    this.frame = this.frame % this.totalFrames;
    ctx.drawImage(
      this.img, // image Element
      0, // Source X
      this.frame * this.frameHeight, // Source Y
      this.frameWidth, // Source width
      this.frameHeight, // Source Height
      this.x, // Target X
      this.y, // Target Y
      90, // Target width
      // width size
      90, // Target Height
      //height size
    );
    // debug line
    //ctx.strokeRect(
    //  this.x, this.y + 35, 55, 2
    //)// shows bat hitbox
    ctx.font = '18pt Futura'
    ctx.fillText(
      `score ${this.score.toFixed(0)}`,
      10, 40
      
    )
  }
}

img.addEventListener('load', () => {
  console.log('Image is loaded!');
  bat.ready = true
});

addAnimation(bat);


ctx.moveTo(2, 429);
ctx.lineTo(79, 339);
ctx.lineTo(114, 428);
ctx.lineTo(2, 429);
ctx.stroke();