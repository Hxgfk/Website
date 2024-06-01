/*
* Selector Arg Get
*/
// Imports
import {SelectorSortMethod} from "../ids/command/SelectorArgSortValues";
import{AdvancementID} from "../ids/Advancements";
import {GameMode} from "../ids/GameModes";

export class PackSelectorArgs {
    arg = null;

    constructor() {
    }

    get() {
        this.arg = {
            "selector": document.getElementById("selectorType").value,
            "type": document.getElementById("type").value,
            "typeDisabled": document.getElementById("disabledType").value,
            "position": new Position(
                document.getElementById("posX").value,
                document.getElementById("posY").value,
                document.getElementById("posZ").value
            ),
            "distance": document.getElementById("distance").value,
            "dxyz": new Position(
                document.getElementById("dx").value,
                document.getElementById("dy").value,
                document.getElementById("dz").value
            ),
            "score": {
                "scoreboardNames": document.getElementById("socreboardName").value,
                "scoresType": document.getElementById("scoreType").value,
                "score": document.getElementById("targetScore").value,
                "score2": document.getElementById("targetScore2").value,
                "enableScore2": document.getElementById("targetScore2Enable").value
            },
            "tag": document.getElementById("tagName").value,
            "team": document.getElementById("teamName").value,
            "name": document.getElementById("entityName").value,
            "predicate": document.getElementById("predicateName").value,
            "rotation": new Rotation(
                document.getElementById("rotationX").value,
                document.getElementById("rotationY").value
            ),
            "nbt": document.getElementById("nbt").value,
            "level": {
                "levelType": document.getElementById("levelType").value,
                "level": document.getElementById("targetLevel").value,
                "level2": document.getElementById("targetLevel2").value,
                "enableLevel2": document.getElementById("targetLevel2Enable").value
            },
            "gamemode": GameMode[document.getElementById("gamemode").value],
            "gamemodeDisabled": document.getElementById("canalGamemode").value,
            "advancements": AdvancementID[document.getElementById("advancements").value],
            "advancementsFinish": document.getElementById("advancementIsOk").value,
            "advancementsDisabled": document.getElementById("canalAdvancement").value,
            "limit": document.getElementById("limit").value,
            "sort": SelectorSortMethod[document.getElementById("sort").value],
            "sortDisabled": document.getElementById("disabledSort").value
        }
    }
}