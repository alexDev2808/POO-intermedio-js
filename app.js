
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
// Object.freeze(alexis)

console.log(Object.getOwnPropertyDescriptors(alexis))

//Como funciona la memoria en JavaScript: Existen 2 : stack y heap
/*
La memoria stack es muy rapida pero no tan grande, heap no es tan rapida
pero mucho mas grande.
Las variables se guardan en la memoria stack y solo cuando se trabaja con 
objetos, estos se guardan en la memoria heap, es decir solo el contenido 
del objeto va a la memoria heap, en la memoria stack se queda guardado el 
nombre y su referencia, su apuntador al contenido del objeto
*/

/*
Aqui se esta copiando entre comillas el objeto alexis dentro de la variable
jesus, sin embargo solo se esta copiando la referencia de ese objeto, mas
no su contenido, asi que cualquier cambio en alguno de los dos objetos 
tambien cambiara al otro
 */
const jesus = alexis;

console.log(jesus)

jesus.name = "Jesus Alexis"

console.log(jesus)
console.log(alexis)