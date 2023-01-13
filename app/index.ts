import "./canvas";
//import {bat} from "./bat";
//import './sprite';
import {ctx, canvas} from './canvas';
import {bat} from './bat';
import {startAnimation, paused, resume, pause} from './animation';
//import {bat} from './sprite';
//bat.draw(200,200,200,200)
import "./background"

// update the bat sprite
setInterval(
  ()=>{
    // If the game is not paused
    if (!paused) {
      // show next frame
      bat.frame += 1;
    }
  },
  1000/6 // 6 frames per second...
)

// Gift from Hinkle - double click to pause or resume
canvas.addEventListener(
  "dblclick",
  function () {
    if (paused) {
      resume()
    } else {
      pause();
    }
  }
)

canvas.addEventListener(
  "click",
  function () {
    if (!paused) {bat.y -= 12}
    //if (paused) {
     // bat.y = 250;
      //
    //  resume();
    //}
  }
)

window.addEventListener(
  'keydown',
  function (event) {
    if (event.key == 'ArrowDown') {
      bat.y += 30;
    
    }
    if (event.key == "s") {
      bat.y +=  30;
    }
    bat.y-=10; 
    bat.fallingSpeed = 0;
  }
)

startAnimation();
