var canvas,box,redbox,yellowbox,bluebox,pinkbox;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    box = createSprite(random(20,750),575,20,20);
    box.shapeColor = "white";
    box.velocityX= 2;
    redbox = createSprite(97.5,590,195,10)    
    redbox.shapeColor= "red";
    yellowbox = createSprite(302.5,590,195,10)  
    yellowbox.shapeColor= "yellow";
    bluebox = createSprite(507.5,590,195,10)  
    bluebox.shapeColor= "lightblue";
    pinkbox = createSprite(712.5,590,195,10)  
    pinkbox.shapeColor= "pink";
}

function draw() {
    background(rgb(169,169,169));
    createEdgeSprites();
    if (box.x > 790 || box.x<10){
        box.velocityX = -1*box.velocityX

    }
    if (box.x - redbox.x < redbox.width/2){
        box.shapeColor = "red";
        background("lightgreen")
    } 
    
    else if (box.x - yellowbox.x < yellowbox.width/2){
        box.shapeColor = "yellow";
        background("black")
    } 
    else if (box.x - bluebox.x < bluebox.width/2){
        box.shapeColor = "lightblue";
        background("orange")
    } 
    else if (box.x - pinkbox.x < pinkbox.width/2){
        box.shapeColor = "pink";
        background("white")
    } 


    box.display();
    redbox.display();
    yellowbox.display();
    bluebox.display();
    pinkbox.display();

    //add condition to check if box touching surface and make it box
}
