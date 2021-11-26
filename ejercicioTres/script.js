var num1 = parseInt(prompt("Introduce un numero"));
//num1 = parseInt(num1);
var num2 = parseInt(prompt("Introduce otro número"));
//num2 = parseInt(num2);
var operacion = prompt("Introduce + o -");
var resultado;

if (operacion == "+") {
  resultado = num1 + num2;
} else {
  resultado = num1 - num2;
}

alert(resultado);
