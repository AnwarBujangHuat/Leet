A = [1, 3, 6, 4, 1, 2]
// A = [1, 2, 3]
const solution = function(A) {
    A = A.filter(x => x >= 1).sort((a, b) => a - b)
    let x = 1
    for(let i = 0; i < A.length; i++) {
        if(x < A[i]) {
            return x
        }
        x = A[i] + 1
    }
    return x;
};
const result=solution(A)
console.log(result)
