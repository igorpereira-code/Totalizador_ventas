function calcularTipoCliente(costoEnvio, tipoCliente) {
  if (tipoCliente === "Recurrente") {
    return costoEnvio - costoEnvio * 0.005;
  }
  return costoEnvio;
}
export default calcularTipoCliente;
