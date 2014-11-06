var img1;

function setup() {
    createCanvas(1200, 1200);
    img1 = loadImage("bg.png");
    img2 = loadImage("1.png");
}


function draw() {
   background(img1);
   
   image(img2, 700-img2.width/2, 700-img2.height/2, 300, 300);
    // ellipse(500,500,250,250);

//수
   var duration = 3000;
   var timing = (new Date()%duration)/duration;

   fill(146,125,125);
   ellipse(600 + Math.cos(timing*2*PI)*200,           // x좌표
        600 + Math.sin(timing*2*PI)*200,       // y좌표
        10,                                     // width
        10);                                    // height

//금
   var duration = 4000;
   var timing = (new Date()%duration)/duration;

   fill(200,165,125);
   ellipse(600 + Math.cos(timing*2*PI)*250,           // x좌표
        600 + Math.sin(timing*2*PI)*250,       // y좌표
        30,                                     // width
        30);                                    // height

//지
   var duration = 2000;
   var timing = (new Date()%duration)/duration;

   fill(210,215,240);
   ellipse(600 + Math.cos(timing*2*PI)*300,           // x좌표
        600 + Math.sin(timing*2*PI)*300,       // y좌표
        40,                                     // width
        40);                                    // height

//화
   var duration = 5000;
   var timing = (new Date()%duration)/duration;

   fill(240,140,80);
   ellipse(600 + Math.cos(timing*2*PI)*300,           // x좌표
        600 + Math.sin(timing*2*PI)*300,       // y좌표
        20,                                     // width
        20);                                    // height

//목
   var duration = 6000;
   var timing = (new Date()%duration)/duration;

   fill(160,145,165);
   ellipse(600 + Math.cos(timing*2*PI)*350,           // x좌표
        600 + Math.sin(timing*2*PI)*400,       // y좌표
        120,                                     // width
        120);                                    // height

//토
   var duration = 7000;
   var timing = (new Date()%duration)/duration;

   fill(195,165,140);
   ellipse(600 + Math.cos(timing*2*PI)*450,           // x좌표
        600 + Math.sin(timing*2*PI)*450,       // y좌표
        100,                                     // width
        100);                                    // height

//천
   var duration = 5000;
   var timing = (new Date()%duration)/duration;

   fill(160,170,175);
   ellipse(600 + Math.cos(timing*2*PI)*550,           // x좌표
        600 + Math.sin(timing*2*PI)*550,       // y좌표
        70,                                     // width
        70);                                    // height

//해
   var duration = 3000;
   var timing = (new Date()%duration)/duration;

   fill(60,80,140);
   ellipse(600 + Math.cos(timing*2*PI)*600,           // x좌표
        600 + Math.sin(timing*2*PI)*600,       // y좌표
        60,                                     // width
        60);                                    // height
}