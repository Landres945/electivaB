$(function()
{   
    
    var canvas = $('#canvas');
    var x = 100;
    var y = 300;
    var color ;
    var context = canvas[0].getContext('2d'); 
    var dimensiones = {

                        w : 760,
                        h : 500
                      };
    ///plano
        context.beginPath();
        context.moveTo(100, 50);
        context.lineTo(100, 300);
        context.lineTo(650, 300);
        context.lineWidth = 4;
        context.strokeStyle = "black";
        context.stroke();
    //Flecha...
        context.beginPath();
        context.moveTo(640, 290);
        context.lineTo(650, 300);
        context.lineTo(640, 310);
        context.lineTo(640, 290);
        context.lineWidth = 1;
        context.strokeStyle = "black";
        context.fillStyle = 'black';
        context.fill();
        context.stroke();
        context.font = "normal 20px Arial";
        context.fillStyle = "black"
        context.fillText("Amplitud", 60, 30);
        context.font = "normal 20px Arial";
        context.fillStyle = "black"
        context.fillText("Tiempo", 660, 300);
        context.font = "normal 20px Arial";
        context.fillStyle = "black"
        context.fillText("0", 80, 320);
        context.fillText("1", 80, 250);

        
  
    //Validacion de las teclas 0 Y 1 para crear la funcion
    $(document).keypress(function(event)
    {   
         // var tecla;
            // Validar si se ha presionado la tecla 0
            if(event.keyCode === 48)
            {    
                if(y==250)
                {
                   color = "red";
                   crearSenal(x,y,x,y+50,color);
                   y+=50;
                   crearSenal(x,y,x+50,y,color);
                   x+=50;
                }      
                else 
                if(y==300)
                {
                    color = randomColor();
                    crearSenal(x,y,x+50,y,color);
                    x+=50;
                }
            }
            //Validar si se ha presionado la tecla 1 
            else if(event.keyCode === 49)
            {
                 if(y==300)
                 {
                    color = randomColor();
                    crearSenal(x,y,x,y-50,color);
                    y-=50;
                    crearSenal(x,y,x+50,y,color);
                    x+=50;
                 }
                 else
                if(y == 250)
                 {
                    color = randomColor();
                    crearSenal(x,y,x+50,y,color);
                    x+=50;
                 }
       
                     
            }
            
        
    });
    
   
    //Funcion para crear la señal en sus respectivos ejes y colores
    function crearSenal(x1,y1,x2,y2,color)
    {   
        context.beginPath();
        context.moveTo(x1,y1);
        context.lineTo(x2,y2);
        context.lineWidth = 4;
        context.strokeStyle = color;
        context.stroke();
    };
    function randomColor()
    {
        // from http://www.paulirish.com/2009/random-hex-color-code-snippets/
        return '#'+(function lol(m,s,c){return s[m.floor(m.random() * s.length)] +
        (c && lol(m,s,c-1));})(Math,'0123456789ABCDEF',4);
    };


});
