function bucle(){

document.write("<center>"+"<h1>" +"promedio"+ "<h1/>"+"</center>")
var edm,edt,edn,acum=0,acum1=0,acum2=0;


for (var i = 1; i <= 5; i++) {
   edm = parseInt(prompt("ingrese edad "+i+"estudiante del turno mañana"))
		acum=acum+edm;
	 }
	 for (var i = 1; i <= 6; i++) {
   edt = parseInt(prompt("ingrese edad "+i+"estudiante del turno tarde"))
	acum1=acum1+edt;
	 }
	 for (var i = 1; i <= 11; i++) {
   edn = parseInt(prompt("ingrese edad "+i+"estudiante del turno noche"))
		acum2=acum2+edn;
	 }
	 
edm = acum/5;
edt = acum1/6;
edn = acum2/11;
document.write("<center>"+"<h1>" +"el promedio del turno de la mañana es : "+ edm+"<h1/>"+"</center>")
document.write("<center>"+"<h1>" +"el promedio del turno de la tarde es : "+ edt+"<h1/>"+"</center>")
document.write("<center>"+"<h1>" +"el promedio del turno de la noche es : "+ edn+"<h1/>"+"</center>")
if (edm>edt&&edm>edn) {
document.write("<center>"+"<h1>" +"el mayor promedio es del turno de la mañana"+ "<h1/>"+"</center>")
}else if (edt>edm&&edt>edn) {
document.write("<center>"+"<h1>" +"el mayor promedio es del turno de la tarde "+ "<h1/>"+"</center>")
}else  {
document.write("<center>"+"<h1>" +"el mayor promedio es del turno de la noche"+ "<h1/>"+"</center>")
}


	 	

	}

