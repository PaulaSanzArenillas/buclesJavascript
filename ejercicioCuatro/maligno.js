var username = "perro";

var password = "negro";

var usuarioUsername = prompt("Escribe tu usuario: ");
var usuarioPassword = prompt("Escribe tu contraseña: ");
var intentos = 0;

while (username !== usuarioUsername || password !== usuarioPassword && intentos <= 5) {
    prompt("Escribe otra vez tu usuario: "); 
    prompt("Escribe otra vez tu contraseña: "); 
    intentos = intentos +1;
    alert("Has agotado tus intentos");
};

if ( username == usuarioUsername && password == usuarioPassword) {
    alert("Bienvenido");
};