

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


const studentBase = {
    name: undefined,
    email: undefined,
    age: undefined,
    approvedCourses: undefined,
    learningPaths: undefined,
    socialMedia: {
        twitter: undefined,
        instagram: undefined,
        facebook: undefined,
    }
};

const alexis = deepCopy(studentBase)

Object.seal(alexis)

// Preguntar si todas las propiedades de configurable es false
Object.isSealed(alexis)