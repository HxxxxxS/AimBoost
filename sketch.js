var growth_rate = 0.5; // Target growth rate
var target_size = 100; // Target size before shrinking
var spawn_rate = 3;    // Percent chance to spawn each frame (60fps)
var sound = true;

var targets = [];
var lives = 5;
var score = 0;

var cWidth = 1000;
var cHeight = 675;

var controls;
var hitSound,missSound;

function preload() {
    hitSound = loadSound('sounds/score.mp3');
    missSound = loadSound('sounds/miss.mp3');
}

function setup() {

    controls = new Controls();

    controls.initStorage();

    createCanvas(cWidth, cHeight,"style='width:750px;height:500px;'");
    
    controls.initControls();

    targets.push( new Target() );

}

function draw() {

    controls.checkSliders();

    controls.setVolume();
    
    frameRate(60);

    stroke('white');
    strokeWeight(1);
    noFill();
    textSize(16);
    background(51);
    textAlign(LEFT);
    rect(50,50,width-100,height-100);

    if(lives<=0){
        background("red");
        targets = [];
        lives = 5;
        score = 0;
    }

    if(Math.floor((Math.random() * 100) + 1) <= spawn_rate || targets.length <= 1){
        targets.push( new Target() );
    }


    for (var i = targets.length - 1; i >= 0; i--) {
        targets[i].update();
        if(targets[i].w <= 10){
            targets.splice(i,1);
            lives--;
            missSound.play();
        }
    }

    fill("white");
    noStroke();
    text("Lives: "+lives,55,height-55);
    text("fps: "+frameRate(),5,22);
    textAlign(RIGHT);
    text("Higscore: "+localStorage.getItem("highscore"),width-55,height-55);
    text("Score: "+score,width-55,height-75);

    if(score>localStorage.getItem("highscore")){
        localStorage.setItem("highscore",score);
    }

}

function mousePressed() {
    var hit = false;
    for (var i = targets.length - 1; i >= 0; i--) {
        if(is_in_circle(targets[i].x,targets[i].y,targets[i].w,mouseX,mouseY)){
            targets.splice(i,1);
            hitSound.play();
            hit = true;
            score++;
            break;
        }
    }
    if(!hit){
        lives--;
        missSound.play();
    }
}

function is_in_circle(circle_x, circle_y, r, x, y) {
    d = Math.sqrt(Math.pow((circle_x - x),2) + Math.pow((circle_y - y),2));
    return d <= r/2+4;
}
