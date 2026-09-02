console.log("AutoPartes Pro - Modulo de Gestion de Repuestos");

function registrarRepuesto(codigo, nombre, precio, cantidad) {
return {
codigo,
nombre,
precio,
cantidad
};
}

const repuesto = registrarRepuesto(
"REP-001",
"Filtro de aceite",
12.50,
10
);

console.log("Repuesto registrado:", repuesto);

module.exports = { registrarRepuesto };
