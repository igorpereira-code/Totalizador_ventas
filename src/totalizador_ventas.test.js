describe("Ventas", () => {
  it("El usuario ingresa cantidad de items y precio por item → se muestra el precio total ", () => {
    expect(calcularTotal(3, 2)).toEqual(6);
  });
});

function calcularTotal(cantidad, precio) {
  return cantidad * precio;
}
