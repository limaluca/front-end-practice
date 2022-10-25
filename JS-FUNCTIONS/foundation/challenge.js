//create range function


function range(a,b,c)
{
    let result = [];
    
    for (let i = 1; i <= a; i++){
        result.push(i)
    }

    return result;

}

console.log(range(5))