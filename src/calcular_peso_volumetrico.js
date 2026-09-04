function calcularPesoVolumetrico(total, cantidad, pesoVolumetrico) {
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
  } else if (pesoVolumetrico > 200) {
    total += cantidad * 9;
  }
  return total;
}
export default calcularPesoVolumetrico;
