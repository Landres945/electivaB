var palabra = "carro"
var result = ""
var result1 = ""
for (i=0; i<palabra.length-1; i++)
 {

	result += palabra.charAt(i)
	result += "-"
}
result += palabra.charAt(palabra.length - 1)


for (i= palabra.length -1; i>=0; i--) 
{

if (result1 !== "")
{
result1 += "-"
}
	result1 += palabra.charAt(i)
	
}
result1 += palabra.charAt(palabra.length)


if (result === result1) 
{

	alert("La Palabra Escrita Es Palindroma")

}
else 
{
alert("La Palabra Escrita No Es Palindroma")
}