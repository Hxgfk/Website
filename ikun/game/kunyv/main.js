let muyu = document.querySelector("img");
let gongde = document.querySelector("p");
let time = 0;
let o = false;
function p(t){
    if (t>=365){
        if (t === 912){
            alert("你的练习时长已经到达两年半");
            new Audio(Math.floor(Math.random() * 4)+".mp3").play();
            time = 0;
            document.querySelector("h4").innerHTML = p(time);
            return "练习时长：两年半";
        }else {
            if (t < 365*2){
                o = true;
                return "练习时长：一年";
            }else {
                if (t === 365*2){
                    return "练习时长：两年";
                }else {
                    if (t > 365*2){
                        let fuck = t-365*2;
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
    muyu.style.transform ="scale(1.1)";
    gongde.style.transform = "translateY(-20px)";
    gongde.style.transition = "all 1s";
    gongde.style.opacity = "1";
    setTimeout(function (){
        muyu.style.transform ="scale(1)";
        gongde.style.transition = "none";
        gongde.style.transform = "translateY(0px)";
        gongde.style.opacity = "0";
    }, 250);
    new Audio("j.mp3").play();
    document.querySelector("h4").innerHTML = p(time);
});
setInterval(function (){
    document.querySelector("h4").innerHTML = p(time);
}, 100);