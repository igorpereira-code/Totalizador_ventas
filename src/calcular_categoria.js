function calcular_categoria(total, categoria = "Varios") {
  if (categoria === "Alimentos") {
    total *= 0.98;
  } else if (categoria === "Bebidas alcohólicas") {
    total *= 1.07;
  } else if (categoria === "Material de escritorio") {
    total = total + total * 0.015;
  } else if (categoria === "Muebles") {
    total *= 1.03;
  } else if (categoria === "Electrónicos") {
    total = total + total * 0.04 - total * 0.01;
  } else if (categoria === "Vestimenta") {
    total *= 1.02;
  }
  return total;
}

export default calcular_categoria;
