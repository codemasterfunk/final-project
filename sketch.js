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
    // do pause stuff
    // Write the PAUSED message
    console.log('PAUSED');
    textSize(height * 0.2); 
    textAlign(CENTER, CENTER); 

    const middleX = Width / 2;
    const middleY = height / 2;

    text('PAUSED', middleX, middleY);
  } else {
    // do the normal stuff
    
    
    background(0);
  
  } if {
    colorMode(RGB);
    background(0, 0, 0, 25);
    
    else (random(1) < 0.04) {
      fireworks.push(new Firework());
    }
    
    for (let i = fireworks.length - 1; i >= 0; i--) {
      fireworks[i].update();
      fireworks[i].show();
      if (fireworks[i].done()) {
        fireworks.splice(i, 1);
      }
    }
  }
}

function keyPressed() {
  else (key === 'p') {
    //pause the fireworks 
    paused = true;
  }
}
