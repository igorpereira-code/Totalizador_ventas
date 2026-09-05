import calcularDescuento from "./calcular_descuento.js";
import calcularImpuesto from "./calcular_impuesto.js";
import calcular_categoria from "./calcular_categoria.js";
import calcularPesoVolumetrico from "./calcular_peso_volumetrico.js";
import calcularTipoCliente from "./calcular_tipo_cliente.js";

function redondear(numero, decimales = 6) {
  const factor = 10 ** decimales;
  return Math.round(numero * factor) / factor;
}
function generarDetalle(
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
  } else if (pesoVolumetrico < 0) {
    return "Error: El peso volumétrico debe ser un número mayor o igual a 0";
  }

  const precioNeto = cantidad * precio;

  const totalConDescuentoVolumen = calcularDescuento(precioNeto);
  const descuentoPorVolumen = precioNeto - totalConDescuentoVolumen;

  const totalConImpuestoEstado = calcularImpuesto(
    totalConDescuentoVolumen,
    estado,
  );
  const impuestoPorEstado = totalConImpuestoEstado - totalConDescuentoVolumen;

  const totalConCategoria = calcular_categoria(
    totalConImpuestoEstado,
    categoria,
  );

  // Electrónicos mezcla impuesto (4%) y descuento (1%) a la vez, se separan a mano
  let ajusteImpuestoPorCategoria = 0;
  let ajustePorCategoria = 0;
  if (categoria === "Electrónicos") {
    ajusteImpuestoPorCategoria = totalConImpuestoEstado * 0.04;
    ajustePorCategoria = totalConImpuestoEstado * 0.01;
  } else {
    const netoCategoria = totalConCategoria - totalConImpuestoEstado;
    if (netoCategoria >= 0) {
      ajusteImpuestoPorCategoria = netoCategoria;
    } else {
      ajustePorCategoria = -netoCategoria;
    }
  }

  const costoEnvio = calcularPesoVolumetrico(cantidad, pesoVolumetrico);
  const costoEnvioConDescuento = calcularTipoCliente(costoEnvio, tipoCliente);
  const descuentoEnvioPorCliente = costoEnvio - costoEnvioConDescuento;

  let precioTotal = totalConCategoria + costoEnvioConDescuento;

  let descuentoFijoAplicado = 0;
  if (
    tipoCliente === "Recurrente" &&
    categoria === "Alimentos" &&
    precioNeto > 3000
  ) {
    descuentoFijoAplicado = 100;
  } else if (
    tipoCliente === "Especial" &&
    categoria === "Electrónicos" &&
    precioNeto > 7000
  ) {
    descuentoFijoAplicado = 200;
  }
  precioTotal -= descuentoFijoAplicado;

  return {
    cantidad,
    precioUnitario: precio,
    estado,
    categoria,
    tipoCliente,
    descuentoPorVolumen: redondear(descuentoPorVolumen),
    ajustePorCategoria: redondear(ajustePorCategoria),
    descuentoFijoAplicado: redondear(descuentoFijoAplicado),
    impuestoPorEstado: redondear(impuestoPorEstado),
    ajusteImpuestoPorCategoria: redondear(ajusteImpuestoPorCategoria),
    costoEnvio: redondear(costoEnvio),
    descuentoEnvioPorCliente: redondear(descuentoEnvioPorCliente),
    precioTotal: redondear(precioTotal),
  };
}

export default generarDetalle;
