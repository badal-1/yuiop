song = "";
lwx = 0;
lwy = 0;
rwx = 0;
rwy = 0;
function preload(){
song = loadSound("music.mp3");
}
function setup(){
canvas = createCanvas(400, 400);
canvas.center();
video = createCapture(VIDEO);
video.hide();

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('Pose' , gotPoses);
}
function modelLoaded(){
console.log('Pose-Net is Initialised');
}
function gotPoses(results){
if(results.length > 0){
console.log(results);
lwx = results[0].pose.leftWrist.x;
lwy = results[0].pose.leftWrist.y;
console.log("leftWristX = " + lwx + " leftWristY = " + lwy);
rwx = results[0].pose.rightWrist.x;
rwy = results[0].pose.rightWrist.y;
console.log("rightWristX = " + rwx + " rightWristY = " + rwy);
}
}
function draw(){
image(video, 0,0, 600, 500);
}
function play(){
song.play();
song.setVolume(1);
song.rate(1);
}