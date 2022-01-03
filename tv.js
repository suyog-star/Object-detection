staus = "";
img="";
objects =[];
function preload() {
    img = loadImage("TV.jpeg");

}

function setup() {
canvas = createCanvas(300,300);
canvas.center();
lanch = ml5.objectDetector("cocossd",modelLoaded);
}

function modelLoaded() {
    console.log("Model Loaded")
    staus=true;
    lanch.detect(img,gotResults);
}

function gotResults(error,results) {
    if(error) {
        console.log(error);
    }
    else {
        console.log(results);
        objects = results;
    }
}

function retrun() {
    window.location="index.html";

}

function draw() {
   image(img,0,0,300,300);
   if(staus != "") {
       for(i=0; i<objects.length; i++) {
           document.getElementById("status").innerHTML = "objects detected";
           document.getElementById("objects").innerHTML ="Number Of Objects Detected Are"+objects.length;
           fire =floor(objects[i].confidence*100);
           fill("red");
           noFill();
           text(objects[i].label+" "+fire+"%",objects[i].x+15,objects[i].y+15);
           stroke("blue");
           rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
       }
   }
}