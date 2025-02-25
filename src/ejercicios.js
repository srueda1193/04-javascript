// Ej1 Dado el siguiente array de objetos que representan estudiantes:

// Usa map para crear un nuevo array donde cada estudiante tenga su promedio de calificaciones agregado al objeto (promedio).
// Usa filter para obtener solo los estudiantes con un promedio mayor o igual a 80.
// Usa reduce para calcular el promedio total de todas las calificaciones de todos los estudiantes.

const estudiantes = [
    { nombre: "Juan", edad: 20, calificaciones: [80, 90, 70] },
    { nombre: "María", edad: 22, calificaciones: [95, 85, 88] },
    { nombre: "Carlos", edad: 19, calificaciones: [60, 75, 70] },
    { nombre: "Ana", edad: 21, calificaciones: [90, 92, 85] }
];


// Ej2 Supongamos que tenemos una tienda con una lista de productos y un carrito de compras.
// Usa find para buscar el producto con id 3 (Mouse) y agrégalo al carrito.
// Agrega al carrito el producto con id 1 (Laptop) sin repetir productos.
// Crea un Map llamado preciosCarrito donde la clave sea el nombre del producto y el valor su precio.
// Usa reduce para calcular el precio total del carrito.

const productos = [
    { id: 1, nombre: "Laptop", precio: 1000 },
    { id: 2, nombre: "Teclado", precio: 50 },
    { id: 3, nombre: "Mouse", precio: 30 },
    { id: 4, nombre: "Monitor", precio: 300 }
];

let carrito = new Set();


// Ej3 Dado el siguiente array de pedidos en una tienda:
// Usa forEach para imprimir cada pedido en formato:
// "Pedido #1 - Cliente: Juan - Total: $1030"
// Usa map para obtener un array solo con los nombres de los clientes.
// Usa some para verificar si hay algún pedido con un total mayor a $1000.
// Usa filter para obtener solo los pedidos que contengan "Laptop" en su lista de productos.


const pedidos = [
    { id: 1, cliente: "Juan", productos: ["Laptop", "Mouse"], total: 1030 },
    { id: 2, cliente: "María", productos: ["Monitor"], total: 300 },
    { id: 3, cliente: "Carlos", productos: ["Teclado", "Mouse"], total: 80 },
    { id: 4, cliente: "Ana", productos: ["Laptop", "Monitor", "Teclado"], total: 1350 }
];


// Ej4 Sistema de Reservas de Hotel (Spread, Set, Map, bind)

// Crea un Map llamado reservas donde las claves sean nombres de clientes y los valores sean los números de habitación reservados.
// Usa call para reservar la habitación 102 para "Carlos".
// Usa apply para reservar la habitación 103 para "María".
// Usa bind para crear una función reservarHabitacionAna que siempre reserve la habitación 104 y ejecútala.

const hotel = {
    nombre: "Hotel JS",
    habitacionesDisponibles: new Set([101, 102, 103, 104, 105]),
    reservar: function (habitacion) {
        if (this.habitacionesDisponibles.has(habitacion)) {
            this.habitacionesDisponibles.delete(habitacion);
            console.log(`Habitación ${habitacion} reservada en ${this.nombre}`);
        } else {
            console.log(`La habitación ${habitacion} no está disponible`);
        }
    }

};


// Ej5 Análisis de Transacciones Bancarias (Desestructuración, map, filter, reduce, find)

// Usa map para convertir los montos en dólares a euros (1 dólar = 0.85 euros).
// Usa filter para obtener solo las transacciones de tipo "gasto".
// Usa reduce para calcular el saldo final de cada usuario sumando ingresos y restando gastos.
// Usa find para encontrar la primera transacción de "Juan".

const transacciones = [
    { id: 1, usuario: "Juan", tipo: "ingreso", monto: 1000 },
    { id: 2, usuario: "María", tipo: "gasto", monto: 200 },
    { id: 3, usuario: "Carlos", tipo: "ingreso", monto: 500 },
    { id: 4, usuario: "Ana", tipo: "gasto", monto: 100 },
    { id: 5, usuario: "Juan", tipo: "gasto", monto: 300 }
];


//Ej6 Sistema de Usuarios (Desestructuración, spread, bind)

// Usa spread para agregar las propiedades de usuarioBase a cada usuario del array.
// Crea una función saludar dentro de un objeto accionesUsuario, que diga "Hola, soy [nombre] y tengo [edad] años."
// Usa bind para crear una nueva función saludoJuan que use el objeto de "Juan" y llámala.

const usuarioBase = { rol: "Usuario", activo: true };
const usuarios = [
    { id: 1, nombre: "Juan", edad: 25 },
    { id: 2, nombre: "María", edad: 30 },
    { id: 3, nombre: "Carlos", edad: 22 }
];
