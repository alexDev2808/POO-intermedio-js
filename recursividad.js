

function isObject(subject){
    return typeof subject === 'object'
}

function isArray(subject){
    return Array.isArray(subject)
}

function deepCopy(subject){
    let copySubject;

    const subjectIsArray = isArray(subject);
    const subjectIsObject = isObject(subject);

    if(subjectIsArray){
        copySubject = [];
    }else if(subjectIsObject){
        copySubject = {}
    }else{
        return subject;
    }

    for(key in subject){
        const keyIsObject = isObject(subject[key]);

        if(keyIsObject){
            copySubject[key] = deepCopy(subject[key])
        }else{
            if(subjectIsArray){
                copySubject.push(subject[key]);
            }else{
                copySubject[key] = subject[key]
            }
        }
    }

    return copySubject;
}


// const studentBase = {
//     name: undefined,
//     email: undefined,
//     age: undefined,
//     approvedCourses: undefined,
//     learningPaths: undefined,
//     socialMedia: {
//         twitter: undefined,
//         instagram: undefined,
//         facebook: undefined,
//     }
// };



// Funcion para comprobar parametros obligatorios
function requiredParam(param){
    throw new Error(param + " es obligatorio")
}

// Aplicar RORO, recibir un objeto, retornar un objeto
function createStudent({
    // Se llama a la funcion solo cuando no se envia el parametro name o email
    name = requiredParam("name"),
    email = requiredParam("email"),
    age,
    twitter,
    instagram,
    facebook,
    approvedCourses = [],
    learningPaths = [],
    // = {} indica que por defecto sea un objeto
} = {}){

    // Utilizar el scope de JS para de alguna forma proteger las variables privadas o que nos importan
    // La variable private se crea como un objeto para que se puedan acceder facilmente a sus propiedades
    const private = {
        "_name": name,

    };

    const public = {
        age,
        email,
        approvedCourses,
        learningPaths,
        socialMedia: {
            twitter,
            instagram,
            facebook
        },
        readName(){
            return private._name;
        },
        changeName(newName){
            private._name = newName;
        },
    };

    // Object.defineProperty para proteger los metodos de la sobreescritura o la eliminacion
    Object.defineProperty(public, "readName", {
        configurable: false,
        writable: false
    });

    Object.defineProperty(public, "changeName", {
        configurable: false,
        writable: false
    });

    return public;
}

const alexis = createStudent({
    name: "alexis",
    age: 22,
    email: 'alexistenorio@gmail.com',
    instagram: 'alexisg333',
    twitter: 'alexxx34' 
});