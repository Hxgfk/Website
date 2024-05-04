var attachment = 'null'; //可能为null
var attached_content = {
    "bool_save": false,
    "timer_desc": "\u7231\u4f601000\u5e74",
    "timer_time": "10000-01-01",
    "timer_count_type": "timer_count_postive"
}; //可能为null
//	console.log(attached_content);

function init_attachment() { //开始attachment
    //	console.log('init_attachment ->' + attachment);
    switch (attachment) {
        case 'timer':
            init_at_timer();
            break;
        default:
            return;
    }
}