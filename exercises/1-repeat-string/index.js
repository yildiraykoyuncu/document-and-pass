/**
 *
 */
const repeatString = (str, repeat) => {

    if (repeat < 0) return 'ERROR';

    let repeatedStr = '';

    for (let i = 0; i < repeat; i++) {
        repeatedStr += str;
    }

    return repeatedStr;
}

module.exports = repeatString