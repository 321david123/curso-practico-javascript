

// this code dont works for some reason


// // const lista1 = [
// //     100,
// //     200,
// //     300,
// //     500,
// // ];

// function calcularPromedio(lista) {
    
// // let sumalista = 0;
// // for (let i = 0; i < lista.length; i++) {
// //     sumalista1 = sumalista + lista[i];
// // }

// const sumalista = lista.reduce(
//     function (valoracumulado = 0, nuevoelemento) {
//         return valoracumulado + nuevoelemento;
//     }
// );
// const promediolista = sumalista / lista.length;
// return promediolista;
// }


// this code dont works for some reason/


function calcularMediaAritmetica() {
  // let sumaLista = 0;
  // for (let i = 0; i < lista.length; i++) {
  //   sumaLista = sumaLista + lista[i];
  // }
  const valor = document.getElementById("list").value;
  // console.log(valor);
  // valores como el usuario los da
  let lista = Array.from(valor.split(","), Number);
  // console.log(lista);
  // valores en forma de array
  const sumaLista = lista.reduce(
    function (valorAcumulado = 0, nuevoElemento) {
      return valorAcumulado + nuevoElemento;
    }
  );

  const promedioLista = sumaLista / lista.length;
  // console.log(lista.length);
  const mostrarResultado = document.getElementById("resultadoPromedio");
  mostrarResultado.innerText = "El promedio es de: " + promedioLista;
}