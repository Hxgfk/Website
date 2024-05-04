class AnimationMath {
    distance(ax, ay, bx, by){
        return Math.sqrt((Math.pow(ax-bx, 2)+Math.pow(ay-by, 2)));
    }

    random(min, max){
        return Math.random()*(max-min)+min;
    }
}