/**
 *
 */
const fibonacci = (arg) => {

    let number = Number(arg);
    if (number < 0) return 'OOPS'

    let fibonacciArray = [1, 1];

    if (number === 1) {
        return fibonacciArray[0]
    } else if (number === 2) {
        return fibonacciArray[1]
    } else {

        for (let i = 1; i < number; i++) {

            fibonacciArray.push(fibonacciArray[i] + fibonacciArray[i - 1])
        }
        return fibonacciArray[number - 1]
    }


}



module.exports = fibonacci