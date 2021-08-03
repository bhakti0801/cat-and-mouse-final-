var canvas,bg,cat1Img,mouse,cat2Img,cat3Img,mouse1Img,mouse2Img,mouse3Img;
function preload() {
    //load the images here
    bg=loadImage("images/garden.png") 
    cat1Img=loadAnimation("images/cat1.png") 
    cat2Img=loadAnimation("images/cat2.png ", "images/cat3.png")
    cat4Img=loadAnimation("images/cat4.png") 
    mouse1Img=loadAnimation("images/mouse1.png")
    mouse2Img=loadAnimation("images/mouse2.png ", "images/mouse3.png")
    mouse4Img=loadAnimation("images/mouse4.png")
}

function setup(){
    canvas=createCanvas(1000,800);
    //create tom and jerry sprites here
    cat=createSprite(870,600)
    cat.addAnimation("catSleeping", cat1Img)
    cat.scale=0.2 
    mouse=createSprite(200,600);
    mouse.addAnimation("mouseStanding",mouse1Img);
    mouse.scale=0.2

}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide

if (cat.x - mouse.x <(cat.width - mouse.width)/2){
    cat.velocityX=0;
    cat.addAnimation("catlastimage",cat4Img)
    cat.X=300;
    cat.scale=0.2
    cat.changeAnimation("catlastimage")
    mouse.addAnimation("mouselastimage",mouse4Img);
    mouse.scale=0.15
    mouse.changeAnimation("mouselastimage")
}

    drawSprites();
}


function keyPressed(){
    
if(keyCode===LEFT_ARROW)
mouse.addAnimation("mouseTeasing", mouse2Img);
mouse.changeAnimation("mouseTeasing")
mouse.frameDelay = 25;
cat.velocityX=-5
cat.addAnimation("catrunning", cat2Img);
cat.changeAnimation("catrunning")

  //For moving and changing animation write code here


}
