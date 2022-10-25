function logParameters(a,b,c){
    console.log(a, b, c)
}

logParameters(1)


//valores padroes para parametros
function defaultParameters(a=1, b=4,c){
    console.log(a,b,c)
}

defaultParameters()


//operador spread/rest
function logNums(...nums){
    console.log(nums)
}

logNums(1,2,3,4,5,6,7,8,6,6)


function sumAll(...nums){
    let total = 0
    for(let n of nums){
        total += n;
    }
    return total
}
console.log(sumAll(1,2,3,4,5,6,7))


