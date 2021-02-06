const  Engine = Matter.Engine;
const  World = Matter.World;
const  Events = Matter.Events;
const  Bodies = Matter.Bodies;
 
var plinkos = [];
var Score = 0;
var divisionHeight=300;
var score =0;
var divisions = [];
var particle ;
var turn = 0;
var gameState = "PLAY";
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
 text("Score : "+Score,20,30);
 text("500",25,540);
 text("500",105,540);
 text("500",185,540);
 text("100",265,540);
 text("100",345,540);
 text("100",425,540);
 text("100",505,540);
 text("200",585,540);
 text("200",665,540);
 text("200",745,540);
  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }

   if(particle!=null){
     particle.display();
     if(particle.body.position.y>760){
       if(particle.body.position.x<245){
         Score=Score+500;
         particle=null;
         if(turn>=5){
           gameState="END";
         }
       }
     }
   }

   if(particle!=null){
    particle.display();
    if(particle.body.position.y>760){
      if(particle.body.position.x>245 && particle.body.position.x<600){
        Score=Score+100;
        particle=null;
        if(turn>=5){
          gameState="END";
        }
      }
    }
  }

  if(particle!=null){
    particle.display();
    if(particle.body.position.y>760){
      if(particle.body.position.x>601 && particle.body.position.x<900){
        Score=Score+200;
        particle=null;
        if(turn>=5){
          gameState="END";
        }
      }
    }
  }

  if(gameState==="END"){
    textSize(100);
    fill("White")
    text("Game Over",200,250)
  }
}

function mousePressed(){
  if(gameState!=="END"){
    turn++;
    particle = new Particle(mouseX,10,10,10);
  }
}