// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

//Input: nums = [3,2,4], target = 6
// Output: [1,2]

//Input: nums = [3,3], target = 6
// Output: [0,1]
//Sort Array First
// nums = [2,7,11,15], target = 9
// const nums =   [2,5,5,11], target = 10
// const nums = [3,2,4], target = 6
// const nums = [3,3], target = 6
// const nums =[-1,-2,-3,-4,-5], target = -8
// const nums = [0,4,3,0], target = 0
const nums = [0,3,-3,4,-1], target = -1
const calculation=(maps)=>{
  const result=[];
  for (let i = 0; i < maps.size; i++) {
    for (let k = i+1; k < maps.size; k++) {
      if(maps.get(i)+maps.get(k)===target)return result.concat(i,k)
      // if(maps.get(i)+maps.get(k)===6)return result.push(i,k)
    }
  }
}
const mapNums=()=>{
  let temp=new Map();
  nums.forEach((num,ind)=>{
    temp.set(ind,num)
  })
  return temp
}
const TestRun=()=>{
  const maps=mapNums();
  //Remove Any Value that is not Workable
  maps.forEach((value,key,map)=>{
    //If Negative Number
    if(value>target&&value<0&&target>0){maps.delete(key)}
  })
  const result=calculation(maps)
  return result
}
console.log(TestRun())





//A really brute force way would be to search for all possible pairs of numbers but that would be too slow.
// Again, it's best to try out brute force solutions for just for completeness. It is from these brute force solutions that you can come up with optimizations.
// So, if we fix one of the numbers, say x, we have to scan the entire array to find the next number y which is value - x where value is the input parameter.
// Can we change our array somehow so that this search becomes faster?
// The second train of thought is, without changing the array, can we use additional space somehow? Like maybe a hash map to speed up the search?


// //Submitted Answer
// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[]}
//  */
//
// const calculation=(maps,target)=>{
//   const result=[];
//   for (let i = 0; i < maps.size; i++) {
//     for (let k = i+1; k < maps.size; k++) {
//       if(maps.get(i)+maps.get(k)===target)return result.concat(i,k)
//       // if(maps.get(i)+maps.get(k)===6)return result.push(i,k)
//     }
//   }
// }
// const mapNums=(nums)=>{
//   let temp=new Map();
//   nums.forEach((num,ind)=>{
//     temp.set(ind,num)
//   })
//   return temp
// }
// var twoSum = function(nums, target) {
//   const maps=mapNums(nums);
//   //Remove Any Value that is not Workable
//   maps.forEach((value,key,map)=>{
//     if(value>target&&value<0&&target>0){maps.delete(key)}
//   })
//   const result=calculation(maps,target)
//
//   return result
// };
//
//
//
