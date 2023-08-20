let video;
let canvas;

function setup() {
    video = createCapture(VIDEO);
    video.hide();

    canvas = createCanvas(750, 700);
    canvas.position(100, 100);
}

function draw() {
     
    background(255,255,255);
    image(video, 215, 230, 320, 240); // Use the correct dimensions for the image
    fill(0,255,0);
    rect(45, 50, 10, 600);
    rect(695, 50, 10, 600);
    rect(45, 50, 650, 10);
    rect(45, 645, 650, 10);

    fill(255, 0, 0);
    ellipse(700, 650, 40); // Changed "circle" to "ellipse"
    ellipse(50, 50, 40);
    ellipse(50, 650, 40);
    ellipse(700, 50, 40);
}
