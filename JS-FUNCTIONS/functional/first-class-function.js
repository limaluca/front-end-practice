/*
first class functions are functions that are treated like any other variable
qd uma funcao pode ser armazenada dentro de uma variavel
*/

const add = function(a , b) {
    return a + b
}
console.log(add(10,20))

//nao eh preciso colocar return nem os {} em arrow function de uma linha
const subtract = (a,b) => a - b

const multiply = (a,b) => a * b

console.log(subtract(10,1))

console.log(multiply(2,2))