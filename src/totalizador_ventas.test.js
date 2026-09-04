import calcularTotal from "./totalizador_ventas";
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

  //El usuario elige el estado de estado en una lista desplegada para evitar errores al introducir los estados
  it("El usuario elige el estado de estado en una lista desplegada → se muestra el precio total", () => {
    expect(calcularTotal(3, 2, "California")).toEqual(6);
  });

  //Si el estado es UT, se aplica 6.65% de impuesto sobre el precio total y se muestra el precio con impuesto.
  it("Si el estado es UT, se aplica 6.65% de impuesto sobre el precio total y se muestra el precio con impuesto", () => {
    expect(calcularTotal(5, 2, "UT")).toEqual(10.665);
  });

  //Si el estado es NV, se aplica 8.00% de impuesto.
  it("Si el estado es NV, se aplica 8.00% de impuesto sobre el precio total y se muestra el precio con impuesto", () => {
    expect(calcularTotal(5, 2, "NV")).toEqual(10.8);
  });

  //Si el estado es TX, se aplica 6.25% de impuesto.
  it("Si el estado es TX, se aplica 6.25% de impuesto sobre el precio total y se muestra el precio con impuesto", () => {
    expect(calcularTotal(5, 2, "TX")).toEqual(10.625);
  });
});
