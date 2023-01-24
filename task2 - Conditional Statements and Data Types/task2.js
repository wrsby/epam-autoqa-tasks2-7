//Conditional statements and Data types Practical task 

let frst_string = "Hello"
let b_type = true
let frst_number = 1


// 1. Perform addition of various types (string + boolean, string + number, number + boolean)

result = frst_string + b_type //Hellotrue
result = frst_string + frst_number //Hello1
result = frst_number + b_type //2

// 2. Perform multiplication of various types (string * boolean, string * number, number * boolean)

result = frst_string * b_type //NaN
result = frst_string * frst_number //NaN
result = frst_number * b_type //1

// 3. Divide different types (string / boolean, string / number, number / Boolean)

result = frst_string / b_type //NaN
result = frst_string / frst_number //NaN
result = frst_number / b_type //1

// 4. Perform explicit conversion (number, string, boolean)\

let str_number = "1"
let nmbr 

nmbr = Number(str_number)// number
str_number = String(nmbr)// string
b_type = Boolean(str_number) //boolean
