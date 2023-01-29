
const alexis = {
    name: "Alexis",
    age: 22,
    email: "alexis2808@gmail.com",
    approvedCourses: ["Curso 1"],
    addCourse(newCourse){
        console.log("This", this);
        console.log("This.approvedCourses", this.approvedCourses);
        this.approvedCourses.push(newCourse)
    }
}

// console.log(Object.keys(alexis))
// console.log(Object.getOwnPropertyNames(alexis))
// console.log(Object.entries(alexis))

// Nos ayuda a que nuestras propiedades sean configurable: false
// Object.seal(alexis)

// Freeze no permite eliminar ni editar, configurable y writable: false
Object.freeze(alexis)

console.log(Object.getOwnPropertyDescriptors(alexis))