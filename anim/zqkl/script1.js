//判断客户端设备，选择写入meta
function init_viewport() {
    if (navigator.userAgent.indexOf('Android') !== -1) {
        let version = parseFloat(RegExp.$1);
        if (version > 2.3) {
            let width = window.outerWidth === 0 ? window.screen.width : window.outerWidth;
            let phoneScale = parseInt(width + "") / 500;
            document.write('<meta name="viewport" content="width=500, minimum-scale = ' + phoneScale + ', maximum-scale = ' + phoneScale + ', target-densitydpi=device-dpi">');
        } else {
            document.write('<meta name="viewport" content="width=500, target-densitydpi=device-dpi, user-scalable=0">');
        }
    } else if (navigator.userAgent.indexOf('iPhone') !== -1) {
        let phoneScale = parseInt(window.screen.width + "") / 500;
        document.write('<meta name="viewport" content="width=500, min-height=750, initial-scale=' + phoneScale + ', maximum-scale=' + phoneScale + ', user-scalable=0" /> ');         //0.75   0.82
    } else {
        document.write('<meta name="viewport" content="width=500, height=750, initial-scale=0.64" /> '); //0.75  0.82
    }
}

init_viewport();