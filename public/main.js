var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var ballRadius = 10;
var x = canvas.width/2;
var y = canvas.height-30;
var dx = 2;
var dy = -2;
var paddleHeight = 10;
var paddleWidth = 75;
var paddleX = (canvas.width-paddleWidth)/2;
var paddleY = (canvas.width-paddleWidth)/2;
var score =0;
var tpx = 30;
var tpy = 50;

var rightPressed = false;
var leftPressed = false;


document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
document.addEventListener("mousemove", mouseMoveHandler, false);


function mouseMoveHandler(e) {
    var relativeX = e.clientX - canvas.offsetLeft;
    //var relativeY = e.clientY - canvas.offsetHeight;
    if(relativeX > 0 && relativeX < canvas.width && y+dy > canvas.height/2 - ballRadius) {
        paddleX = relativeX - paddleWidth/2;
        
    }
    else if(relativeX > 0 && relativeX < canvas.width && y+dy < canvas.height/2 - ballRadius) {
        paddleY = relativeX - paddleWidth/2;
        
    }
}
function keyDownHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = true;
    }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = true;
    }
}

function keyUpHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = false;
    }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = false;
    }
}

function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = "#00008B";
    ctx.fill();
    ctx.closePath();
    
}
function drawPaddle() {
    ctx.beginPath();
    ctx.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight);
    ctx.fillStyle = "#00008B";
    ctx.fill();
    ctx.closePath();
}
function drawPaddletop(){
    ctx.beginPath();
    ctx.rect(paddleY, 0, paddleWidth, paddleHeight);
    ctx.fillStyle = "#00008B";
    ctx.fill();
    ctx.closePath();

}
function drawScore() {
    ctx.font = "16px Arial";
    ctx.fillStyle = "#00008B";
    ctx.fillText("Score: "+score, 8, 20);
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    drawPaddle();
    drawPaddletop();
    drawScore();
    
    if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
        dx = -dx;
    }
    
    else if(y + dy > canvas.height-ballRadius) {
        if(x > paddleX && x < paddleX + paddleWidth) {
            dy = -dy;
            score++;
        }
        else {
            alert("GAME OVER");
            document.location.reload();
            clearInterval(interval); 
        }
    }
    else if ( y + dy < ballRadius){
        if(x > paddleY && x < paddleY + paddleWidth) {
            dy = -dy;
            score++;
        }
        else {
            alert("GAME OVER");
            document.location.reload();
            clearInterval(interval); 
        }
    }
    
    
    if(rightPressed && paddleX < canvas.width-paddleWidth && y+dy > canvas.height/2 - ballRadius) {
       
            paddleX += 7;
            
    }
    else if(leftPressed && paddleX > 0 && y+dy > canvas.height/2 - ballRadius ) {
        
            paddleX -= 7;
        
    }
    else if(rightPressed && paddleY < canvas.width-paddleWidth && y+dy < canvas.height/2 - ballRadius) {
       
        paddleY += 7;
        
    }
    else if(leftPressed && paddleY > 0 && y+dy < canvas.height/2 - ballRadius ) {
    
        paddleY -= 7;
    
    }
    
    x += dx;
    y += dy;
}

var interval = setInterval(draw, 10);