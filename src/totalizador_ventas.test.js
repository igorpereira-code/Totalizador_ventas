describe("Ventas", () => {
  it("El usuario ingresa cantidad de items y precio por item → se muestra el precio total ", () => {
    expect(calcularTotal(3, 2)).toEqual(6);
  });
  //Si la cantidad de items es 0 o negativa, se muestra un mensaje de error y no se calcula el total.
  it("El usuario ingresa cantidad de items 0 o negativa → se muestra un mensaje de error y no se calcula el total", () => {
    expect(calcularTotal(0, 2)).toEqual(
      "Error: La cantidad de items debe ser mayor que 0",
    );
  });

  //Si el precio por item es negativo o no numérico, se muestra un mensaje de error.
  it("El usuario ingresa precio por item negativo o no numérico → se muestra un mensaje de error y no se calcula el total", () => {
    expect(calcularTotal(3, -2)).toEqual(
      "Error: El precio por item debe ser un número mayor o igual a 0",
    );
  });
});

function calcularTotal(cantidad, precio) {
  if (cantidad <= 0) {
    return "Error: La cantidad de items debe ser mayor que 0";
  } else if (precio < 0 || isNaN(precio)) {
    return "Error: El precio por item debe ser un número mayor o igual a 0";
  }
  return cantidad * precio;
}
