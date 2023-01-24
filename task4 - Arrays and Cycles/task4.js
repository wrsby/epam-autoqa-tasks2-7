/* 1.Given an array consisting of movie names,
iterate over the array with the output of the names of each movie to the console */

const movies = ["Teriminator", "Avatar", "Hatiko"]

movies.forEach(e => console.log(e))
console.log('---------------------')


/* 2. Given an array of car manufacturers, convert
the array to a string and back to an array */

const manufacturers = ["Sony", "LG", "Toshiba"]

function ussless_convertor(arr) {
    let a = arr.toString()
    let b = a.split(",")
    return b
}

console.log(ussless_convertor(manufacturers))
console.log('---------------------')


/** 3.Given an array of the names of your friends, 
add the words hello to each element of the array */

const friends_names = ["Aliaksandr", "Dzmitry", "Siarhei", "Yauhen"]

function word_adder(word, arr) {
    arr.forEach((name, index, arr) => {
        arr[index] = word + " " + name 
    })
    return arr
}

modified_friends_names = word_adder('hello', friends_names)
console.log(modified_friends_names)
console.log('---------------------')


// 4. Convert numeric array to Boolean 
const numeric_arr = [1, 0, 1]

function conver_to_boolen(arr) {
    let boolen_array = []

    arr.forEach(
        e => boolen_array.push(Boolean(e))
    )
    return boolen_array
}

const new_booled_array = conver_to_boolen (numeric_arr)
console.log(new_booled_array) 
console.log('---------------------')


// 5. Sort the array [1,6,7,8,3,4,5,6] in descending order

const arr = [1,6,7,8,3,4,5,6]

arr.sort().reverse()
console.log(arr)
console.log('---------------------')


// 6. Filter array [1,6,7,8,3,4,5,6] by value > 3

filtered_arr = arr.filter(a => a > 3)
console.log(filtered_arr)
console.log('---------------------')


/* 7. Write a function that takes two parameters -
an array and a number and outputs the index of an array element equal to a number */

function number_lookup(arr, number) {
    res=[]
    arr.forEach(
        (elem, index) => elem == number ? res.push(index) : index
    )
    return res
}

console.log(number_lookup(arr, 8))
console.log('---------------------')


// 8. Implement a loop that will print the number 'a' until it is less than 10
function print_until_less_value(given_number, stop_number) {
    while(given_number >=  stop_number) {
        console.log(given_number)
        given_number = --given_number
    }
}

print_until_less_value(13, 10)
console.log('---------------------')


// 9. Implement a loop that prints prime numbers to the console

function isPrime(number) {
    for(let i = 2, s = Math.sqrt(number); i <= s; i++) {
        if(number % i === 0) return false;
    }
    return number > 1;
}

function print_prime_numbers(arr) {
    arr.forEach(
        e => isPrime(e) ? console.log(e) : e
    )
}

print_prime_numbers(arr)
console.log('---------------------')


// 10. Implement a loop that prints odd numbers to the console

function isOdd(num) {return num % 2}

function print_odd_numbers(arr) {
    arr.forEach(
        e => isOdd(e) ? console.log(e) : e
    )
}

print_odd_numbers(arr)
