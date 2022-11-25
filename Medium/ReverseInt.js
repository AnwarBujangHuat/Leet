const x = 123; //321
// const x = -123; //-321
// const x = 120; //21
const Reverse=(x)=>{
  let reverseN=0;
  let sign = x < 0;
  let n = Math.abs(x);
  while (n) {
    reverseN = reverseN*10 + (n % 10);
    n = Math.floor(n/10);
  }
  return reverseN > 0x7FFFFFFF ? 0 : sign ? -reverseN : reverseN;
}
const result = Reverse(x);
console.log(result);
