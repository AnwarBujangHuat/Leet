//Output: "fl"
const strs = ["flower","flow"]
// const strs = ["flower","flow","flight"]
const longestCommonPrefix=(strs)=>{
 let result=[];
 let firstElement=[...strs[0]]
  for(let i=0;i<firstElement.length;i++){
    for(let k=1;k<strs.length;k++) {
      if(strs[k].includes(firstElement[i])){
        result.push(firstElement[i])
      }
    }
  }
 // strs.forEach((str,ind)=>{mapping[ind]=[...str];})
  return result

}


const result = longestCommonPrefix(strs);
console.log(result);
