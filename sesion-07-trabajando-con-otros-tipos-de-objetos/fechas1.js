const fecha = new Date()

console.log(fecha)

const fecha1 = new Date("April 20, 1983")
console.log(fecha1)

console.log(fecha.getTime() > fecha1.getTime())

console.log(fecha1.getDate())

console.log(fecha1.getMonth() + 1)

console.log(fecha1.getFullYear())