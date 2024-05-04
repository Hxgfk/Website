// Actor Actions
let actor = document.getElementById("actor")

function reget(){
    actor = document.getElementById("actor")
}

function px(v){
    return v+"px"
}

let actiontime = 45;
let speed = 25;
let jumpMax = 10;
let leftMax = 6;
let rightMax = 1776;

function jump(){
    reget()
    for (let i=0;i<5;i++){
        setTimeout(function (){
            actor.style.top = px(Number(actor.style.top.replace("px", ""))-jumpMax)
        }, i*actiontime)
    }
    for (let i=6;i<11;i++){
        setTimeout(function (){
            actor.style.top = px(Number(actor.style.top.replace("px", ""))+jumpMax)
        }, i*actiontime)
    }
    let now = Number(actor.style.top.replace("px", ""))
    if (now > 400){
        actor.style.top = px(400);
    }
}

function right(){
    reget()
    if (actor.style.left !== px(leftMax) && Number(actor.style.left.replace("px", "")) < rightMax){
        actor.style.left = px(Number(actor.style.left.replace("px", ""))+speed)
    }
}

function left(){
    reget()
    if (actor.style.left !== px(rightMax) && Number(actor.style.left.replace("px", "")) > leftMax){
        actor.style.left = px(Number(actor.style.left.replace("px", ""))-speed)
    }
}