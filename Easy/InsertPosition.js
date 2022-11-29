const nums = [1,3,5,6], target = 5
// const nums = [1,3,5,6], target = 2
// const nums = [1,3,5,6], target = 7

const searchInsert = (nums, target) => {
  if(!nums.includes(target)){
    if(nums[0]>target) return 0
    if(nums[nums.length-1]<target) return nums.length
    else{
      for(let i=0;i<nums.length;i++){
        if(nums[i]<target&&nums[i+1]>target) return i+1
      }
    }
  }
  else{
    for(let i=0;i<nums.length;i++){
      if(nums[i]===target) return i
    }
  }
};
const result = searchInsert(nums, target);
console.log(result);
