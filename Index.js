const strs = ["cba","daf","ghi"]
// const strs = ["zyx","wvu","tsr"]
const minDeletionSize=(strs)=>{
  let result=0
  let firstEl=[...strs[0]];
  for(let j=0;j<firstEl.length;j++){
    let tempChar=[]
    for(let k=0;k<strs.length;k++){
      tempChar.push(strs[k][j])
    }
    const temp=[...tempChar].sort()
    if(temp.join('')!==tempChar.join('')) {result = result + 1;}
  }
  return result;
}
const result=minDeletionSize(strs)
console.log(result)
