import calcularDescuento from "./calcular_descuento.js";
import calcularImpuesto from "./calcular_impuesto.js";

function calcularTotal(cantidad, precio, estado = "CA") {
  if (cantidad <= 0) {
    return "Error: La cantidad de items debe ser mayor que 0";
  } else if (precio < 0 || isNaN(precio)) {
    return "Error: El precio por item debe ser un número mayor o igual a 0";
  }
  let total = cantidad * precio;
  total = calcularDescuento(total);

  total = calcularImpuesto(total, estado);

  return total;
}

export default calcularTotal;
