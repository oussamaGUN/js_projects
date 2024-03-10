let number = document.getElementById("num");
let up = document.getElementById("up");
let reset = document.getElementById("reset");
let down = document.getElementById("down");
let num = 0;
up.onclick = function(){
    num++;
    number.textContent = `${num}`
}
reset.onclick = function(){
    num = 0;
    number.textContent = `${num}`
}
down.onclick = function(){
    num--;
    number.textContent = `${num}`
}