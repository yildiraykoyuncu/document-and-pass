/**
 *
 */
const removeFromArray = (arr, ...args) => {
    return arr.filter(item => args.indexOf(item) === -1)
};

module.exports = removeFromArray