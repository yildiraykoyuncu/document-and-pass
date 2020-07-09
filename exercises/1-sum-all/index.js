/**
 *
 */
const sumAll = (start, end) => {

    if (typeof start !== 'number' || typeof end !== 'number') return 'ERROR';

    if (start < 0 || end < 0) return 'ERROR'

    let numbers = [start, end].sort((a, b) => a - b);
    let sum = 0;

    for (let i = numbers[0]; i <= numbers[1]; i++) {
        sum += i;
    };

    return sum;
}

module.exports = sumAll