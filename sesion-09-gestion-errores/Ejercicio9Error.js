const miFuncion = val => {
if (typeof val === "number") {
return 2 * val
}
throw new Error("El valor debe ser de tipo número")
}

const numero = "8";

try {
console.log("Está ejecutándose de manera correcta")
const doble = miFuncion(numero)
console.log(doble)
} catch (e) {
console.error(`El valor de e es: ${e}`)
console.error("ERROR!")
} finally {
console.log("Esto se va a ejecutar tanto si se produce algún error, como si no existe ninguno")
}