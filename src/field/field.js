import Bubble from './bubble';

class Field {
    constructor(canvas) {
        // debugger
        this.ctx = canvas.getContext('2d');
        this.width = canvas.offsetWidth;
        this.height = canvas.offsetHeight;
        this.start = false;
        this.bubble = new Bubble;
        this.startGame = this.startGame.bind(this);
        // this.startButton = document.getElementById("startButton");
        this.left = Math.floor(Math.random() * ((this.width - 200) - 204) + 204);
        this.top = Math.floor(Math.random() * ((this.height - 300) - 200) + 200);
        document.addEventListener('keypress', this.startGame())
        this.time = document.getElementById('timer');
        this.totalTime = 60;
        this.tick = this.tick.bind(this);
    }

    startGame(e) {
      return (e) => {
        this.restartGame();
      }
    }

    tick() {
        debugger
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
}
export default Field;