// Daniel Shiffman
// http://codingtra.in
// https://youtu.be/CKeyIbT3vXI

const fireworks = [];
let gravity;

var paused = false;
function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB);
  gravity = createVector(0, 0.2);
  stroke(255);
  strokeWeight(4);
  background(0);
}

function draw(){
  if (paused){
    //do the fireworks
  } else {
    //do the normal stuff
  }
  colorMode(RGB);
  background(0, 0, 0, 25);
  
  if (random(1) < 0.04) {
    fireworks.push(new Firework());
  }
  
  for (let i = fireworks.length - 1; i >= 0; i--) {
    fireworks[i].update();
    fireworks[i].show();
  
    
  function keyPressed(){
  if (key === 'p')}
    //pause the fireworks 
    paused = true;
  }
}
    
    if (fireworks[i].done()) {
      fireworks.splice(i, 1);
    }
  }
}
