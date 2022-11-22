// Input: x = 121
// Output: true
const input=1000021

const isPalindrome=()=>{
  let result=true;
  //for Negative number
  if(input<0)return false

  const temp=input.toString()
  .split("").map((num)=>{
    return Number(num)
  })
  for (let i = 0; i < temp.length; i++) {
    if(temp[i] !== temp[temp.length-(i+1)]){
      result=false
      break;
    }
  }
  return result

}
const result=isPalindrome()
console.log(result)
