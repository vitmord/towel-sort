// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (!matrix) return [];

    return matrix
        .map((el) => {
            if (!(matrix.indexOf(el) % 2)) {
                return el;
            } else {
                return el.sort((a, b) => b - a);
            }
        })
        .flat(Infinity);
};
