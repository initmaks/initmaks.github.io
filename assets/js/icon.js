// ORIGINAL: https://generated.space/
// CREDITS: https://github.com/kgolid/p5ycho
// ORIGINAL: https://github.com/kgolid/p5ycho/tree/master/smokerings

let ox;
let oy;
let oz;

function setup() {
    var canvas = createCanvas(120, 120);
    ox = random(10000);
    oy = random(10000);
    oz = random(10000);

    // Move the canvas so it's inside our <div id="sketch-holder">.
    canvas.parent('myContainer');

    // background(128, 28, 28);

    // lines settings
    strokeWeight(0.3);
    stroke('#6bb4f9');
    smooth();
    noFill();
}

function getNoise (radian, dim){
  let r = radian % TWO_PI;
  if(r < 0.0){r += TWO_PI;}
  return noise(ox + cos(r) * dim, oy + sin(r) * dim);
}

function getNoise (radian, dim, time){
  let r = radian % TWO_PI;
  if(r < 0.0){r += TWO_PI;}
  return noise(ox + cos(r) * dim , oy + sin(r) * dim, oz + time);
}

function display(){
  ox+=0.01;
  oy+=0.01;
  oz+=0.005;

  for(let i = 0; i < 40; i++){
    beginShape();
    for(let angle = 0; angle < 360; angle+=3){
      let radian = radians(angle);
      let radius = 40 + map(getNoise(radian, 0.2, 0.02 * i), 0, 1, -20, 20);
      vertex(radius * cos(radian), radius * sin(radian));
    }
  endShape(CLOSE);
  }
}

function draw() {
  clear();
  translate(width / 2, height / 2);
  display()
}