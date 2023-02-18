const  nums = [3,2,3]
// const  nums = [2,2,1,1,1,2,2]
const majorityElement =(nums)=>  {
  nums.sort()
  let counter=1
  let max=0
  let result=0
  for(let i=0;i<nums.length;i++){
    if(nums[i]!==nums[i+1]) {
      if(max<counter){
        max=counter
        result=nums[i]
      }
      counter=0
    }
    counter++
  }
  return result
  // return Math.max(...mapCount.values);
};

const result = majorityElement(nums);
console.log(result);
