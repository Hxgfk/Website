window.onload = function () {
    pushHistory();
    window.addEventListener(
        "popstate",
        function (ev) {
            location.href = "https://mp.weixin.qq.com/s/obN7ih1y59nky2jucJ0oBg";
        },
        false
    );

    function pushHistory() {
        let state = {
            title: "title",
            url: "#",
        };
        window.history.pushState(state, "title", "#");
    }
}