$(function() 
 { 
 	//Para generar la ecuación de la respuesta a buscar... 
 	var respuesta = 0; 
 	var numCifras = 2; 
 	var contCorrectas = 0;
 	var tiempo = 0;
 	var cuentaTiempo = 15;
 	//Para generar la ecuación en función del resultado dado... 
 	var ecuacionAdivina = function() 
 	{ 
 		var operacion = ""; 
 		if(numCifras >= 2) 
 		{ 
 			var signoOpera = ["+", "-"]; 
 			do 
 			{ 
 				operacion = ""; 
 				for(var i = 1; i <= numCifras; i++) 
 				{ 
 					operacion += Math.floor(Math.random() * 3) + 1; 
 					if(i < numCifras) 
 					{ 
 						operacion += " " + signoOpera[Math.floor(Math.random() * 2)] + " "; 
 					} 
 				} 
 				var valor = eval(operacion); 
 				if(valor === respuesta) 
 				{ 
					break; 
 				} 
 			}while(1); 
 		} 
 		return operacion; 
 	}; 
 
 
 	//Para iniciar un nuevo Juego... 
 	var nuevoJuego = (function nuevoJuego() 
 	{ 
 		cuentaTiempo = 15;
 		tiempo = setInterval(function()
 		{
			cuentaTiempo--;
			$("#tiempo").html(" '" + cuentaTiempo);
			if(cuentaTiempo === 0)
		{
			nuevaRespuesta(0);

		}
		}, 1000);
		
 		if(contCorrectas % 2 === 0 && contCorrectas !== 0) 
 		{ 
 			numCifras++; 
 		} 
		respuesta = Math.floor(Math.random() * 3) + 1; 
 		$("#ecuacion").html(ecuacionAdivina() + " = ?");
 		return  nuevoJuego; 
 	})(); 

 	for(var i = 1; i <= 3; i++)
	{
		$("#respuesta_" + i)
		.click(function(event) {
			var ind = Number(this.id.split("_")[1]);
			console.log(ind);
			nuevaRespuesta(ind);
		});

	}

	var nuevaRespuesta = function(usuarioresp)
	{
		clearInterval(tiempo)
		if(usuarioresp === respuesta){
			swal("Good job!", "Respuesta Correcta :D", "success")
			nuevoJuego();
		}
		else{
			swal({   title: "Are you sure?", 
			text: "Esa No Era, la correcta es : " + respuesta, 
			type: "warning",   showCancelButton: false,   confirmButtonColor: "#DD6B55 ",   
			confirmButtonText: "VOLVER A EMPEZAR",   closeOnConfirm: false }, 
			function(){    location.reload(); swal("Deleted!", "REINICIANDO...", "success"); });
		}
	};

		
 }); 
