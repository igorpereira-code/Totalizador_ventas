import calcularDescuento from "./calcular_descuento.js";
import calcularImpuesto from "./calcular_impuesto.js";
import calcular_categoria from "./calcular_categoria.js";
import calcularPesoVolumetrico from "./calcular_peso_volumetrico.js";

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

  if (pesoVolumetrico < 0) {
    return "Error: El peso volumétrico debe ser un número mayor o igual a 0";
  } else {
    total = calcularPesoVolumetrico(total, cantidad, pesoVolumetrico);
  }

  return total;
}

export default calcularTotal;
