var imgObj = null;
var rightPressed = false;
var leftPressed = false;
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
function init() {
    imgObj = document.getElementById('myImage');
    imgObj.style.position= 'relative'; 
    imgObj.style.left = '0px'; 
}
function keyDownHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
        imgObj.style.left = parseInt(imgObj.style.left) + 10 + 'px';
    }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
        imgObj.style.left = parseInt(imgObj.style.left) - 10 + 'px';
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
            
window.onload = init;



