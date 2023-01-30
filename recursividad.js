const obj1 = {
    a: "a",
    b: "b",
    c: {
        d: "d",
        e: 'e'
    }
}


const numeros = [3,4,2,5,3,6,8,5,12,35,6,8,53,63]

function recursiva([...arrNum]){
    if(arrNum.length > 0){
        const firstNum = arrNum[0];
        console.log(firstNum)
        arrNum.shift()
        recursiva(arrNum)
    }
}