// const nums=[0,2,1,5,3,4]
const nums=[5,0,1,2,3,4]
const buildArray=(nums)=>{
  if(nums<2) return nums
  const result=[]
  nums.forEach((v)=>{
    result.push(nums[v])
  })
  return result
}
const result = buildArray(nums);
console.log(result);

