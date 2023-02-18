const nums = [5,7,7,8,8,8,10]
const target=8
// const target=3
// const nums=[3,3,3]
// const digits =[6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3];
const search=(nums,target)=>{
  let result=[]
  let start=-1;
  let end=-1
  for(let i=0;i<nums.length;i++){
    if(nums[i]===target){
      if(start===-1) start=i
      if(nums[i+1]!==target) {
        end=i
        break
      }
    }
  }
  result.push(start)
  result.push(end)
  return result
}
const result = search(nums,target);
console.log(result);
