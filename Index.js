const digits = [9,9];
// const digits =[6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3];
const plusOne = (digits) => {
  if (digits[digits.length - 1] !== 9) {
    digits[digits.length - 1] = digits[digits.length - 1] + 1;
    return digits;
  } else if (digits.length > 1) {
    if (digits[digits.length - 1] !== 9) {
      digits[digits.length - 1] = 0;
      digits[0] = digits[0] + 1;
      return digits;
    } else {
      for (let i = digits.length - 1; i > 0; i--) {
        if (digits[i - 1] !== 9||digits[i - 1]!==undefined) {
          digits[i - 1] = digits[i - 1] + 1;
          return digits
        }
        const result=digits.join('')
        let res=parseInt(result)
        const yep=res.toString()
        return [...yep].map(Number)
      }
    }
    return digits;
  } else {
    digits[0] = digits[0] + 1;
    return [...digits[0].toString()].map(Number);
  }
};
const result = plusOne(digits);
console.log(result);
