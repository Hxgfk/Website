let kunyv = document.querySelector("img");
let days = document.querySelector("p");
let time = 0;
let o = false;
let triged = false;
let medias = 0;

function playmedia(path) {
    if (medias < 100) {
        new Audio(path).play().then(function () {
            medias -= 1;
        });
    }
}

function rand() {
    let num = Math.floor(Math.random() * 4);
    if (num === 0) {
        rand()
    }else {
        return num;
    }
}

function p(t){
    if (t>=365){
        if (t >= 912){
            if (!triged) {
                triged = true;
                alert("你的练习时长已经到达两年半");
                playmedia(rand()+".mp3");
                document.querySelector("h4").innerHTML = p(time);
                return "练习时长：两年半";
            }else {
                return "练习时长："+t/365+"年";
            }
        }else {
            if (t < 730){
                o = true;
                return "练习时长：一年";
            }else {
                if (t === 730){
                    return "练习时长：两年";
                }else {
                    if (t > 730){
                        let fuck = t-730;
                        return "练习时长：两年"+fuck+"天";
                    }
                }
            }
        }
    }else {
        return "练习时长："+t+"天";
    }
}

document.addEventListener("click",function(){
    time = time + 1;
    kunyv.style.transform = "scale(2)";
    days.style.transform = "translateY(-20px)";
    days.style.transition = "all 0.5s";
    days.style.opacity = "1";
    setTimeout(function (){
        kunyv.style.transform ="scale(1)";
    }, 100);
    setTimeout(function (){
        kunyv.style.transform ="scale(1)";
        days.style.transition = "none";
        days.style.transform = "translateY(0px)";
        days.style.opacity = "0";
    }, 300);
    playmedia("j.mp3");
    document.querySelector("h4").innerHTML = p(time);
});
