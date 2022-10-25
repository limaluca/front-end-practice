//curring
function finalPrice(tax){
    return function(price){
        return price * (1 + tax)
    }
}



console.log(finalPrice(0.0875),(25.1))


const brazilianFinalPrice = finalPrice(0.0875)

//new version using variable
console.log(brazilianFinalPrice(25.8))