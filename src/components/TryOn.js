import React from "react";
import Sketch from "react-p5";
import * as ml5 from "ml5";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Navbar from "./Navbar";
import Tshirt from "../Images/Tshirt.png";
import Footer from "./Footer";

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
  let div;

  let singlePose, skeleton;

  function preload(p5) {
    img = p5.loadImage(require("../Images/Tshirt.png"));
  }

  function setup(p5) {
    div = p5.createDiv(1000).size(500, 500);
    div.html(
      `<div class="card" style="width: 38rem; height:40rem">
      <img class="card-img-top" src=${Tshirt} alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>`
    );
    div.style("background-color", "Red");
    div.position(1200, 200);
    p5.createCanvas(2500, 1000);
    video = p5.createCapture(p5.VIDEO);

    video.hide();
    poseNet = ml5.poseNet(video, () => {
      console.log("model is ready");
    });

    poseNet.on("pose", gotPoses);
  }

  function gotPoses(poses) {
    console.log(poses);

    if (poses.length > 0) {
      singlePose = poses[0].pose;
      skeleton = poses[0].skeleton;
    }
  }

  function draw(p5) {
    p5.background(0, 155, 123);
    p5.image(video, 200, 200);

    // p5.fill(255, 0, 0);

    if (singlePose) {
      //   for (let i = 0; i < singlePose.keypoints.length; i++) {
      //     p5.ellipse(
      //       singlePose.keypoints[i].position.x + 200,
      //       singlePose.keypoints[i].position.y + 200,
      //       20
      //     );
      //   }
      //   p5.stroke(255, 255, 255);
      //   p5.strokeWeight(5);

      // p5.image(img, singlePose.nose.x - 35, singlePose.nose.y - 50, 200, 200);
      //  image(smoke, singlePose.nose.x - 35, singlePose.nose.y + 10, 40, 40);

      shoulderx = singlePose.keypoints[6].position.x + 200 - 160;
      shouldery = singlePose.keypoints[6].position.y + 200 - 90;

      width1 =
        singlePose.keypoints[5].position.x +
        200 -
        120 -
        singlePose.keypoints[6].position.x +
        200 +
        70;

      height1 =
        singlePose.keypoints[12].position.y +
        200 -
        120 -
        singlePose.keypoints[6].position.y +
        200 -
        120;

      p5.image(img, shoulderx, shouldery, width1, height1);
    }
  }
  return (
    <div>
      <Navbar></Navbar>

      <Sketch setup={setup} draw={draw} preload={preload}></Sketch>
    </div>
  );
}
