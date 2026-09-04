import calcularDescuento from "./calcular_descuento.js";
import calcularImpuesto from "./calcular_impuesto.js";
import calcular_categoria from "./calcular_categoria.js";

function calcularTotal(
  cantidad,
  precio,
  estado = "CA",
  categoria = "Varios",
  pesoVolumetrico,
) {
  if (cantidad <= 0) {
    return "Error: La cantidad de items debe ser mayor que 0";
  } else if (precio < 0 || isNaN(precio)) {
    return "Error: El precio por item debe ser un número mayor o igual a 0";
  }
  let total = cantidad * precio;
  total = calcularDescuento(total);

  total = calcularImpuesto(total, estado);

  total = calcular_categoria(total, categoria);

  if (pesoVolumetrico >= 11 && pesoVolumetrico <= 20) {
    total += cantidad * 3.5;
  } else if (pesoVolumetrico >= 21 && pesoVolumetrico <= 40) {
    total += cantidad * 5;
  } else if (pesoVolumetrico >= 41 && pesoVolumetrico <= 80) {
    total += cantidad * 6;
  } else if (pesoVolumetrico >= 81 && pesoVolumetrico <= 100) {
    total += cantidad * 6.5;
  } else if (pesoVolumetrico >= 101 && pesoVolumetrico <= 200) {
    total += cantidad * 8;
  }

  return total;
}

export default calcularTotal;
