const obj = {
nombre: "Juan",
apellido: "Recchimuzzi",
edad: 39,
altura: 168,
eresDesarrollador : true,
}

console.log(obj["edad"])

const datosPersonales = [
{ nombre: "Juan", apellido: "Recchimuzzi", edad: 39, altura: 168},
{ nombre: "Ruben", apellido: "Lopez", edad: 30, altura: 161 },
{ nombre: "Carlos", apellido: "Perez", edad: 49, altura: 177 },
]

console.log(datosPersonales)
// .sort() -> MUTA EL VALOR DE LA LISTA ORIGINAL

datosPersonales.sort((a, b) => b.edad - a.edad)

console.log(datosPersonales)