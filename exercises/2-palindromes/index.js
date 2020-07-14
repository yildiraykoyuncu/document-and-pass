/**
 * Checks a string and return if its palindrome or not
 * @param {string} str string to check
 * @returns {boolean} it returns true or false
 * 
 * @example
 * 
 * const check = palindromes('race');
 * console.log(check); // false
 */
const palindromes = (str) => {

    if (typeof str !== 'string') { throw new TypeError('This is not a string') }

    let temp = str.toLowerCase()
        .match(/[0-9a-z]/gi)
    let result = temp.every(letter => letter === temp[temp.length - temp.indexOf(letter) - 1]);

    return result;

};

palindromes('Ada')

module.exports = palindromes;