window.addEventListener("load", function () {
    "use strict";
    let buffer, context, loop, draMap, map, size;
  
    buffer = this.document.getElementById('canva01').getContext('2d');
    context = this.document.getElementById('canva01').getContext('2d');
    //16 col x 9 row
    map =[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
          1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1, 
          1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
          1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,
          1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,
          1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,
          1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,
          1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
          1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
    
    size = 32;

    buffer.canvas.width = 16 * size;
    buffer.canvas.height = 9 * size;

    draMap = function(){
        for (let i = 0; i < map.length; i++) {
            let color = (map[i] == 1) ? "#000000" : "#ffffff";           
            buffer.fillStyle = color;
            buffer.fillRect((i % 16) * size, Math.floor(i/16) * size, size, size);            
        }

        context.drawImage(buffer.canvas, 0, 0, buffer.canvas.width, buffer.canvas.height,
            0, 0, buffer.canvas.width, buffer.canvas.height);
    }


    //loop
    loop = function(){
     
  
  
      //draw
      draMap();
  
      window.requestAnimationFrame(loop);
    }
  
  
  
    
    window.requestAnimationFrame(loop);
  
  });
  
  