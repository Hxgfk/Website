// html code loaders


export function com_advancement() {
    document.getElementById("gen").innerHTML = "<div id='com'><h2>/advancement指令：给予或移除玩家的成就</h2>\n" +
        "<p>执行动作：</p>\n" +
        "<label>\n" +
        "    <select id=\"arg1\">\n" +
        "        <!--grant-->\n" +
        "        <option>给予</option>\n" +
        "        <!--revoke-->\n" +
        "        <option>删除</option>\n" +
        "    </select>\n" +
        "</label>\n" +
        "<p>目标玩家名或选择器：</p>\n" +
        "<label>\n" +
        "    <select id=\"target\">\n" +
        "        <option>@a</option>\n" +
        "        <option>@r</option>\n" +
        "        <option>@s</option>\n" +
        "        <option>指定玩家名或自定义选择器</option>" +
        "        <option id=\"setName\"></option>" +
        "    </select>\n" +
        "</label>\n" +
        "<p>操作目标：</p>\n" +
        "<label>\n" +
        "    <select id=\"arg2\" onclick=\"check_advancemnt()\">\n" +
        "        <!--everything-->\n" +
        "        <option>全部成就</option>\n" +
        "        <!--from-->\n" +
        "        <option>指定成就和该进度以下的成就</option>\n" +
        "        <!--only-->\n" +
        "        <option>指定成就</option>\n" +
        "        <!--through-->\n" +
        "        <option>指定成就和该成就以上和以下的成就</option>\n" +
        "        <!--util-->\n" +
        "        <option>指定成就和该成就以上的成就</option>\n" +
        "    </select>\n" +
        "</label>\n" +
        "<p>成就：</p>\n" +
        "<label>\n" +
        "    <select id=\"arg3\">\n" +
        "        <option>Minecraft</option>\n" +
        "        <option>石器时代</option>\n" +
        "        <option>获得升级</option>\n" +
        "        <option>来硬的</option>\n" +
        "        <option>整装上阵</option>\n" +
        "        <option>热腾腾的</option>\n" +
        "        <option>这不是铁镐么</option>\n" +
        "        <option>不吃这套，谢谢</option>\n" +
        "        <option>冰桶挑战</option>\n" +
        "        <option>钻石！</option>\n" +
        "        <option>勇往直下</option>\n" +
        "        <option>钻石护体</option>\n" +
        "        <option>附魔师</option>\n" +
        "        <option>僵尸科医生</option>\n" +
        "        <option>隔墙有眼</option>\n" +
        "        <option>结束了？</option>\n" +
        "        <option>下界</option>\n" +
        "        <option>见鬼去吧</option>\n" +
        "        <option>光辉岁月</option>\n" +
        "        <option>深藏不露</option>\n" +
        "        <option>曲速泡</option>\n" +
        "        <option>阴森的要塞</option>\n" +
        "        <option>谁在切洋葱？</option>\n" +
        "        <option>金光闪闪</option>\n" +
        "        <option>画船添足</option>\n" +
        "        <option>脆弱的同盟</option>\n" +
        "        <option>战猪</option>\n" +
        "        <option>天涯共此石</option>\n" +
        "        <option>残骸裹身</option>\n" +
        "        <option>惊悚恐怖骷髅头</option>\n" +
        "        <option>与火共舞</option>\n" +
        "        <option>锚没有九条命</option>\n" +
        "        <option>温暖如家</option>\n" +
        "        <option>热门景点</option>\n" +
        "        <option>凋零山庄</option>\n" +
        "        <option>本地酿造厂</option>\n" +
        "        <option>带信标回家</option>\n" +
        "        <option>狂乱的鸡尾酒</option>\n" +
        "        <option>信标工程师</option>\n" +
        "        <option>为什么会变成这样呢</option>\n" +
        "        <option>末地</option>\n" +
        "        <option>解放末地</option>\n" +
        "        <option>下一世代</option>\n" +
        "        <option>远程折跃</option>\n" +
        "        <option>结束了...再一次...</option>\n" +
        "        <option>你需要来点薄荷糖</option>\n" +
        "        <option>在游戏尽头的城市</option>\n" +
        "        <option>天空即为极限</option>\n" +
        "        <option>这上面的风景不错</option>\n" +
        "        <option>冒险</option>\n" +
        "        <option>自我放逐</option>\n" +
        "        <option>那是鸟吗？</option>\n" +
        "        <option>怪物猎人</option>\n" +
        "        <option>成交！</option>\n" +
        "        <option>胶着状态</option>\n" +
        "        <option>扣下悬刀</option>\n" +
        "        <option>电涌保护器</option>\n" +
        "        <option>上天入地</option>\n" +
        "        <option>潜行100级</option>\n" +
        "        <option>甜蜜的梦</option>\n" +
        "        <option>村庄英雄</option>\n" +
        "        <option>那是气球吗？</option>\n" +
        "        <option>抖包袱</option>\n" +
        "        <option>它蔓延了</option>\n" +
        "        <option>瞄准目标</option>\n" +
        "        <option>资深怪物猎人</option>\n" +
        "        <option>超越生死</option>\n" +
        "        <option>招募援兵</option>\n" +
        "        <option>星际商人</option>\n" +
        "        <option>一箭双雕</option>\n" +
        "        <option>现在谁才是掠夺者</option>\n" +
        "        <option>劲弩手</option>\n" +
        "        <option>探索的时光</option>\n" +
        "        <option>音乐之声</option>\n" +
        "        <option>轻功雪上飘</option>\n" +
        "        <option>那是飞机吗？</option>\n" +
        "        <option>魔女审判</option>\n" +
        "        <option>狙击手的对决</option>\n" +
        "        <option>正中靶心</option>\n" +
        "        <option>农牧业</option>\n" +
        "        <option>与蜂共舞</option>\n" +
        "        <option>我从哪儿来？</option>\n" +
        "        <option>找到一个好朋友</option>\n" +
        "        <option>羊帆起航</option>\n" +
        "        <option>永恒的伙伴</option>\n" +
        "        <option>眼前一亮！</option>\n" +
        "        <option>腥味十足的生意</option>\n" +
        "        <option>举巢搬迁</option>\n" +
        "        <option>蚪到桶里来</option>\n" +
        "        <option>开荒垦地</option>\n" +
        "        <option>涂蜡</option>\n" +
        "        <option>成双成对</option>\n" +
        "        <option>生日快乐歌</option>\n" +
        "        <option>百猫全书</option>\n" +
        "        <option>战术性钓鱼</option>\n" +
        "        <option>呱呱队出动</option>\n" +
        "        <option>均衡饮食</option>\n" +
        "        <option>终极奉献</option>\n" +
        "        <option>脱蜡</option>\n" +
        "        <option>最萌捕食者</option>\n" +
        "        <option>相映生辉！</option>\n" +
        "        <option>友谊的治愈力！</option>\n" +
        "    </select>\n" +
        "</label>\n" +
        "<br><button class='finish' onclick=\"gen_advancement()\">开始生成</button></div>";
}

export function com_me(){
    document.getElementById("gen").innerHTML = "<div id='com'><h2>/me指令：发送关于自己的信息</h2>\n" +
        "<p>消息：</p>\n" +
        "<label>\n" +
        "    <input id=\"action\" type=\"text\">\n" +
        "</label>\n" +
        "<br><button class=\"finish\" onclick=\"gen_me()\">开始生成</button></div>";
}

export function com_kick() {
    document.getElementById("gen").innerHTML = "<div id='com'><h2>/kick指令：将玩家踢出游戏</h2>\n" +
        "<p>目标玩家名或选择器：</p>\n" +
        "<label>\n" +
        "    <select id=\"player\">\n" +
        "        <option>@a</option>\n" +
        "        <option>@r</option>\n" +
        "        <option>@s</option>\n" +
        "        <option>指定玩家名或自定义选择器</option>\n" +
        "        <option id=\"setName\"></option>" +
        "    </select>\n" +
        "</label>\n" +
        "<p>原因（可不填）：</p>\n" +
        "<label>\n" +
        "    <input id=\"reason\" type=\"text\">\n" +
        "</label>\n" +
        "<script>\n" +
        "    document.getElementById(\"reason\").value = \" \";\n" +
        "</script>\n" +
        "<br><button class=\"finish\" onclick=\"gen_kick()\">开始生成</button></div>";
}

export function com_msg() {
    document.getElementById("gen").innerHTML = "<div id='com'><h2>/msg指令：给指定玩家偷偷发消息</h2>\n" +
        "<p>目标玩家名或选择器：</p>\n" +
        "<label>\n" +
        "    <select id=\"target\">\n" +
        "        <option>@a</option>\n" +
        "        <option>@r</option>\n" +
        "        <option>@s</option>\n" +
        "        <option id=\"playerName\">指定玩家名或自定义选择器</option>\n" +
        "        <option id=\"setName\"></option>\n" +
        "    </select>\n" +
        "</label>\n" +
        "<p>发送的消息：</p>\n" +
        "<label>\n" +
        "    <input id=\"message\" type=\"text\">\n" +
        "</label>\n" +
        "<script>\n" +
        "    document.getElementById(\"message\").value = \" \";\n" +
        "</script>\n" +
        "<br><button class=\"finish\" onclick=\"gen_msg()\">开始生成</button></div>";
}

export function com_w() {
    document.getElementById("gen").innerHTML = "<div id='com'><h2>/w指令：给指定玩家偷偷发消息</h2>\n" +
        "<p>目标玩家名或选择器：</p>\n" +
        "<label>\n" +
        "    <select id=\"target\">\n" +
        "        <option>@a</option>\n" +
        "        <option>@r</option>\n" +
        "        <option>@s</option>\n" +
        "        <option>指定玩家名或自定义选择器</option>\n" +
        "        <option id=\"setName\"></option>\n" +
        "    </select>\n" +
        "</label>\n" +
        "<p>发送的消息：</p>\n" +
        "<label>\n" +
        "    <input id=\"message\" type=\"text\">\n" +
        "</label>\n" +
        "<script>\n" +
        "    document.getElementById(\"message\").value = \" \";\n" +
        "</script>\n" +
        "<br><button class=\"finish\" onclick=\"gen_w()\">开始生成</button></div>";
}

export function com_tell() {
    document.getElementById("gen").innerHTML = "<div id='com'><h2>/tell指令：给指定玩家偷偷发消息</h2>\n" +
        "<p>目标玩家名或选择器：</p>\n" +
        "<label>\n" +
        "    <select id=\"target\">\n" +
        "        <option>@a</option>\n" +
        "        <option>@r</option>\n" +
        "        <option>@s</option>\n" +
        "        <option>指定玩家名或自定义选择器</option>\n" +
        "        <option id=\"setName\"></option>\n" +
        "    </select>\n" +
        "</label>\n" +
        "<p>发送的消息：</p>\n" +
        "<label>\n" +
        "    <input id=\"message\" type=\"text\">\n" +
        "</label>\n" +
        "<script>\n" +
        "    document.getElementById(\"message\").value = \" \";\n" +
        "</script>\n" +
        "<br><button class=\"finish\" onclick=\"gen_tell()\">开始生成</button></div>";
}

export function com_jfr() {
    document.getElementById("gen").innerHTML = "<div id='com'><h2>/jfr指令：使用Java FlightRecorder分析数据和某些自定义事件。</h2>\n" +
        "<p>执行动作：</p>\n" +
        "<label>\n" +
        "    <select id=\"args\">\n" +
        "        <option>开始</option>\n" +
        "        <option>停止</option>\n" +
        "    </select>\n" +
        "</label>\n" +
        "<br><button class=\"finish\" onclick=\"gen_jfr()\">OK</button></div>";
}

export function com_say() {
    document.getElementById("gen").innerHTML = "<div id='com'><h2>/say指令：发送一条信息</h2>\n" +
        "<p>消息：</p>\n" +
        "<label>\n" +
        "    <input id=\"message\" type=\"text\">\n" +
        "</label>\n" +
        "<br><button class=\"finish\" onclick=\"gen_say()\">开始生成</button></div>";
}

export function com_publish() {
    document.getElementById("gen").innerHTML = "<div id='com'><h2>/publish指令：开放局域网游戏</h2>\n" +
        "<p>端口（可不填）：</p>\n" +
        "<label>\n" +
        "    <input id=\"port\" type=\"text\">\n" +
        "</label>\n" +
        "<br><button class=\"finish\" onclick=\"gen_publish()\">开始生成</button></div>";
}

export function com_defaultgamemode() {
    document.getElementById("gen").innerHTML = "<div id='com'><h2>/defaultgamemode指令：修改默认游戏模式</h2>\n" +
        "<p>游戏模式：</p>\n" +
        "<label>\n" +
        "    <select id=\"mode\">\n" +
        "        <option>创造模式</option>\n" +
        "        <option>生存模式</option>\n" +
        "        <option>冒险模式</option>\n" +
        "        <option>旁观者模式</option>\n" +
        "    </select>\n" +
        "</label>\n" +
        "<br><button class=\"finish\" onclick=\"gen_defaultgamemode()\">开始生成</button></div>";
}

export function com_gamemode() {
    document.getElementById("gen").innerHTML = "<div id='com'><h2>/gamemode指令：修改玩家当前游戏模式</h2>\n" +
        "<p>游戏模式：</p>\n" +
        "<label>\n" +
        "    <select id=\"mode\">\n" +
        "        <option>创造模式</option>\n" +
        "        <option>生存模式</option>\n" +
        "        <option>冒险模式</option>\n" +
        "        <option>旁观者模式</option>\n" +
        "    </select>\n" +
        "</label>\n" +
        "<p>目标玩家名或选择器：</p>\n" +
        "<label>\n" +
        "    <select id=\"target\">\n" +
        "        <option>@a</option>\n" +
        "        <option>@r</option>\n" +
        "        <option>@s</option>\n" +
        "        <option>指定玩家名或自定义选择器</option>\n" +
        "        <option id=\"setName\"></option>\n" +
        "    </select>\n" +
        "</label>\n" +
        "<br><button class=\"finish\" onclick=\"gen_gamemode()\">开始生成</button></div>";
}

export function com_weather() {
    document.getElementById("gen").innerHTML = "<div id='com'><h2>/weather指令：更改天气</h2>\n" +
        "<p>天气类型：</p>\n" +
        "<label>\n" +
        "    <select id=\"weather\">\n" +
        "        <option>晴天</option>\n" +
        "        <option>下雨</option>\n" +
        "        <option>雷雨</option>\n" +
        "    </select>\n" +
        "</label>\n" +
        "<p>持续时间（可不填）：</p>\n" +
        "<label>\n" +
        "    <input type=\"text\" id=\"duration\">\n" +
        "</label>\n" +
        "<br><button class=\"finish\" onclick=\"gen_weather()\">开始生成</button></div>";
}

export function com_tag() {
    document.getElementById("gen").innerHTML = "<div id=\"com\">\n" +
        "\t<h2>/tag指令：管理储存实体的标签</h2>\n" +
        "\t<p>目标玩家名或选择器：</p>\n" +
        "\t<label>\n" +
        "\t    <select id=\"target\">\n" +
        "\t        <option>@a</option>\n" +
        "\t        <option>@r</option>\n" +
        "\t        <option>@s</option>\n" +
        "\t        <option id=\"playerName\">指定玩家名</option>\n" +
        "\t        <option id=\"setName\"></option>\n" +
        "\t    </select>\n" +
        "\t</label>\n" +
        "\t<p>执行动作：</p>\n" +
        "\t<label>\n" +
        "\t\t<select id=\"arg1\" onclick='check_tag()'>\n" +
        "\t\t\t<option>列出所有</option>\n" +
        "\t\t\t<option>添加</option>\n" +
        "\t\t\t<option>删除</option>\n" +
        "\t\t</select>\n" +
        "\t</label>\n" +
        "\t<p>标签名：</p>\n" +
        "\t<label>\n" +
        "\t\t<input id=\"args\" type=\"text\"/>\n" +
        "\t</label>\n" +
        "\t<br><button class=\"finish\" onclick=\"gen_tag()\">开始生成</button>\n" +
        "</div>";
}

export function load_locate() {
    let options = {
        "兴趣点": "<option>高炉</option>\n" +
            "            <option>蜂巢</option>\n" +
            "            <option>蜂箱</option>\n" +
            "            <option>烟熏炉</option>\n" +
            "            <option>制图台</option>\n" +
            "            <option>酿造台</option>\n" +
            "            <option>堆肥桶</option>\n" +
            "            <option>木桶</option>\n" +
            "            <option>制箭台</option>\n" +
            "            <option>床</option>\n" +
            "            <option>炼药锅</option>\n" +
            "            <option>讲台</option>\n" +
            "            <option>避雷针</option>\n" +
            "            <option>磁石</option>\n" +
            "            <option>切石机</option>\n" +
            "            <option>钟</option>\n" +
            "            <option>下界传送门</option>\n" +
            "            <option>织布机</option>\n" +
            "            <option>锻造台</option>\n" +
            "            <option>砂轮</option>",
        "生物群系": "<option>虚空</option>\n" +
            "<option>平原</option>\n" +
            "<option>向日葵平原</option>\n" +
            "<option>积雪的平原</option>\n" +
            "<option>冰刺平原</option>\n" +
            "<option>沙漠</option>\n" +
            "<option>沼泽</option>\n" +
            "<option>红树林沼泽</option>\n" +
            "<option>森林</option>\n" +
            "<option>繁花森林</option>\n" +
            "<option>桦木森林</option>\n" +
            "<option>黑森林</option>\n" +
            "<option>原始桦木森林</option>\n" +
            "<option>原始松木针叶林</option>\n" +
            "<option>原始云杉针叶林</option>\n" +
            "<option>针叶林</option>\n" +
            "<option>积雪的针叶林</option>\n" +
            "<option>热带草原</option>\n" +
            "<option>热带高原</option>\n" +
            "<option>风袭丘陵</option>\n" +
            "<option>风袭沙砾丘陵</option>\n" +
            "<option>风袭森林</option>\n" +
            "<option>风袭热带草原</option>\n" +
            "<option>丛林</option>\n" +
            "<option>稀疏的丛林</option>\n" +
            "<option>竹林</option>\n" +
            "<option>恶地</option>\n" +
            "<option>被风蚀的恶地</option>\n" +
            "<option>草甸</option>\n" +
            "<option>雪林</option>\n" +
            "<option>积雪的山坡</option>\n" +
            "<option>冰封山峰</option>\n" +
            "<option>尖峭山峰</option>\n" +
            "<option>裸岩山峰</option>\n" +
            "<option>河流</option>\n" +
            "<option>冻河</option>\n" +
            "<option>沙滩</option>\n" +
            "<option>积雪的沙滩</option>\n" +
            "<option>石岸</option>\n" +
            "<option>暖水海洋</option>\n" +
            "<option>温水海洋</option>\n" +
            "<option>温水深海</option>\n" +
            "<option>海洋</option>\n" +
            "<option>深海</option>\n" +
            "<option>冷水海洋</option>\n" +
            "<option>冷水深海</option>\n" +
            "<option>冻洋</option>\n" +
            "<option>冰冻深海</option>\n" +
            "<option>蘑菇岛</option>\n" +
            "<option>溶洞</option>\n" +
            "<option>繁茂洞穴</option>\n" +
            "<option>深暗之域</option>\n" +
            "<option>下界荒地</option>\n" +
            "<option>诡异森林</option>\n" +
            "<option>绯红森林</option>\n" +
            "<option>灵魂沙峡谷</option>\n" +
            "<option>玄武岩三角洲</option>\n" +
            "<option>末地</option>\n" +
            "<option>末地高地</option>\n" +
            "<option>末地内陆</option>\n" +
            "<option>末地小型岛屿</option>\n" +
            "<option>末地荒地</option>",
        "建筑结构": "<option>丛林神庙</option>\n" +
            "<option>村庄</option>\n" +
            "<option>末地城</option>\n" +
            "<option>废弃传送门</option>\n" +
            "<option>雪屋</option>\n" +
            "<option>要塞</option>\n" +
            "<option>堡垒遗迹</option>\n" +
            "<option>沙漠神殿</option>\n" +
            "<option>下界化石</option>\n" +
            "<option>埋藏的宝藏</option>\n" +
            "<option>林地府邸</option>\n" +
            "<option>沉船</option>\n" +
            "<option>海底神殿</option>\n" +
            "<option>沼泽小屋</option>\n" +
            "<option>下界要塞</option>\n" +
            "<option>掠夺者前哨站</option>\n" +
            "<option>海底废墟</option>\n" +
            "<option>废弃矿井</option>"
    }

    document.getElementById("sid").innerHTML = options[document.getElementById("args").value];
}

export function com_locate() {
    document.getElementById("gen").innerHTML = "<div id=\"com\">\n" +
        "\t<h2>/locate指令：寻找最近的指定类型结构</h2>\n" +
        "\t<p>结构类型：</p>\n" +
        "    <label>\n" +
        "        <select id=\"args\" onclick=\"load_locate()\">\n" +
        "            <option>兴趣点</option>\n" +
        "            <option>生物群系</option>\n" +
        "            <option>建筑结构</option>\n" +
        "        </select>\n" +
        "    </label>\n" +
        "    <p>结构ID：</p>\n" +
        "    <label>\n" +
        "        <select id=\"sid\">\n" +
        "            <option>高炉</option>\n" +
        "            <option>蜂巢</option>\n" +
        "            <option>蜂箱</option>\n" +
        "            <option>烟熏炉</option>\n" +
        "            <option>制图台</option>\n" +
        "            <option>酿造台</option>\n" +
        "            <option>堆肥桶</option>\n" +
        "            <option>木桶</option>\n" +
        "            <option>制箭台</option>\n" +
        "            <option>床</option>\n" +
        "            <option>炼药锅</option>\n" +
        "            <option>讲台</option>\n" +
        "            <option>避雷针</option>\n" +
        "            <option>磁石</option>\n" +
        "            <option>切石机</option>\n" +
        "            <option>钟</option>\n" +
        "            <option>下界传送门</option>\n" +
        "            <option>织布机</option>\n" +
        "            <option>锻造台</option>\n" +
        "            <option>砂轮</option>\n" +
        "        </select>\n" +
        "    </label>\n" +
        "\t<br><button class=\"finish\" onclick=\"gen_locate()\">开始生成</button>\n" +
        "</div>";
}

export function com_selector() {
    document.getElementById("gen").innerHTML = "<div id=\"com\">\n" +
        "    <h2>选择器：用于选择目标实体</h2>\n" +
        "    <p>下面的参数不一定要全部填，按自己需求填入即可</p>\n" +
        "    <p>选择器类型：</p>\n" +
        "    <label>\n" +
        "        <select id=\"selectorType\">\n" +
        "            <option>@e</option>\n" +
        "            <option>@a</option>\n" +
        "            <option>@r</option>\n" +
        "            <option>@s</option>\n" +
        "            <option>@p</option>\n" +
        "        </select>\n" +
        "        <p>@e: 表示全部实体</p>\n" +
        "        <p>@a: 表示全部玩家</p>\n" +
        "        <p>@r: 表示随机玩家</p>\n" +
        "        <p>@s: 表示当前指令执行者</p>\n" +
        "        <p>@p: 表示离执行者最近的玩家</p>\n" +
        "    </label>\n" +
        "    <p>&nbsp;</p>\n" +
        "    <button value=\"false\" id=\"disabledType\" style=\"background: #ff4545;border: none;width: auto;height: 25px\" onclick=\"let l = new SelectorLoads();l.canalType(this)\">取消该参数</button>\n" +
        "    <p>实体类型：</p>\n" +
        "    <p>选择指定类型的实体</p>\n" +
        "    <div id=\"entityTypes\">\n" +
        "        <label>\n" +
        "            <p>实体类型：</p>\n" +
        "            <select id=\"type\">\n" +
        "                <option>悦灵</option>\n" +
        "                <option>烈焰人</option>\n" +
        "                <option>洞穴蜘蛛</option>\n" +
        "                <option>苦力怕</option>\n" +
        "                <option>溺尸</option>\n" +
        "                <option>远古守卫者</option>\n" +
        "                <option>末影龙</option>\n" +
        "                <option>末影人</option>\n" +
        "                <option>末影螨</option>\n" +
        "                <option>唤魔者</option>\n" +
        "                <option>恶魂</option>\n" +
        "                <option>巨人</option>\n" +
        "                <option>守卫者</option>\n" +
        "                <option>疣猪兽</option>\n" +
        "                <option>尸壳</option>\n" +
        "                <option>劫掠兽</option>\n" +
        "                <option>幻术师</option>\n" +
        "                <option>岩浆怪</option>\n" +
        "                <option>幻翼</option>\n" +
        "                <option>猪灵</option>\n" +
        "                <option>猪灵蛮兵</option>\n" +
        "                <option>掠夺者</option>\n" +
        "                <option>河豚</option>\n" +
        "                <option>劫掠兽</option>\n" +
        "                <option>潜影贝</option>\n" +
        "                <option>蠹虫</option>\n" +
        "                <option>骷髅</option>\n" +
        "                <option>史莱姆</option>\n" +
        "                <option>蜘蛛</option>\n" +
        "                <option>流浪者</option>\n" +
        "                <option>恼鬼</option>\n" +
        "                <option>卫道士</option>\n" +
        "                <option>监守者</option>\n" +
        "                <option>女巫</option>\n" +
        "                <option>凋灵</option>\n" +
        "                <option>凋灵骷髅</option>\n" +
        "                <option>僵尸</option>\n" +
        "                <option>僵尸村民</option>\n" +
        "                <option>僵尸猪灵</option>\n" +
        "                <option>僵尸疣猪兽</option>\n" +
        "                <option>美西螈</option>\n" +
        "                <option>蝙蝠</option>\n" +
        "                <option>猫</option>\n" +
        "                <option>鸡</option>\n" +
        "                <option>鳕鱼</option>\n" +
        "                <option>牛</option>\n" +
        "                <option>海豚</option>\n" +
        "                <option>驴</option>\n" +
        "                <option>青蛙</option>\n" +
        "                <option>发光鱿鱼</option>\n" +
        "                <option>山羊</option>\n" +
        "                <option>马</option>\n" +
        "                <option>铁傀儡</option>\n" +
        "                <option>羊驼</option>\n" +
        "                <option>哞菇</option>\n" +
        "                <option>骡</option>\n" +
        "                <option>豹猫</option>\n" +
        "                <option>熊猫</option>\n" +
        "                <option>鹦鹉</option>\n" +
        "                <option>猪</option>\n" +
        "                <option>北极熊</option>\n" +
        "                <option>兔子</option>\n" +
        "                <option>鲑鱼</option>\n" +
        "                <option>绵羊</option>\n" +
        "                <option>骷髅马</option>\n" +
        "                <option>雪傀儡</option>\n" +
        "                <option>鱿鱼</option>\n" +
        "                <option>蝌蚪</option>\n" +
        "                <option>热带鱼</option>\n" +
        "                <option>海龟</option>\n" +
        "                <option>村民</option>\n" +
        "                <option>狼</option>\n" +
        "                <option>僵尸马</option>\n" +
        "                <option>区域效果云</option>\n" +
        "                <option>拴绳</option>\n" +
        "                <option>盔甲架</option>\n" +
        "                <option>唤魔者尖牙</option>\n" +
        "                <option>末地水晶</option>\n" +
        "                <option>掷出的鸡蛋</option>\n" +
        "                <option>射出的箭或药箭</option>\n" +
        "                <option>射出的光灵箭\"</option>\n" +
        "                <option>三叉戟</option>\n" +
        "                <option>掷出的雪球</option>\n" +
        "                <option>恶魂火球</option>\n" +
        "                <option>烈焰人火球或火焰弹</option>\n" +
        "                <option>掷出的末影珍珠</option>\n" +
        "                <option>物品</option>\n" +
        "                <option>物品展示框</option>\n" +
        "                <option>荧光物品展示框</option>\n" +
        "                <option>掷出的末影之眼</option>\n" +
        "                <option>掷出的药水</option>\n" +
        "                <option>掷出的附魔之瓶</option>\n" +
        "                <option>凋灵之首</option>\n" +
        "                <option>烟花火箭</option>\n" +
        "                <option>潜影贝导弹</option>\n" +
        "                <option>末影龙火球</option>\n" +
        "                <option>羊驼的口水</option>\n" +
        "                <option>船</option>\n" +
        "                <option>运输船</option>\n" +
        "                <option>矿车</option>\n" +
        "                <option>运输矿车</option>\n" +
        "                <option>动力矿车</option>\n" +
        "                <option>TNT矿车</option>\n" +
        "                <option>漏斗矿车</option>\n" +
        "                <option>命令方块矿车</option>\n" +
        "                <option>刷怪笼矿车</option>\n" +
        "                <option>激活的TNT</option>\n" +
        "                <option>掉落中的方块</option>\n" +
        "                <option>经验球</option>\n" +
        "            </select>\n" +
        "        </label>\n" +
        "    </div>\n" +
        "    <p>&nbsp;</p>\n" +
        "    <p>选择器参数：</p>\n" +
        "    <p>坐标：</p>\n" +
        "    <p>在世界上定义一个点</p>\n" +
        "    <label>\n" +
        "        <p>X:</p>\n" +
        "        <input type=\"number\" id=\"posX\">\n" +
        "        <p>Y:</p>\n" +
        "        <input type=\"number\" id=\"posY\">\n" +
        "        <p>Z:</p>\n" +
        "        <input type=\"number\" id=\"posZ\">\n" +
        "    </label>\n" +
        "    <p>&nbsp;</p>\n" +
        "    <p>距离：</p>\n" +
        "    <p>从指令执行者的一个半径距离</p>\n" +
        "    <label>\n" +
        "        <p>直线距离：</p>\n" +
        "        <input type=\"number\" id=\"distance\">\n" +
        "    </label>\n" +
        "    <p>&nbsp;</p>\n" +
        "    <p>体积尺寸(需搭配坐标使用)：</p>\n" +
        "    <P>从定义的点到该参数定义的点的一个长方体范围</P>\n" +
        "    <label>\n" +
        "        <p>dx:</p>\n" +
        "        <input type=\"number\" id=\"dx\">\n" +
        "        <p>dy:</p>\n" +
        "        <input type=\"number\" id=\"dy\">\n" +
        "        <P>dz:</P>\n" +
        "        <input type=\"number\" id=\"dz\">\n" +
        "    </label>\n" +
        "    <p>&nbsp;</p>\n" +
        "    <p>计分板分数：</p>\n" +
        "    <p>选择目标为指定计分板分数的实体</p>\n" +
        "    <p>如果分数不填默认取消</p>\n" +
        "    <label>\n" +
        "        <p>计分板名称：</p>\n" +
        "        <input type=\"text\" id=\"socreboardName\">\n" +
        "        <p>分数选择类型：</p>\n" +
        "        <select id=\"scoreType\" onclick=\"let l = new SelectorLoads();l.secondScoreDisplay()\">\n" +
        "            <option>等于指定分数</option>\n" +
        "            <option>选择\"分数1\"到\"分数2\"之间的分数</option>\n" +
        "            <option>选择大于指定分数以上的分数</option>\n" +
        "            <option>选择小于指定分数以下的分数</option>\n" +
        "            <option>选择不是指定分数的实体</option>\n" +
        "        </select>\n" +
        "        <p>分数：</p>\n" +
        "        <input type=\"number\" id=\"targetScore\">\n" +
        "        <div id=\"score2\" value=\"false\" style=\"display: none\">\n" +
        "            <p>分数2：</p>\n" +
        "            <input type=\"number\" id=\"targetScore2\">\n" +
        "        </div>\n" +
        "    </label>\n" +
        "    <p>&nbsp;</p>\n" +
        "    <p>实体标签：</p>\n" +
        "    <p>选择含有指定标签的实体</p>\n" +
        "    <label>\n" +
        "        <p>标签名称：</p>\n" +
        "        <input type=\"text\" id=\"tagName\">\n" +
        "        <p>小提示：如果要选择没有该标签的实体可以在该标签的名字前面加上!，如果要选择多标签可以在标签名称加上\"tag=标签名称\"，每个中间用\",\"分隔</p>\n" +
        "    </label>\n" +
        "    <p>&nbsp;</p>\n" +
        "    <p>队伍：</p>\n" +
        "    <p>选择属于指定队伍的实体，每个实体只能属于一个队伍</p>\n" +
        "    <label>\n" +
        "        <p>队伍名称:</p>\n" +
        "        <input type=\"text\" id=\"teamName\">\n" +
        "        <p>小提示：如果要选择不属于指定队伍的实体可以在该队伍的名字前面加上!</p>\n" +
        "    </label>\n" +
        "    <p>&nbsp;</p>\n" +
        "    <p>名字：</p>\n" +
        "    <p>选择指定名字的实体，生物的名字是玩家用命名牌命名或修改nbt命名的</p>\n" +
        "    <label>\n" +
        "        <p>名字:</p>\n" +
        "        <input type=\"text\" id=\"entityName\">\n" +
        "        <p>小提示：如果要选择不是该名字的实体可以在指定的名字前面加上!</p>\n" +
        "    </label>\n" +
        "    <p>&nbsp;</p>\n" +
        "    <p>谓词：</p>\n" +
        "    <p>选择匹配指定谓词的实体</p>\n" +
        "    <label>\n" +
        "        <p>谓词名：</p>\n" +
        "        <input type=\"text\" id=\"predicateName\">\n" +
        "        <p>小提示：如果要选择不是该谓词的实体可以在指定的谓词前面加上!</p>\n" +
        "    </label>\n" +
        "    <p>&nbsp;</p>\n" +
        "    <p>旋转角度：</p>\n" +
        "    <p>选择指定选择角度的实体，并非需全部填写</p>\n" +
        "    <label>\n" +
        "        <p>垂直旋转角度：</p>\n" +
        "        <input type=\"number\" id=\"rotationX\">\n" +
        "        <p>水平选择角度：</p>\n" +
        "        <input type=\"number\" id=\"rotationY\">\n" +
        "    </label>\n" +
        "    <p>&nbsp;</p>\n" +
        "    <p>NBT标签：</p>\n" +
        "    <p>选择含有指定NBT标签的实体</p>\n" +
        "    <label>\n" +
        "        <p>NBT标签：</p>\n" +
        "        <input type=\"text\" id=\"nbt\">\n" +
        "    </label>\n" +
        "    <p>&nbsp;</p>\n" +
        "    <p>经验等级：</p>\n" +
        "    <p>选择指定经验等级的玩家</p>\n" +
        "    <label>\n" +
        "        <p>经验等级选择类型：</p>\n" +
        "        <select id=\"levelType\" onclick=\"let l = new SelectorLoads();l.secondLevelDisplay()\">\n" +
        "            <option>等于指定经验等级</option>\n" +
        "            <option>选择\"等级1\"到\"等级2\"之间的等级</option>\n" +
        "            <option>选择至少为指定等级的等级</option>\n" +
        "            <option>选择最多为指定等级的等级</option>\n" +
        "        </select>\n" +
        "        <p>等级：</p>\n" +
        "        <input type=\"number\" id=\"targetLevel\">\n" +
        "        <div id=\"level2\" value=\"false\" style=\"display: none\">\n" +
        "            <p>等级2：</p>\n" +
        "            <input type=\"number\" id=\"targetLevel2\">\n" +
        "        </div>\n" +
        "    </label>\n" +
        "    <p>&nbsp;</p>\n" +
        "    <button value=\"false\" style=\"background: #ff4545;border: none;width: auto;height: 25px\" onclick=\"let l = new SelectorLoads();l.canalMode(this)\" id=\"canalGamemode\">取消该参数</button>\n" +
        "    <p>游戏模式：</p>\n" +
        "    <p>选择指定游戏模式的玩家</p>\n" +
        "    <div id=\"mode\">\n" +
        "        <label>\n" +
        "            <p>游戏模式：</p>\n" +
        "            <select id=\"gamemode\">\n" +
        "                <option>创造模式</option>\n" +
        "                <option>生存模式</option>\n" +
        "                <option>冒险模式</option>\n" +
        "                <option>旁观者模式</option>\n" +
        "            </select>\n" +
        "            <button style=\"background: #ff4545;border: none;width: auto;height: 25px\" value=\"false\"\n" +
        "                    onclick=\"let l = new SelectorLoads();l.clickNotMode(this)\">选择不是该模式的玩家\n" +
        "            </button>\n" +
        "        </label>\n" +
        "    </div>\n" +
        "    <p>&nbsp;</p>\n" +
        "    <button value=\"false\" id=\"canalAdvancement\" style=\"background: #ff4545;border: none;width: auto;height: 25px\" onclick=\"let l = new SelectorLoads();l.canalAdvancements(this)\">取消该参数</button>\n" +
        "    <p>成就：</p>\n" +
        "    <p>选择达成或未达成指定成就的玩家</p>\n" +
        "    <div id=\"advancementArgs\">\n" +
        "        <label>\n" +
        "            <P>成就：</P>\n" +
        "            <select id=\"advancements\">\n" +
        "                <option>Minecraft</option>\n" +
        "                <option>石器时代</option>\n" +
        "                <option>获得升级</option>\n" +
        "                <option>来硬的</option>\n" +
        "                <option>整装上阵</option>\n" +
        "                <option>热腾腾的</option>\n" +
        "                <option>这不是铁镐么</option>\n" +
        "                <option>不吃这套，谢谢</option>\n" +
        "                <option>冰桶挑战</option>\n" +
        "                <option>钻石！</option>\n" +
        "                <option>勇往直下</option>\n" +
        "                <option>钻石护体</option>\n" +
        "                <option>附魔师</option>\n" +
        "                <option>僵尸科医生</option>\n" +
        "                <option>隔墙有眼</option>\n" +
        "                <option>结束了？</option>\n" +
        "                <option>下界</option>\n" +
        "                <option>见鬼去吧</option>\n" +
        "                <option>光辉岁月</option>\n" +
        "                <option>深藏不露</option>\n" +
        "                <option>曲速泡</option>\n" +
        "                <option>阴森的要塞</option>\n" +
        "                <option>谁在切洋葱？</option>\n" +
        "                <option>金光闪闪</option>\n" +
        "                <option>画船添足</option>\n" +
        "                <option>脆弱的同盟</option>\n" +
        "                <option>战猪</option>\n" +
        "                <option>天涯共此石</option>\n" +
        "                <option>残骸裹身</option>\n" +
        "                <option>惊悚恐怖骷髅头</option>\n" +
        "                <option>与火共舞</option>\n" +
        "                <option>锚没有九条命</option>\n" +
        "                <option>温暖如家</option>\n" +
        "                <option>热门景点</option>\n" +
        "                <option>凋零山庄</option>\n" +
        "                <option>本地酿造厂</option>\n" +
        "                <option>带信标回家</option>\n" +
        "                <option>狂乱的鸡尾酒</option>\n" +
        "                <option>信标工程师</option>\n" +
        "                <option>为什么会变成这样呢</option>\n" +
        "                <option>末地</option>\n" +
        "                <option>解放末地</option>\n" +
        "                <option>下一世代</option>\n" +
        "                <option>远程折跃</option>\n" +
        "                <option>结束了...再一次...</option>\n" +
        "                <option>你需要来点薄荷糖</option>\n" +
        "                <option>在游戏尽头的城市</option>\n" +
        "                <option>天空即为极限</option>\n" +
        "                <option>这上面的风景不错</option>\n" +
        "                <option>冒险</option>\n" +
        "                <option>自我放逐</option>\n" +
        "                <option>那是鸟吗？</option>\n" +
        "                <option>怪物猎人</option>\n" +
        "                <option>成交！</option>\n" +
        "                <option>胶着状态</option>\n" +
        "                <option>扣下悬刀</option>\n" +
        "                <option>电涌保护器</option>\n" +
        "                <option>上天入地</option>\n" +
        "                <option>潜行100级</option>\n" +
        "                <option>甜蜜的梦</option>\n" +
        "                <option>村庄英雄</option>\n" +
        "                <option>那是气球吗？</option>\n" +
        "                <option>抖包袱</option>\n" +
        "                <option>它蔓延了</option>\n" +
        "                <option>瞄准目标</option>\n" +
        "                <option>资深怪物猎人</option>\n" +
        "                <option>超越生死</option>\n" +
        "                <option>招募援兵</option>\n" +
        "                <option>星际商人</option>\n" +
        "                <option>一箭双雕</option>\n" +
        "                <option>现在谁才是掠夺者</option>\n" +
        "                <option>劲弩手</option>\n" +
        "                <option>探索的时光</option>\n" +
        "                <option>音乐之声</option>\n" +
        "                <option>轻功雪上飘</option>\n" +
        "                <option>那是飞机吗？</option>\n" +
        "                <option>魔女审判</option>\n" +
        "                <option>狙击手的对决</option>\n" +
        "                <option>正中靶心</option>\n" +
        "                <option>农牧业</option>\n" +
        "                <option>与蜂共舞</option>\n" +
        "                <option>我从哪儿来？</option>\n" +
        "                <option>找到一个好朋友</option>\n" +
        "                <option>羊帆起航</option>\n" +
        "                <option>永恒的伙伴</option>\n" +
        "                <option>眼前一亮！</option>\n" +
        "                <option>腥味十足的生意</option>\n" +
        "                <option>举巢搬迁</option>\n" +
        "                <option>蚪到桶里来</option>\n" +
        "                <option>开荒垦地</option>\n" +
        "                <option>涂蜡</option>\n" +
        "                <option>成双成对</option>\n" +
        "                <option>生日快乐歌</option>\n" +
        "                <option>百猫全书</option>\n" +
        "                <option>战术性钓鱼</option>\n" +
        "                <option>呱呱队出动</option>\n" +
        "                <option>均衡饮食</option>\n" +
        "                <option>终极奉献</option>\n" +
        "                <option>脱蜡</option>\n" +
        "                <option>最萌捕食者</option>\n" +
        "                <option>相映生辉！</option>\n" +
        "                <option>友谊的治愈力！</option>\n" +
        "            </select>\n" +
        "        </label>\n" +
        "        <button id=\"advancementIsOk\" style=\"background: #45FFA2FF;border: none;width: auto;height: 25px\" value=\"true\"\n" +
        "                onclick=\"let l = new SelectorLoads();l.clickAdvancementIsOk(this)\">已达成\n" +
        "        </button>\n" +
        "    </div>\n" +
        "    <p>&nbsp;</p>\n" +
        "    <p>最大实体数量(可不填）：</p>\n" +
        "    <p>选择器的选择最大实体数量</p>\n" +
        "    <label>\n" +
        "        <p>最大实体数量：</p>\n" +
        "        <input type=\"number\" id=\"limit\">\n" +
        "    </label>\n" +
        "    <p>&nbsp;</p>\n" +
        "    <button value=\"false\" id=\"disabledSort\" style=\"background: #ff4545;border: none;width: auto;height: 25px\" onclick=\"let l = new SelectorLoads();l.canalSortMethod(this)\">取消该参数</button>\n" +
        "    <div id=\"SortMethod\">\n" +
        "        <p>选择优先级：</p>\n" +
        "        <p>选择指定排序方法选择实体执行指令</p>\n" +
        "        <p>建议搭配\"最大实体数量\"</p>\n" +
        "        <label>\n" +
        "            <p>优先级：</p>\n" +
        "            <select id=\"sort\">\n" +
        "                <option>由近到远</option>\n" +
        "                <option>由远到近</option>\n" +
        "                <option>随机(@r的默认方式)</option>\n" +
        "                <option>按生成时间由远到近(@a和@e的默认方式)</option>\n" +
        "            </select>\n" +
        "        </label>\n" +
        "    </div>\n" +
        "    <p>&nbsp;</p>\n" +
        "    <br><button class=\"finish\" onclick=\"gen_selector()\">开始生成</button>\n" +
        "</div>";
}

export function com_summon() {
    document.getElementById("gen").innerHTML = "<div id=\"com\">\n" +
        "        <p>/summon指令：生成实体</p>\n" +
        "        <p>实体类型：</p>\n" +
        "        <label>\n" +
        "            <select id=\"entityType\">\n" +
        "                <option>悦灵</option>\n" +
        "                <option>烈焰人</option>\n" +
        "                <option>洞穴蜘蛛</option>\n" +
        "                <option>苦力怕</option>\n" +
        "                <option>溺尸</option>\n" +
        "                <option>远古守卫者</option>\n" +
        "                <option>末影龙</option>\n" +
        "                <option>末影人</option>\n" +
        "                <option>末影螨</option>\n" +
        "                <option>唤魔者</option>\n" +
        "                <option>恶魂</option>\n" +
        "                <option>巨人</option>\n" +
        "                <option>守卫者</option>\n" +
        "                <option>疣猪兽</option>\n" +
        "                <option>尸壳</option>\n" +
        "                <option>劫掠兽</option>\n" +
        "                <option>幻术师</option>\n" +
        "                <option>岩浆怪</option>\n" +
        "                <option>幻翼</option>\n" +
        "                <option>猪灵</option>\n" +
        "                <option>猪灵蛮兵</option>\n" +
        "                <option>掠夺者</option>\n" +
        "                <option>河豚</option>\n" +
        "                <option>劫掠兽</option>\n" +
        "                <option>潜影贝</option>\n" +
        "                <option>蠹虫</option>\n" +
        "                <option>骷髅</option>\n" +
        "                <option>史莱姆</option>\n" +
        "                <option>蜘蛛</option>\n" +
        "                <option>流浪者</option>\n" +
        "                <option>恼鬼</option>\n" +
        "                <option>卫道士</option>\n" +
        "                <option>监守者</option>\n" +
        "                <option>女巫</option>\n" +
        "                <option>凋灵</option>\n" +
        "                <option>凋灵骷髅</option>\n" +
        "                <option>僵尸</option>\n" +
        "                <option>僵尸村民</option>\n" +
        "                <option>僵尸猪灵</option>\n" +
        "                <option>僵尸疣猪兽</option>\n" +
        "                <option>美西螈</option>\n" +
        "                <option>蝙蝠</option>\n" +
        "                <option>猫</option>\n" +
        "                <option>鸡</option>\n" +
        "                <option>鳕鱼</option>\n" +
        "                <option>牛</option>\n" +
        "                <option>海豚</option>\n" +
        "                <option>驴</option>\n" +
        "                <option>青蛙</option>\n" +
        "                <option>发光鱿鱼</option>\n" +
        "                <option>山羊</option>\n" +
        "                <option>马</option>\n" +
        "                <option>铁傀儡</option>\n" +
        "                <option>羊驼</option>\n" +
        "                <option>哞菇</option>\n" +
        "                <option>骡</option>\n" +
        "                <option>豹猫</option>\n" +
        "                <option>熊猫</option>\n" +
        "                <option>鹦鹉</option>\n" +
        "                <option>猪</option>\n" +
        "                <option>北极熊</option>\n" +
        "                <option>兔子</option>\n" +
        "                <option>鲑鱼</option>\n" +
        "                <option>绵羊</option>\n" +
        "                <option>骷髅马</option>\n" +
        "                <option>雪傀儡</option>\n" +
        "                <option>鱿鱼</option>\n" +
        "                <option>蝌蚪</option>\n" +
        "                <option>热带鱼</option>\n" +
        "                <option>海龟</option>\n" +
        "                <option>村民</option>\n" +
        "                <option>狼</option>\n" +
        "                <option>僵尸马</option>\n" +
        "                <option>区域效果云</option>\n" +
        "                <option>拴绳</option>\n" +
        "                <option>盔甲架</option>\n" +
        "                <option>唤魔者尖牙</option>\n" +
        "                <option>末地水晶</option>\n" +
        "                <option>掷出的鸡蛋</option>\n" +
        "                <option>射出的箭或药箭</option>\n" +
        "                <option>射出的光灵箭</option\n" +
        "                <option>三叉戟</option>\n" +
        "                <option>掷出的雪球</option>\n" +
        "                <option>恶魂火球</option>\n" +
        "                <option>烈焰人火球或火焰弹</option>\n" +
        "                <option>掷出的末影珍珠</option>\n" +
        "                <option>物品</option>\n" +
        "                <option>物品展示框</option>\n" +
        "                <option>荧光物品展示框</option>\n" +
        "                <option>掷出的末影之眼</option>\n" +
        "                <option>掷出的药水</option>\n" +
        "                <option>掷出的附魔之瓶</option>\n" +
        "                <option>凋灵之首</option>\n" +
        "                <option>烟花火箭</option>\n" +
        "                <option>潜影贝导弹</option>\n" +
        "                <option>末影龙火球</option>\n" +
        "                <option>羊驼的口水</option>\n" +
        "                <option>船</option>\n" +
        "                <option>运输船</option>\n" +
        "                <option>矿车</option>\n" +
        "                <option>运输矿车</option>\n" +
        "                <option>动力矿车</option>\n" +
        "                <option>TNT矿车</option>\n" +
        "                <option>漏斗矿车</option>\n" +
        "                <option>命令方块矿车</option>\n" +
        "                <option>刷怪笼矿车</option>\n" +
        "                <option>激活的TNT</option>\n" +
        "                <option>掉落中的方块</option>\n" +
        "                <option>经验球</option>\n" +
        "            </select>\n" +
        "            <p>手动输入（如果不填默认为选择，请勿全部输入）：</p>\n" +
        "            <input type=\"text\" id=\"entity2\">\n" +
        "        </label>\n" +
        "        <p>坐标（不填默认生成在执行者当前的坐标）：</p>\n" +
        "        <label>\n" +
        "            <p>X:</p>\n" +
        "            <input type=\"number\" id=\"posX\">\n" +
        "            <p>Y:</p>\n" +
        "            <input type=\"number\" id=\"posY\">\n" +
        "            <p>Z:</p>\n" +
        "            <input type=\"number\" id=\"posZ\">\n" +
        "        </label>\n" +
        "        <p>NBT数据标签（可在生物NBT自定义中生成）</p>\n" +
        "        <label>\n" +
        "            <input type=\"text\" id=\"nbt\">\n" +
        "        </label>\n" +
        "        <br><button class=\"finish\" onclick=\"gen_summon()\">开始生成</button>\n" +
        "    </div>";
}

export function com_seed() {
    document.getElementById("gen").innerHTML = "<div id=\"com\">\n" +
        "    <h2>/seed指令：获取世界种子</h2>\n" +
        "    <br><button class=\"finish\" onclick=\"gen_seed()\">开始生成</button>\n" +
        "</div>";
}

export function canalBuyBItem(button) {
    if (button.value === "false") {
        button.style.background = "#45FFA2FF";
        button.value = true;
        document.getElementById("buyBDisabled").style.display = "none";
        button.innerHTML = "启用该参数";
    } else {
        button.style.background = "#ff4545";
        button.value = false;
        document.getElementById("buyBDisabled").style.display = "block";
        button.innerHTML = "取消该参数";
    }
}

export function com_nbt_villager() {
    document.getElementById("gen").innerHTML = "<div id=\"com\">\n" +
        "    <h2>村民交易自定义</h2>\n" +
        "    <label>\n" +
        "        <p>村民职业:</p>\n" +
        "        <select id=\"profession\">\n" +
        "            <option>农民</option>\n" +
        "            <option>盔甲匠</option>\n" +
        "            <option>屠夫</option>\n" +
        "            <option>制图师</option>\n" +
        "            <option>牧师</option>\n" +
        "            <option>渔夫</option>\n" +
        "            <option>制箭师</option>\n" +
        "            <option>傻子</option>\n" +
        "            <option>皮匠</option>\n" +
        "            <option>图书管理员</option>\n" +
        "            <option>石匠</option>\n" +
        "            <option>失业</option>\n" +
        "            <option>牧羊人</option>\n" +
        "            <option>工具匠</option>\n" +
        "            <option>武器匠</option>\n" +
        "        </select>\n" +
        "        <p>村民类型：</p>\n" +
        "        <p>#: 指的是村民在生物群系的衣服类型</p>\n" +
        "        <select id=\"type\">\n" +
        "            <option>平原</option>\n" +
        "            <option>沙漠</option>\n" +
        "            <option>丛林</option>\n" +
        "            <option>热带草原</option>\n" +
        "            <option>积雪平原</option>\n" +
        "            <option>沼泽</option>\n" +
        "            <option>针叶林</option>\n" +
        "        </select>\n" +
        "        <p>村民职业等级（最大不可超过5）</p>\n" +
        "        <input id=\"level\" type=\"number\">\n" +
        "        <p>最大购买数量（不填默认为1）</p>\n" +
        "        <input id=\"max\" type=\"number\">\n" +
        "        <p>买入的物品：</p>\n" +
        "        <select id=\"buy\">\n" +
        "            <option>铁剑</option>\n" +
        "            <option>铁锹</option>\n" +
        "            <option>铁镐</option>\n" +
        "            <option>铁斧</option>\n" +
        "            <option>铁锄</option>\n" +
        "            <option>木剑</option>\n" +
        "            <option>木锹</option>\n" +
        "            <option>木镐</option>\n" +
        "            <option>木斧</option>\n" +
        "            <option>木锄</option>\n" +
        "            <option>石剑</option>\n" +
        "            <option>石锹</option>\n" +
        "            <option>石镐</option>\n" +
        "            <option>石斧</option>\n" +
        "            <option>石锄</option>\n" +
        "            <option>钻石剑</option>\n" +
        "            <option>钻石锹</option>\n" +
        "            <option>钻石镐</option>\n" +
        "            <option>钻石斧</option>\n" +
        "            <option>钻石锄</option>\n" +
        "            <option>金剑</option>\n" +
        "            <option>金锹</option>\n" +
        "            <option>金镐</option>\n" +
        "            <option>金斧</option>\n" +
        "            <option>金锄</option>\n" +
        "            <option>皮革头盔</option>\n" +
        "            <option>皮革胸甲</option>\n" +
        "            <option>皮革护腿</option>\n" +
        "            <option>皮革靴子</option>\n" +
        "            <option>锁链头盔</option>\n" +
        "            <option>锁链胸甲</option>\n" +
        "            <option>锁链护腿</option>\n" +
        "            <option>锁链靴子</option>\n" +
        "            <option>铁头盔</option>\n" +
        "            <option>铁胸甲</option>\n" +
        "            <option>铁护腿</option>\n" +
        "            <option>铁靴子</option>\n" +
        "            <option>钻石头盔</option>\n" +
        "            <option>钻石胸甲</option>\n" +
        "            <option>钻石护腿</option>\n" +
        "            <option>钻石靴子</option>\n" +
        "            <option>金头盔</option>\n" +
        "            <option>金胸甲</option>\n" +
        "            <option>金护腿</option>\n" +
        "            <option>金靴子</option>\n" +
        "            <option>海龟壳</option>\n" +
        "            <option>鳞甲</option>\n" +
        "            <option>打火石</option>\n" +
        "            <option>弓</option>\n" +
        "            <option>箭</option>\n" +
        "            <option>苹果</option>\n" +
        "            <option>煤炭</option>\n" +
        "            <option>木炭</option>\n" +
        "            <option>钻石</option>\n" +
        "            <option>铁锭</option>\n" +
        "            <option>金锭</option>\n" +
        "            <option>木棍</option>\n" +
        "            <option>碗</option>\n" +
        "            <option>蘑菇煲</option>\n" +
        "            <option>线</option>\n" +
        "            <option>羽毛</option>\n" +
        "            <option>火药</option>\n" +
        "            <option>小麦种子</option>\n" +
        "            <option>小麦</option>\n" +
        "            <option>面包</option>\n" +
        "            <option>燧石</option>\n" +
        "            <option>生猪排</option>\n" +
        "            <option>熟猪排</option>\n" +
        "            <option>画</option>\n" +
        "            <option>金苹果</option>\n" +
        "            <option>附魔金苹果</option>\n" +
        "            <option>桶</option>\n" +
        "            <option>水桶</option>\n" +
        "            <option>熔岩桶</option>\n" +
        "            <option>奶桶</option>\n" +
        "            <option>矿车</option>\n" +
        "            <option>鞍</option>\n" +
        "            <option>红石</option>\n" +
        "            <option>雪球</option>\n" +
        "            <option>橡木船</option>\n" +
        "            <option>云杉木船</option>\n" +
        "            <option>白桦木船</option>\n" +
        "            <option>丛林木船</option>\n" +
        "            <option>金合欢木船</option>\n" +
        "            <option>深色橡木船</option>\n" +
        "            <option>红树木船</option>\n" +
        "            <option>橡木运输船</option>\n" +
        "            <option>云杉木运输船</option>\n" +
        "            <option>白桦木运输船</option>\n" +
        "            <option>丛林木运输船</option>\n" +
        "            <option>金合欢木运输船</option>\n" +
        "            <option>深色橡木运输船</option>\n" +
        "            <option>红树木运输船</option>\n" +
        "            <option>皮革</option>\n" +
        "            <option>河豚桶</option>\n" +
        "            <option>鲑鱼桶</option>\n" +
        "            <option>鳕鱼桶</option>\n" +
        "            <option>热带鱼桶</option>\n" +
        "            <option>红砖</option>\n" +
        "            <option>黏土</option>\n" +
        "            <option>甘蔗</option>\n" +
        "            <option>海带</option>\n" +
        "            <option>纸</option>\n" +
        "            <option>书</option>\n" +
        "            <option>黏液球</option>\n" +
        "            <option>运输矿车</option>\n" +
        "            <option>动力矿车</option>\n" +
        "            <option>TNT矿车</option>\n" +
        "            <option>漏斗矿车</option>\n" +
        "            <option>命令方块矿车</option>\n" +
        "            <option>鸡蛋</option>\n" +
        "            <option>指南针</option>\n" +
        "            <option>追溯指针</option>\n" +
        "            <option>钓鱼竿</option>\n" +
        "            <option>时钟</option>\n" +
        "            <option>荧石粉</option>\n" +
        "            <option>生鳕鱼</option>\n" +
        "            <option>生鲑鱼</option>\n" +
        "            <option>热带鱼</option>\n" +
        "            <option>河豚</option>\n" +
        "            <option>熟鳕鱼</option>\n" +
        "            <option>熟鲑鱼</option>\n" +
        "            <option>蜂蜜瓶</option>\n" +
        "            <option>蜜脾</option>\n" +
        "            <option>墨囊</option>\n" +
        "            <option>红色染料</option>\n" +
        "            <option>绿色染料</option>\n" +
        "            <option>可可豆</option>\n" +
        "            <option>青金石</option>\n" +
        "            <option>紫色染料</option>\n" +
        "            <option>青色染料</option>\n" +
        "            <option>淡灰色染料</option>\n" +
        "            <option>灰色染料</option>\n" +
        "            <option>粉红色染料</option>\n" +
        "            <option>黄绿色染料</option>\n" +
        "            <option>黄色染料</option>\n" +
        "            <option>淡蓝色染料</option>\n" +
        "            <option>品红色染料</option>\n" +
        "            <option>橙色染料</option>\n" +
        "            <option>骨粉</option>\n" +
        "            <option>蓝色染料</option>\n" +
        "            <option>棕色染料</option>\n" +
        "            <option>黑色染料</option>\n" +
        "            <option>白色染料</option>\n" +
        "            <option>骨头</option>\n" +
        "            <option>糖</option>\n" +
        "            <option>曲奇</option>\n" +
        "            <option>剪刀</option>\n" +
        "            <option>西瓜片</option>\n" +
        "            <option>干海带</option>\n" +
        "            <option>南瓜种子</option>\n" +
        "            <option>西瓜种</option>\n" +
        "            <option>生牛肉</option>\n" +
        "            <option>牛排</option>\n" +
        "            <option>生鸡肉</option>\n" +
        "            <option>熟鸡肉</option>\n" +
        "            <option>腐肉</option>\n" +
        "            <option>末影珍珠</option>\n" +
        "            <option>烈焰棒</option>\n" +
        "            <option>恶魂之泪</option>\n" +
        "            <option>金粒</option>\n" +
        "            <option>下界疣</option>\n" +
        "            <option>玻璃瓶</option>\n" +
        "            <option>药水</option>\n" +
        "            <option>喷溅药水</option>\n" +
        "            <option>滞留药水</option>\n" +
        "            <option>药箭</option>\n" +
        "            <option>光灵箭</option>\n" +
        "            <option>蜘蛛眼</option>\n" +
        "            <option>发酵蛛眼</option>\n" +
        "            <option>烈焰粉</option>\n" +
        "            <option>岩浆膏</option>\n" +
        "            <option>末影之眼</option>\n" +
        "            <option>闪烁的西瓜片</option>\n" +
        "            <option>附魔之瓶</option>\n" +
        "            <option>火焰弹</option>\n" +
        "            <option>书与笔</option>\n" +
        "            <option>成书</option>\n" +
        "            <option>绿宝石</option>\n" +
        "            <option>物品展示框</option>\n" +
        "            <option>胡萝卜</option>\n" +
        "            <option>马铃薯</option>\n" +
        "            <option>烤马铃薯</option>\n" +
        "            <option>毒马铃薯</option>\n" +
        "            <option>空地图</option>\n" +
        "            <option>地图或探险家地图</option>\n" +
        "            <option>金胡萝卜</option>\n" +
        "            <option>胡萝卜钓竿</option>\n" +
        "            <option>下界之星</option>\n" +
        "            <option>南瓜派</option>\n" +
        "            <option>烟花火箭</option>\n" +
        "            <option>烟火之星</option>\n" +
        "            <option>附魔书</option>\n" +
        "            <option>下界砖</option>\n" +
        "            <option>下界石英</option>\n" +
        "            <option>海晶碎片</option>\n" +
        "            <option>海晶砂粒</option>\n" +
        "            <option>生兔肉</option>\n" +
        "            <option>熟兔肉</option>\n" +
        "            <option>兔肉煲</option>\n" +
        "            <option>兔子脚</option>\n" +
        "            <option>兔子皮</option>\n" +
        "            <option>盔甲架</option>\n" +
        "            <option>铁马铠</option>\n" +
        "            <option>金马铠</option>\n" +
        "            <option>钻石马铠</option>\n" +
        "            <option>拴绳</option>\n" +
        "            <option>命名牌</option>\n" +
        "            <option>生羊肉</option>\n" +
        "            <option>熟羊肉</option>\n" +
        "            <option>末地水晶</option>\n" +
        "            <option>紫颂果</option>\n" +
        "            <option>爆裂紫颂果</option>\n" +
        "            <option>甜菜根</option>\n" +
        "            <option>甜菜种子</option>\n" +
        "            <option>甜菜汤</option>\n" +
        "            <option>龙息</option>\n" +
        "            <option>盾牌</option>\n" +
        "            <option>鞘翅</option>\n" +
        "            <option>不死图腾</option>\n" +
        "            <option>潜影壳</option>\n" +
        "            <option>铁粒</option>\n" +
        "            <option>知识之书</option>\n" +
        "            <option>三叉戟</option>\n" +
        "            <option>幻翼膜</option>\n" +
        "            <option>鹦鹉螺壳</option>\n" +
        "            <option>海洋之心</option>\n" +
        "            <option>音乐唱片13</option>\n" +
        "            <option>音乐唱片Cat</option>\n" +
        "            <option>音乐唱片Blocks</option>\n" +
        "            <option>音乐唱片Chirp</option>\n" +
        "            <option>音乐唱片Far</option>\n" +
        "            <option>音乐唱片Mall</option>\n" +
        "            <option>音乐唱片Mellohi</option>\n" +
        "            <option>音乐唱片Stal</option>\n" +
        "            <option>音乐唱片Strad</option>\n" +
        "            <option>音乐唱片Ward</option>\n" +
        "            <option>音乐唱片11</option>\n" +
        "            <option>音乐唱片Wait</option>\n" +
        "            <option>调试棒</option>\n" +
        "            <option>蝙蝠刷怪蛋</option>\n" +
        "            <option>蜜蜂刷怪蛋</option>\n" +
        "            <option>烈焰人刷怪蛋</option>\n" +
        "            <option>猫刷怪蛋</option>\n" +
        "            <option>洞穴蜘蛛刷怪蛋</option>\n" +
        "            <option>鸡刷怪蛋</option>\n" +
        "            <option>鳕鱼刷怪蛋</option>\n" +
        "            <option>牛刷怪蛋</option>\n" +
        "            <option>苦力怕刷怪蛋</option>\n" +
        "            <option>海豚刷怪蛋</option>\n" +
        "            <option>骡刷怪蛋</option>\n" +
        "            <option>溺尸刷怪蛋</option>\n" +
        "            <option>远古守卫者刷怪蛋</option>\n" +
        "            <option>末影人刷怪蛋</option>\n" +
        "            <option>末影螨刷怪蛋</option>\n" +
        "            <option>唤魔者刷怪蛋</option>\n" +
        "            <option>青蛙刷怪蛋</option>\n" +
        "            <option>恶魂刷怪蛋</option>\n" +
        "            <option>守卫者刷怪蛋</option>\n" +
        "            <option>马刷怪蛋</option>\n" +
        "            <option>尸壳刷怪蛋</option>\n" +
        "            <option>劫掠兽刷怪蛋</option>\n" +
        "            <option>羊驼刷怪蛋</option>\n" +
        "            <option>岩浆怪刷怪蛋</option>\n" +
        "            <option>哞菇刷怪蛋</option>\n" +
        "            <option>骡刷怪蛋</option>\n" +
        "            <option>豹猫刷怪蛋</option>\n" +
        "            <option>熊猫刷怪蛋</option>\n" +
        "            <option>鹦鹉刷怪蛋</option>\n" +
        "            <option>幻翼刷怪蛋</option>\n" +
        "            <option>猪刷怪蛋</option>\n" +
        "            <option>掠夺者刷怪蛋</option>\n" +
        "            <option>北极熊刷怪蛋</option>\n" +
        "            <option>河豚刷怪蛋</option>\n" +
        "            <option>兔子刷怪蛋</option>\n" +
        "            <option>鲑鱼刷怪蛋</option>\n" +
        "            <option>绵羊刷怪蛋</option>\n" +
        "            <option>潜影贝刷怪蛋</option>\n" +
        "            <option>蠹虫刷怪蛋</option>\n" +
        "            <option>骷髅刷怪蛋</option>\n" +
        "            <option>骷髅马刷怪蛋</option>\n" +
        "            <option>史莱姆刷怪蛋</option>\n" +
        "            <option>蜘蛛刷怪蛋</option>\n" +
        "            <option>鱿鱼刷怪蛋</option>\n" +
        "            <option>流浪者刷怪蛋</option>\n" +
        "            <option>蝌蚪刷怪蛋</option>\n" +
        "            <option>热带鱼刷怪蛋</option>\n" +
        "            <option>海龟刷怪蛋</option>\n" +
        "            <option>恼鬼刷怪蛋</option>\n" +
        "            <option>村民刷怪蛋</option>\n" +
        "            <option>卫道士刷怪蛋</option>\n" +
        "            <option>监守者刷怪蛋</option>\n" +
        "            <option>女巫刷怪蛋</option>\n" +
        "            <option>凋灵骷髅刷怪蛋</option>\n" +
        "            <option>狼刷怪蛋</option>\n" +
        "            <option>僵尸刷怪蛋</option>\n" +
        "            <option>僵尸马刷怪蛋</option>\n" +
        "            <option>僵尸猪人刷怪蛋</option>\n" +
        "            <option>僵尸村民刷怪蛋</option>\n" +
        "            <option>弩</option>\n" +
        "            <option>旗帜图案（花盾徽）</option>\n" +
        "            <option>旗帜图案（苦力怕盾徽）</option>\n" +
        "            <option>旗帜图案（头颅盾徽）</option>\n" +
        "            <option>旗帜图案（Mojang盾徽）</option>\n" +
        "            <option>迷之炖菜</option>\n" +
        "            <option>回响碎片</option>\n" +
        "        </select>\n" +
        "        <p>方块请手动输入(不填默认为选择的)：</p>\n" +
        "        <input type=\"text\" id=\"buyItems\">\n" +
        "        <p>买入的物品数量：</p>\n" +
        "        <input type=\"number\" id=\"buyCount\">\n" +
        "        <p>&nbsp;</p>\n" +
        "        <br><button value=\"false\" id=\"disabledBuyB\" style=\"background: #ff4545;border: none;width: auto;height: 25px\" onclick=\"canalBuyBItem(this)\">取消该参数</button>\n" +
        "        <div id=\"buyBDisabled\">\n" +
        "            <p>买入的物品2：</p>\n" +
        "            <select id=\"buyB\">\n" +
        "                <option>铁剑</option>\n" +
        "                <option>铁锹</option>\n" +
        "                <option>铁镐</option>\n" +
        "                <option>铁斧</option>\n" +
        "                <option>铁锄</option>\n" +
        "                <option>木剑</option>\n" +
        "                <option>木锹</option>\n" +
        "                <option>木镐</option>\n" +
        "                <option>木斧</option>\n" +
        "                <option>木锄</option>\n" +
        "                <option>石剑</option>\n" +
        "                <option>石锹</option>\n" +
        "                <option>石镐</option>\n" +
        "                <option>石斧</option>\n" +
        "                <option>石锄</option>\n" +
        "                <option>钻石剑</option>\n" +
        "                <option>钻石锹</option>\n" +
        "                <option>钻石镐</option>\n" +
        "                <option>钻石斧</option>\n" +
        "                <option>钻石锄</option>\n" +
        "                <option>金剑</option>\n" +
        "                <option>金锹</option>\n" +
        "                <option>金镐</option>\n" +
        "                <option>金斧</option>\n" +
        "                <option>金锄</option>\n" +
        "                <option>皮革头盔</option>\n" +
        "                <option>皮革胸甲</option>\n" +
        "                <option>皮革护腿</option>\n" +
        "                <option>皮革靴子</option>\n" +
        "                <option>锁链头盔</option>\n" +
        "                <option>锁链胸甲</option>\n" +
        "                <option>锁链护腿</option>\n" +
        "                <option>锁链靴子</option>\n" +
        "                <option>铁头盔</option>\n" +
        "                <option>铁胸甲</option>\n" +
        "                <option>铁护腿</option>\n" +
        "                <option>铁靴子</option>\n" +
        "                <option>钻石头盔</option>\n" +
        "                <option>钻石胸甲</option>\n" +
        "                <option>钻石护腿</option>\n" +
        "                <option>钻石靴子</option>\n" +
        "                <option>金头盔</option>\n" +
        "                <option>金胸甲</option>\n" +
        "                <option>金护腿</option>\n" +
        "                <option>金靴子</option>\n" +
        "                <option>海龟壳</option>\n" +
        "                <option>鳞甲</option>\n" +
        "                <option>打火石</option>\n" +
        "                <option>弓</option>\n" +
        "                <option>箭</option>\n" +
        "                <option>苹果</option>\n" +
        "                <option>煤炭</option>\n" +
        "                <option>木炭</option>\n" +
        "                <option>钻石</option>\n" +
        "                <option>铁锭</option>\n" +
        "                <option>金锭</option>\n" +
        "                <option>木棍</option>\n" +
        "                <option>碗</option>\n" +
        "                <option>蘑菇煲</option>\n" +
        "                <option>线</option>\n" +
        "                <option>羽毛</option>\n" +
        "                <option>火药</option>\n" +
        "                <option>小麦种子</option>\n" +
        "                <option>小麦</option>\n" +
        "                <option>面包</option>\n" +
        "                <option>燧石</option>\n" +
        "                <option>生猪排</option>\n" +
        "                <option>熟猪排</option>\n" +
        "                <option>画</option>\n" +
        "                <option>金苹果</option>\n" +
        "                <option>附魔金苹果</option>\n" +
        "                <option>桶</option>\n" +
        "                <option>水桶</option>\n" +
        "                <option>熔岩桶</option>\n" +
        "                <option>奶桶</option>\n" +
        "                <option>矿车</option>\n" +
        "                <option>鞍</option>\n" +
        "                <option>红石</option>\n" +
        "                <option>雪球</option>\n" +
        "                <option>橡木船</option>\n" +
        "                <option>云杉木船</option>\n" +
        "                <option>白桦木船</option>\n" +
        "                <option>丛林木船</option>\n" +
        "                <option>金合欢木船</option>\n" +
        "                <option>深色橡木船</option>\n" +
        "                <option>红树木船</option>\n" +
        "                <option>橡木运输船</option>\n" +
        "                <option>云杉木运输船</option>\n" +
        "                <option>白桦木运输船</option>\n" +
        "                <option>丛林木运输船</option>\n" +
        "                <option>金合欢木运输船</option>\n" +
        "                <option>深色橡木运输船</option>\n" +
        "                <option>红树木运输船</option>\n" +
        "                <option>皮革</option>\n" +
        "                <option>河豚桶</option>\n" +
        "                <option>鲑鱼桶</option>\n" +
        "                <option>鳕鱼桶</option>\n" +
        "                <option>热带鱼桶</option>\n" +
        "                <option>红砖</option>\n" +
        "                <option>黏土</option>\n" +
        "                <option>甘蔗</option>\n" +
        "                <option>海带</option>\n" +
        "                <option>纸</option>\n" +
        "                <option>书</option>\n" +
        "                <option>黏液球</option>\n" +
        "                <option>运输矿车</option>\n" +
        "                <option>动力矿车</option>\n" +
        "                <option>TNT矿车</option>\n" +
        "                <option>漏斗矿车</option>\n" +
        "                <option>命令方块矿车</option>\n" +
        "                <option>鸡蛋</option>\n" +
        "                <option>指南针</option>\n" +
        "                <option>追溯指针</option>\n" +
        "                <option>钓鱼竿</option>\n" +
        "                <option>时钟</option>\n" +
        "                <option>荧石粉</option>\n" +
        "                <option>生鳕鱼</option>\n" +
        "                <option>生鲑鱼</option>\n" +
        "                <option>热带鱼</option>\n" +
        "                <option>河豚</option>\n" +
        "                <option>熟鳕鱼</option>\n" +
        "                <option>熟鲑鱼</option>\n" +
        "                <option>蜂蜜瓶</option>\n" +
        "                <option>蜜脾</option>\n" +
        "                <option>墨囊</option>\n" +
        "                <option>红色染料</option>\n" +
        "                <option>绿色染料</option>\n" +
        "                <option>可可豆</option>\n" +
        "                <option>青金石</option>\n" +
        "                <option>紫色染料</option>\n" +
        "                <option>青色染料</option>\n" +
        "                <option>淡灰色染料</option>\n" +
        "                <option>灰色染料</option>\n" +
        "                <option>粉红色染料</option>\n" +
        "                <option>黄绿色染料</option>\n" +
        "                <option>黄色染料</option>\n" +
        "                <option>淡蓝色染料</option>\n" +
        "                <option>品红色染料</option>\n" +
        "                <option>橙色染料</option>\n" +
        "                <option>骨粉</option>\n" +
        "                <option>蓝色染料</option>\n" +
        "                <option>棕色染料</option>\n" +
        "                <option>黑色染料</option>\n" +
        "                <option>白色染料</option>\n" +
        "                <option>骨头</option>\n" +
        "                <option>糖</option>\n" +
        "                <option>曲奇</option>\n" +
        "                <option>剪刀</option>\n" +
        "                <option>西瓜片</option>\n" +
        "                <option>干海带</option>\n" +
        "                <option>南瓜种子</option>\n" +
        "                <option>西瓜种</option>\n" +
        "                <option>生牛肉</option>\n" +
        "                <option>牛排</option>\n" +
        "                <option>生鸡肉</option>\n" +
        "                <option>熟鸡肉</option>\n" +
        "                <option>腐肉</option>\n" +
        "                <option>末影珍珠</option>\n" +
        "                <option>烈焰棒</option>\n" +
        "                <option>恶魂之泪</option>\n" +
        "                <option>金粒</option>\n" +
        "                <option>下界疣</option>\n" +
        "                <option>玻璃瓶</option>\n" +
        "                <option>药水</option>\n" +
        "                <option>喷溅药水</option>\n" +
        "                <option>滞留药水</option>\n" +
        "                <option>药箭</option>\n" +
        "                <option>光灵箭</option>\n" +
        "                <option>蜘蛛眼</option>\n" +
        "                <option>发酵蛛眼</option>\n" +
        "                <option>烈焰粉</option>\n" +
        "                <option>岩浆膏</option>\n" +
        "                <option>末影之眼</option>\n" +
        "                <option>闪烁的西瓜片</option>\n" +
        "                <option>附魔之瓶</option>\n" +
        "                <option>火焰弹</option>\n" +
        "                <option>书与笔</option>\n" +
        "                <option>成书</option>\n" +
        "                <option>绿宝石</option>\n" +
        "                <option>物品展示框</option>\n" +
        "                <option>胡萝卜</option>\n" +
        "                <option>马铃薯</option>\n" +
        "                <option>烤马铃薯</option>\n" +
        "                <option>毒马铃薯</option>\n" +
        "                <option>空地图</option>\n" +
        "                <option>地图或探险家地图</option>\n" +
        "                <option>金胡萝卜</option>\n" +
        "                <option>胡萝卜钓竿</option>\n" +
        "                <option>下界之星</option>\n" +
        "                <option>南瓜派</option>\n" +
        "                <option>烟花火箭</option>\n" +
        "                <option>烟火之星</option>\n" +
        "                <option>附魔书</option>\n" +
        "                <option>下界砖</option>\n" +
        "                <option>下界石英</option>\n" +
        "                <option>海晶碎片</option>\n" +
        "                <option>海晶砂粒</option>\n" +
        "                <option>生兔肉</option>\n" +
        "                <option>熟兔肉</option>\n" +
        "                <option>兔肉煲</option>\n" +
        "                <option>兔子脚</option>\n" +
        "                <option>兔子皮</option>\n" +
        "                <option>盔甲架</option>\n" +
        "                <option>铁马铠</option>\n" +
        "                <option>金马铠</option>\n" +
        "                <option>钻石马铠</option>\n" +
        "                <option>拴绳</option>\n" +
        "                <option>命名牌</option>\n" +
        "                <option>生羊肉</option>\n" +
        "                <option>熟羊肉</option>\n" +
        "                <option>末地水晶</option>\n" +
        "                <option>紫颂果</option>\n" +
        "                <option>爆裂紫颂果</option>\n" +
        "                <option>甜菜根</option>\n" +
        "                <option>甜菜种子</option>\n" +
        "                <option>甜菜汤</option>\n" +
        "                <option>龙息</option>\n" +
        "                <option>盾牌</option>\n" +
        "                <option>鞘翅</option>\n" +
        "                <option>不死图腾</option>\n" +
        "                <option>潜影壳</option>\n" +
        "                <option>铁粒</option>\n" +
        "                <option>知识之书</option>\n" +
        "                <option>三叉戟</option>\n" +
        "                <option>幻翼膜</option>\n" +
        "                <option>鹦鹉螺壳</option>\n" +
        "                <option>海洋之心</option>\n" +
        "                <option>音乐唱片13</option>\n" +
        "                <option>音乐唱片Cat</option>\n" +
        "                <option>音乐唱片Blocks</option>\n" +
        "                <option>音乐唱片Chirp</option>\n" +
        "                <option>音乐唱片Far</option>\n" +
        "                <option>音乐唱片Mall</option>\n" +
        "                <option>音乐唱片Mellohi</option>\n" +
        "                <option>音乐唱片Stal</option>\n" +
        "                <option>音乐唱片Strad</option>\n" +
        "                <option>音乐唱片Ward</option>\n" +
        "                <option>音乐唱片11</option>\n" +
        "                <option>音乐唱片Wait</option>\n" +
        "                <option>调试棒</option>\n" +
        "                <option>蝙蝠刷怪蛋</option>\n" +
        "                <option>蜜蜂刷怪蛋</option>\n" +
        "                <option>烈焰人刷怪蛋</option>\n" +
        "                <option>猫刷怪蛋</option>\n" +
        "                <option>洞穴蜘蛛刷怪蛋</option>\n" +
        "                <option>鸡刷怪蛋</option>\n" +
        "                <option>鳕鱼刷怪蛋</option>\n" +
        "                <option>牛刷怪蛋</option>\n" +
        "                <option>苦力怕刷怪蛋</option>\n" +
        "                <option>海豚刷怪蛋</option>\n" +
        "                <option>骡刷怪蛋</option>\n" +
        "                <option>溺尸刷怪蛋</option>\n" +
        "                <option>远古守卫者刷怪蛋</option>\n" +
        "                <option>末影人刷怪蛋</option>\n" +
        "                <option>末影螨刷怪蛋</option>\n" +
        "                <option>唤魔者刷怪蛋</option>\n" +
        "                <option>青蛙刷怪蛋</option>\n" +
        "                <option>恶魂刷怪蛋</option>\n" +
        "                <option>守卫者刷怪蛋</option>\n" +
        "                <option>马刷怪蛋</option>\n" +
        "                <option>尸壳刷怪蛋</option>\n" +
        "                <option>劫掠兽刷怪蛋</option>\n" +
        "                <option>羊驼刷怪蛋</option>\n" +
        "                <option>岩浆怪刷怪蛋</option>\n" +
        "                <option>哞菇刷怪蛋</option>\n" +
        "                <option>骡刷怪蛋</option>\n" +
        "                <option>豹猫刷怪蛋</option>\n" +
        "                <option>熊猫刷怪蛋</option>\n" +
        "                <option>鹦鹉刷怪蛋</option>\n" +
        "                <option>幻翼刷怪蛋</option>\n" +
        "                <option>猪刷怪蛋</option>\n" +
        "                <option>掠夺者刷怪蛋</option>\n" +
        "                <option>北极熊刷怪蛋</option>\n" +
        "                <option>河豚刷怪蛋</option>\n" +
        "                <option>兔子刷怪蛋</option>\n" +
        "                <option>鲑鱼刷怪蛋</option>\n" +
        "                <option>绵羊刷怪蛋</option>\n" +
        "                <option>潜影贝刷怪蛋</option>\n" +
        "                <option>蠹虫刷怪蛋</option>\n" +
        "                <option>骷髅刷怪蛋</option>\n" +
        "                <option>骷髅马刷怪蛋</option>\n" +
        "                <option>史莱姆刷怪蛋</option>\n" +
        "                <option>蜘蛛刷怪蛋</option>\n" +
        "                <option>鱿鱼刷怪蛋</option>\n" +
        "                <option>流浪者刷怪蛋</option>\n" +
        "                <option>蝌蚪刷怪蛋</option>\n" +
        "                <option>热带鱼刷怪蛋</option>\n" +
        "                <option>海龟刷怪蛋</option>\n" +
        "                <option>恼鬼刷怪蛋</option>\n" +
        "                <option>村民刷怪蛋</option>\n" +
        "                <option>卫道士刷怪蛋</option>\n" +
        "                <option>监守者刷怪蛋</option>\n" +
        "                <option>女巫刷怪蛋</option>\n" +
        "                <option>凋灵骷髅刷怪蛋</option>\n" +
        "                <option>狼刷怪蛋</option>\n" +
        "                <option>僵尸刷怪蛋</option>\n" +
        "                <option>僵尸马刷怪蛋</option>\n" +
        "                <option>僵尸猪人刷怪蛋</option>\n" +
        "                <option>僵尸村民刷怪蛋</option>\n" +
        "                <option>弩</option>\n" +
        "                <option>旗帜图案（花盾徽）</option>\n" +
        "                <option>旗帜图案（苦力怕盾徽）</option>\n" +
        "                <option>旗帜图案（头颅盾徽）</option>\n" +
        "                <option>旗帜图案（Mojang盾徽）</option>\n" +
        "                <option>迷之炖菜</option>\n" +
        "                <option>回响碎片</option>\n" +
        "            </select>\n" +
        "            <p>方块请手动输入(不填默认为选择的)：</p>\n" +
        "            <input type=\"text\" id=\"buyBItems2\">\n" +
        "            <p>买入的物品数量：</p>\n" +
        "            <input type=\"number\" id=\"buyBCount2\">\n" +
        "        </div>\n" +
        "        <p>卖出的物品</p>\n" +
        "        <select id=\"sellItem\">\n" +
        "            <option>铁剑</option>\n" +
        "            <option>铁锹</option>\n" +
        "            <option>铁镐</option>\n" +
        "            <option>铁斧</option>\n" +
        "            <option>铁锄</option>\n" +
        "            <option>木剑</option>\n" +
        "            <option>木锹</option>\n" +
        "            <option>木镐</option>\n" +
        "            <option>木斧</option>\n" +
        "            <option>木锄</option>\n" +
        "            <option>石剑</option>\n" +
        "            <option>石锹</option>\n" +
        "            <option>石镐</option>\n" +
        "            <option>石斧</option>\n" +
        "            <option>石锄</option>\n" +
        "            <option>钻石剑</option>\n" +
        "            <option>钻石锹</option>\n" +
        "            <option>钻石镐</option>\n" +
        "            <option>钻石斧</option>\n" +
        "            <option>钻石锄</option>\n" +
        "            <option>金剑</option>\n" +
        "            <option>金锹</option>\n" +
        "            <option>金镐</option>\n" +
        "            <option>金斧</option>\n" +
        "            <option>金锄</option>\n" +
        "            <option>皮革头盔</option>\n" +
        "            <option>皮革胸甲</option>\n" +
        "            <option>皮革护腿</option>\n" +
        "            <option>皮革靴子</option>\n" +
        "            <option>锁链头盔</option>\n" +
        "            <option>锁链胸甲</option>\n" +
        "            <option>锁链护腿</option>\n" +
        "            <option>锁链靴子</option>\n" +
        "            <option>铁头盔</option>\n" +
        "            <option>铁胸甲</option>\n" +
        "            <option>铁护腿</option>\n" +
        "            <option>铁靴子</option>\n" +
        "            <option>钻石头盔</option>\n" +
        "            <option>钻石胸甲</option>\n" +
        "            <option>钻石护腿</option>\n" +
        "            <option>钻石靴子</option>\n" +
        "            <option>金头盔</option>\n" +
        "            <option>金胸甲</option>\n" +
        "            <option>金护腿</option>\n" +
        "            <option>金靴子</option>\n" +
        "            <option>海龟壳</option>\n" +
        "            <option>鳞甲</option>\n" +
        "            <option>打火石</option>\n" +
        "            <option>弓</option>\n" +
        "            <option>箭</option>\n" +
        "            <option>苹果</option>\n" +
        "            <option>煤炭</option>\n" +
        "            <option>木炭</option>\n" +
        "            <option>钻石</option>\n" +
        "            <option>铁锭</option>\n" +
        "            <option>金锭</option>\n" +
        "            <option>木棍</option>\n" +
        "            <option>碗</option>\n" +
        "            <option>蘑菇煲</option>\n" +
        "            <option>线</option>\n" +
        "            <option>羽毛</option>\n" +
        "            <option>火药</option>\n" +
        "            <option>小麦种子</option>\n" +
        "            <option>小麦</option>\n" +
        "            <option>面包</option>\n" +
        "            <option>燧石</option>\n" +
        "            <option>生猪排</option>\n" +
        "            <option>熟猪排</option>\n" +
        "            <option>画</option>\n" +
        "            <option>金苹果</option>\n" +
        "            <option>附魔金苹果</option>\n" +
        "            <option>桶</option>\n" +
        "            <option>水桶</option>\n" +
        "            <option>熔岩桶</option>\n" +
        "            <option>奶桶</option>\n" +
        "            <option>矿车</option>\n" +
        "            <option>鞍</option>\n" +
        "            <option>红石</option>\n" +
        "            <option>雪球</option>\n" +
        "            <option>橡木船</option>\n" +
        "            <option>云杉木船</option>\n" +
        "            <option>白桦木船</option>\n" +
        "            <option>丛林木船</option>\n" +
        "            <option>金合欢木船</option>\n" +
        "            <option>深色橡木船</option>\n" +
        "            <option>红树木船</option>\n" +
        "            <option>橡木运输船</option>\n" +
        "            <option>云杉木运输船</option>\n" +
        "            <option>白桦木运输船</option>\n" +
        "            <option>丛林木运输船</option>\n" +
        "            <option>金合欢木运输船</option>\n" +
        "            <option>深色橡木运输船</option>\n" +
        "            <option>红树木运输船</option>\n" +
        "            <option>皮革</option>\n" +
        "            <option>河豚桶</option>\n" +
        "            <option>鲑鱼桶</option>\n" +
        "            <option>鳕鱼桶</option>\n" +
        "            <option>热带鱼桶</option>\n" +
        "            <option>红砖</option>\n" +
        "            <option>黏土</option>\n" +
        "            <option>甘蔗</option>\n" +
        "            <option>海带</option>\n" +
        "            <option>纸</option>\n" +
        "            <option>书</option>\n" +
        "            <option>黏液球</option>\n" +
        "            <option>运输矿车</option>\n" +
        "            <option>动力矿车</option>\n" +
        "            <option>TNT矿车</option>\n" +
        "            <option>漏斗矿车</option>\n" +
        "            <option>命令方块矿车</option>\n" +
        "            <option>鸡蛋</option>\n" +
        "            <option>指南针</option>\n" +
        "            <option>追溯指针</option>\n" +
        "            <option>钓鱼竿</option>\n" +
        "            <option>时钟</option>\n" +
        "            <option>荧石粉</option>\n" +
        "            <option>生鳕鱼</option>\n" +
        "            <option>生鲑鱼</option>\n" +
        "            <option>热带鱼</option>\n" +
        "            <option>河豚</option>\n" +
        "            <option>熟鳕鱼</option>\n" +
        "            <option>熟鲑鱼</option>\n" +
        "            <option>蜂蜜瓶</option>\n" +
        "            <option>蜜脾</option>\n" +
        "            <option>墨囊</option>\n" +
        "            <option>红色染料</option>\n" +
        "            <option>绿色染料</option>\n" +
        "            <option>可可豆</option>\n" +
        "            <option>青金石</option>\n" +
        "            <option>紫色染料</option>\n" +
        "            <option>青色染料</option>\n" +
        "            <option>淡灰色染料</option>\n" +
        "            <option>灰色染料</option>\n" +
        "            <option>粉红色染料</option>\n" +
        "            <option>黄绿色染料</option>\n" +
        "            <option>黄色染料</option>\n" +
        "            <option>淡蓝色染料</option>\n" +
        "            <option>品红色染料</option>\n" +
        "            <option>橙色染料</option>\n" +
        "            <option>骨粉</option>\n" +
        "            <option>蓝色染料</option>\n" +
        "            <option>棕色染料</option>\n" +
        "            <option>黑色染料</option>\n" +
        "            <option>白色染料</option>\n" +
        "            <option>骨头</option>\n" +
        "            <option>糖</option>\n" +
        "            <option>曲奇</option>\n" +
        "            <option>剪刀</option>\n" +
        "            <option>西瓜片</option>\n" +
        "            <option>干海带</option>\n" +
        "            <option>南瓜种子</option>\n" +
        "            <option>西瓜种</option>\n" +
        "            <option>生牛肉</option>\n" +
        "            <option>牛排</option>\n" +
        "            <option>生鸡肉</option>\n" +
        "            <option>熟鸡肉</option>\n" +
        "            <option>腐肉</option>\n" +
        "            <option>末影珍珠</option>\n" +
        "            <option>烈焰棒</option>\n" +
        "            <option>恶魂之泪</option>\n" +
        "            <option>金粒</option>\n" +
        "            <option>下界疣</option>\n" +
        "            <option>玻璃瓶</option>\n" +
        "            <option>药水</option>\n" +
        "            <option>喷溅药水</option>\n" +
        "            <option>滞留药水</option>\n" +
        "            <option>药箭</option>\n" +
        "            <option>光灵箭</option>\n" +
        "            <option>蜘蛛眼</option>\n" +
        "            <option>发酵蛛眼</option>\n" +
        "            <option>烈焰粉</option>\n" +
        "            <option>岩浆膏</option>\n" +
        "            <option>末影之眼</option>\n" +
        "            <option>闪烁的西瓜片</option>\n" +
        "            <option>附魔之瓶</option>\n" +
        "            <option>火焰弹</option>\n" +
        "            <option>书与笔</option>\n" +
        "            <option>成书</option>\n" +
        "            <option>绿宝石</option>\n" +
        "            <option>物品展示框</option>\n" +
        "            <option>胡萝卜</option>\n" +
        "            <option>马铃薯</option>\n" +
        "            <option>烤马铃薯</option>\n" +
        "            <option>毒马铃薯</option>\n" +
        "            <option>空地图</option>\n" +
        "            <option>地图或探险家地图</option>\n" +
        "            <option>金胡萝卜</option>\n" +
        "            <option>胡萝卜钓竿</option>\n" +
        "            <option>下界之星</option>\n" +
        "            <option>南瓜派</option>\n" +
        "            <option>烟花火箭</option>\n" +
        "            <option>烟火之星</option>\n" +
        "            <option>附魔书</option>\n" +
        "            <option>下界砖</option>\n" +
        "            <option>下界石英</option>\n" +
        "            <option>海晶碎片</option>\n" +
        "            <option>海晶砂粒</option>\n" +
        "            <option>生兔肉</option>\n" +
        "            <option>熟兔肉</option>\n" +
        "            <option>兔肉煲</option>\n" +
        "            <option>兔子脚</option>\n" +
        "            <option>兔子皮</option>\n" +
        "            <option>盔甲架</option>\n" +
        "            <option>铁马铠</option>\n" +
        "            <option>金马铠</option>\n" +
        "            <option>钻石马铠</option>\n" +
        "            <option>拴绳</option>\n" +
        "            <option>命名牌</option>\n" +
        "            <option>生羊肉</option>\n" +
        "            <option>熟羊肉</option>\n" +
        "            <option>末地水晶</option>\n" +
        "            <option>紫颂果</option>\n" +
        "            <option>爆裂紫颂果</option>\n" +
        "            <option>甜菜根</option>\n" +
        "            <option>甜菜种子</option>\n" +
        "            <option>甜菜汤</option>\n" +
        "            <option>龙息</option>\n" +
        "            <option>盾牌</option>\n" +
        "            <option>鞘翅</option>\n" +
        "            <option>不死图腾</option>\n" +
        "            <option>潜影壳</option>\n" +
        "            <option>铁粒</option>\n" +
        "            <option>知识之书</option>\n" +
        "            <option>三叉戟</option>\n" +
        "            <option>幻翼膜</option>\n" +
        "            <option>鹦鹉螺壳</option>\n" +
        "            <option>海洋之心</option>\n" +
        "            <option>音乐唱片13</option>\n" +
        "            <option>音乐唱片Cat</option>\n" +
        "            <option>音乐唱片Blocks</option>\n" +
        "            <option>音乐唱片Chirp</option>\n" +
        "            <option>音乐唱片Far</option>\n" +
        "            <option>音乐唱片Mall</option>\n" +
        "            <option>音乐唱片Mellohi</option>\n" +
        "            <option>音乐唱片Stal</option>\n" +
        "            <option>音乐唱片Strad</option>\n" +
        "            <option>音乐唱片Ward</option>\n" +
        "            <option>音乐唱片11</option>\n" +
        "            <option>音乐唱片Wait</option>\n" +
        "            <option>调试棒</option>\n" +
        "            <option>蝙蝠刷怪蛋</option>\n" +
        "            <option>蜜蜂刷怪蛋</option>\n" +
        "            <option>烈焰人刷怪蛋</option>\n" +
        "            <option>猫刷怪蛋</option>\n" +
        "            <option>洞穴蜘蛛刷怪蛋</option>\n" +
        "            <option>鸡刷怪蛋</option>\n" +
        "            <option>鳕鱼刷怪蛋</option>\n" +
        "            <option>牛刷怪蛋</option>\n" +
        "            <option>苦力怕刷怪蛋</option>\n" +
        "            <option>海豚刷怪蛋</option>\n" +
        "            <option>骡刷怪蛋</option>\n" +
        "            <option>溺尸刷怪蛋</option>\n" +
        "            <option>远古守卫者刷怪蛋</option>\n" +
        "            <option>末影人刷怪蛋</option>\n" +
        "            <option>末影螨刷怪蛋</option>\n" +
        "            <option>唤魔者刷怪蛋</option>\n" +
        "            <option>青蛙刷怪蛋</option>\n" +
        "            <option>恶魂刷怪蛋</option>\n" +
        "            <option>守卫者刷怪蛋</option>\n" +
        "            <option>马刷怪蛋</option>\n" +
        "            <option>尸壳刷怪蛋</option>\n" +
        "            <option>劫掠兽刷怪蛋</option>\n" +
        "            <option>羊驼刷怪蛋</option>\n" +
        "            <option>岩浆怪刷怪蛋</option>\n" +
        "            <option>哞菇刷怪蛋</option>\n" +
        "            <option>骡刷怪蛋</option>\n" +
        "            <option>豹猫刷怪蛋</option>\n" +
        "            <option>熊猫刷怪蛋</option>\n" +
        "            <option>鹦鹉刷怪蛋</option>\n" +
        "            <option>幻翼刷怪蛋</option>\n" +
        "            <option>猪刷怪蛋</option>\n" +
        "            <option>掠夺者刷怪蛋</option>\n" +
        "            <option>北极熊刷怪蛋</option>\n" +
        "            <option>河豚刷怪蛋</option>\n" +
        "            <option>兔子刷怪蛋</option>\n" +
        "            <option>鲑鱼刷怪蛋</option>\n" +
        "            <option>绵羊刷怪蛋</option>\n" +
        "            <option>潜影贝刷怪蛋</option>\n" +
        "            <option>蠹虫刷怪蛋</option>\n" +
        "            <option>骷髅刷怪蛋</option>\n" +
        "            <option>骷髅马刷怪蛋</option>\n" +
        "            <option>史莱姆刷怪蛋</option>\n" +
        "            <option>蜘蛛刷怪蛋</option>\n" +
        "            <option>鱿鱼刷怪蛋</option>\n" +
        "            <option>流浪者刷怪蛋</option>\n" +
        "            <option>蝌蚪刷怪蛋</option>\n" +
        "            <option>热带鱼刷怪蛋</option>\n" +
        "            <option>海龟刷怪蛋</option>\n" +
        "            <option>恼鬼刷怪蛋</option>\n" +
        "            <option>村民刷怪蛋</option>\n" +
        "            <option>卫道士刷怪蛋</option>\n" +
        "            <option>监守者刷怪蛋</option>\n" +
        "            <option>女巫刷怪蛋</option>\n" +
        "            <option>凋灵骷髅刷怪蛋</option>\n" +
        "            <option>狼刷怪蛋</option>\n" +
        "            <option>僵尸刷怪蛋</option>\n" +
        "            <option>僵尸马刷怪蛋</option>\n" +
        "            <option>僵尸猪人刷怪蛋</option>\n" +
        "            <option>僵尸村民刷怪蛋</option>\n" +
        "            <option>弩</option>\n" +
        "            <option>旗帜图案（花盾徽）</option>\n" +
        "            <option>旗帜图案（苦力怕盾徽）</option>\n" +
        "            <option>旗帜图案（头颅盾徽）</option>\n" +
        "            <option>旗帜图案（Mojang盾徽）</option>\n" +
        "            <option>迷之炖菜</option>\n" +
        "            <option>回响碎片</option>\n" +
        "        </select>\n" +
        "        <p>方块请手动输入(不填默认为选择的)：</p>\n" +
        "        <input type=\"text\" id=\"sellItems\">\n" +
        "        <p>卖出的物品数量：</p>\n" +
        "        <input type=\"number\" id=\"sellCount\">\n" +
        "    </label>\n" +
        "</div>\n" +
        "<br><button class=\"finish\" onclick=\"gen_nbt_villager()\">开始生成</button>";
}