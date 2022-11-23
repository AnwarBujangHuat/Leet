const s = "a ";
// const nums = [1,3,5,6], target = 2
// const nums = [1,3,5,6], target = 7

const lengthOfLastWord = (s) => {
  const result = s.split(' ');
  for(let i=result.length-1;i>=0;i--){
    if(result[i]) return [...result[i]].length
  }
};
const result = lengthOfLastWord(s);
console.log(result);
