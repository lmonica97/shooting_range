class Bubble {
    constructor() {
        debugger
        this.canvas = document.getElementById('gameScreen')
        this.ctx = this.canvas.getContext('2d')
        this.width = this.canvas.offsetWidth;
        this.height = this.canvas.offsetHeight;
        this.left = Math.floor(Math.random() * ((this.width - 200) - 204) + 204)
        this.top = Math.floor(Math.random() * ((this.height - 300) - 200) + 200)
        this.clickHandler = this.clickHandler.bind(this);
        this.bubbles = [];
        document.addEventListener('mousedown', this.clickHandler, false); 
        this.score = document.getElementById('score');
        this.totalScore = 0;
    }

    drawRandomCircle(circlePos){
        // debugger
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
        // debugger
    }

    updateScore() {
        this.score.innerText = `Score: ${this.totalScore}`
    } 

    clickHandler(e) {
        // debugger
        e.preventDefault();
        let x = e.pageX - 100;
        let y = e.pageY - 125;
        this.bubbles.forEach(ele => {
            // debugger
            if ( y > ele.top && y < ele.top + ele.height && x > ele.left && x < ele.left + ele.width ) {
                let circlePos = {
                    left: Math.floor(Math.random() * ((this.width - 200) - 204) + 204),
                    top: Math.floor(Math.random() * ((this.height - 300) - 200) + 200)
                }
                this.totalScore += 1;
                this.updateScore();
                this.drawRandomCircle(circlePos);
            }
        })
    }

}

export default Bubble;


