const { registrarRepuesto } = require("../index");

test("CP-01: debe registrar correctamente un repuesto", () => {
    const repuesto = registrarRepuesto(
        "REP-001",
        "Filtro de aceite",
        12.50,
        10
    );

    expect(repuesto).toEqual({
        codigo: "REP-001",
        nombre: "Filtro de aceite",
        precio: 12.50,
        cantidad: 10
    });
});