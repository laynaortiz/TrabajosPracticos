//Actividad 1


let utiles = ["Lápiz", "Goma", "Regla", "Cuaderno", "Lapicera"];


console.log (utiles)
console.log (utiles[0])
console.log (utiles[2])
console.log (utiles[utiles.length - 4])
console.log (utiles.length);
utiles.push ("mochila");
console.log (utiles)
utiles.unshift("cartuchera");
console.log (utiles)
console.log (utiles.length);
console.log (utiles.pop())
console.log (utiles)
console.log (utiles.shift())
console.log (utiles)
console.log (utiles.length)


// Actividad 2


let productos = ["Leche", "Pan", "Arroz", "Fideos", "Aceite"];


console.log (productos)
console.log (productos.length)
productos.push ("azúcar")
productos.push ("yerba")
productos.push ("café")
console.log (productos)
productos.unshift ("sal")
productos.unshift ("galletitas")
console.log (productos)
console.log (productos.length)
console.log (productos.pop())
console.log (productos.pop())
console.log (productos)
console.log (productos.shift())
console.log (productos)
console.log (productos.length)


// Actividad 3


let productos3 = [
    "Teclado",
    "Mouse",
    "Monitor",
    "Auriculares",
    "Webcam",
    "Parlantes"
];


console.log (productos3.indexOf ("Mouse"))
console.log (productos3.indexOf ("Monitor"))
console.log (productos3.indexOf ("Webcam"))
console.log (productos3.indexOf ("Impresora"))
let variable = console.log (productos3.indexOf ("Teclado"))
if (variable == 0){
    console.log ("El teclado está registrado")
}
let impresora = console.log (productos3.indexOf ("Impresora"))
if (impresora == -1){
    console.log ("La impresora no está registrada")
} else {
    console.log ("La impresora está registrada")
}
productos3.push ("Impresora")
console.log (productos3.indexOf ("Impresora"))
console.log (productos3.length)


// Actividad 4

let videojuegos = [
"Minecraft",
"Pokémon Cristal",
"Super Mario",
"The Legend of Zelda",
"Sonic"

];

console.log (videojuegos)
console.log (videojuegos.length)
console.log (videojuegos.push("pokémon rojo"))
videojuegos.unshift("tetris")
videojuegos.unshift("pac-man")
console.log (videojuegos)
console.log (videojuegos.indexOf("Pokémon Cristal"))
console.log (videojuegos.indexOf("Sonic"))
console.log (videojuegos.pop)
console.log (videojuegos.shift)
console.log (videojuegos)
console.log(videojuegos.length)

//Actividad 5

let estudiantes = [
"Martina",
"Lucas",
"Sofía",
"Tomás",
"Valentina"
];

console.log (estudiantes)
console.log (estudiantes.length)
console.log (videojuegos.push (Agustín))
console.log (videojuegos.push (Camila))
console.log (videojuegos)
console.log (videojuegos.unshift (Bruno))
console.log (videojuegos.length)
console.log (videojuegos.indexOf("Sofía"))
console.log (videojuegos.indexOf("Camila"))
console.log (videojuegos.indexOf("Federico"))
console.log (videojuegos.shift)
console.log(videojuegos.pop)
console.log (videojuegos)
console.log (videojuego.length)

//Actividad 7

let tareas = [
"Estudiar",
"Hacer la tarea",
"Ordenar la habitación",
"Comprar alimentos"
];

console.log (tareas)
console.log (tareas.length)
tareas.push ("pasear al perro")
tareas.push ("preparar la cena")
console.log (tareas)
console.log (tareas.indexOf("Estudiar"))
console.log (tareas.indexOf ("Lavar el auto"))
console.log (tareas.shift)
console.log (tareas.pop)
tareas.push ("Leer un libro")
tareas.unshift ("Hacer ejercicio")
console.log (tareas)
console.log (tareas.length)

//Actividad 7

let peliculas = [
"Toy Story",
"Shrek",
"Buscando a Nemo",
"Los Increíbles",
"Ratatouille"
];

console.log (peliculas)
console.log (peliculas.length)
peliculas.push ("Cars")
peliculas.push ("Monster, Inc.")
console.log (peliculas)
peliculas.shift ("Intensamente")
peliculas.shift ("Coco")
console.log (peliculas)
console.log (peliculas.indexOf ("Sherk"))
console.log (peliculas.indexOf ("Coco"))
console.log (peliculas.indexOf ("Frozen"))
let variable1 = peliculas.indexOf ("Cars")
if (variable1 !== -1) {
    console.log("Cars está en la lista")
} else {
    console.log("Cars no está en la lista")
}
console.log (peliculas.pop)
console.log (peliculas.shift)
peliculas.push ("Up")
console.log (peliculas.indexOf ("Up"))
console.log (peliculas)
console.log (peliculas.length)

//Actividad 8

let productosTienda = [
"Celular",
"Notebook",
"Tablet",
"Teclado",
"Mouse"
];

console.log (productosTienda)
console.log (productosTienda.length)
productosTienda.push ("Monitor")
productosTienda.push ("Impresora")
productosTienda.unshift ("Cámara web")
productosTienda.unshift ("Micrófono")
console.log (productosTienda)
console.log (productosTienda.length)
console.log (productosTienda.indexOf("Notebook"))
console.log (productosTienda.indexOf("Micrófono"))
console.log (productosTienda.indexOf("Parlantes"))
console.log (productosTienda.pop)
console.log (productosTienda.shift)
console.log (productosTienda)
productosTienda.push ("Parlantes")
productosTienda.unshift ("Auriculares")
console.log (productosTienda)
console.log (productosTienda.indexOf("Parlantes"))
console.log (productosTienda.indexOf("Auriculares"))
console.log (productosTienda.indexOf("Celular"))
console.log (productosTienda.pop)
console.log (productosTienda.shift)
console.log (productosTienda)
console.log (productosTienda.length)
