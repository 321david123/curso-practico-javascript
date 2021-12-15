function calcularMediaAritmetica(lista) {

    const sumaLista = lista.reduce(
      function (valorAcumulado = 0, nuevoElemento) {
        return valorAcumulado + nuevoElemento;
      }
    );

    const promedioLista = sumaLista / lista.length;

    return promedioLista;
  }
function calcular(){
    const entrada = document.getElementById("list").value;
    // console.log(entrada);
    // valores como el usuario los da
    let arrayMediana = Array.from(entrada.split(","), Number);
    // console.log(arrayMediana);
    // valores en forma de array
    listaOrdenada = arrayMediana.sort(function(a,b) {
        return a - b
    });
    console.log(listaOrdenada);
    // valores ordenados en el array
    const mitadlista = parseInt(listaOrdenada.length / 2);
    console.log(mitadlista);
    // funcion que llamaremos despues
    function esPar(numero) {
    if (numero % 2 === 0) {
        return true;
    } else {
        return false;
    }
}
let mediana; // creamos la variable

if(esPar(listaOrdenada.length)) {
    const elemento1 = listaOrdenada[mitadlista - 1];
    const elemento2 = listaOrdenada[mitadlista];

    const promedioElementos = calcularMediaAritmetica([
        elemento1,
        elemento2,
    ]);

    mediana = promedioElementos;
} else {
    mediana = listaOrdenada[mitadlista];
}
    const mostrarResultado = document.getElementById("resultadoMediana");
    mostrarResultado.innerText = "La mediana es de: " + mediana;
}


