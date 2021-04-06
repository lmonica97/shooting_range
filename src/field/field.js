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
        this.startGame = this.startGame.bind(this);
        this.restartGame = this.restartGame.bind(this);
        this.restart = this.restart.bind(this);
        this.tick = this.tick.bind(this);
        document.addEventListener('keypress', this.startGame())
        this.background = new Audio('background.mp3');
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

    restart() {
        this.totalTime = 60;
        this.bubble.clearScore();
    }

    restartGame() {
        document.getElementById('background').classList.remove('visible');
        document.querySelector('.welcomeText').style.display = 'none';
        this.bubble.drawRandomCircle({left: this.left, top: this.top});
        this.tick();
        this.totalTime = 60;
        this.bubble.clearScore()
        this.background.volume = 0.1;
        this.background.play();
    }

    endGame() {
        alert(`Final Score: ${this.bubble.totalScore}`)
        document.getElementById('background').classList.add('visible'); 
        document.querySelector('.welcomeText').style.display = 'block';
        this.totalTime = 60;
        this.bubble.clearScore();
        this.background.pause();
        this.background.currentTime = 0;
    }

}
export default Field;