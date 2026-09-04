import calcularTotal from "./totalizador_ventas.js";
import calcularDesglose from "./desglose.js";

const cantidadInput = document.querySelector("#cantidad-items");
const precioInput = document.querySelector("#precio-item");
const estadoSelect = document.querySelector("#estado-select");
const form = document.querySelector("#Totalizador-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const cantidad = Number.parseFloat(cantidadInput.value);
  const precio = Number.parseFloat(precioInput.value);
  const estado = estadoSelect.value;

  const resultado = calcularTotal(cantidad, precio, estado);

  if (typeof resultado === "string") {
    div.innerHTML = "<p>" + resultado + "</p>";
    return;
  }

  const { precioNeto, descuento, impuesto, precioTotal } = calcularDesglose(
    cantidad,
    precio,
    estado,
  );

  div.innerHTML = `
    <p>Precio neto: $${precioNeto.toFixed(2)}</p>
    <p>Descuento: $${descuento.toFixed(2)}</p>
    <p>Impuesto (${estado}): $${impuesto.toFixed(2)}</p>
    <p>Precio total: $${precioTotal.toFixed(2)}</p>
  `;
});
