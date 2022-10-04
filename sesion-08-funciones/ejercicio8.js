function verdaderoFalso() {
    sinParametros()
}
function sinParametros() {
    console.log("true()")
}
verdaderoFalso()


function miAsinc() {
}
function promesa(){
console.log("Hola, soy una promesa");
}
setTimeout(promesa, 5000)


function* generaId() {
    let id = 0;
    while(true) {
        id++
        if (id === 10) {
            return id
        }
        yield id // Esperando hasta que se vuelva a llamar
    }
}

const gen = generaId();

console.log(gen.next().value*2)
console.log(gen.next().value*2)
console.log(gen.next().value*2)
console.log(gen.next().value*2)
console.log(gen.next().value*2)
console.log(gen.next().value*2)
console.log(gen.next().value*2)
console.log(gen.next().value*2)
console.log(gen.next().value*2)
console.log(gen.next().value*2)