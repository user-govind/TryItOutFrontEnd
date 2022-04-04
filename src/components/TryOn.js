import React from "react";
import Sketch from "react-p5";
import * as ml5 from "ml5";

export default function TryOn() {
  let video;
  let img;
  let poseNet;
  let noseX = 0;
  let noseY = 0;
  let eyelX = 0;
  let eyelY = 0;

  let shoulderx;
  let shouldery;

  let leftHipX = 0;
  let leftHipY = 0;
  let rightHipX = 0;
  let rightHipY = 0;
  let ctx;
  let width1 = 0;
  let height1 = 0;
  let v;

  function preload(p5) {
    img = p5.loadImage(require("../Images/Tshirt.png"));
  }

  function draw(p5) {
    p5.image(video, 0, 0);

    p5.image(img, noseX, noseY, width1, height1);
  }

  function setup(p5) {
    p5.createCanvas(1000, 1000);
    p5.background(150, 205, 111);
    video = p5.createCapture(p5.VIDEO);

    poseNet = ml5.poseNet(video, () => {
      console.log("model is ready");
    });

    poseNet.on("pose", gotPoses);
  }

  function gotPoses(poses) {
    console.log(poses);

    if (poses.length > 0) {
      let nX = poses[0].pose.keypoints[5].position.x + 180;
      let nY = poses[0].pose.keypoints[5].position.y - 91;
      let eX = poses[0].pose.keypoints[6].position.x - 180;
      let eY = poses[0].pose.keypoints[6].position.y - 91;
      let lhX = poses[0].pose.keypoints[11].position.x;
      let lhY = poses[0].pose.keypoints[11].position.y;
      let rhX = poses[0].pose.keypoints[12].position.x;
      let rhY = poses[0].pose.keypoints[12].position.y;

      shoulderx = poses[0].pose.keypoints[5].position.x;
      shouldery = poses[0].pose.keypoints[5].position.y;

      noseX = nX;
      noseY = nY;

      // noseX = v.lerp(noseX, nX, 0.5);
      // noseY = v.lerp(noseY, nY, 0.5);
      // eyelX = v.lerp(eyelX, eX, 0.5);
      // eyelY = v.lerp(eyelY, eY, 0.5);
      // leftHipX = v.lerp(leftHipX, lhX, 0.5);
      // leftHipY = v.lerp(leftHipY, lhY, 0.5);
      // rightHipX = v.lerp(rightHipX, rhX, 0.5);
      // rightHipY = v.lerp(rightHipY, rhY, 0.5);

      width1 = eX - nX - 10;
      height1 = lhY - nY;
      console.log(noseX + noseY + width1);
    }
  }

  return (
    <div>
      <Sketch setup={setup} draw={draw} preload={preload}></Sketch>
    </div>
  );
}
