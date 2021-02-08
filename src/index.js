let canvas = document.getElementById("gameScreen");
var width = canvas.offsetWidth;
var height = canvas.offsetHeight;
let ctx = canvas.getContext('2d');
let elements = [];

let circlePos = {
  left: Math.floor(Math.random() * ((width - 200) - 204) + 204),
  top: Math.floor(Math.random() * ((height - 300) - 200) + 200)
}

canvas.addEventListener('mousedown', function (e) {
  // debugger
    let x = e.pageX - 100;
    let y = e.pageY - 125;
    elements.forEach(function(ele) {
      // debugger
      if (y > ele.top && y < ele.top + ele.height && x > ele.left && x < ele.left + ele.width ) {
        let circlePos = {
            left: Math.floor(Math.random() * ((width - 200) - 204) + 204),
            top: Math.floor(Math.random() * ((height - 300) - 200) + 200)
        }

        drawRandomCircle(circlePos);
      }
    })
})

function drawRandomCircle(circlePos) {
  // debugger

  ctx.clearRect(0,0, 1700, 700);
  ctx.fillStyle='#33ccff';
  ctx.beginPath();
  ctx.arc(circlePos.left, circlePos.top, 25, 0, 2 * Math.PI);
  ctx.fill();
  elements.push({
    width: 50,
    height: 50,
    top: circlePos.top,
    left: circlePos.left,
  })
}

drawRandomCircle(circlePos);