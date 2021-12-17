// const lista1 = [
//     1,
//     2,
//     1,
//     2,
//     3,
//     1,
//     3,
//     2,
//     2,
// ];
function calcular() {
    const entrada = document.getElementById("list").value;
    // console.log(entrada);
    let arrayMediana = Array.from(entrada.split(","), Number);
    // console.log(arrayMediana);
    const lista1count = {};
    arrayMediana.map(
        function(element) {
            if (lista1count[element]){
            lista1count[element] += 1;
            } else{
            lista1count[element] = 1;  
            }
        }
    );
    // console.log(lista1count);
    const listaArray1 = Object.entries(lista1count).sort(
        function(valorAcumulado, nuevoElemento){
            valorAcumulado[1] - nuevoElemento[1];
        }
    );
    const moda = listaArray1[listaArray1.length - 1];
    // console.log(listaArray1);
    // console.log(moda);
const mostrarResultado = document.getElementById("resultadoModa");
mostrarResultado.innerText = "Primer numero es la moda, el segundo es cuantas veces aparecio: " + moda;
}



