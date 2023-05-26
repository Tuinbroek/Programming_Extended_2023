let x = 320;
let y = 180;
let xspeed = 5;
let yspeed = 2;

let r = 255;
let g = 255;
let b = 255;

function setup() {
  createCanvas(windowWidth, windowHeight); //this is so that the canvas is full screen
}

function draw() {
background(r, g, b);

  let hr = nf(hour(), 2, 0);
  let mn = nf(minute(), 2, 0);
  let sc = nf(second(), 2, 0);
  let mt = month();
  
  console.log(mt);
  
    if(mt > 2 && mt <= 5) {
      r = 150;
      g = 250;
      b = 154;
  }
  else if(mt > 5 && mt <= 8) {
      r = 255;
      g = 211;
      b = 47;
    }
  else if (mt > 8 && mt <= 11) {
      r = 212;
      g = 78;
      b = 0;
  }
  else if (mt == 12 || mt == 1 || mt == 2) {
      r = 84;
      g = 131;
      b = 223;
  }
  
  let x = mouseX;
  let y = mouseY;
  let ix = width - mouseX;
  let iy = height - mouseY;
  
  noStroke();
  fill(0, 200);
  ellipse(x, height/2, y, y);
  fill(0, 100);
  ellipse(ix, height/2, iy, iy);

  fill(r,g,b);
  textSize(80);
  text(hr, width/4, height/2);
  text(mn, width/2, height/2);
  text(sc, 3*width/4, height/2);
}
