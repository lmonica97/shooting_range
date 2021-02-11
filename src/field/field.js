import Bubble from './bubble';
import * as THREE from 'three';

class Field {
    constructor(canvas) {
        this.ctx = canvas.getContext('2d');
        this.width = canvas.offsetWidth;
        this.height = canvas.offsetHeight;
        this.start = false;
        this.bubble = new Bubble;
        this.left = Math.floor(Math.random() * ((this.width - 200) - 204) + 204);
        this.top = Math.floor(Math.random() * ((this.height - 300) - 200) + 200);
        this.time = document.getElementById('timer');
        this.totalTime = 60;
        this.requestPointerLock= canvas.requestPointerLock || canvas.mozRequestPointerLock;
        document.exitPointerLock = document.exitPointerLock || document.mozExitPointerLock;
        // this.camera = new THREE.PerspectiveCamera(45, this.width / this.height, 0.1, 500);
        // this.camera.position.z = 50;
        // this.scene = new THREE.Scene();
        // this.renderer = new THREE.WebGLRenderer({ antialias: true});
        // this.renderer.setSize( this.width, this.height);
        // this.canvasHalf = new THREE.Vector2( this.width / 2, this.height / 2);
        // this.mouse = new THREE.Vector2();

        // this.onMouseMove = this.onMouseMove.bind(this);
        this.startGame = this.startGame.bind(this);
        this.tick = this.tick.bind(this);
        // this.crosshair = this.crosshair.bind(this);

        document.addEventListener('keypress', this.startGame())
    
    }

    startGame(e) {
      return (e) => {
        this.restartGame();
      }
    }

    tick() {
        this.totalTime--
        this.time.innerText = `Time: ${this.totalTime} seconds`;
        if ( this.totalTime > 0) {
            setTimeout(this.tick, 1000);
        }

        if (this.totalTime === 0) {
            this.endGame();
        }
    }

    restartGame() {
        debugger
        document.getElementById('background').classList.remove('visible');
        document.querySelector('.welcomeText').style.display = 'none';
        this.bubble.drawRandomCircle({left: this.left, top: this.top});
        this.tick();
    }

    endGame() {
        document.getElementById('background').classList.add('visible'); 
    }

    // crosshair() {
    //     // this.ctx.clearRect(0, 0, this.width, this.height);
    //     this.ctx.beginPath();
    //     this.ctx.moveTo(860, 350);
    //     this.ctx.lineTo(840, 350);
    //     this.ctx.stroke();
    //     this.ctx.beginPath();
    //     this.ctx.moveTo(850, 340);
    //     this.ctx.lineTo(850, 360);
    //     this.ctx.stroke();
    //     requestAnimationFrame(crosshair);
    // }
}
export default Field;