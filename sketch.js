let canvas
function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0,0);
    canvas.style('z-index', '-1');
  }
function draw() {
    background(0, 20);
    stroke(255);
    strokeWeight(2);
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
function mouseClicked(){
    ellipse(mouseX, mouseY, 50)
}