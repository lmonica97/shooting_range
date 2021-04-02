class Bubble {
    constructor() {
        this.canvas = document.getElementById('gameScreen')
        this.ctx = this.canvas.getContext('2d')
        this.width = this.canvas.offsetWidth;
        this.height = this.canvas.offsetHeight;
        this.dx = 2;
        this.dy = -2;
        this.radius = 25;
        this.left = Math.floor(Math.random() * ((this.width - 200) - 204) + 204)
        this.top = Math.floor(Math.random() * ((this.height - 300) - 200) + 200)
        this.clickHandler = this.clickHandler.bind(this);
        this.onMouseMove = this.onMouseMove.bind(this);
        this.emptyArray = this.emptyArray.bind(this);
        this.animatePop = this.animatePop.bind(this);
        this.clearScore = this.clearScore.bind(this);
        this.generateRandomPosition = this.generateRandomPosition.bind(this);
        this.bubbles = [];
        this.speed = 5;
        this.canvas.requestPointerLock= this.canvas.requestPointerLock || this.canvas.mozRequestPointerLock;
        document.exitPointerLock = document.exitPointerLock || document.mozExitPointerLock;
        document.addEventListener('mousedown', this.clickHandler, false); 
        this.canvas.addEventListener('mousemove', this.onMouseMove, false);
        this.score = document.getElementById('score');
        this.totalScore = 0;
    }

    drawRandomCircle(circlePos){
        this.ctx.clearRect(0,0, 1700, 700);
        this.ctx.fillStyle='#33ccff';
        this.ctx.beginPath();
        this.ctx.arc(circlePos.left, circlePos.top, 25, 0, 2 * Math.PI);
        this.ctx.fill();
        this.bubbles.push({
            width: 50,
            height: 50,
            top: circlePos.top,
            left: circlePos.left,
        })
    }
    
    animatePop(circlePos) {
        this.canvas.requestAnimationFrame(this.animatePop(circlePos))
        this.ctx.clearRect(0, 0, 1700, 700);
        this.ctx.fillStyle='#33ccff';
        this.ctx.beginPath();
        this.ctx.arc(circlePos.left, circlePos.top, this.radius, 0, 2 * Math.PI);
        this.ctx.fill();
        this.radius -= 2
        if (radius === 0) {
            this.canvas.cancelAnimationFrame()
            this.radius = 25;
            let newPos = this.generateRandomPosition()
            this.drawRandomCircle(newPos);
        }
    }

    updateScore() {
        this.score.innerText = `Score: ${this.totalScore}`
    } 

    onMouseMove(e) {
        let circlePos = ({left: 0, top: 0})
        let mouseX = (e.movementX )
        let mouseY = (e.movementY )
        if (mouseX < 0) {
            let bubble = this.bubbles[this.bubbles.length - 1];
            let bubbleX = bubble.left;
            let newBubbleX = bubbleX + this.speed
            if (newBubbleX < 0 || newBubbleX > this.width) {
                newbubbleX = this.width - bubble.left;
            }
            circlePos.left = newBubbleX; 
        } else if (mouseX > 0) {
            let bubble = this.bubbles[this.bubbles.length - 1];
            let bubbleX = bubble.left;
            let newBubbleX = bubbleX - this.speed;
            if (newBubbleX < 0 || newBubbleX > this.width) {
                newbubbleX = this.width - bubble.left;
            }
            circlePos.left = newBubbleX
        } else {
            let bubble = this.bubbles[this.bubbles.length - 1];
            circlePos.left = bubble.left;
        }
        if (mouseY < 0) {
            let bubble = this.bubbles[this.bubbles.length - 1];
            let bubbleY = bubble.top; 
            let newBubbleY = bubbleY + this.speed 
            if (newBubbleY < 0 || newBubbleY > this.height) {
                newbubbleY = this.height - bubble.top;
            }
            circlePos.top = newBubbleY;
        } else if (mouseY > 0) {
            let bubble = this.bubbles[this.bubbles.length - 1];
            let bubbleY = bubble.top; 
            let newBubbleY = bubbleY - this.speed
            if (newBubbleY < 0 || newBubbleY > this.height) {
                newbubbleY = this.height - bubble.top;
            }
            circlePos.top = newBubbleY;
        } else {
            let bubble = this.bubbles[this.bubbles.length - 1];
            circlePos.top = bubble.top;
        }
        console.log(circlePos);
        this.drawRandomCircle(circlePos)
    }

    emptyArray() {
        this.bubbles.splice(0, this.bubbles.length);
    }

    clearScore() {
        this.totalScore = 0;
        this.updateScore();
    }

    generateRandomPosition(){
        let circlePos = ({left: 0, top: 0});
        circlePos.left = Math.floor(Math.random() * ((this.width - 200) - 204) + 204)
        circlePos.top = Math.floor(Math.random() * ((this.height - 300) - 200) + 200)
        return circlePos
    }

    clickHandler(e) {
        e.preventDefault();
        let x = 890;
        let y = 400;
        this.bubbles.forEach(ele => {
            if ( y > ele.top && y < ele.top + ele.height && x > ele.left && x < ele.left + ele.width ) {
                // this.animatePop(ele);
                this.totalScore += 1;
                this.updateScore();
                // const gunshot = new Audio('../styles/pistolshot.mp3');
                // gunshot.play();
                this.emptyArray();
                let newPos = this.generateRandomPosition();
                this.drawRandomCircle(newPos)
            }

        })
    }

}

export default Bubble;


