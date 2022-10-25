const numbers = [1,2,3,4,5,6]

const numbersTimesTwo = numbers.map(function(element){
    return element *2
})

const numbersArrowDouble = numbers.map(el => el*2)

console.log(numbersArrowDouble)


console.log(numbersTimesTwo)

const students = 
[
    {name: 'Jake', score: 6.4},
    {name: 'Kelly', score: 8.6},
    {name: 'Uchis', score: 9.4},
    {name: 'Patel', score: 9.1},
]



const getScore = el => el.score
const result = students
    .map(getScore)
    .map(Math.ceil)

console.log(result)
//the resuting array is a new array of the same length
 