//Output: "fl"
// const strs = ["aa","aa"];
const strs = ["aa","ab"];
// const strs = ["cir","car"];
// const strs = ["flower","flow","flight","flowering"]
const longestCommonPrefix = (strs) => {
  if(!strs[0])return strs[0]
  if(strs.length<2) return [...strs[0]].toString()
  let firstElement = [...strs[0]];
  let initialCommon = [];
  for (let i = 0; i < firstElement.length; i++) {
    for (let k = 1; k < strs.length; k++) {
      const tempArray=[...strs[k]]
      if (tempArray[i]!==firstElement[i]) return [...initialCommon].join('');
      if (k >= strs.length - 1) {
        initialCommon.push(firstElement[i]);
      }
    }
  }
  return [...initialCommon].join("");
};


const result = longestCommonPrefix(strs);
console.log(result);
