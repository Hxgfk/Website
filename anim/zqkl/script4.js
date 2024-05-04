let start_content = {
    "intersect_text": "",
    "bg_style": "bg_custom",
    "bg_img": "",
    "img_bool": "img_true",
    "img_src": ""
};
// $(function() {
//此事件为触发互动创意
let start_id = 'intersect'; //可能为null

//可能为null
if (tempRes.data.pageType === 1) {
    location.pathname.split('#');
    location.pathname.replace(/[^0-9]/ig, "");
//console.log(num + "==========")
    let source = getQueryVariable("source");
    if (null != source && '' !== source && undefined !== typeof (source)) {

    } else {
        source = "";
    }
}

start_content.intersect_text = tempRes.data.content;
start_content.hearttree_text = tempRes.data.content;
start_content.img_src = tempRes.data.img;

if (tempRes.data.img == null || tempRes.data.img === "") {
    $("#div_is_img").css("display", "none!important");
}
start_content.bg_img = tempRes.data.backgroundImg;
start_content.skip = tempRes.data.skip;
theme_content.simple_page_content = tempRes.data.nextContent;
theme_content.printIcon = tempRes.data.printIcon;
music_json.m_online_url = tempRes.data.music;

let pure_words_content = theme_content['simple_page_content'];
document.title = tempRes.data.title;
$('#moreLink').attr('href', tempRes.data.link);

$("#span_is_typed").css({
    "font-size": tempRes.data.fontSize + "px",
    "color": tempRes.data.color
})

init_start(start_id);

function getQueryVariable(variable) {
    let query = window.location.search.substring(1);
    let vars = query.split("&");
    for (let i = 0; i < vars.length; i++) {
        let pair = vars[i].split("=");
        if (pair[0] === variable) {
            return pair[1];
        }
    }
    return false;
}


function init_start(start_id) {
    //console.log('init_start ->' + start_id);
    switch (start_id) {
        case 'love-format':
            $('.div_loveformat').show();
            init_loveformat();
            break;
        case 'heart-tree':
            init_hearttree();
            break;
        case 'courage':
            $('#div_courage').show();
            init_courage();
            break;
        case 'birthday-cake':
            $('#div_dbcake').show();
            init_birthdaycake();
            break;
        case 'intersect':
            $('#div_intersect').show();
            init_intersect();
            break;
        case 'only-you':
            $('#div_onlyyou').show();
            init_onlyyou();
            break;
        default:
            init_theme();
    }
}

//开始动画主体部分
function init_theme() {
    //	console.log('init_theme');
    $('#div_start_bg').fadeOut();
    if (tempRes.data.pageType === 1) {
        init_simple_page();
    } else {
        init_pure_words();
    }
}