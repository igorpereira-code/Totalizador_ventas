function calcularTipoCliente(costoEnvio, tipoCliente) {
  if (tipoCliente === "Recurrente") {
    return costoEnvio - costoEnvio * 0.005;
  } else if (tipoCliente === "Antiguo Recurrente") {
    return costoEnvio - costoEnvio * 0.01;
  }
  return costoEnvio;
}
export default calcularTipoCliente;
