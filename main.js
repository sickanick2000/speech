var speechRecognition = window.webkitSpeechRecognition;
var Recognition = new speechRecognition();

function start()
{
    document.getElementById("text_box").innerHTML = "";
    Recognition.start();
}
Recognition.onresult = function(event){
    console.log(event);
    var content = event.results[0][0].transcript;
    console.log(content);
    document.getElementById("text_box").innerHTML = content;
    if(content=="Take my selfie.")
    {
        speak();
    }
  
}
function speak()
{
    var syenth = window.speechSynthesis;
    speak_data = "taking your selfie in 5 seconds";
    var Utterthis = new SpeechSynthesisUtterance(speak_data);
    syenth.speak(Utterthis);
    Webcam.attach(camera);
    setTimeout(function(){
        take_snapshot();
    }, 5000);
}
Webcam.set({
width: 360,
height: 250,
image_format: 'png',
png_quality: 90
});
camera = document.getElementById("camera");

function take_snapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = "<img id='selfie_image' src='"+data_uri+"'>";
    });
}

function save()
{
    link = document.getElementById("link");
    image = document.getElementById("selfie_image").src;
    link.href = image;
    link.click();
}