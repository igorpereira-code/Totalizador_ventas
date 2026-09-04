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

  // Si el estado es AL, se aplica 4.00% de impuesto.
  it("Si el estado es AL, se aplica 4.00% de impuesto sobre el precio total y se muestra el precio con impuesto", () => {
    expect(calcularTotal(5, 2, "AL")).toEqual(10.4);
  });

  //Si el estado es CA, se aplica 8.25% de impuesto.
  it("Si el estado es CA, se aplica 8.25% de impuesto sobre el precio total y se muestra el precio con impuesto", () => {
    expect(calcularTotal(5, 2, "CA")).toEqual(10.825);
  });

  //Si el total es ≥ 1000 y < 3000, se aplica 3% de descuento antes del impuesto.
  it("Si el total es ≥ 1000 y < 3000, se aplica 3% de descuento antes del impuesto", () => {
    expect(calcularTotal(500, 3, "CA")).toEqual(1575.0375);
  });

  //Si el total es ≥ 3000 y < 7000, se aplica 5% de descuento.
  it("Si el total es ≥ 3000 y < 7000, se aplica 5% de descuento antes del impuesto", () => {
    expect(calcularTotal(1000, 4, "CA")).toEqual(4113.5);
  });

  //Si el total es ≥ 7000 y < 10000, se aplica 7% de descuento.
  it("Si el total es ≥ 7000 y < 10000, se aplica 7% de descuento antes del impuesto", () => {
    expect(calcularTotal(2000, 4, "CA")).toEqual(8053.8);
  });

  //Si el total es ≥ 10000 y < 30000, se aplica 10% de descuento.
  it("Si el total es ≥ 10000 y < 30000, se aplica 10% de descuento antes del impuesto", () => {
    expect(calcularTotal(3000, 4, "CA")).toEqual(11691);
  });

  //Si el total es ≥ 30000, se aplica 15% de descuento.
  it("Si el total es ≥ 30000, se aplica 15% de descuento antes del impuesto", () => {
    expect(calcularTotal(8000, 4, "CA")).toEqual(29444);
  });
});
