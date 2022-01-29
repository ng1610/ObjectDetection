objectDetector="";
status1 = "";
object1=[];
img="";

function preload(){
    img= loadImage('zebra.jpg');
}
function setup(){
    canvas= createCanvas(640, 420);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML="Status- Detecting objects";
}
function draw(){
    image(img, 0, 0, 640, 420);
    if(status1!= ""){

        for(i=0; i<object1.length; i++){
           document.getElementById("status").innerHTML="Status- Object Detected";

           fill("#FF0000");
           percent=floor(object1[i].confidence * 100);
           text(object1[i].label + " " + percent + "%", object1[i].x+15, object1[i].y+15);
           noFill();
           stroke("#FF0000");
           rect(object1[i].x, object1[i].y, object1[i].width, object1[i].height);

        }
    }
}
function modelLoaded(){
    console.log("Model loaded");
    status1=true;
    objectDetector.detect(img, gotResults);
}
function gotResults(error, results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
        object1=results;
    }
}