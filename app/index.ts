// console.log('Hello world!')

import "./canvas";
import {drawTrident} from './trident';
import {animate} from  './animate'
import {drawThingy} from './newthingy';
// Draw two thingies...
//drawThingy(50,50);
//drawThingy(150,50);

drawTrident(300,300);
drawTrident(100,100);
animate();