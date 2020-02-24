module.exports = function countCats(matrix) {
    return matrix.flat().filter(word=> word ==='^^').length;
};
