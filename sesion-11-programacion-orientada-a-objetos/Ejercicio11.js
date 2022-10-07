const estudiante = {
    nombre: "Gorka",
    asignatura: "javascript"
    }
const otro_estudiante = {
    nombre: "Miguel",
    asignatura: "HTML",
}
const nuevo_estudiante = {
    nombre: "Carlos",
    asignatura: "CCS",
}
const crearEstudiante = (nombre, asignatura) => {
    return {
        nombre,
        asignatura
    }
}
class Estudiante {
    constructor(nombre, asignatura) {
        this.nombre = nombre
        this.asignatura = asignatura
    }
}