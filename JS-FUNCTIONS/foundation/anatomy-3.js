// arrow functionosns is always anonynmous 

const increment1 = function(n){
    return n + 1
}

const increment2 = (n)=>{
    return n + 1
}

//forma mais enxuta de uma arrow function
const increment3 = n => n+1


const increment4 = (a,b) => a+b

console.log(increment1(221))

console.log(increment4(4,4))