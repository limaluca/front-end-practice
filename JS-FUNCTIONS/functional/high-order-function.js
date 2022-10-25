/*
functons that operate on other functions,
either by taking them as arguments or by
returning them. they are called high-order functions
*/

function run(fn)
{
    fn()
}

function sayHello()
{
    console.log("hello!")
}

run(sayHello)