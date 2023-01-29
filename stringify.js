const obj1 = {
    a: "a",
    b: "b",
    c: {
        d: "d",
        e: 'e'
    }
}

/*
Con JSON.stringify() convertimos un objeto a un string
y con JSON.parse() convertimos un string a un objeto.
Con esto se resuelve el no copiar solo la referencia
de objetos anidados, sino que se copea todo su contenido.
Sin embargo existe un problemita y es que si el objeto
contiene metodos, estos no se copiaran, son omitidos
*/

const stringComplexObj = JSON.stringify(obj1);

const obj2 = JSON.parse(stringComplexObj);

