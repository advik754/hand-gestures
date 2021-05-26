var prediction_1="";
var prediction_2="";
Webcam.set({
width: 350,
height: 300,
image_format:"png",
png_quality:90
});

camera=document.getElementById("camera");

Webcam.attach('#camera');

function take_snapshot(){
Webcam.snap(function(data_uri){
document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'"/>';
});
}

console.log("ml5 version",ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/BviwSjJAb/model.json',modelloaded);

function speak(){
synth=window.speechSynthesis;
speak_data_1="first prediction is -"+prediction_1;
speak_data_2="second prediction is -"+prediction_2;
utterThis=new SpeechSynthesisUtterance(speak_data_1+speak_data_2);
synth.speak(utterThis);
}

function modelloaded(){
console.log("modelloaded");
}

function check(){
img=document.getElementById("captured_image");
classifier.classify(img,gotResult);
}

function gotResult(error,result){
if(error){
console.error(error);
}
else{
console.log(result);
document.getElementById("result_gesture_name").innerHTML=result[0].label;
document.getElementById("result_gesture_name2").innerHTML=result[1].label;
prediction_1=result[0].label;
prediction_2=result[1].label;
speak();
if(result[0].label=="like"){
    document.getElementById("update_hand").innerHTML="&#128077";

    if(result[0].label=="ok"){
        document.getElementById("update_hand").innerHTML="&#128076;";
        }
        if(result[0].label=="fist"){
            document.getElementById("update_").innerHTML="&#9994";
            } 




            if(result[1].label=="like"){
                document.getElementById("update_hand2").innerHTML="&#128077";
                }
                
                if(result[1].label=="ok"){
                    document.getElementById("update_hand").innerHTML="&#128076;";
                    }

                    if(result[1].label=="fist"){
                        document.getElementById("update_hand2").innerHTML="&#9994";
                        }
}





}
}