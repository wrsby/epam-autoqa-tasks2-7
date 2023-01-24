/** 
 * 1. Given the string 'ahb acb aeb aeeb adcb axeb'. 
 * Write a regular expression that matches the strings ahb, acb, aeb
 * by pattern: letter 'a', any character, letter 'b'
*/

var given_string = "ahb acb aeb aeeb adcb axeb"

var pattern = /a.b/g

console.log(given_string.match(pattern)) 


// 2. Given the string '2 + 3 223 2223'. Write a regex that finds line 2 + 3 without capturing the rest

var given_string = '2 + 3 223 2223'

var pattern = /2\s\+\s3/

console.log(given_string.match(pattern)) 


// 3.Get the day, month and year of the current date and output it to the console separately

let day = new Date()

console.log(day.getDate())
console.log(day.getMonth()+1)
console.log(day.getFullYear())