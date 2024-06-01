// Load Functions
export class SelectorLoads {
    constructor() {
    }

    clickAdvancementIsOk(button) {
        if (button.value === "true") {
            button.style.background = "#45FFA2FF";
            button.value = false;
            button.innerHTML = "已达成";
        } else {
            button.style.background = "#ff4545";
            button.value = true;
            button.innerHTML = "未达成";
        }
    }

    canalAdvancements(button) {
        if (button.value === "false") {
            button.style.background = "#45FFA2FF";
            button.value = true;
            document.getElementById("advancementArgs").style.display = "none";
            button.innerHTML = "启用该参数"
        } else {
            button.style.background = "#ff4545";
            button.value = false;
            document.getElementById("advancementArgs").style.display = "block";
            button.innerHTML = "取消该参数";
        }
    }

    clickNotMode(button) {
        if (button.value === "false") {
            button.style.background = "#45FFA2FF";
            button.value = true;
        } else {
            button.style.background = "#ff4545";
            button.value = false;
        }
    }

    canalMode(button) {
        if (button.value === "false") {
            button.style.background = "#45FFA2FF";
            button.value = true;
            document.getElementById("mode").style.display = "none";
            button.innerHTML = " 启用该参数";
        } else {
            button.style.background = "#ff4545";
            button.value = false;
            document.getElementById("mode").style.display = "block";
            button.innerHTML = "取消该参数";
        }
    }

    canalType(button) {
        if (button.value === "false") {
            button.style.background = "#45FFA2FF";
            button.value = true;
            document.getElementById("entityTypes").style.display = "none";
            button.innerHTML = "启用该参数";
        } else {
            button.style.background = "#ff4545";
            button.value = false;
            document.getElementById("entityTypes").style.display = "block";
            button.innerHTML = "取消该参数";
        }
    }

    canalSortMethod(button) {
        if (button.value === "false") {
            button.style.background = "#45FFA2FF";
            button.value = true;
            document.getElementById("SortMethod").style.display = "none";
            button.innerHTML = "启用该参数";
        } else {
            button.style.background = "#ff4545";
            button.value = false;
            document.getElementById("SortMethod").style.display = "block";
            button.innerHTML = "取消该参数";
        }
    }

    secondScoreDisplay() {
        if (document.getElementById("scoreType").value === "选择\"分数1\"到\"分数2\"之间的分数") {
            document.getElementById("score2").style.display = "block";
            document.getElementById("score2").value = "false";
        } else {
            document.getElementById("score2").style.display = "none";
            document.getElementById("score2").value = "true";
        }
    }

    secondLevelDisplay() {
        if (document.getElementById("levelType").value === "选择\"等级1\"到\"等级2\"之间的等级") {
            document.getElementById("level2").style.display = "block";
            document.getElementById("level2").value = "false";
        } else {
            document.getElementById("level2").style.display = "none";
            document.getElementById("level2").value = "true";
        }
    }
}