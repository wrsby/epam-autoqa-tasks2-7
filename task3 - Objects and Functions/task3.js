// Create a car object, add a color property to it with the value equals 'black'

const car = {
    color: 'black',
}


// Change the color property of the car object to 'green'

car.color = 'green'


/* Add the power property to the car object,
which is a function and displays the engine power to the console*/

car.power = function() {
    console.log('Engine power is very high :P')
}


/* Pears and apples are accepted to the warehouse, 
write a function that returns the result of adding the number
of accepted pears and apples*/

function fruits_counter(pears, apples) {
    return pears + apples
}


/* Your name is saved in the payment terminal, write a function
to define the name in the terminal (if you entered your name,
 then hello + name, if not, then there is no such name) */

const payment_terminal = {
    saved_name : "John",
}

function greeting(terminal, input_name) {
    if (terminal.saved_name == input_name) {
        console.log('hello ' + input_name)
    } else {
        console.log('no such name')
    }
}


/* Write a function for calculating the type of argument 
and type output to the console */

function get_agrument_type(variable) {
    console.log(typeof(variable))
}


// Write a function that determines whether a number is prime or not

function isPrime(number) {
    for(let i = 2, s = Math.sqrt(number); i <= s; i++) {
        if(number % i === 0) return false;
    }
    return number > 1;
}

