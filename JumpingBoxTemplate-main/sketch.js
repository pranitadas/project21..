var canvas;
var box2;
var surface1, surface2, surface3, surface4;
var box, edges1, edges2, edges3, edges4, boxcolor;
function preload(){
  
}


function setup(){
    canvas = createCanvas(500,500);
  surface1 = createSprite(40, 450, 75, 10);
  surface1.shapeColor="red";

  surface2 = createSprite(150, 450, 75, 10);
  surface2.shapeColor="blue";

  surface3 = createSprite(270, 450, 75, 10);
  surface3.shapeColor="green";

  surface4 = createSprite(390, 450, 75, 10);
  surface4.shapeColor="yellow";


    //create box sprite and give velocity

     box= createSprite(250,250,30-5,30-5);
     box.shapeColor="white";

     edges1=createSprite(500,250,10,500);
     edges2=createSprite(0,250,10,500);
     edges3=createSprite(250,0,500,10);
     edges4=createSprite(250,500,500,10);

    edges1.shapeColor="black";
    edges2.shapeColor="black";
    edges3.shapeColor="black";
    edges4.shapeColor="black";

box2=createSprite(250,100,100,5);
box2.shapeColor="black";

    }

function draw() {
    background("black");
    
   if(keyDown(LEFT_ARROW)){
       box.velocityX=-5;
   } 
    
   if(keyDown(RIGHT_ARROW)){
    box.velocityX=5;
} 

if(keyDown(UP_ARROW)){
    box.velocityY=-5;
} 

if(keyDown(DOWN_ARROW)){
    box.velocityY=5;
} 


 
 if(box.bounceOff(surface1)){
     box.shapeColor=surface1.shapeColor
 }

 if(box.bounceOff(surface2)){
    box.shapeColor=surface2.shapeColor
}

if(box.bounceOff(surface3)){
    box.shapeColor=surface3.shapeColor
}

if(box.bounceOff(surface4)){
    box.shapeColor=surface4.shapeColor
}
;
  
  if(surface1.isTouching(box)){
      box.shapeColor=surface1.shapeColor;
  }
  
  if(surface1.isTouching(box)){
    box.shapeColor=surface1.shapeColor;
}

if(surface2.isTouching(box)){
    box.shapeColor=surface2.shapeColor;
}

if(surface3.isTouching(box)){
    box.shapeColor=surface3.shapeColor;
}

if(surface4.isTouching(box)){
    box.shapeColor=surface4.shapeColor;
}
  
  
box.bounceOff(edges1);
box.bounceOff(edges2);
box.bounceOff(edges3);
box.bounceOff(edges4);
 boxcolor=box.shapeColor; 

if (box.isTouching(box2)){
    box.shapeColor="white";
}


 text("BOX COLOUR="+boxcolor, 230, 40);
fill("white");


drawSprites();
}
