function preload(){
  // put preload code here
}

function setup() {
  createCanvas(windowWidth,windowHeight)
  // put setup code here
  background("#150026");
  angleMode(DEGREES);


}

function draw() {


  //mouse line
  strokeWeight(6);
  stroke("white");
  line(mouseX, mouseY, mouseX, mouseY);


  //Eye
  push();
  stroke("white");
  strokeWeight(5);
  noFill();
  arc(width/2, 530, 600, 540, 207.5, -27.5);
  arc(width/2, 260, 600, 540, 27.5, -207.5);
  pop();


  //Center eye ARC ROTATION
  push();
  stroke("#white");
  strokeWeight(4);
  fill("#ea0043");
  arc(width/2, height/2, 250, 250, frameCount, frameCount+90, QUARTER_PI, PIE);
  fill("#8a0296");
  arc(width/2, height/2, 250, 250, frameCount+90, frameCount+180, QUARTER_PI, PIE);
  fill("#ea0043");
  arc(width/2, height/2, 250, 250, frameCount+180, frameCount+270, QUARTER_PI, PIE);
  fill("#8a0296");
  arc(width/2, height/2, 250, 250, frameCount+270, frameCount+360, QUARTER_PI, PIE);
  pop();

  //Center eye CERCLE ROTATION
  push();
  translate(width/2, height/2);
  rotate(-frameCount*3);
  stroke(lerpColor(color("#ea0043"), color("#8a0296"), frameCount/120));
  strokeWeight(1);
  noFill();
  ellipse(51, 0, 60, 60);
  if(frameCount==120){noLoop()}
  pop();

  //Center eye  X
  push();
  strokeWeight(4);
  translate(width/2,height/2);
  line(0 - 10, 0 - 10, 0 + 10, 0 + 10);
  line(0 + 10, 0 - 10, 0 - 10, 0 + 10);
  rotate();
  pop();





}
