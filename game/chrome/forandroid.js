// for android control

const createKeyCode = (keyCode) => {
    const preventDefault = () => void 0;
    return {keyCode, preventDefault}
};

// Jump
const jumpKey = createKeyCode(38);
// Down
const downKey = createKeyCode(40);
// Start
const startKey = createKeyCode(32);

function clickKey(kcode) {
    Runner().onKeyDown(kcode);
    setTimeout(() => {
        Runner().onKeyUp(kcode);
    }, 5);
}

function addAndroidControl() {
    let t, time;
    document.addEventListener('touchstart', function (e) {
        e.preventDefault();
        t = e.touches[0];
        time = Date.now();
    });
    document.addEventListener('touchmove', function (e) {
        e.preventDefault()
        let dt = Date.now() - time;
        if (dt < 300) {
            clickKey(jumpKey);
        } else {
            clickKey(downKey);
        }

    });
    EventUtil.bindEvent(document.documentElement, 'click', function () {
        if (!Runner.instance_.playing) {
            clickKey(startKey);
            document.getElementById("label_slow_option").classList.remove("hidden");
        }
    });
}