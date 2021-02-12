import Bubble from './field/bubble';
import Field from './field/field';

let canvas = document.getElementById("gameScreen");
const crosshair = document.getElementById('crosshair');
crosshair.innerHTML = '+';
new Field(canvas);

//modal 
let modal = document.getElementById('gameModal');
//modal button 
let modalButton = document.getElementById('modalButton');
//close button
let closeButton = document.getElementById('close-button');
//click listener;
modalButton.addEventListener('click', openModal);
function openModal() {
    modal.style.display = 'block';
}

closeButton.addEventListener('click', closeModal);
function closeModal() {
    modal.style.display = 'none';
}