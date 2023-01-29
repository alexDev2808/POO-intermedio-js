// Shallow copy en JavaScript
const obj1 = {
    a: "a",
    b: "b",
    c: {
        d: "d",
        e: 'e'
    }
}

/*
Si creamos un nuevo objeto a apartir de un ciclo for
copiando todos sus valores, inicialmente funcionara, pero
que pasa si el objeto tiene objetos anidados, en este 
caso nuevamente se copea solo la referencia
*/

const obj2 = {}

for(prop in obj1){
    obj2[prop] = obj1[prop]
}

/*
Con Object.assign() se crea un objeto nuevo, sin embargo
sucede lo mismo que el ejemplo anterior

Con Object.create() se crea un objeto nuevo, se crea una
instancia del objeto original y aqui las modificaciones
de la copia no afectaran al original, sin embargo las 
modificaciones en el objeto original si afectaran a la copia

*/

const obj3 = Object.assign({}, obj1)
const obj4 = Object.create(obj1)