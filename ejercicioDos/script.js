var frase = window.prompt("Inserta una frase: ");
var letra = window.prompt("Inserta una letra: ");

var longitud = frase.length;   //variable que actúa como contador. Se inicializa a cero porque es el elemento neutro (primero asumimos que no está la letra que buscamos y luego empieza a sumar)

var veces = 0;

for (let i = 0; i < longitud  ; i = i + 1) {
    if (frase[i] == letra) {
        veces = veces + 1 ;  //veces++
    };

};    //elegimos el bucle for porque queremos que recorra la frase un numero de veces fijo (el largo completo de la frase)

alert("tu frase tiene " + veces + " veces la letra " +letra);