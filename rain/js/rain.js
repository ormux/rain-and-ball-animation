var sketchProc = function(processingInstance) {
with (processingInstance) {
   size(400, 400); 
   frameRate(30);
   var xPositions = [0, 10, 20, 30];
   var yPositions = [0, 10, 20, 40];

   for(var i = 0; i < 30; i++) {
       xPositions.push(random(0,400));
       yPositions.push(random(0,400));
   }

   draw = function() {
      if (mousePressed) {
         xPositions.push(random(0,400));
         yPositions.push(random(0,400));
      }
      background(64, 85, 89);
      for (var i = 0; i < xPositions.length; i++) {
          noStroke();

          fill(random(0, 400), random(10, 400), random(20, 400));

          ellipse(xPositions[i], yPositions[i], 10, 10);
          yPositions[i] += 5;

          if(yPositions[i] > 400) {
              yPositions[i] = 0;
          }
      }
   };

}};

var canvas = document.getElementById("canvas"); 
var processingInstance = new Processing(canvas, sketchProc); 
