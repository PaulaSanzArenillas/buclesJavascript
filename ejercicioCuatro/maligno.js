var user = "perro";
var pass = "sanche";

var UsuarioUser; //= prompt("Introduce tu usuario");
var UsuarioPass; //= prompt("Introduce tu pass")

var intentos = 0

do {
    UsuarioUser = prompt("Introduce tu usuario");
     UsuarioPass = prompt("Introduce tu pass");
    intentos++;
} while ( (user !== UsuarioUser || pass !== UsuarioPass) && intentos < 3);

if (intentos < 3) { alert("Bienvenido") }
else { alert("Has agotado tus intentos") }