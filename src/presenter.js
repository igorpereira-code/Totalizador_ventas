import calcularTotal from "./totalizador_ventas.js";
import generarDetalle from "./generar_detalle.js";

const cantidadInput = document.querySelector("#cantidad-items");
const precioInput = document.querySelector("#precio-item");
const estadoSelect = document.querySelector("#estado-select");
const categoriaSelect = document.querySelector("#categoria-select");
const pesoInput = document.querySelector("#peso-volumetrico");
const clienteSelect = document.querySelector("#cliente-select");
const form = document.querySelector("#Totalizador-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const cantidad = Number.parseFloat(cantidadInput.value);
  const precio = Number.parseFloat(precioInput.value);
  const estado = estadoSelect.value;
  const categoria = categoriaSelect.value;
  const pesoVolumetrico =
    pesoInput.value === "" ? undefined : Number.parseFloat(pesoInput.value);
  const tipoCliente = clienteSelect.value;

  const resultado = calcularTotal(
    cantidad,
    precio,
    estado,
    categoria,
    pesoVolumetrico,
    tipoCliente,
  );

  if (typeof resultado === "string") {
    div.innerHTML = "<p>" + resultado + "</p>";
    return;
  }

  const detalle = generarDetalle(
    cantidad,
    precio,
    estado,
    categoria,
    pesoVolumetrico,
    tipoCliente,
  );

  div.innerHTML = `
    <p>Cantidad: ${detalle.cantidad}</p>
    <p>Precio unitario: $${detalle.precioUnitario.toFixed(2)}</p>
    <p>Estado: ${detalle.estado}</p>
    <p>Categoría: ${detalle.categoria}</p>
    <p>Tipo de cliente: ${detalle.tipoCliente}</p>
    <p>Precio neto: $${detalle.precioNeto.toFixed(2)}</p>
    <p>Descuento por volumen: $${detalle.descuentoPorVolumen.toFixed(2)}</p>
    <p>Ajuste por categoría (descuento): $${detalle.ajustePorCategoria.toFixed(2)}</p>
    <p>Impuesto por estado: $${detalle.impuestoPorEstado.toFixed(2)}</p>
    <p>Ajuste de impuesto por categoría: $${detalle.ajusteImpuestoPorCategoria.toFixed(2)}</p>
    <p>Costo de envío: $${detalle.costoEnvio.toFixed(2)}</p>
    <p>Descuento de envío por cliente: $${detalle.descuentoEnvioPorCliente.toFixed(2)}</p>
    <p>Descuento fijo aplicado: $${detalle.descuentoFijoAplicado.toFixed(2)}</p>
    <p><strong>Precio total: $${detalle.precioTotal.toFixed(2)}</strong></p>
  `;
});
