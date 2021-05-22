var sketchProc = function(processingInstance) {
   with (processingInstance) {
      size(400, 400); 
      frameRate(30);
      noStroke();
      var t = 0;
      var y = 0;
      var draw = function() {
         background(194, 194, 255);
         fill(255, 255, 255);
         rect(0, 250, width, 150);
         y = -0.02*t*t + 3.5*t;
         var grey = 0.1 * y + 200;
         var shadowSize =  0.2 * y + 50;
         fill(grey, grey, grey);
         ellipse(200, 300, shadowSize, 10);
         var correctedY = 250 - y;
         fill(255, 0, 0);
         ellipse(200, correctedY, 50, 50);
         if(y < 0) {
            t = 0;
         }
         t += 5;
      };
   }};
var canvas = document.getElementById("canvas"); 
var processingInstance = new Processing(canvas, sketchProc); 
