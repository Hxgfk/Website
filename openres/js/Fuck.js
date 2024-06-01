let pos;
function move1(target){
    target.onmouseover = function (){
        pos ? (pos=0) : (pos=150);
        target.style.transform = "translate("+pos+"px, 0px)";
        target.style.transition = "all 0.3s ease";
    };
}

let d = "block";
let c = false;
function invisibily1(target){
    if (!c){
        c = true;
        if (target.style.display !== ''){
            c = target.style.display;
        }
    }
    target.onmouseover = function (){
        target.style.display = "none";
    };
    target.onmouseleave = function (){
        target.style.display = d;
    };
}

function isFoolFestival(){
    const date = new Date();
    return (date.getDate() === 1) && (date.getMonth() === 4);
}