/**
 * Encrypts strings by shifting every letter by a given number
 * @param {'string'}
 * @param {'number'}
 * @returns {'string'}
 */
const caesar = (str, key) => {

    let result = '';

    if (key < 0) {
        key += 26
    }


    for (let i = 0; i < str.length; i++) {
        const regex = RegExp(/[A-Za-z]/gi)
        if (regex.test(str[i])) {

            if (str.codePointAt(i) >= 65 && str.codePointAt(i) <= 90) {
                result += `${String.fromCodePoint((str.codePointAt(i) - 65 + key)%26 +65)}`
            } else if (str.codePointAt(i) >= 97 && str.codePointAt(i) <= 122) {
                result += `${String.fromCodePoint((str.codePointAt(i) - 97 + key)%26 +97)}`
            }


        } else {
            result += `${str[i]}`
        }
    }



    return result;
};



module.exports = caesar;