let caps = [
    {"answer": "鸡爪", "captcha": "res/cap/0.jpeg"},
    {"answer": "芝章", "captcha": "res/cap/1.jpeg"},
    {"answer": "饺刑", "captcha": "res/cap/2.jpeg"},
    {"answer": "煤油焦羊", "captcha": "res/cap/3.jpeg"},
    {"answer": "鸡肚", "captcha": "res/cap/4.jpeg"},
    {"answer": "油饼", "captcha": "res/cap/5.jpeg"},
    {"answer": "圣金饼", "captcha": "res/cap/6.jpeg"},
    {"answer": "cxk", "captcha": "res/cap/7.jpeg"},
    {"answer": "蝈坤", "captcha": "res/cap/8.jpeg"},
    {"answer": "cxk", "captcha": "res/cap/9.jpeg"},
    {"answer": "无雨了", "captcha": "res/cap/10.jpeg"},
    {"answer": "坤坤风景图", "captcha": "res/cap/11.jpeg"},
    {"answer": "鸡泥胎煤", "captcha": "res/cap/12.jpeg"},
    {"answer": "泥煤基基", "captcha": "res/cap/13.jpeg"},
    {"answer": "寿司", "captcha": "res/cap/14.jpeg"},
    {"answer": "橘子", "captcha": "res/cap/15.jpeg"},
    {"answer": "抱井", "captcha": "res/cap/16.jpeg"},
    {"answer": "药", "captcha": "res/cap/17.jpeg"},
    {"answer": "荔枝", "captcha": "res/cap/18.jpeg"},
    {"answer": "针灸", "captcha": "res/cap/19.jpeg"},
    {"answer": "生漆", "captcha": "res/cap/20.jpeg"},
    {"answer": "链", "captcha": "res/cap/21.jpeg"},
    {"answer": "狸猫", "captcha": "res/cap/22.jpeg"},
    {"answer": "橘子", "captcha": "res/cap/23.jpeg"},
    {"answer": "柠檬", "captcha": "res/cap/24.jpeg"},
    {"answer": "你干嘛，哎呦", "captcha": "res/cap/25.gif"},
    {"answer": "鸡爷", "captcha": "res/cap/26.jpeg"},
    {"answer": "加饺", "captcha": "res/cap/27.jpeg"},
    {"answer": "大师", "captcha": "res/cap/28.jpeg"},
    {"answer": "荔枝", "captcha": "res/cap/29.jpeg"}
];
let answer = "鸡爪";
function reset() {
    let rand = rand0ToN(caps.length-1);
    document.getElementById("p").src = caps[rand]["captcha"];
    answer = caps[rand]["answer"];
    console.log(answer);
}
let err= 0;
function finish(){
    if (document.getElementById("answer").value !== answer){
        err = err + 1;
        document.getElementById("err").style.display = "block";
        new Audio("res/audio/err.mp3").play();
        if (err > 10){
            alert("验证码错误大于10次，你个小黑子");
            window.close();
        }
    }else {
        f0()
    }
}
function f0() {
    let b = document.getElementById("err");
    b.style.display = "block";
    b.style.color = "green";
    b.innerHTML = "验证码正确，2.5秒后跳转";
    setTimeout(function () {
        document.getElementById("main").style.display = "block";
        document.getElementById("c").style.display = "none";
        let video = document.getElementById("IKUNvideo");
        video.play();
    }, 2500);
}
function rand0ToN(n){
    return Math.floor(Math.random()*Math.floor(n));
}