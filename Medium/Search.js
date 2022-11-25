const nums = [4,5,6,7,0,1,2]
target=0
// const digits =[6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3];
const search=(nums,target)=>{
  let result=-1
  nums.forEach((v,i)=>{
    if(v===target)return result=i
  })
  return result
}
const result = search(nums,target);
console.log(result);
