// const head = [1,2,3,4,5,6]
// const s = "tree"
// const s = "cccaaa"
// const nums = [0,1,2,4,5,7]
const nums = [0,2,3,4,6,8,9]
const summaryRanges =(nums)=>  {
  const result=[]
  let start=nums[0]
  for(let i=0;i<nums.length;i++){
    if(nums[i+1]!==nums[i]+1){
      result.push((start!==nums[i]?start+'->':"")+nums[i])
      start=nums[i+1]
    }
  }
  return result
};

const result = summaryRanges(nums);
console.log(result);
