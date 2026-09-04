function calcularDescuento(total) {
  if (total >= 1000 && total < 3000) {
    total -= total * 0.03;
  }
  if (total >= 3000 && total < 7000) {
    total -= total * 0.05;
  }
  if (total >= 7000 && total < 10000) {
    total -= total * 0.07;
  }
  if (total >= 10000 && total < 30000) {
    total -= total * 0.1;
  }
  if (total >= 30000) {
    total -= total * 0.15;
  }
  return total;
}

export default calcularDescuento;
