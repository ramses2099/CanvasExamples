window.addEventListener("load", function () {
  "use strict";
  let context, controller, rectangle, loop;

  context = this.document.getElementById('canva01').getContext('2d');

  context.canvas.height = 180;
  context.canvas.width = 320;

  rectangle = {
    height: 16,
    jumping:true,
    width: 32,
    x: 14,
    y: 0,
    vx: 0,
    vy: 0
  };

  controller = {
    left:false,
    right:false,
    up:false,
    keyListener:function(event){
        let key_state = (event.type == "keydown") ? true : false;        
        switch(event.keyCode){
            case 37:
                controller.left = key_state;                
            break;
            case 38:
                controller.up = key_state;
            break;
            case 39:
                controller.right = key_state;
        }
    }
  };

  loop = function(){
    if(controller.up && rectangle.jumping == false){
        rectangle.vy -= 20;
        rectangle.jumping = true;
    }

    if(controller.left){
        rectangle.vx -= 0.5;
    }
    
    if(controller.right){
        rectangle.vx += 0.5;
    }

    //gravity
    rectangle.vy += 1.5;

    rectangle.x += rectangle.vx;
    rectangle.y += rectangle.vy;

    rectangle.vx *= 0.9;//friction
    rectangle.vy *= 0.9;//friction

    //bottom
    if(rectangle.y > 180 -16 - 32){
        rectangle.jumping = false;
        rectangle.y = 180 - 16 - 32;
        rectangle.vy = 0;
    }

    if(rectangle.x < -32){
        rectangle.x = 320;
    }else if(rectangle.x > 320){
        rectangle.x = -32
    }


    //draw
    context.fillStyle = '#202020';
    context.fillRect(0, 0, 320, 180);
    context.fillStyle = '#ff0000';
    context.beginPath();
    context.rect(rectangle.x, rectangle.y, rectangle.width, rectangle.height);
    context.fill();
    context.strokeStyle = '#202030';
    context.lineWidth = 4;
    context.beginPath();
    context.moveTo(320, 164);
    context.lineTo(320,164);
    context.stroke();

    window.requestAnimationFrame(loop);
  }



  window.addEventListener('keydown', controller.keyListener);
  window.addEventListener('keyup', controller.keyListener);
  window.requestAnimationFrame(loop);

});

