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
  if (estado === "NV") {
    total += total * 0.08;
  }
  if (estado === "TX") {
    total += total * 0.0625;
  }
  if (estado === "AL") {
    total += total * 0.04;
  }
  if (estado === "CA") {
    total += total * 0.0825;
  }

  return total;
}

export default calcularTotal;
