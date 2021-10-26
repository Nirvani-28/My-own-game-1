var bg, bgImg
var canvas
var cash
var jwell
var diamonds
var ruby
var track

function preload() {
    bgImg = loadImage("Images/track.png")
    cash = loadImage("Images/cash.png")
    jwell = loadImage("Images/jwell.png")
    ruby = loadImage("Images/ruby.png")
    diamonds = loadImage("Images/diamonds.png")
}




function setup() {
    canvas = createCanvas(windowWidth, windowHeight)
    track = createSprite(windowWidth / 2, windowHeight / 2)
    track.addImage(bgImg)
    track.scale = 2

}

function draw() {

    background(0);
    spawnCash()
    drawSprites();

}

function spawnCash() {
    if (World.frameCount % 200 === 0) {
        var cashObj = createSprite(random(windowWidth / 2 - 100, windowWidth / 2 + 200), (40, 10, 10))
        cashObj.addImage(cash)
        cashObj.velocityY = 3;
        cashObj.scale = 0.3
    }
}