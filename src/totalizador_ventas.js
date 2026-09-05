import calcularDescuento from "./calcular_descuento.js";
import calcularImpuesto from "./calcular_impuesto.js";
import calcular_categoria from "./calcular_categoria.js";
import calcularPesoVolumetrico from "./calcular_peso_volumetrico.js";
import calcularTipoCliente from "./calcular_tipo_cliente.js";

function calcularTotal(
  cantidad,
  precio,
  estado = "CA",
  categoria = "Varios",
  pesoVolumetrico,
  tipoCliente = "Normal",
) {
  if (cantidad <= 0) {
    return "Error: La cantidad de items debe ser mayor que 0";
  } else if (precio < 0 || isNaN(precio)) {
    return "Error: El precio por item debe ser un número mayor o igual a 0";
  }
  let precioNeto = cantidad * precio;
  let total = precioNeto;
  total = calcularDescuento(total);
  total = calcularImpuesto(total, estado);
  total = calcular_categoria(total, categoria);

  if (pesoVolumetrico < 0) {
    return "Error: El peso volumétrico debe ser un número mayor o igual a 0";
  }

  const costoEnvio = calcularPesoVolumetrico(cantidad, pesoVolumetrico);
  const costoEnvioConDescuento = calcularTipoCliente(costoEnvio, tipoCliente);

  total = total + costoEnvioConDescuento;

  if (
    tipoCliente === "Recurrente" &&
    categoria === "Alimentos" &&
    precioNeto > 3000
  ) {
    total = total - 100;
  }

  return total;
}

export default calcularTotal;
