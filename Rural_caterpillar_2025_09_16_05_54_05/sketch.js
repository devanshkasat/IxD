function setup() {
  createCanvas(600, 400);
  noStroke();

  // Draw 5 circles
  for (let i = 0; i < 5; i++) {
    let x = random(width);
    let y = random(height);
    let r = random(30, 100); // circle size
    let c = color(random(255), random(255), random(255)); // random color
    fill(c);
    ellipse(x, y, r, r);
  }
}

function draw() {
  // nothing here, circles drawn only once
}
