var x = window.prompt("Inserta un número entero: ");
var z = window.prompt("Inserta un número entero: ");
var y = window.prompt("Inserta un número entero: ");
if (x <= z && x <= y) {
    alert("El número menor es " + x);
} else if (z <= x && z <= y) {
    alert("El número menor es " + z);
} else {alert("El número menor es " + y)}
