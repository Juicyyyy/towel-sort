
// You should implement your task here.

module.exports = function towelSort (matrix) {

    if (!matrix || matrix.length === 0)  {
        return [];
    }
    else {
        var arr2 = [];
        matrix.map((row, rowIndex) => {
            if (rowIndex % 2 === 1) {
                row.reverse();
            }
          });
    for (i = 0; i < matrix.length; i++) {
      for (j = 0; j < matrix[i].length; j++) {
        arr2.push(matrix[i][j]);
      }
    }
        return(arr2);}
}
