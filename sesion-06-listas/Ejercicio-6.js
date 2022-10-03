let array = ["pan", "fideos", "tomate", "carne", "pescado"]

console.log(array)

array.push("aceite de girasol")
console.log(array)

array.pop()
console.log(array)

const listaObjetos = [
    { titulo: "Lo que el viento se llevo", director: "Gonzalez", fecha: "March 15 2020" },
    { titulo: "Gladiador", director: "Perez", fecha: "June 25 2015" },
    { titulo: "La maldición", director: "Don Quijote", fecha: "August 11 1990" },
]
const peliculasAnterioresAl2010 = listaObjetos.filter(obj => obj.fecha < "January 1 2010")
console.log(peliculasAnterioresAl2010)


const directores = listaObjetos.map(obj => obj.director)
console.log(directores)


const titulos = listaObjetos.map(obj => obj.titulo)
console.log(titulos)


const listaDirectoresTitulos = directores.concat(titulos)
console.log(listaDirectoresTitulos)

console.log(...listaDirectoresTitulos)

const listaDirectoresTitulos1 = [...directores, ...titulos]
console.log(listaDirectoresTitulos1)