function generar_codigo_verif(){


	var letras = new Array('A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I');
	var numeros = new Array('1', '2', '3', '4', '5', '6', '7', '8', '9');

	var letra1 = letras[Math.floor(Math.random()*letras.length)];
	var numero1 = numeros[Math.floor(Math.random()*numeros.length)];
	var letra2 = letras[Math.floor(Math.random()*letras.length)];
	var numero2 = numeros[Math.floor(Math.random()*numeros.length)];
	var letra3 = letras[Math.floor(Math.random()*letras.length)];
	var numero3 = numeros[Math.floor(Math.random()*numeros.length)];


	var codigoVerif = letra1 + numero1 + letra2 + numero2 + letra3 + numero3;

	let codigoPlacer = document.getElementById("txtCodigoVerif");
	codigoPlacer.value = codigoVerif;
}