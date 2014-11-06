var img1;

function setup() {
    createCanvas(1000, 1000);
    img1 = loadImage("bg.png");
    img2 = loadImage("1.png");
}


function draw() {
   background(img1);
   
   image(img2, 625-img2.width/2, 625-img2.height/2, 250, 250);
    // ellipse(500,500,250,250);

   var duration = 3000;
   var timing = (new Date()%duration)/duration;

   fill(100,0,0);
   ellipse(500 + Math.cos(timing*2*PI)*200,           // x좌표
        500 + Math.sin(timing*2*PI)*200,       // y좌표
        30,                                     // width
        30);                                    // height

   var duration = 4000;
   var timing = (new Date()%duration)/duration;

   fill(100,50,0);
   ellipse(500 + Math.cos(timing*2*PI)*250,           // x좌표
        500 + Math.sin(timing*2*PI)*250,       // y좌표
        20,                                     // width
        20);                                    // height
}