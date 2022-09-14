function preload()
{
}

function setup()
{
    canvas = createCanvas(450,333);
    canvas.center();

    video = createCapture(VIDEO);
    video.size(450,333);

    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',  gotPoses);
}




function modelLoaded()
{
    console.log('PoseNet Is Initialize')
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        console.log("forehead x =" + results[0].pose.forehead.x);
        console.log("forehead y =" + results[0].pose.forehead.y);
    }
}




function draw()
{
    image(video,0,0,450,333);
}

function take_snapshot()
{
    save('myFilterImage.png');
}