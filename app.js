
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


Object.defineProperty(alexis, "editor", {
    value: "VSCode",
    writable: false,
    enumerable: true,
    configurable: true,
})

Object.defineProperty(alexis, "navigator", {
    value: "Chrome",
    writable: true,
    enumerable: false,
    configurable: true,
})

Object.defineProperty(alexis, "terminal", {
    value: "Linux",
    writable: true,
    enumerable: true,
    configurable: false,
})

Object.defineProperty(alexis, "pruebaNasa", {
    value: "extraterrestes",
    writable: false,
    enumerable: false,
    configurable: false,
})

console.log(Object.getOwnPropertyDescriptors(alexis))