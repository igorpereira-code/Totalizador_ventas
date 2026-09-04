import calcularDescuento from "./calcular_descuento.js";
import calcularImpuesto from "./calcular_impuesto.js";

function calcularDesglose(cantidad, precio, estado) {
  const precioNeto = cantidad * precio;
  const totalConDescuento = calcularDescuento(precioNeto);
  const descuento = precioNeto - totalConDescuento;

  const totalConImpuesto = calcularImpuesto(totalConDescuento, estado);
  const impuesto = totalConImpuesto - totalConDescuento;

  return {
    precioNeto,
    descuento,
    impuesto,
    precioTotal: totalConImpuesto,
  };
}

export default calcularDesglose;
