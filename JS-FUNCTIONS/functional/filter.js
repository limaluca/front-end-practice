// a evaluation takes course and dedices if an element is filtered or not
//in this ex: fn(el) => el > 10   the element must be > than 10 not to be filtered 
//the resulting array can have different length than the original array
 
const students = 
[
    {name: 'Jake', score: 6.4},
    {name: 'Kelly', score: 8.6},
    {name: 'Uchis', score: 9.4},
    {name: 'Patel', score: 9.1},
]

const numbers = [12,34,56,78]


const greaterThan = el => el > 20


console.log(numbers.filter(greaterThan))
 
const greatStudent = student => student.score >=9

console.log(students.filter(greatStudent))




