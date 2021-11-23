var lista = ["Perro", "Gato", "Mono", "Araña", "León", "Tigre", "Rata"];

var listaLength = lista.length
for (let i = listaLength - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
        if (lista[j] > lista[j + 1]) {
            let temp = lista[j]
            lista[j] = lista[j + 1]
            lista[j + 1] = temp
        }
        // console.log(lista)
    }
    // console.log("-------")
}
console.log("La lista ordenada es: "+lista);