const nums = [-1,-1], k = 1
// const nums = [3,3,1,2,2,2], k = 2
// const nums = [1], k = 1
const topKFrequent =(nums,k)=>  {
  nums.sort()
  let counter=1
  let result={}
  for(let i=0;i<nums.length;i++){
    if(nums[i]!==nums[i+1]) {
      result[nums[i]]=counter
      counter=0
    }
    counter++
  }

  let final=[]
  const arr= Object.entries(result).sort(([,a],[,b]) => b-a)
  for(let i=0;i<k;i++){
    final.push(parseInt(arr[i][0]))
  }
  return final
};

const result = topKFrequent(nums,k);
console.log(result);
