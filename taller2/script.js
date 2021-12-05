// const precioOriginal = 120;
// const Descuento = 15;

function calcularPrecioConDescuento(precioOriginal, Descuento) {
  const porcentajePrecioConDescuento = 100 - Descuento;
  const precioConDescuento = (precioOriginal * porcentajePrecioConDescuento) / 100;

  return precioConDescuento
}
function pricediscount() {
    const precio = document.getElementById("inputPrice").value;
    const descuento = document.getElementById("inputDiscount").value;
    
    const precioConDescuento = calcularPrecioConDescuento(precio, descuento);
    text.innerText = "El precio con descuento es $" + precioConDescuento;
}



// const precioConDescuento = function(a, b) {
//     return (precioOriginal * porcentajePrecioConDescuento(precioOriginal, Descuento)) / 100;
// }
// console.log({
//     precioOriginal,
//     Descuento,
//     porcentajePrecioConDescuento,
//     precioConDescuento,
// });
