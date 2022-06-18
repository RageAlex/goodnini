noseX=0;
noseY=0;

function preload() {
  img=loadImage("https://i.postimg.cc/3xv3f3N7/pngtree-thick-painted-illustration-style-tomato-color-bite-lip-makeup-beauty-lips-image-1280159-remo.png")
}

function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(300, 300);
  video.hide();

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}

function modelLoaded() {
  console.log('PoseNet Is Initialized');
}

function gotPoses(results)
{
  if(results.length > 0)
  {
    console.log(results);
    noseX = results[0].pose.nose.x -35;
    noseY = results[0].pose.nose.y +15;
    console.log("nose x = " + noseX);
    console.log("nose y = " + noseY);
  }
}

function draw() {
  image(video, 0, 0, 300, 300);
  image(img,noseX,noseY,100,100);
  
}

function take_snapshot(){    
  save('myFilterImage.png');
}