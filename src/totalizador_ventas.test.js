import calcularTotal from "./totalizador_ventas";
import calcularDesglose from "./desglose";
describe("Ventas", () => {
  it("El usuario ingresa cantidad de items y precio por item → se muestra el precio total ", () => {
    expect(calcularTotal(3, 2)).toEqual(6.495);
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

  //Cálculo end-to-end: subtotal → aplicar descuento → aplicar impuesto sobre el monto ya descontado → mostrar precio final
  it("Ejemplo del enunciado: desglose completo (precio neto, descuento, impuesto, total)", () => {
    expect(calcularDesglose(20, 3, "TX")).toEqual({
      precioNeto: 60,
      descuento: 0,
      impuesto: 3.75,
      precioTotal: 63.75,
    });
  });

  //Si el usuario no selecciona ningún estado, se usa California (CA) por defecto.
  it("Si el usuario no selecciona ningún estado, se usa California (CA) por defecto", () => {
    expect(calcularTotal(5, 2)).toEqual(10.825);
  });

  //El usuario elige una categoría de producto de una lista desplegable (con 'Varios' por defecto)
  it("El usuario elige una categoría de producto  (con 'Varios' por defecto) → se muestra el precio total", () => {
    expect(calcularTotal(5, 2, "CA", "Varios")).toEqual(10.825);
  });

  //Si la categoría es 'Alimentos', se aplica 2% de descuento adicional (sobre el precio ya descontado por volumen).
  it("Si la categoría es 'Alimentos', se aplica 2% de descuento adicional (sobre el precio ya descontado por volumen)", () => {
    expect(calcularTotal(5, 2, "CA", "Alimentos")).toEqual(10.6085);
  });

  //Si la categoría es 'Bebidas alcohólicas', se aplica 7% de impuesto adicional.
  it("Si la categoría es 'Bebidas alcohólicas', se aplica 7% de impuesto adicional", () => {
    expect(calcularTotal(5, 2, "CA", "Bebidas alcohólicas")).toEqual(11.58275);
  });

  //Si la categoría es 'Material de escritorio', se aplica 1.5% de descuento adicional.
  it("Si la categoría es 'Material de escritorio', se aplica 1.5% de descuento adicional", () => {
    expect(calcularTotal(5, 2, "CA", "Material de escritorio")).toEqual(
      10.987375,
    );
  });

  //Si la categoría es 'Muebles', se aplica 3% de impuesto adicional.
  it("Si la categoría es 'Muebles', se aplica 3% de impuesto adicional", () => {
    expect(calcularTotal(5, 2, "CA", "Muebles")).toEqual(11.14975);
  });

  //Si la categoría es 'Electrónicos', se aplica 4% de impuesto adicional y 1% de descuento adicional.
  it("Si la categoría es 'Electrónicos', se aplica 4% de impuesto adicional y 1% de descuento adicional", () => {
    expect(calcularTotal(5, 2, "CA", "Electrónicos")).toEqual(11.14975);
  });

  //Si la categoría es 'Vestimenta', se aplica 2% de impuesto adicional.
  it("Si la categoría es 'Vestimenta', se aplica 2% de impuesto adicional", () => {
    expect(calcularTotal(5, 2, "CA", "Vestimenta")).toEqual(11.0415);
  });

  //Si la categoría es 'Varios' (default), no se aplica ningún adicional.
  it("Si la categoría es 'Varios' (default), no se aplica ningún adicional", () => {
    expect(calcularTotal(5, 2, "CA", "Varios")).toEqual(10.825);
  });

  //El usuario ingresa el peso volumétrico por unidad; si está entre 0 y 10, el costo de envío por unidad es $0 y se muestra el costo total (cantidad × costo unitario).
  it("El usuario ingresa el peso volumétrico por unidad; si está entre 0 y 10, el costo de envío por unidad es $0 y se muestra el costo total", () => {
    expect(calcularTotal(5, 2, "CA", "Varios", 5)).toEqual(10.825);
  });

  //Entre 11 y 20 → $3.5 por unidad.
  it("Entre 11 y 20 → $3.5 por unidad", () => {
    expect(calcularTotal(5, 2, "CA", "Varios", 15)).toEqual(28.325);
  });

  //Entre 21 y 40 → $5 por unidad.
  it("Entre 21 y 40 → $5 por unidad", () => {
    expect(calcularTotal(5, 2, "CA", "Varios", 30)).toEqual(35.825);
  });

  //Entre 41 y 80 → $6 por unidad.
  it("Entre 41 y 80 → $6 por unidad", () => {
    expect(calcularTotal(5, 2, "CA", "Varios", 50)).toEqual(40.825);
  });

  //Entre 80 y 100 → $6.5 por unidad.
  it("Entre 80 y 100 → $6.5 por unidad", () => {
    expect(calcularTotal(5, 2, "CA", "Varios", 90)).toEqual(43.325);
  });
});
