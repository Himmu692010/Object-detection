img="";
status="";
Objects=[];
objectDetector="";

function setup(){
     canvas=createCanvas(700,550);
     canvas.center();
     objectDetector=ml5.objectDetector('cocossd',modelloaded);

     document.getElementById("status").innerHTML="Detecting Objects";
}

function modelloaded(){
     console.log("model is loaded");
     status=true;
     objectDetector.detect(img,gotresult);
}

function gotresult(results,error){
     if (error){
          console.error(error);
     }
     console.log(results);
     Objects=results;
}

function preload(){
     img=loadImage("dog_cat.jpg");
}

function draw(){
     image(img,0,0,698,548);
     if (status!=""){
          for(var i=0;i<Objects.length;i++){
             document.getElementById("status").innerHTML="Status:Objects Detected";
             
             fill("blue");
             percentage=floor(Objects[i].confidence*100);
          text(Objects[i].label+" - "+percentage+"%",Objects[i].x+15,Objects[i].y+15);
     noFill();
     stroke("red");
     rect(Objects[i].x,Objects[i].y,Objects[i].width,Objects[i].height);

          }
          
     }

}