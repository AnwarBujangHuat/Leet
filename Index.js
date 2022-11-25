const s = "abb"; //321
// const x = -123; //-321
// const x = 120; //21
const longestPalindrome=(s)=>{
  const arr= [...s]
  if(arr.length<1)return s
  const result=[]
  for(let i=0;i<arr.length;i++){
    if(arr[i]===arr[arr.length-(i+1)])result.push(arr[i])
  }
  return result.length?result.join(''):arr[0]
}
const result = longestPalindrome(s);
console.log(result);
