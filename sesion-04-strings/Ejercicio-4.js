let str_1 = "Juan Manuel"
let str_2 = "Recchimuzzi"

console.log(str_1.concat(" ", str_2))

let str_3 = "estudiante"

console.log(str_3.concat(" ", str_1," ", str_2))

let input = "estudianteMayuscula"
let db = "estudianteMinuscula"

console.log(input.toLowerCase())
console.log(input.toUpperCase())

let str_4 = "estudiante Juan Manuel Recchimuzzi"
console.log(str_4.length)
console.log(str_4.indexOf("Juan"))
console.log(str_4.charAt(33))

let str_5 = "    estudiante Juan Manuel Recchimuzzi   "
console.log(str_5.length)
// trim()
console.log(str_5.trim().length)
console.log(str_5.trimStart().length)
console.log(str_5.trimEnd().length)

console.log(str_5.includes("Juan"))