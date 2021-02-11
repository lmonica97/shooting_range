import Bubble from './field/bubble';
import Field from './field/field';

let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext('2d');
canvas.requestPointerLock = canvas.requestPointerLock ||
                            canvas.mozRequestPointerLock;

document.exitPointerLock = document.exitPointerLock ||
                           document.mozExitPointerLock;

// canvas.onclick = function() {
//   canvas.requestPointerLock();
    const crosshair = document.getElementById('crosshair');
    crosshair.innerHTML = '+';
// };



new Field(canvas);
