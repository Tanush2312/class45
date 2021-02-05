var bg,player,bulletg,rocketg
function preload() {
  bg=loadImage("sprite_0.png")
  playerimg=loadImage("player.jpg")
  bulletimg= loadImage("lazer.png")
  rocketimg=loadImage("spaceship.png") 
}

function setup() {
  createCanvas(1200,400);
  bulletg=new Group()
  rocketg=new Group()
player=createSprite(200,327,400,400);
player.addImage(playerimg)
player.scale=0.32;
}

function draw() {
  background(bg); 
  for(var i=0;i <rocketg.maxDepth();i++){
    var object=rocketg.get(i)
    if(rocketg.get(i)!==null&&bulletg.isTouching(rocketg.get(i))){
      rocketg.get(i).destroy()
    }
  }
  //if(bulletg.isTouching(rocketg) ){
  //  rocketg.destroyEach()
  //}
  if (keyDown(RIGHT_ARROW)){
    player.velocityX=5;
  }
if (keyDown(LEFT_ARROW)){
    player.velocityX=-5;
  }
  if (keyDown("space")){
  createbullet();
  }
  edges=createEdgeSprites()
player.collide(edges[1]);
player.collide(edges[0]); 
  spawnrockets()
  drawSprites();
}
function createbullet(){
  var bullet= createSprite(100,262,10,10)
  bullet.addImage(bulletimg)
  bullet.x = player.x 
  bullet.velocityY=-10
  bullet.lifetime=100
  bulletg.add(bullet)
}
function spawnrockets (){
  if(frameCount%80===0){
    var rocket=createSprite(100,random(50,100),10,10)
    var rand=Math.round(random(1,2))
    rocket.addImage(rocketimg)
    rocket.scale=0.25
    if(rand===1){
      rocket.x=0
      rocket.velocityX=2
    }
    if (rand===2){
      rocket.velocityX=-2
      rocket.x=1200
    }
   rocketg.add(rocket)
  }
}