// sketch.js

function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES);

}

function draw() {
  background(0);
  translate(300, 300);
  rotate(-90);

  let hr = hour();
  let mn = minute();
  let sc = second();

  //strokeWeight(4);
  //stroke(255);
  //noFill();
  //ellipse(200, 200, 300);

  push();
  strokeWeight(10);
  stroke(245, 166, 91);
  noFill();
  let end1 = map(sc, 0, 60, 0, 360);
  arc(0, 0, 300, 300, 0, end1);
  pop();

  push();
  strokeWeight(8);
  stroke(193, 204, 153);
  noFill();
  let end2 = map(mn, 0, 60, 0, 360);
  arc(0, 0, 260, 260, 0, end2);
  pop();

  push();
  strokeWeight(6);
  stroke(139, 189, 139);
  noFill();
  let end3 = map(hr % 12, 0, 12, 0, 360);
  arc(0, 0, 240, 240, 0, end3);
  pop();

  push();
  noStroke();
  fill(139,148,116);
  ellipse(0, 0, 200, 200);
  pop();


}