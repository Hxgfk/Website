import {WeatherType} from "./ids/command/CommandWeatherTypes.js";
import {VillagerProfessions} from "./ids/entity/VillagerProfessions.js";
import {VillagerTypes} from "./ids/entity/VillagerTypes.js";
import {AdvancementID} from "./ids/Advancements.js";
import {BiomeID} from "./ids/Biomes.js";
import {BlockID} from "./ids/Blocks.js";
import {DimensionID} from "./ids/Dimensions.js";
import {EntityID} from "./ids/Entities";
import {GameMode} from "./ids/GameModes";
import {ItemID} from "./ids/Items";
import {PoiID} from "./ids/Pois";
import {StructureID} from "./ids/Structures";

export function check_advancemnt() {
    document.getElementById("arg3").disabled = document.getElementById("arg2").value === "全部成就";
}

export function gen_advancement() {
    document.getElementById("copy").disabled = true;
    playerNameInput("target", "setName");
    let command = new Command();
    let arg1;
    let arg2;
    let arg3;

    if (document.getElementById("arg1").value === "给予") arg1 = "grant";
    if (document.getElementById("arg1").value === "删除") arg1 = "revoke";
    if (document.getElementById("arg2").value === "全部成就") arg2 = "everything";
    if (document.getElementById("arg2").value === "指定成就和该进度以下的成就") arg2 = "from";
    if (document.getElementById("arg2").value === "指定成就") arg2 = "only";
    if (document.getElementById("arg2").value === "指定成就和该成就以上和以下的成就") arg2 = "through";
    if (document.getElementById("arg2").value === "指定成就和该成就以上的成就") arg2 = "util";
    if (arg2 === "everything") {
        arg3 = " ";
    } else arg3 = AdvancementID[document.getElementById("arg3").value];

    document.getElementById("output").value = command.Advancement(
        arg1,
        document.getElementById("target").value,
        arg2,
        arg3
    )
    document.getElementById("copy").disabled = false;
}

export function gen_me() {
    let command = new Command();
    document.getElementById("output").value = command.Me(document.getElementById("action").value);
}

export function gen_kick() {
    playerNameInput("player", "setName");
    let command = new Command();

    document.getElementById("output").value = command.Kick(
        document.getElementById("player").value,
        document.getElementById("reason").value
    );
}

export function gen_msg() {
    playerNameInput("target", "setName");
    let command = new Command();

    document.getElementById("output").value = command.Msg(
        document.getElementById("target").value,
        document.getElementById("message").value
    );
}

export function gen_w() {
    playerNameInput("target", "setName");
    let command = new Command();

    document.getElementById("output").value = command.W(
        document.getElementById("target").value,
        document.getElementById("message").value
    );
}

export function gen_tell() {
    playerNameInput("target", "setName");
    let command = new Command();

    document.getElementById("output").value = command.Tell(
        document.getElementById("target").value,
        document.getElementById("message").value
    );
}

export function gen_jfr() {
    let args;
    let command = new Command();

    if (document.getElementById("args").value === "开始") args = "start";
    if (document.getElementById("args").value === "停止") args = "stop";

    document.getElementById("output").value = command.Jfr(args);
}

export function gen_say() {
    let command = new Command();
    document.getElementById("output").value = command.Say(document.getElementById("message").value);
}

export function gen_publish() {
    let command = new Command();
    document.getElementById("output").value = command.Publish(document.getElementById("port").value);
}

export function gen_defaultgamemode() {
    let command = new Command();
    let mode = GameMode[document.getElementById("mode").value];
    document.getElementById("output").value = command.Defaultgamemode(mode);
}


export function gen_gamemode() {
    playerNameInput("target", "setName");
    let command = new Command();
    let gmode = GameMode[document.getElementById("mode").value];
    document.getElementById("output").value = command.Gamemode(gmode, document.getElementById("target").value);
}

export function gen_weather() {
    let command = new Command();
    let args = WeatherType[document.getElementById("weather").value];
    document.getElementById("output").value = command.Weather(args, document.getElementById("duration").value);
}

export function check_tag() {
    document.getElementById("args").disabled = document.getElementById("arg1").value === "列出所有";
}

export function gen_tag() {
    let command = new Command();
    let arg1;

    if (document.getElementById("arg1").value === "列出所有") arg1 = "list";
    if (document.getElementById("arg1").value === "添加") arg1 = "add";
    if (document.getElementById("arg1").value === "删除") arg1 = "remove";

    document.getElementById("output").value = command.Tag(
        document.getElementById("target").value,
        arg1,
        document.getElementById("args").value
    );
}

export function gen_locate() {
    let command = new Command();
    let args;

    if (document.getElementById("args").value === "兴趣点") args = "poi";
    if (document.getElementById("args").value === "生物群系") args = "biome";
    if (document.getElementById("args").value === "建筑结构") args = "structure";

    if (args === "poi") {
        document.getElementById("output").value = command.Locate(
            args,
            PoiID[document.getElementById("sid").value]
        );
    }
    if (args === "structure") {
        document.getElementById("output").value = command.Locate(
            args,
            StructureID[document.getElementById("sid").value]
        );
    }
    if (args === "biome") {
        document.getElementById("output").value = command.Locate(
            args,
            BiomeID[document.getElementById("sid").value]
        );
    }
}

export function gen_selector() {
    let selectorData = new PackSelectorArgs();
    selectorData.get();
    let sel = selectorData.arg.selector;
    let inputCheck = [
        selectorData.arg.nbt,
        selectorData.arg.name,
        selectorData.arg.distance,
        selectorData.arg.limit,
        selectorData.arg.predicate,
        selectorData.arg.team,
        selectorData.arg.tag,
        selectorData.arg.score.score,
        selectorData.arg.score.score2,
        selectorData.arg.level.level,
        selectorData.arg.level.level2
    ];
    let haveArg = false;

    for (let argKey in inputCheck) {
        if (!(inputCheck[argKey] === "")) {
            haveArg = true;
        }
    }

    let numberCheck = [
        selectorData.arg.position.x,
        selectorData.arg.position.y,
        selectorData.arg.position.z,
        selectorData.arg.rotation.x,
        selectorData.arg.rotation.y
    ];


    for (let argKey in numberCheck) {
        if (!(numberCheck[argKey] === '')) {
            haveArg = true;
        }
    }

    let selectCheck = [
        selectorData.arg.advancementsDisabled,
        selectorData.arg.gamemodeDisabled,
        selectorData.arg.sortDisabled,
        selectorData.arg.typeDisabled
    ];

    for (let argCheckKey in selectCheck) {
        if (!(selectCheck[argCheckKey] === "true")) {
            haveArg = true;
        }
    }

    if (!Number.isInteger(Number(selectorData.arg.limit))) {
        alert("\"最大实体数量\"只能为整数")
    }

    if (haveArg) {
        selectorData.get();
        sel = sel + "[";

        if (!(selectorData.arg.position.x === "")) {
            sel = sel.concat("x=", selectorData.arg.position.x, ",");
        }

        if (!(selectorData.arg.position.y === "")) {
            sel = sel.concat("y=", selectorData.arg.position.y, ",");
        }

        if (!(selectorData.arg.position.z === "")) {
            sel = sel.concat("z=", selectorData.arg.position.z, ",");
        }

        if (selectorData.arg.typeDisabled === "false") {
            sel = sel.concat("type=", EntityID[selectorData.arg.type], ",");
        }

        if (!(selectorData.arg.distance === "")) {
            sel = sel.concat("distance=", selectorData.arg.distance, ",");
        }

        if (!(selectorData.arg.dxyz.x === "")) {
            sel = sel.concat("dx=", selectorData.arg.dxyz.x, ",");
        }

        if (!(selectorData.arg.dxyz.y === "")) {
            sel = sel.concat("dy=", selectorData.arg.dxyz.y, ",");
        }

        if (!(selectorData.arg.dxyz.z === "")) {
            sel = sel.concat("dz=", selectorData.arg.dxyz.z, ",");
        }

        if (!(selectorData.arg.score.scoreboardNames === "" || selectorData.arg.score.score === "")) {
            let err1 = false;
            selectorData.get();

            if (selectorData.arg.score.scoreboardNames === "") {
                alert("\"计分板名称\"不能为空！");
            }

            if (!(selectorData.arg.score.enableScore2 === "false")) {
                if (!Number.isInteger(Number(selectorData.arg.score.score2))) {
                    alert("\"分数2\"只能为整数！");
                    err1 = true;
                }
            }

            if (!Number.isInteger(Number(selectorData.arg.score.score))) {
                alert("\"分数\"只能为整数！");
                err1 = true;
            }

            if (!err1) {
                if (selectorData.arg.score.scoresType === "等于指定分数") {
                    sel = sel.concat(
                        "scores={",
                        selectorData.arg.score.scoreboardNames, "=",
                        selectorData.arg.score.score, "},"
                    );
                }

                if (selectorData.arg.score.scoresType === "选择\"分数1\"到\"分数2\"之间的分数") {
                    sel = sel.concat(
                        "scores={",
                        selectorData.arg.score.scoreboardNames, "=",
                        selectorData.arg.score.score, "..",
                        selectorData.arg.score.score2, "},"
                    );
                }

                if (selectorData.arg.score.scoresType === "选择大于指定分数以上的分数") {
                    sel = sel.concat(
                        "scores={",
                        selectorData.arg.score.scoreboardNames, "=",
                        selectorData.arg.score.score, "..},"
                    );
                }

                if (selectorData.arg.score.scoresType === "选择小于指定分数以下的分数") {
                    sel = sel.concat(
                        "scores={",
                        selectorData.arg.score.scoreboardNames, "=..",
                        selectorData.arg.score.score, "},"
                    );
                }

                if (selectorData.arg.score.scoresType === "选择不是指定分数的实体") {
                    sel = sel.concat(
                        "scores={",
                        selectorData.arg.score.scoreboardNames, "=!",
                        selectorData.arg.score.score, "},"
                    );
                }
            }
        }

        if (!(selectorData.arg.level.level === "")) {
            let err2 = false;
            selectorData.get();

            if (!(selectorData.arg.level.enableLevel2 === "false")) {
                if (!Number.isInteger(Number(selectorData.arg.level.level2))) {
                    alert("\"等级2\"只能为整数！");
                    err2 = true;
                }
            }

            if (!Number.isInteger(Number(selectorData.arg.level.level))) {
                alert("\"等级\"只能为整数！");
                err2 = true;
            }

            if (!err2) {
                if (selectorData.arg.level.levelType === "等于指定经验等级") {
                    sel = sel.concat(
                        "level=", selectorData.arg.level.level, "},"
                    );
                }

                if (selectorData.arg.level.levelType === "选择\"等级1\"到\"等级2\"之间的等级") {
                    sel = sel.concat(
                        "level=", selectorData.arg.level.level, "..", selectorData.arg.level.level2, "},"
                    );
                }

                if (selectorData.arg.level.levelType === "选择至少为指定等级的等级") {
                    sel = sel.concat(
                        "level=", selectorData.arg.level.level, "..},"
                    );
                }

                if (selectorData.arg.level.levelType === "选择最多为指定等级的等级") {
                    sel = sel.concat(
                        "level=..", selectorData.arg.level.level, "},"
                    );
                }
            }
        }

        if (!(selectorData.arg.tag === "")) {
            sel = sel.concat("tag=", selectorData.arg.tag, ",");
        }

        if (!(selectorData.arg.team === "")) {
            sel = sel.concat("team=", selectorData.arg.team, ",");
        }

        if (!(selectorData.arg.name === "")) {
            sel = sel.concat("name=", selectorData.arg.name, ",");
        }

        if (!(selectorData.arg.predicate === "")) {
            sel = sel.concat("predicate=", selectorData.arg.predicate, ",");
        }

        if (!(selectorData.arg.rotation.x === "")) {
            sel = sel.concat("x_rotation=", selectorData.arg.rotation.x, ",");
        }

        if (!(selectorData.arg.rotation.y === "")) {
            sel = sel.concat("y_rotation=", selectorData.arg.rotation.y, ",");
        }

        if (!(selectorData.arg.nbt === "")) {
            sel = sel.concat("nbt=", selectorData.arg.nbt, ",");
        }

        if (!(selectorData.arg.level === "")) {
            sel = sel.concat("level", selectorData.arg.level, ",");
        }

        if (selectorData.arg.gamemodeDisabled === "false") {
            sel = sel.concat("gamemode=", selectorData.arg.gamemode, ",");
        }

        if (selectorData.arg.advancementsDisabled === "false") {
            sel = sel.concat(
                "advancements={",
                selectorData.arg.advancements,
                "=", selectorData.arg.advancementsFinish, "},"
            );
        }

        if (!(selectorData.arg.limit === "")) {
            sel = sel.concat("limit=", selectorData.arg.limit, ",");
        }

        if (selectorData.arg.sortDisabled === "false") {
            sel = sel.concat("sort=", selectorData.arg.sort, ",");
        }

        sel = sel.concat("]");
        document.getElementById("output").value = sel;
    } else {
        document.getElementById("output").value = sel;
    }
}

export function gen_summon() {
    let command = new Command();
    let positionX = document.getElementById("posX").value;
    let positionY = document.getElementById("posY").value;
    let positionZ = document.getElementById("posZ").value;

    let position = new Position(
        positionX,
        positionY,
        positionZ
    );

    if (position.x === "") {
        position.x = "~";
    }
    if (position.y === "") {
        position.y = "~";
    }
    if (position.z === "") {
        position.z = "~";
    }

    let entity = null;

    if (document.getElementById("entity2").value === "") {
        entity = EntityID[document.getElementById("entityType").value];
        document.getElementById("output").value = command.Summon(
            entity,
            position,
            document.getElementById("nbt").value
        );
    } else {
        if (typeof EntityID[document.getElementById("entity2").value] === "undefined") {
            alert("无效的生物名！");
        } else {
            entity = EntityID[document.getElementById("entity2").value];
            document.getElementById("output").value = command.Summon(
                entity,
                position,
                document.getElementById("nbt").value
            );
        }
    }
}

export function gen_seed() {
    let command = new Command();
    document.getElementById("output").value = command.Seed();
}

export function gen_nbt_villager() {
    let checked = {
        "buy": false,
        "buyB": false,
        "sell": false,
        "buyItems": false,
        "buyBItems": false,
        "sellItems": false,
        "disabledBuyB": document.getElementById("disabledBuyB").value,
        "level": false,
        "max": false
    };

    if (!(document.getElementById("buyCount").value === "")) {
        if (!Number.isInteger(Number(document.getElementById("buyCount").value))) {
            alert("\"买入物品数量\"不能是小数！");
            checked.buy = true;
        }
    } else {
        alert("\"买入物品数量\"不能为空！");
    }

    if (!checked.buy) {
        if (Number(document.getElementById("buyCount").value) > 64) {
            alert("\"买入物品数量\"不能大于64");
            checked.buy = true;
        }

        if (Number(document.getElementById("buyCount").value) < 1) {
            alert("\"买入物品数量\"不能小于1");
            checked.buy = true;
        }
    }

    if (checked.disabledBuyB === "false") {
        if (!(document.getElementById("buyBCount2").value === "")) {
            if (!Number.isInteger(Number(document.getElementById("buyBCount2").value))) {
                alert("\"买入物品2数量\"不能是小数！");
                checked.buyB = true;
            }
        } else {
            alert("\"买入物品2数量\"不能为空！");
        }

        if (!checked.buyB) {
            if (Number(document.getElementById("buyBCount2").value) > 64) {
                alert("\"买入物品数量2\"不能大于64");
                checked.buyB = true;
            }

            if (Number(document.getElementById("buyBCount2").value) < 1) {
                alert("\"买入物品数量2\"不能小于1");
                checked.buyB = true;
            }
        }
    }

    if (!(document.getElementById("sellCount").value === "")) {
        if (!Number.isInteger(Number(document.getElementById("sellCount").value))) {
            alert("\"卖出物品数量\"不能是小数！");
            checked.sell = true;
        }
    } else {
        alert("\"卖出物品数量\"不能为空！");
    }

    if (Number(document.getElementById("sellCount").value) > 64) {
        alert("\"卖出物品数量\"不能大于64！");
        checked.sell = true;
    }

    if (Number(document.getElementById("sellCount").value) < 1) {
        alert("\"卖出物品数量\"不能小于1！")
        checked.sell = true;
    }

    if (!(document.getElementById("level").value === "")) {
        if (!Number.isInteger(Number(document.getElementById("level").value))) {
            alert("\"村民等级\"不能是小数！")
            checked.level = true;
        }
    } else {
        alert("\"村民等级\"不能为空！");
    }

    if (!checked.level) {
        if (Number(document.getElementById("level").value) > 5) {
            alert("\"村民等级\"不可以大于5！");
            checked.level = true;
        }

        if (Number(document.getElementById("level").value) < 0) {
            alert("\"村民等级\"不可以小于0！");
            checked.level = true;
        }
    }

    if (!(document.getElementById("max").value === "")) {
        if (!Number.isInteger(Number(document.getElementById("max").value))) {
            alert("\"最大购买次数\"不能是小数！")
            checked.max = true;
        }
    } else {
        alert("\"最大购买次数\"不能为空！");
    }

    if (!checked.max) {

        if (Number(document.getElementById("max").value) < 1) {
            alert("\"最大购买次数\"不可以小于1！");
            checked.max = true;
        }
    }

    if (!(document.getElementById("buyItems").value === "")) {
        checked.buyItems = true;
    }

    if (!(document.getElementById("buyBItems2").value === "")) {
        checked.buyBItems = true;
    }

    if (!(document.getElementById("sellItems").value === "")) {
        checked.sellItems = true;
    }

    if (!checked.buy && !checked.buyB && !checked.sell && !checked.level && !checked.max) {
        // old algorithm
        let VillagerDataObject = new NBT();
        VillagerDataObject.add("profession", "\"" + VillagerProfessions[document.getElementById("profession").value] + "\"");
        VillagerDataObject.add("level", document.getElementById("level").value);
        VillagerDataObject.add("type", "\"" + VillagerTypes[document.getElementById("type").value] + "\"");
        let RecipesListObject = new NBTArray();
        let offerObject = new NBT();
        let buyObject = new NBT();
        let buyBObject = new NBT();
        let sellObject = new NBT();
        let OffersObject = new NBT();
        let RecipesObject = new NBT();
        if (checked.buyItems) {
            buyObject.add("id", "\"" + BlockID[document.getElementById("buyItems").value] + "\"");
        } else {
            buyObject.add("id", "\"" + ItemID[document.getElementById("buy").value] + "\"");
        }
        buyObject.add("Count", document.getElementById("buyCount").value);
        offerObject.add("buy", buyObject.build());
        if (checked.disabledBuyB === "false") {
            if (checked.buyBItems) {
                buyBObject.add("id", "\"" + BlockID[document.getElementById("buyBItems2").value] + "\"");
            } else {
                buyBObject.add("id", "\"" + ItemID[document.getElementById("buyB").value] + "\"");
            }
            buyBObject.add("Count", document.getElementById("buyBCount2").value);
            offerObject.add("buyB", buyBObject.build());
        }
        if (checked.sellItems) {
            sellObject.add("id", "\"" + BlockID[document.getElementById("sellItems").value] + "\"");
        } else {
            sellObject.add("id", "\"" + ItemID[document.getElementById("sellItem").value] + "\"");
        }
        sellObject.add("Count", document.getElementById("sellCount").value);
        offerObject.add("sell", sellObject.build());
        offerObject.add("maxUses", document.getElementById("max").value);
        RecipesListObject.add(offerObject.build());
        RecipesObject.add("Recipes", RecipesListObject.build());
        OffersObject.add("VillagerData", VillagerDataObject.build());
        OffersObject.add("Offers", RecipesObject.build());
        document.getElementById("output").value = "/summon villager ~ ~ ~ " + OffersObject.build();
        RecipesListObject.clear();
        offerObject.clear();
        buyObject.clear();
        if (checked.disabledBuyB === "false") {
            buyBObject.clear();
        }
        sellObject.clear();
        OffersObject.clear();
        RecipesObject.clear();
    }
}