//annonymous function
 


//function expression 
const sum = function(a,b){
    return a + b
}

const result = sum(3,7)
console.log(result)   

//variaveis mudando de comportamento
x = 3
console.log(x)

x = sum

console.log(x(11,33))