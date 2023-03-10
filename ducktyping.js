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


// class SuperObject{

//     static isArray(subject){
//         return Array.isArray(subject)
//     }

//     static isObject(subject){
//         return typeof subject === 'object'
//     }

//     static deepCopy(subject){
//         let copySubject;

//         const subjectIsArray = isArray(subject);
//         const subjectIsObject = isObject(subject);

//         if(subjectIsArray){
//             copySubject = [];
//         }else if(subjectIsObject){
//             copySubject = {}
//         }else{
//             return subject;
//         }

//         for(key in subject){
//             const keyIsObject = isObject(subject[key]);

//             if(keyIsObject){
//                 copySubject[key] = deepCopy(subject[key])
//             }else{
//                 if(subjectIsArray){
//                     copySubject.push(subject[key]);
//                 }else{
//                     copySubject[key] = subject[key]
//                 }
//             }
//         }

//         return copySubject;
//     }
// }


function SuperObject(){}

SuperObject.isObject = function isObject(subject){
    return typeof subject === 'object'
}

SuperObject.deepCopy = function deepCopy(subject){
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


function requiredParam(param){
    throw new Error(param + " es obligatorio")
}

function LearningPath({
    name = requiredParam("name"),
    courses = []
}){

    this.name = name;
    this.courses = courses;

}

function Student({
    
    name = requiredParam("name"),
    email = requiredParam("email"),
    age,
    twitter,
    instagram,
    facebook,
    approvedCourses = [],
    learningPaths = [],
    
} = {}){

    this.name = name;
    this.email = email;
    this.age = age;
    this.learningPaths = learningPaths;
    this.approvedCourses = approvedCourses;
    this.socialMedia = {
        twitter,
        instagram,
        facebook
    }

    const private = {
        "_learningPaths": [],
    }

    Object.defineProperty(this, "learningPaths", {
        get(){
            return private._learningPaths;
        },
        set(newLP){
                if(newLP instanceof LearningPath){
                    private._learningPaths.push(newLP)
                }else{
                    console.warn("Alguno de los LPs no es una instancia del prototipo LearningPath")
                }
            }
        }
    )

    for(let learningPathIndex in learningPaths){
        this.learningPaths = learningPaths[learningPathIndex]
    }        

}



const escuelaWeb = new LearningPath({name: "Escuela |Web"})
const escuelaData = new LearningPath({name: "Escuela de DataScience"})

const alexis = new Student({
    name: "alexis",
    age: 22,
    email: 'alexistenorio@gmail.com',
    instagram: 'alexisg333',
    twitter: 'alexxx34',
    learningPaths: [
        escuelaWeb,
        escuelaData,
        {
            name: "Escuela de Videojuegos",
            courses: ['Algun curso']
        }
    ] 
});