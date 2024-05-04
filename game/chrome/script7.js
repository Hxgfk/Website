const pageData = {
    "dinoGameA11yAriaLabel": "谷歌浏览器恐龙彩蛋, play",
    "dinoGameA11yDescription": "谷歌浏览器恐龙彩蛋. 一只像素化的恐龙躲避仙人掌和翼手龙，因为它在荒凉的景观中奔跑。当您听到音频提示时，按空格键可跳过障碍物。",
    "dinoGameA11yGameOver": "游戏结束;您的分数是 $1。",
    "dinoGameA11yHighScore": "您的最高分是 $1。",
    "dinoGameA11yJump": "跳!",
    "dinoGameA11ySpeedToggle": "启动慢速模式",
    "dinoGameA11yStartGame": "游戏开始",
    "errorCode": "",
    "fontfamily": "'Segoe UI', Tahoma, sans-serif",
    "fontsize": "75%",
    "heading": {"hostName": "dino", "msg": "按下空格键开始游戏"},
    "iconClass": "icon-offline",
    "language": "en",
    "textdirection": "ltr",
    "title": "chrome://dino/"
};
loadTimeData.data = pageData;
var tp = document.getElementById('t');
jstProcess(new JsEvalContext(pageData), tp);