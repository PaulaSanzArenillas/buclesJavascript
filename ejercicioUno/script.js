var x = parseInt(window.prompt("Inserta un número entero: "));  //se añade el parseInt() dentro de la propia variable para convertir las cadenas de caracteres en números enteros y que actúen como tal. La conversión se guarda dentro de la variable directamente
var z = parseInt(window.prompt("Inserta un número entero: "));
var y = parseInt(window.prompt("Inserta un número entero: "));
if (x <= z && x <= y) {
    alert("El número menor es " + x);
} else if (z <= x && z <= y) {
    alert("El número menor es " + z);
} else {alert("El número menor es " + y)}
