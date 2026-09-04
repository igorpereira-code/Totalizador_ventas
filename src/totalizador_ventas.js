function calcularTotal(cantidad, precio, estado) {
  if (cantidad <= 0) {
    return "Error: La cantidad de items debe ser mayor que 0";
  } else if (precio < 0 || isNaN(precio)) {
    return "Error: El precio por item debe ser un número mayor o igual a 0";
  }
  let total = cantidad * precio;
  if (estado === "UT") {
    total += total * 0.0665;
  }
  return total;
}

export default calcularTotal;
