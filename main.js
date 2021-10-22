Webcam.set({
    width: 310,
    height: 310,
    image_format: 'png',
    png_quality: 100,
    constraints: {
        facingMode: "environment"
    }
});

camera = document.getElementById("camera");

Webcam.attach("camera");

function take_snapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="' + data_uri + '"/>';
    });

}
console.log(ml5.version);

classifier=ml5.imageClassifier("MobileNet",modelLoaded);

function modelLoaded()
{
    console.log("modelLoaded");
}

function identify_image()
{
    img=document.getElementById("captured_image");
    classifier.classify(img,gotresult);
    
}

function gotresult(error,results)
{
   if(error)
       {
           console.log(error);
       }
    else
    {
        console.log(results);
        document.getElementById("object_name").innerHTML=results[0].label;
    }
}