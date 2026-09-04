function calcularPesoVolumetrico(cantidad, pesoVolumetrico) {
  let costoUnidad = 0;
  if (pesoVolumetrico >= 11 && pesoVolumetrico <= 20) {
    costoUnidad = 3.5;
  } else if (pesoVolumetrico >= 21 && pesoVolumetrico <= 40) {
    costoUnidad = 5;
  } else if (pesoVolumetrico >= 41 && pesoVolumetrico <= 80) {
    costoUnidad = 6;
  } else if (pesoVolumetrico >= 81 && pesoVolumetrico <= 100) {
    costoUnidad = 6.5;
  } else if (pesoVolumetrico >= 101 && pesoVolumetrico <= 200) {
    costoUnidad = 8;
  } else if (pesoVolumetrico > 200) {
    costoUnidad = 9;
  }
  return cantidad * costoUnidad;
}
export default calcularPesoVolumetrico;
