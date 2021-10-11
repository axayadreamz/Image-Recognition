Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:90
});

camera = document.getElementById("camera");

Webcam.attach(camera);

function take_pic()
{
    Webcam.snap(function(data_uri){
        document.getElementById("any").innerHTML = '<img id="pc" src="'+data_uri+'">';
    });
}
console.log('ml5 version:', ml5.version);
glue = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/O6JLqr0ON/model.json',modelLoaded);

function modelLoaded()
{
    console.log('Model is Loaded');
}
function check()
{
    img = document.getElementById('pc');
    glue.classify(img, gotResult);
}
function gotResult(error, results)
{
    if(error) {
        console.error(error);
    }
    else {
        console.log(results);
        document.getElementById("result_object_name").innerHTML = results[0].label;
        document.getElementById("result_object_accuracy").innerHTML = results[0].confidence.toFixed(4);
    }

}