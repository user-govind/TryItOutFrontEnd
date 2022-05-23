import React, { useEffect, useState } from "react";
import Sketch from "react-p5";
import * as ml5 from "ml5";

import Navbar from "./Navbar";

import Carousell from "./Carousell";
import "../stylesheets/Register.css";

export default function TryOn() {
  let video;
  let img;
  let poseNet;
  let shoulderx;
  let shouldery;
  let width1 = 0;
  let height1 = 0;
  let div;
  let button1;
  let button2;
  let button3;
  let button4;
  let button5;

  let [imgArr, setimgArr] = useState([
    "Pngtree.png",
    "5-t-shirt-png-image.png",
    "6-t-shirt-png-image.png",
    "26-t-shirt-png-image.png",
    "75119-sanchez-morty-shirt-adidas-smith-t-shirt-rick.png",
    "90911-shirt-royale-tshirt-fortnite-battle-clothing.png",
    "suit_PNG8120.png",
    "suit_PNG932534.png",
    "girlsslingtops.png",
    "littlegirlskirt.png",
  ]);

  let no = Math.random();
  const randomImgGen = () => {
    return Math.random() * 10;
  };
  let indexObj = {
    frist: randomImgGen(),
    second: randomImgGen(),
    third: randomImgGen(),
    fourth: randomImgGen(),
  };

  console.log(indexObj);

  let singlePose, skeleton;
  let song;
  function preload(p5) {
    img = p5.loadImage(
      require("../TryOnImages/" +
        JSON.parse(sessionStorage.getItem("TryOnImg")))
    );
  }

  function setup(p5) {
    div = p5.createDiv(750).size(500, 444);
    //console.log(imgArr[0]);
    // song = p5.loadSound(require("../Music/On-My-Way.mp3"), this.loaded);
    // song.play();
    function refresh() {
      window.location.reload();
    }

    function fristImgFunc() {
      sessionStorage.setItem(
        "TryOnImg",
        JSON.stringify(imgArr[parseInt(indexObj.frist)])
      );
      window.location.reload();
    }
    function secondImgFunc() {
      sessionStorage.setItem(
        "TryOnImg",
        JSON.stringify(imgArr[parseInt(indexObj.second)])
      );
      window.location.reload();
    }

    function thirdImgFunc() {
      sessionStorage.setItem(
        "TryOnImg",
        JSON.stringify(imgArr[parseInt(indexObj.third)])
      );
      window.location.reload();
    }

    function fourthImgFunc() {
      sessionStorage.setItem(
        "TryOnImg",
        JSON.stringify(imgArr[parseInt(indexObj.fourth)])
      );
      window.location.reload();
    }

    button1 = p5.createButton("Try On");
    button1.position(985, 766);
    button1.addClass("btn btn-warning");
    button1.mousePressed(fristImgFunc);

    button2 = p5.createButton("Try On");
    button2.position(1234, 766);
    button2.addClass("btn btn-warning ");
    button2.mousePressed(secondImgFunc);

    button3 = p5.createButton("Try On");
    button3.position(985, 989);
    button3.addClass("btn btn-warning");
    button3.mousePressed(thirdImgFunc);

    button4 = p5.createButton("Try On");
    button4.position(1234, 989);
    button4.addClass("btn btn-warning");
    button4.mousePressed(fourthImgFunc);

    button5 = p5.createButton("Reload new Imges");
    button5.position(990, 1055);
    button5.addClass("btn btn-primary w-25");
    button5.mousePressed(refresh);

    div.html(
      `<div class="flex1">
      <div class="flex2" >
    <div class="card" style="width:250px;">
    <div style="padding-left:46px;">
    <img class="card-img-top" src=${require("../TryOnImages/" +
      imgArr[
        parseInt(indexObj.frist)
      ])} style= "height: 150px; width:160px; justify-content-center; " alt="Card image cap"></div>
    <div class="card-body">
    <div  style="margin-left:65px;>
    <input type="button"  class="btn btn-warning">Try On</input>
    </div>
    </div>
  </div>
</div>
        <div class="flex2" >
<div class="card" style="width: 250px;">
<div style="padding-left:46px;">
    <img class="card-img-top" src=${require("../TryOnImages/" +
      imgArr[
        parseInt(indexObj.second)
      ])}  style= "height: 150px; width:160px; justify-content-center; " alt="Card image cap"></div><div class="card-body">
    <div  style="margin-left:65px;>  
    <input type="button"  class="btn btn-warning">Try On</input>
    </div></div>
</div>
</div>
    </div>
    <div class="flex1">
      <div class="flex2" >
    <div class="card" style="width:250px;">
    <div style="padding-left:46px;">
    <img class="card-img-top" src=${require("../TryOnImages/" +
      imgArr[
        parseInt(indexObj.third)
      ])}  style= "height: 150px; width:160px; justify-content-center; " alt="Card image cap"></div>    <div class="card-body">
    <div  style="margin-left:65px;>
    <input type="button"  class="btn btn-warning">Try On</input>
    </div>  </div>
  </div>
</div>
        <div class="flex2" >
<div class="card" style="width: 250px;">
<div style="padding-left:46px;">
    <img class="card-img-top" src=${require("../TryOnImages/" +
      imgArr[
        parseInt(indexObj.fourth)
      ])}  style= "height: 150px; width:160px; justify-content-center; " alt="Card image cap"></div><div class="card-body">

    <div  style="margin-left:65px;>
    <input type="button" class="btn btn-warning">Try On</input>
    </div>
   
    </div>
</div>
</div>
    </div>`
    );

    div.style("background-color", "White");
    div.position(900, 600);
    p5.createCanvas(1520, 1000);

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
    p5.background(255, 187, 256);

    p5.image(video, 200, 200);

    if (singlePose) {
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
      <Carousell></Carousell>
      <Sketch setup={setup} draw={draw} preload={preload}></Sketch>
    </div>
  );
}
