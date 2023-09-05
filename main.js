var mouseEvent="empty";
var last_x=0;
var last_y=0;
var canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
colour="green";
widthOfLine=2;
canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e){
    colour=document.getElementById("inpat").value;
    widthOfLine=document.getElementById("imput").value;
    mouseEvent="mousedown"
}

canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e){
    currentPosition_x= e.clientX - canvas.offsetLeft;
    currentPosition_y= e.clientY - canvas.offsetTop;
    if(mouseEvent=="mousedown"){
        ctx.beginPath();
        ctx.strokeStyle=colour;
        ctx.lineWidth=widthOfLine;
        console.log("last position of x and y");
        console.log("x="+last_x+"y="+last_y);
        ctx.moveTo(last_x, last_y);
        console.log("current position of x and y");
        console.log("x="+currentPosition_x+"y="+currentPosition_y);
        ctx.lineTo(currentPosition_x, currentPosition_y);
        ctx.stroke();
    }
    last_x=currentPosition_x;
    last_y=currentPosition_y;

}

canvas.addEventListener("mouseup", my_mouseup);

function my_mouseup(e){
    mouseEvent="mouseup";
}
canvas.addEventListener("mouseleave", my_mouseleave);

function my_mouseleave(e){
    mouseEvent="mouseleave";
}

function Clean(){
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
}

function loggorout(){
    localStorage.removeItem("name_of_user");
    localStorage.removeItem("room_name");
    window.location="index.html"
}