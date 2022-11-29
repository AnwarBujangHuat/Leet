
const nusl = (matrix, target) => {
  for(let i=0;i<matrix.length;i++){
    const targetedArray =matrix[i]
    if(targetedArray[targetedArray.length-1]>=target) {
      return targetedArray.includes(target)
    }
  }
  return false
};
const result = nusl(matrix, target);
console.log(result);
