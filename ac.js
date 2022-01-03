staus = "";
img="";
objects =[];
function preload() {
    img = loadImage("AC.jpeg");

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
           text(object[i].label + " " + fire + "%", object[i].x+20,object[i].y+20);
        
           rect(object[i].x,object[i].y,object[i].width,object[i].height);
       }
   }
}