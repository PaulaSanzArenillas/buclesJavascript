var frase = window.prompt("Inserta una frase: ");
var letra = window.prompt("Inserta una letra: ");

var longitud = frase.length;

var veces = 0;

for (let i = 0; i <= longitud  ; i = i + 1) {
    if (frase[i] == letra) {
        veces = veces + 1 ;
    };

};

alert("tu frase tiene " + veces + " veces la letra " +letra);