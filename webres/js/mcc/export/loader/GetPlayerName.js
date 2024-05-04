export function playerNameInput(inputId, setId) {
    if (document.getElementById(inputId).value === "指定玩家名或自定义选择器") {
        function input() {
            let i = prompt("请输入玩家名或自定义选择器：");
            if (i === null || i === "") {
                input();
            } else {
                return i;
            }
        }

        let n = input();

        document.getElementById(setId).innerHTML = n;
        document.getElementById(inputId).value = n;
    }
}