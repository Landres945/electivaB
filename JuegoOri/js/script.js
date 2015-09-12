    


var Puntuacion = 0;	
$(function()
{
	var inicia = false;
	$("#start").click(function(event)
	{
		$(this).fadeOut('fast', function() {
			setInterval(letraMuestra, 3000);
			inicia = true;
		});
	});
  

	//Para generar letras aleatorias...
	var letraMuestra = function()
	{

		//Se debe obtener una letra aleatoria del alfabeto y ubicarla en una posición aleatoria...
		var numLetra = Math.floor(Math.random() * 26) + 97;
		var posLetra = {
							left : Math.floor(Math.random() * (screen.width - 100)), 
							top  : Math.floor(Math.random() * (screen.height - 150))
						};
		var letraPone = String.fromCharCode(numLetra).toUpperCase();
		var divLetra = "<div class = 'circulo letra_"+(letraPone)+" '" + 
							"style = \"left : "+(posLetra.left)+"px; top : "+(posLetra.top) + 
							"px; background-color: " + randomColor()+"\">" + 
							(String.fromCharCode(numLetra).toUpperCase()) + 
						"</div>";
		var anima = ["bounce","rollin","tada"];
		var animaAlea = Math.floor(Math.random() * anima.length);
		var animaMuestra = anima[animaAlea];				
		$("body").append(divLetra);
		//flash, wobble
		$(".letra_" + letraPone).addClass("animated "+ animaMuestra);
	
		if($(".circulo").size() === 50)
{
	swal({   title: "Are you sure?",   text: "AH EXEDIDO LA CANTIDAD DE LETRAS EN PANTALLA SU PUNTAJE FINAL ES DE : "+ Puntuacion,   type: "warning",   showCancelButton: false,   confirmButtonColor: "#DD6B55 ",   confirmButtonText: "VOLVER A EMPEZAR",   closeOnConfirm: false }, function(){    location.reload(); swal("Deleted!", "REINICIANDO...", "success"); });
	//swal("Oooops...", "Your imaginary file is safe :)", "error") + location.reload();
	//swal("¡Buen trabajo!", "PASA AL NiVEL 2 Su puntaje es: " + Puntuacion, "success");
	
	//swal( "Error!", "Lo Siento Has Perdido :(", "error",  "Cool" );
		
		//location.reload() && swal("Oooops...", "Your imaginary file is safe :)", "error");
		//swal("¡Buen trabajo!", "PASA AL NiVEL 2 Su puntaje es: " + Puntuacion, "success");
		//swal( "Error!", "Lo Siento Has Perdido :(", "error",  "Cool" );
			
		
}



	};

	//Para detectar eventos de teclado...

	$(document).keypress(function(event)
	{
		//console.log(event.keyCode, txtLetra);
		if(event.keyCode >= 97 && event.keyCode <= 122 && inicia)
		{
			
			var letraPresiona = String.fromCharCode(event.keyCode).toUpperCase();
			//Número de ocrrencias de la letra...
			var numVeces = $(".letra_" + letraPresiona).size();
			console.log("Veces letra presionada:", numVeces);
			Puntuacion += numVeces * 10;
			//console.log("puntos", puntos);
			$("#puntuacion").html("Puntuacion " + Puntuacion);
			var anima = ["bounceOutDown","rotateOut","slideOutDown","fadeOutUpBig","rollOut"];
			var animaAlea = Math.floor(Math.random() * anima.length);
			var animaQuita = anima[animaAlea];
			
			$(".letra_" + letraPresiona).addClass("animated "+ animaQuita).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function()
			{
				
  				
  				$(this).remove();
				

			});
		}

		if(Puntuacion === 100)
{

			//function() {
			setInterval(letraMuestra, 1500);
			//inicia = true;
		//}
	//letraMuestra = Math.floor(Math.random()*2);
	//alert("NIVEL 2");
	swal("¡Buen trabajo!", "PASA AL NiVEL 2 Su puntaje es: " + Puntuacion, "success");
	
}



		if(Puntuacion === 250)
{

			//function() {
			setInterval(letraMuestra, 500);
			//inicia = true;
		//}
	//letraMuestra = Math.floor(Math.random()*2);
	//alert("NIVEL 2");
	swal("¡Buen trabajo!", "PASA AL NiVEL 3 Su puntaje es: " + Puntuacion, "success");
}

	});

	var randomColor = function()
	{
    	// from http://www.paulirish.com/2009/random-hex-color-code-snippets/
    	return '#'+(function lol(m,s,c){return s[m.floor(m.random() * s.length)] +
    	(c && lol(m,s,c-1));})(Math,'0123456789ABCDEF',4);
  	};
});