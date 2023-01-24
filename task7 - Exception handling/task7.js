/** 1. In a try catch construction, wrap the code: console.log (a), let a = 3.
 *  And display an error - ‘let must be declared’ before use.
*/

try {
    console.log(a)
    let a = 3
} catch {
    console.log("let must be declared’ before use")
}


/**
 * When running 1/0, the error 'cannot be divided by zero'
 */
try {
    let res = 1/0

    if (res == Infinity) {
        throw new Error()
    }

} catch {
    console.log( "cannot be divided by zero")
}