function calcularImpuesto(total, estado) {
  if (estado === "UT") {
    total += total * 0.0665;
  }
  if (estado === "NV") {
    total += total * 0.08;
  }
  if (estado === "TX") {
    total += total * 0.0625;
  }
  if (estado === "AL") {
    total += total * 0.04;
  }
  if (estado === "CA") {
    total += total * 0.0825;
  }
  return total;
}

export default calcularImpuesto;
