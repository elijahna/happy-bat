import { canvas, ctx } from './canvas'
import { bat } from './bat'

import { addAnimation } from './animation'

let worldend = -500

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
    this.x -= bat.speed * ms / 1000;
    // loop...
    if (this.x < worldend) {
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
    this.x -= bat.speed * ms / 1000;
    // loop...
    if (this.x < worldend) {
      // set us to something on the right
      this.x = 756;
    }
  },
  detectCollision(x, y) { 
    if (checkRectangle(
      this.x + 125, // rx (smaller = left)
      0, // y (top)
      20, // rectangle width 
      // increase width going right
      // shrink size going left
      242, // height,
      x,y
    )) {
      return true;
    }
  }
}


function checkRectangle (
  rx : number, ry : number, rw : number, rh : number, 
  x : number, y : number
) {
  //debug rectangle //shows hitboxes
  // ctx.strokeRect(rx,ry,
   //             rw,rh);
  if (x > rx ) {
      // If we are right of the rectangle start
      if (x < rx + rw) {
        // if we are left of the pointy part
        if (y < ry+rh) {
          // if we're under the point
          if (y > ry) {
            return true;
          }
        }
      }
    }
    return false;
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
    this.x -= bat.speed * ms / 1000;
    if (this.x<worldend) {
      this.x = 756;
    }    
  },
  detectCollision(x, y) {
    if (checkRectangle(0,0,500,161,x,y)) {
      return true
    }
    if (checkRectangle(this.x+180, 0,42,329,x,y)) {
      return true
    }
    if (checkRectangle(this.x+140, 0,40,279,x,y)) {
      return true
    }
    if (checkRectangle(this.x+100, 0,40,249,x,y)) {
      return true
    }
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
    this.x -= bat.speed * ms / 1000;
    if (this.x<worldend)
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
    this.x -= bat.speed * ms / 1000;
    if (this.x<worldend) {
      this.x = 756;
      bat.speed += 20
    }
    return true;
    return false;
    
  },
  detectCollision(x, y) {
   /*  ctx.strokeRect(this.x+250,311,
                461 - 50,100)
    ctx.strokeRect(this.x+150,371,
                461 - 50,100)*/
    if (checkRectangle(this.x+350, // rx
                       331, // ry
                       100  , // width
                       100, // height
                       x,y)) {
      return true
    }
    if (checkRectangle(this.x+250, // rx
                       361, // ry
                       200  , // width
                       100, // height
                       x,y)) {
      return true
    }
    if (checkRectangle(this.x+140, // x
                       380, // y
                       40, // w
                       279, // h
                       x,y)) {
     return true
   }
  }
}



addAnimation(triangle)
addAnimation(t)
addAnimation(r)
addAnimation(a)
//  addAnimation(i)
//addAnimation(i)


