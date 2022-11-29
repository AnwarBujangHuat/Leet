// const matrix = [[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], target = 3;
const matrix = [[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], target = 13;
// const matrix =[[1]], target = 2;

const searchMatrix = (matrix, target) => {
  for(let i=0;i<matrix.length;i++){
    const targetedArray =matrix[i]
    if(targetedArray[targetedArray.length-1]>=target) {
      return targetedArray.includes(target)
    }
  }
  return false
};
const result = searchMatrix(matrix, target);
console.log(result);
