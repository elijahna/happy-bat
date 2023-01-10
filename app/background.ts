import { canvas, ctx } from './canvas'
import { bat } from './bat'

import { addAnimation } from './animation'


canvas.style.backgroundImage = 'url("cave2.png")'
canvas.style.backgroundSize = '700px 500px'
// only first one is right so far for collision
export let triangle = {
  x: 202,
  draw() {
    ctx.beginPath();
    ctx.moveTo(this.x, 429);
    ctx.lineTo(this.x + 77, 339);
    ctx.lineTo(this.x + 112, 428);
    ctx.lineTo(this.x, 429);
    ctx.stroke();
    //ctx.fillStyle = "#90E4C1";
    ctx.fillStyle = 'orange'; // temporary code
    ctx.fill();
  },
  update(ms) {
    this.x -= 70 * ms / 1000;
    // loop...
    if (this.x < -200) {
      // set us to something on the right
      this.x = 756;
    }
  },
  detectCollision(x, y) {
    if (x > this.x + 50) {
      // If we are right of the triangle start
      if (x < this.x + 77) {
        // if we are left of the pointy part
        if (y > 339) {
          // if we're under the point
          return true;
        }
      }
    }
    return false;
  }
}



export let t = {
  x: 99,
  draw() {
    ctx.beginPath();
    ctx.moveTo(this.x, 136)
    ctx.lineTo(this.x + 126, 242)
    ctx.lineTo(this.x + 152, 140)
    ctx.lineTo(this, 136)
    ctx.stroke();
    ctx.fillStyle = "#90E4C1";
    ctx.fill();

  },
  update(ms) {
    this.x -= 70 * ms / 1000;
    // loop...
    if (this.x < -200) {
      // set us to something on the right
      this.x = 756;
    }
  },
  detectCollision(x, y) {
    if (x > this.x + 50) {
      // If we are right of the triangle start
      if (x < this.x + 126) {
        // if we are left of the pointy part
        if (y < 242) {
          // if we're under the point
          return true;
        }
      }
    }
    return false;
  }
}



export let r = {
  x: 300,  
  draw() {
    ctx.beginPath();
    ctx.moveTo(this.x, 138)
    ctx.lineTo(this.x + 202, 329)
    ctx.lineTo(this.x + 126, 146)
    ctx.lineTo(this.x, 138)
    ctx.fillStyle = "#90E4C1";
    ctx.fill();
  },


  update(ms) {
    this.x -= 70 * ms / 1000;
    if (this.x<-200) {
      this.x = 756;
    }    
  },
  detectCollision(x, y) {
    if (x > this.x + 50) {
      // If we are right of the triangle start
      if (x < this.x + 202) {
        // if we are left of the pointy part
        if (y < 329) {
          // if we're under the point
          return true;
        }
      }
    }
    return false;
  }
}


export let i = {
  x: 269,
  draw() {
    ctx.beginPath();
    ctx.moveTo(269, 428)
    ctx.lineTo(295, 310)
    ctx.lineTo(275, 336)
    ctx.lineTo(281, 429)
    ctx.stroke()
    ctx.fillStyle = "#90E4C1";
    ctx.fill();

  },
  update(ms) {
    this.x -= 70 * ms / 1000;
    if (this.x<-200)
      this.x = 756;
    return true;
    return false;
  
  },
  detectCollision(x, y) {
    if (x > this.x + 50) {
      // If we are right of the triangle start
      if (x < this.x + 77) {
        // if we are left of the pointy part
        if (y > 339) {
          // if we're under the point
          return true;
        }
      }
    }
    return false;
  }
}

export let a = {
  x: 520 ,  
  draw() {
    ctx.beginPath();
    ctx.moveTo(this.x, 438)
    ctx.lineTo(this.x + 461, 311)
    ctx.lineTo(this.x + 496, 437)
    ctx.lineTo(this.x, 438)
    ctx.stroke()
    ctx.fillStyle = "#90E4C1";
    ctx.fill();
  },


  update(ms) {
    this.x -= 70 * ms / 1000;
    if (this.x<-200)
      this.x = 756;
    return true;
    return false;
    
  },
  detectCollision(x, y) {
    if (x > this.x + 50) {
      // If we are right of the triangle start
      if (x < this.x + 461) {
        // if we are left of the pointy part
        if (y > 311) {
          // if we're under the point
          return true;
        }
      }
    }
    return false;
  }
}



addAnimation(triangle)
addAnimation(t)
addAnimation(r)
addAnimation(a)
//addAnimation(i)
//addAnimation(i)


