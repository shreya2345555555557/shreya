leftWristx="";
leftWristy="";
rightWristx="";
rightWristy="";
function setup()
{
    canvas= createCanvas(600,500);
    canvas.center();

    video=createCapture(VIDEO);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function draw()
{
    image(video,0,0,600,500);
}
song="";
function preload()
{
    song=loadSound("music.mp3");
}
function play()
{
    song.play();
    song.setVolume(1);
    song.rate(1);
}
function modelLoaded()
{
    console.log("PoseNet Is Initialised");
}
function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results);
        leftWristx=results[0].pose.leftWrist.x;
        leftWristy=results[0].pose.leftWrist.y;
        console.log("leftWristx = "+leftWristx+" leftWristy = "+leftWristy);
        rightWristx=results[0].pose.rightWrist.x;
        rightWristy=results[0].pose.rightWrist.y;
        console.log("rightWristx = "+rightWristx+" rightWristy = "+rightWristy);

    }
}
