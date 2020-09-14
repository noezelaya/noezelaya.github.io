var cuaw = 0;
var cuucw;

function calculateUAW()
{
var asimple = 0;
var amedio = 0;
var acomplejo = 0;

var asimple = document.getElementById('Asim').value;
var amedio = document.getElementById('Amed').value;
var acomplejo = document.getElementById('Acom').value;

//var uaw = parseFloat(asimple) + parseFloat(amedio) + parseFloat(acomplejo);
var uaw = (parseInt(asimple)) + (parseInt(amedio)*2) + (parseInt(acomplejo)*3);
//alert(uaw);
var cuaw = parseFloat(uaw);

if(!isNaN(uaw))
{
	document.getElementById("resUAW").innerHTML = "Su  factor sin ajustar correspondiente a los actores es: " + uaw;
}

}

function calculateUUCW() {
var cusimple = 0.0;
var cumedio = 0.0;
var cucomplejo = 0.0;

var cusimple = document.getElementById('CUsim').value;
var cumedio = document.getElementById('CUmed').value;
var cucomplejo = document.getElementById('CUcom').value;

var uucw = (parseFloat(cusimple)*5) + (parseFloat(cumedio)*10) + (parseFloat(cucomplejo)*15);

var cuucw = parseFloat(uucw);

if(!isNaN(uucw))
{
	document.getElementById("resUUCW").innerHTML = "Su  factor sin ajustar correspondiente a los casos de usos es: " + uucw;
}

}

function calculateTCF(){
	var t1 = 0.0;
	var t2 = 0.0;
	var t3 = 0.0;
	var t4 = 0.0;
	var t5 = 0.0;
	var t6 = 0.0;
	var t7 = 0.0;
	var t8 = 0.0;
	var t9 = 0.0;
	var t10 = 0.0;
	var t11 = 0.0;
	var t12 = 0.0;
	var t13 = 0.0;

	var t1 = document.getElementById('TCF1').value;
	var t2 = document.getElementById('TCF2').value;
	var t3 = document.getElementById('TCF3').value;
	var t4 = document.getElementById('TCF4').value;
	var t5 = document.getElementById('TCF5').value;
	var t6 = document.getElementById('TCF6').value;
	var t7 = document.getElementById('TCF7').value;
	var t8 = document.getElementById('TCF8').value;
	var t9 = document.getElementById('TCF9').value;
	var t10 = document.getElementById('TCF10').value;
	var t11 = document.getElementById('TCF11').value;
	var t12 = document.getElementById('TCF12').value;
	var t13 = document.getElementById('TCF13').value;

	var tfactor = (parseFloat(t1)*2) + (parseFloat(t2)*1) + (parseFloat(t3)*1) + (parseFloat(t4)*1) + (parseFloat(t5)*1) + (parseFloat(t6)*0.5) + (parseFloat(t7)*0.5) + (parseFloat(t8)*2) + (parseFloat(t9)*1 + (parseFloat(t10)*1) + (parseFloat(t11)*1) + (parseFloat(t12)*1) + (parseFloat(t13)*1));
	var tcf = ((0.6) + (parseFloat(tfactor)*0.01))

	if(!isNaN(tcf))
{
	document.getElementById("resTCF").innerHTML = "Su cálculo de los factores de complejidad técnica es: " + tcf;
}

}

function calculateEF (){

	var e1 = 0.0;
	var e2 = 0.0;
	var e3 = 0.0;
	var e4 = 0.0;
	var e5 = 0.0;
	var e6 = 0.0;
	var e7 = 0.0;
	var e8 = 0.0;

	var e1 = document.getElementById('EF1').value;
	var e2 = document.getElementById('EF2').value;
	var e3 = document.getElementById('EF3').value;
	var e4 = document.getElementById('EF4').value;
	var e5 = document.getElementById('EF5').value;
	var e6 = document.getElementById('EF6').value;
	var e7 = document.getElementById('EF7').value;
	var e8 = document.getElementById('EF8').value;

	var efactor = (parseFloat(e1)*1.5) + (parseFloat(e2)*0.5) + (parseFloat(e3)*1) + (parseFloat(e4)*0.5) + (parseFloat(e5)*1) + (parseFloat(e6)*2) - (parseFloat(e7)*1) - (parseFloat(e8)*1);
	var ef = 1.4 +((-0.03)*parseFloat(efactor));

	if(!isNaN(ef))
{
	document.getElementById("resEF").innerHTML = "Su  cálculo de los factores de entorno es: " + ef;
}

}

function calculateHoras (){
	var h0 = 0;
	var h1 = 0;
	var h2 = 0;
	var h3 = 0;
	var h4 = 0;

	var h0 = document.getElementById('H0').value;
	var h1 = document.getElementById('H1').value;
	var h2 = document.getElementById('H2').value;
	var h3 = document.getElementById('H3').value;
	var h4 = document.getElementById('H4').value;
	
	var h0 = parseFloat(h0);
	var horas = 0;
	var uucp = parseFloat(h1) + parseFloat(h2);
	var ucp = parseFloat(uucp) * parseFloat(h3) * parseFloat(h4);


	if (h0 <= 2 ){
		var horas = parseFloat(ucp)*20;

	}else if (h0 <=4){
		var horas = parseFloat(ucp)*28;
	}else{
		var horas = parseFloat(ucp)*36;
	}


var analisis = 0;
var diseno = 0;
var progra = 0;
var pruebas = 0;
var sobrecarga = 0;

var analisis = parseFloat(horas) * 0.10;
var diseno = parseFloat(horas) * 0.20;
var progra = parseFloat(horas) * 0.40;
var pruebas = parseFloat(horas) * 0.15;
var sobrecarga = parseFloat(horas) * 0.15;


	if(!isNaN(horas))
{
	document.getElementById("resHoras").innerHTML = "Horas-hombre: " + horas;
	document.getElementById("r1").innerHTML = "Horas para analisis: " + analisis;
	document.getElementById("r2").innerHTML = "Horas para diseño: " + diseno;
	document.getElementById("r3").innerHTML = "Horas para programación: " + progra;
	document.getElementById("r4").innerHTML = "Horas para pruebas: " + pruebas;
	document.getElementById("r5").innerHTML = "Horas para sobrecarga: " + sobrecarga;
}	
/**


var analisis = 0;
var diseno = 0;
var progra = 0;
var pruebas = 0;
var sobrecarga = 0;

var analisis = parseFloat(horas) * 0.10;
if(!isNaN(horas))
{
	document.getElementById("tanalisis").innerHTML = "Horas para analisis: " + analisis;
}

var diseno = parseFloat(horas) * 0.20;
if(!isNaN(horas))
{
	document.getElementById("tdiseño").innerHTML = "Horas para diseño: " + diseno;
}

var progra = parseFloat(horas) * 0.40;
if(!isNaN(horas))
{
	document.getElementById("tprogra").innerHTML = "Horas para programación: " + progra;
}

var pruebas = parseFloat(horas) * 0.15;
if(!isNaN(horas))
{
	document.getElementById("tpruebas").innerHTML = "Horas para pruebas: " + pruebas;
}

var sobrecarga = parseFloat(horas) * 0.15;
if(!isNaN(horas))
{
	document.getElementById("tsobrecarga").innerHTML = "Horas para sobrecarga: " + sobrecarga;
}
		<h4 id = tanalisi><br></h1>
		<h4 id = tdiseno><br></h1>
		<h4 id = tprogra><br></h1>
		<h4 id = tpruebas><br></h1>
		<h4 id = tsobrecarga><br></h1>
*/


}




