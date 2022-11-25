// const strs =["eat","tea","tan","ate","nat","bat"]
// const s =  "A man,a plan,a canal:Panama"
// const s =  " "
// const s =  "a."
const s =  "race a car"
// const s =  "dadadada"
// const strs = ["a"]
const isPalindrome=(s)=>{
  const char=[...s.replace(/[|&;$%@"<>()+,' ':.]/g, "")]
  console.log(char)
  for(let i=0;i<char.length/2;i++){
    if(char[i].toLowerCase()!==char[char.length-(i+1)].toLowerCase())return false
  }
  return true
}
const result = isPalindrome(s);
console.log(result);
