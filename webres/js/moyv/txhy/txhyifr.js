const body = document.querySelector("body");
let url = prompt("请输入网址：");
let fr = "<div id='ff'><iframe src='"+url+"' id='f'></iframe></div>";
body.innerHTML = body.innerHTML + fr;
let ifr = document.getElementById("f");
ifr.style.width = "100%";
ifr.style.height = "100%";
ifr = document.getElementById("ff");
ifr.style.marginTop = "10px"
ifr.style.width = "600px";
ifr.style.position ="absolute";
ifr.style.height = "1000px";
ifr.style.left = "50%";
ifr.style.transform = "translateX(-50%)";
document.getElementById("local-streamlocal").remove();