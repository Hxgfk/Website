let tempRes = {
    "code": "0001", "message": "操作成功",
    "data": {
        "id": 314,
        "content": "风含情，水含笑，中秋佳节要来到;丹桂喷鼻，明月照，坐享团聚话今朝;嫦娥舞，玉兔跳，天上人世共良宵;云飘飘，问候到，祝心随月圆步步好。",
        "nextContent": "",
        "backgroundImg": "http://web-yd.oss-cn-hangzhou.aliyuncs.com/uploads/wf/20220825/cfe1567f1f06307af7152d9b27cbdd8d.png",
        "img": "http://web-yd.oss-cn-hangzhou.aliyuncs.com/uploads/wf/20220826/fe082b258a15f9d371e738aa7e1c6af3.png",
        "music": "http://web-yd.oss-cn-hangzhou.aliyuncs.com/h5-fans/mother/1/f.mp3",
        "skip": 1,
        "link": "https://mp.weixin.qq.com/s/obN7ih1y59nky2jucJ0oBg",
        "title": "️️❤",
        "printIcon": "❤",
        "source": "513106",
        "color": null,
        "fontSize": null,
        "contentId": "1", "type": 1,
        "pageType": 1,
        "times": 773121, "mainTitle": null,
        "sectionContent": null,
        "confirmImg": null, "subTitle": null,
        "thumbnailUrl": null,
        "relationLink": "https://7.layzz.cn/",
        "dataType": null,
        "password": null, "opacity": 85.0, "categoryId": null,
        "uid": null, "createTime": "2021-08-25 15:34:34", "question": null, "status": 1, "groupId": null
    }
};
location.pathname.split('/');
console.log(location.pathname)
location.pathname.replace(/\//g, "");
let theme_content = {
    "pure_words_content": "",
    "typed_bool": "typed_y",
    "cursor_char": "cursor_heart",
    "bg_style_pure_words": "bg_opacity",
    "bg_img": "http://ali2.a.yximgs.com/upic/2020/12/26/21/BMjAyMDEyMjYyMTM4MzNfNTQ4MTA5ODcwXzQxMzU0MjQyNzQ3XzFfNg==_B6886c06bb821605293c490c3cc675bf0.jpg",
    "simple_page_content": "&lt;h2 style=&quot;color: rgb(255, 88, 61);&quot;&gt;&amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp;&lt;\/h2&gt;&lt;h2 style=&quot;color: rgb(255, 88, 61);&quot;&gt;&lt;span style=&quot;color: rgb(255, 88, 61); font-size: 1.2em;&quot;&gt;&lt;br&gt;&lt;\/span&gt;&lt;\/h2&gt;&lt;h2&gt;&lt;span style=&quot;font-size: 1.2em;&quot;&gt;&amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp;&lt;\/span&gt;&lt;span style=&quot;color: rgb(255, 88, 61); font-size: 1.2em;&quot;&gt;2021 &amp;nbsp;&lt;\/span&gt;&lt;span style=&quot;color: rgb(255, 88, 61); font-size: 1.2em;&quot;&gt;\u8de8\u5e74\u5feb\u4e50\u5440&lt;\/span&gt;&lt;br&gt;&lt;\/h2&gt;&lt;p&gt;&lt;span style=&quot;color: rgb(255, 88, 61); font-size: 1.2em;&quot;&gt;&amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; \ud83d\udc95\ud83d\udc95\ud83d\udc95\ud83d\ude1c\ud83d\ude1c\ud83d\ude1c&lt;\/span&gt;&lt;\/p&gt;",
    "video_page_content": "",
    "bg_style": "bg_custom"
};
if (tempRes.data.pageType === 1) {
    let main_title = '2021跨年快乐❤️';
    if (main_title === '' || main_title === 'null') {
        document.title = '很高兴遇见你';
    }
}

function init_simple_page() {
    load_saved_content(); //加载内容
    // 初始化设置div的bg图片 初始化设置div的bg图片
    if (typeof (theme_content['bg_style']) != 'undefined' && theme_content['bg_style'] === 'bg_custom') {
        if (typeof (theme_content['bg_img']) != 'undefined' && theme_content['bg_img'] !== '') {
            $(".div_s_page_bg").css({
                "background-image": "url(" + theme_content['bg_img'] + ")"
            });
        }
    }

    interval_s_height = setInterval(function () {
        //console.log('div_s_page_height -> ' + $(".div_s_page_height").height());
        let e = $(".div_s_page_height");
        let latest_height_s_page = e.height();
        let height_s_page;
        if (latest_height_s_page <= height_s_page) {
            clearInterval(interval_s_height);
            e.height(latest_height_s_page + 200);
            if (e.height() < $(window).height()) {
                $(".div_s_page_height").height($(window).height()); //不能小于窗口的高度
                //console.log('let us be high as window');
            }
        } else {
            height_s_page = latest_height_s_page;
        }
    }, 100);

    if (start_content.skip !== 1) {
        $(".div_simple_page").fadeIn();
    }
    init_attachment();
}


function load_saved_content() {
    let s_page_content = theme_content['simple_page_content'];
    if (typeof (s_page_content) == 'undefined') { //全新作品未保存
        //	console.log('s_page_content -> undefined');
        load_random_content();
        return;
    }
    //	console.log('load_saved_content');
    let str =
        '<div class="div_s_page_zx"><h2 style="color: rgb(255, 88, 61);"></h2><h2 style="color: rgb(255, 88, 61);"><span style="color: rgb(255, 88, 61); font-size: 1.2em;"><br></span></h2><h2><span style="font-size: 1.2em;"></span><span style="color: rgb(255, 88, 61); font-size: 1.2em;"></span><span style="color: rgb(255, 88, 61); font-size: 1.2em;"></span><br></h2><p><span style="color: rgb(255, 88, 61); font-size: 1.2em;text-align:center">' +
        s_page_content + '</span></p></div>'
    let html_content = escape2Html(str);

    $(".div_s_page_zx").html(html_content); //初始化加载内容
    $(".div_s_page_height").html(html_content); //初始化复制内容，撑开文档高度
}

function load_random_content() {
    //console.log('load_random_content');
    let random_content =
        "&lt;p&gt;&lt;br&gt;&lt;/p&gt;&lt;h2 style=&quot;color: rgb(255, 88, 61); font-weight: 800;&quot;&gt;&amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp;送给你的小惊喜&lt;/h2&gt;&lt;p&gt;&lt;br&gt;&lt;/p&gt;&lt;p&gt;" +
        random_text() +
        "&lt;/p&gt;&lt;p&gt;&lt;br&gt;&lt;/p&gt;&lt;p class=&quot;child-node-is-img&quot; content-editable=&quot;false&quot;&gt;&lt;img src=&quot;" +
        random_img() +
        "&quot; width=&quot;100%&quot; height=&quot;auto&quot; id=&quot;zxeditor_img_1570285474432&quot;&gt;&lt;i class=&quot;__remove&quot;&gt;&lt;/i&gt;&lt;/p&gt;&lt;p&gt;&lt;br&gt;&lt;/p&gt;&lt;p&gt;" +
        random_text() + "&lt;/p&gt;&lt;p class=&quot;child-node-is-text&quot;&gt;" + random_text() +
        "&lt;/p&gt;&lt;p&gt;&lt;br&gt;&lt;/p&gt;&lt;p class=&quot;child-node-is-img&quot; content-editable=&quot;false&quot;&gt;&lt;img src=&quot;" +
        random_img() +
        "&quot; width=&quot;100%&quot; height=&quot;auto&quot; id=&quot;zxeditor_img_1570409946707&quot;&gt;&lt;i class=&quot;__remove&quot;&gt;&lt;/i&gt;&lt;/p&gt;&lt;p&gt;&lt;br&gt;&lt;/p&gt;&lt;p class=&quot;child-node-is-text&quot;&gt;" +
        random_text() +
        "&lt;/p&gt;&lt;p&gt;&lt;br&gt;&lt;/p&gt;&lt;p class=&quot;child-node-is-text&quot;&gt;&amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; " +
        "——爱你的小鹿" + "&lt;/p&gt;";
    let html_content = escape2Html(random_content);
    $(".div_s_page_zx").html(html_content); //初始化加载内容
    $(".div_s_page_height").html(html_content); //初始化复制内容，撑开文档高度
}


//转义为html
function escape2Html(str) {
    let arrEntities = {
        'lt': '<',
        'gt': '>',
        'nbsp': ' ',
        'amp': '&',
        'quot': '"'
    };
    return str.replace(/&(lt|gt|nbsp|amp|quot);/ig, function (all, t) {
        return arrEntities[t];
    });
}

let temp_text_array = array_as_words_love;

function random_text() {
    let random_text_index = Math.floor(Math.random() * temp_text_array.length);
    let random_text = temp_text_array[random_text_index];
    temp_text_array.splice(random_text_index, 1);
    return random_text;
}

let temp_img_array = array_as_pics_s;

function random_img() {
    let random_img_index = Math.floor(Math.random() * temp_img_array.length);
    let random_img = temp_img_array[random_img_index];
    temp_img_array.splice(random_img_index, 1);
    return random_img;
}


function init_pure_words() {
    //允许内容为空时直接展示，不设置为随机内容，用于空主题
    if (typeof (pure_words_content) == 'undefined') { //处理全新作品
        let array_str_temp = [];
        random_text_array(array_str_temp, 12); //获取随机的模板文字
        // array_str_temp.push('你现在看到的只是案例，文字是可以自定义哒，6000字以下');
        pure_words_content = array_str_temp.join('\r\r');
    }
    $(".div_pure_words_height").html(pure_words_content + '22222'); //初始化复制内容，撑开文档高度

    // 初始化设置div的bg图片 初始化设置div的bg图片
    if (typeof (theme_content['bg_style_pure_words']) != 'undefined' && theme_content['bg_style_pure_words'] ===
        'bg_opacity') {
        if (typeof (theme_content['bg_img']) != 'undefined' && theme_content['bg_img'] !== '') {
            $(".div_pure_words_bg").css({
                "background-image": "url(" + theme_content['bg_img'] + ")"
            });
        }
    }

    //以下是打字效果的js
    if (typeof (theme_content['cursor_char']) != 'undefined' && theme_content['cursor_char'] !== '') {
        switch (theme_content['cursor_char']) { //设置打字光标的样式
            case 'cursor_heart':
                str_cursorChar = '❤';
                break;
            case 'cursor_sub':
                str_cursorChar = '_';
                break;
            case 'cursor_music':
                str_cursorChar = '♫';
                break;
            case 'cursor_star':
                str_cursorChar = '★';
                break;
            case 'cursor_sun':
                str_cursorChar = '☀';
                break;
            default:
                str_cursorChar = '|';
        }
    } else { //处理全新作品，默认显示打字效果
        str_cursorChar = '❤';
    }

    //判断用户有没有选择打字效果
    if (typeof (theme_content['typed_bool']) != 'undefined' && theme_content['typed_bool'] !== '') {
        typed_bool = theme_content['typed_bool'] === 'typed_y';
    } else {
        typed_bool = false; //默认显示打字效果
    }
    // console.log(typed_bool);

    display_pure_words();
    $(".div_pure_words").fadeIn();

    interval_pw_height = setInterval(function () {
        let e = $('.div_pure_words_height');
        console.log('div_pure_words_height -> ' + e.height());
        var least_height_div_pw = e.height();
        if (least_height_div_pw > height_div_pw) {
            height_div_pw = least_height_div_pw;
        } else {
            clearInterval(interval_pw_height);
            e.height(least_height_div_pw + 100);
            if (e.height() < window_height) {
                e.height(window_height); //不能小于窗口的高度
                console.log('let us be high as window');
            }
        }
    }, 100);
}


function display_pure_words() {
    if (typed_bool) {
        var typed_pure_words = new Typed('#span_pw_typed', {
            strings: [pure_words_content], //输入内容, 支持html标签
            typeSpeed: 120, //打字速度
            cursorChar: str_cursorChar, //替换光标的样式
            contentType: 'html', //值为html时，将打印的文本标签直接解析html标签
            onComplete: function (abc) {
                // console.log(abc);
                console.log('finished typing words');
                // console.log($('#span_pw_typed').height()-$(".div_pure_words_height").height());
            },
        });
    } else {
        //如果不需要打字效果就直接显示
        $("#span_pw_typed").html(pure_words_content).fadeIn();
    }
    init_attachment();
}


function random_text_array(temp_array, length) { //获取随机的模板文字
    console.log('random_text_array');
    var random_array = [];
    while (random_array.length < length) {
        // var random_num=Math.floor(Math.random()*(array_as_pics.length-0))+0;
        var random_num = Math.floor(Math.random() * (array_as_words_love.length)); //随机取值
        if (random_array.indexOf(random_num) === -1) {
            random_array.push(random_num);
        }
    }
    // console.log(random_array);
    for (var i = 0; i < length; i++) {
        temp_array.push(array_as_words_love[random_array[i]]); //获取随机的模板文字
    }
}