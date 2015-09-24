var Puntuacion = 0;
$(function()
{
	
    var preguntas = [];
    var tiempo = 0;
    var cuentaTiempo = 30;
    var numPregunta = 0;
    var audios = [
					{
						sonido 	: 	"clic.mp3", 
						label	: 	"presiona"
					},
					{
						sonido 	: 	"error.mp3", 
						label	: 	"error"
					}, 
					{
						sonido 	: 	"aplausofinal.mp3", 
						label	: 	"bravo"
					}
				];
	for(var audio = 0; audio < audios.length; audio++)
	{
		createjs.Sound.registerSound("sounds/" + audios[audio].sonido, audios[audio].label);
	}
    var cargarJson = function()
    {

        $.getJSON( "js/preguntas.json", function(data)
        {
            preguntas = data;
            cargarPregunta();
        });
    }();

    //Para cargar la pregunta...
    var cargarPregunta = function()
    {
        cuentaTiempo = 30;
        tiempo = setInterval(function()
        {
            cuentaTiempo--;
            $("#tiempo").html(" '" + cuentaTiempo);
            if(cuentaTiempo === 0)
            {
                validar(0);
            }
        }, 1000);

        $("#pregunta").html(preguntas[numPregunta].pregunta);
        //Para cargar las opciones de respuesta...
        for(var i = 1; i <= preguntas[numPregunta].opciones.length; i++)
        {
            $("#opcion_" + i).html(preguntas[numPregunta].opciones[i - 1])
            .click(function(event) {
            	createjs.Sound.play("presiona");
                var ind = Number(this.id.split("_")[1]);

                validar(ind);
            });
        }
    };

    function validar (ind)
    {
        clearInterval(tiempo);
        if (ind === 0)
        {
        	createjs.Sound.play("error");
            swal({
            	title: "!Perdiste!",
            	text: "Tiempo Agotado",
            	timer: 3000,
            	showConfirmButton: false 
            }, function ()
            {
            	$("#base2").delay(700).fadeOut('slow', function() 
            	{
            		location.reload();
            	});
                
            });
        }
        else
        {	
        if (ind === preguntas[numPregunta].correcta)
        {
        	
            swal({title: "!Bien Hecho!",   type: "success"}, function ()
            {
            	Puntuacion ++;
        		$("#puntuacion").html("Puntuacion" + Puntuacion);

                nuevo();
            });
        }
        else
        {
        	Puntuacion = Puntuacion;
        	createjs.Sound.play("error");
            swal({title: "Ooops",
            text: "La respuesta correcta era: " + preguntas[numPregunta].opciones[(preguntas[numPregunta].correcta)-1] ,
            type: "error"}, function ()
            {
            	
                nuevo();
            });
        }
        $("#titulo").html("Pregunta N°(" + numPregunta + ")");
    }
    }

    var nuevo = function ()
    {
        if(numPregunta + 1 < preguntas.length)
        {
            numPregunta++;
            cargarPregunta();
        }
        else
        {
        	createjs.Sound.play("bravo");        	
           swal("Ganaste","Se Acabaron las preguntas, tu Puntuacion final fue: " + Puntuacion,"success");
            $("#base1").delay(7000).fadeOut('slow', function()
            {

                location.reload();
            });
			
        }
    };
});