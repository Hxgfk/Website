fireworks = [];
particles = [];

function Particle(x, y, that) {
    this.x = x;
    this.y = y;
    this.locus = [];
    this.locuscount = 10;
    while(this.locuscount--){
        this.locus.push([this.x,this.y]);
    }
    this.angle = random(0 , 2*Math.PI);
    this.speed = random(1, 10);
    this.mocal = 0.95;
    this.gravity = 0.98;
    this.hue = random(that.colorrange-20, that.colorrange+20);
    this.brightness = random(50, 80);
    this.alpha = 1;
    this.decay = random(0.015, 0.03);
}

function Firework(ax, ay, bx, by){
    this.x = ax;
    this.y = ay;
    this.sx = ax;
    this.sy = ay;
    this.tx = bx;
    this.ty = by;
    this.target = new AnimationMath().distance(ax, ay, bx, by);
    this.distancesc = 0;
    this.locus = [];
    this.locuscount = 3;
    while(this.locuscount--){
        this.locus.push([this.x,this.y]);
    }
    this.angle = Math.atan2(by-ay,bx-ax);
}


class FireworkAnimation{
    colorrange;
    timer;
    tick = 0;
    acceleration;
    brightness;
    radius;
    speed;
    particles;
    context;
    e;

    constructor(colorRange, timer, firework_brightnessMax, firework_brightnessMin, acceleration, radius, speed, particlecount, canvaelement) {
        this.colorrange = colorRange;
        this.timer = timer;
        this.brightness = new AnimationMath().random(firework_brightnessMin, firework_brightnessMax);
        this.radius = radius;
        this.acceleration = acceleration;
        this.speed = speed;
        this.particles = particlecount;
        this.context = canvaelement.getContext("2d");
        this.e = canvaelement;
        this.initDraw();
    }

    start(){
        let s = this.start;
        window.requestAnimationFrame(function (){
            s();
        });
        let w = 100;
        let h = 100;
        this.colorrange +=0.5;
        this.context.fillRect(0, 0, w, h);
        this.context.fillStyle='rgb(0, 0, 0, 0.5)';
        this.context.globalCompositeOperation='lighter';
        let i = fireworks.length;
        while(i--){
            fireworks[i].draw();
            fireworks[i].update(i);
        }
        i = particles.length;
        while(i--){
            particles[i].draw();
            particles[i].update(i);
        }
        if(this.tick >= this.timer)
        {
            let m = new AnimationMath();
            fireworks.push(new Firework(w/2, h, m.random(0, w), m.random(0, h)));
            this.tick = 0;
        } else{
            this.tick++;
        }
    }

    initDraw(){
        let canvas = this.context;
        let radius = this.radius;
        let speed = this.speed;
        let acceleration = this.acceleration;
        let color = this.colorrange;
        let brightness = this.brightness;
        let particle = Particle;

        function createparticals(x, y){
            let count = particles;
            while (count--){
                particles.push(new particle(x, y));
            }
        }

        // Updtae Firework Position
        Firework.prototype.update = function (index) {
            this.locus.pop();
            this.locus.push([this.x, this.y]);
            if (radius < 8){
                radius += 0.3;
            }else {
                radius = 1;
            }
            speed *= acceleration;
            let vx = Math.cos(this.angle) * speed;
            let vy = Math.sin(this.angle) * speed;
            this.distancesc = new AnimationMath().random(this.sx,this.sy,this.x+vx,this.y+vy);
            if(this.distancesc >= this.target){
                createparticals(this.tx,this.ty);
                fireworks.splice(index,1)
            }else{
                this.x += vx;
                this.y += vy;
            }
        }

        // Draw Firework Locus
        Firework.prototype.draw = function (){
            canvas.beginPath();
            canvas.moveTo(this.locus[this.locus.length-1][0], this.locus[this.locus.length-1][1]);
            canvas.lineTo(this.x, this.y);
            canvas.strokeStyle='hsl('+color+',100%,'+brightness+'%)';
            canvas.stroke();
            canvas.beginPath();
            canvas.arc(this.tx, this.ty, radius, 0, Math.PI*2);
        }

        // Update Particle
        Particle.prototype.update = function (index) {
            this.locus.pop();
            this.locus.unshift([this.x, this.y]);
            this.speed *= this.mocal;
            this.x += Math.cos(this.angle)*this.speed;
            this.y += Math.sin(this.angle)*this.speed+this.gravity;
            this.alpha -= this.decay;
            if(this.alpha <= this.decay){
                particles.splice(index,1)
            }
        }

        // Draw Particle Locus
        Particle.prototype.draw = function (){
            canvas.beginPath();
            canvas.moveTo(this.locus[this.locus.length-1][0], this.locus[this.locus.length-1][1]);
            canvas.lineTo(this.x,this.y);
            canvas.strokeStyle='hsl('+color+' '+brightness+'%)';
            canvas.stroke();
        }
    }
}