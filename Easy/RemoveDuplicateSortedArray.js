const nums = [0,0,1,1,1,2,2,3,3,4]
//Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]

// const nums = [1,1,2]
//Output: 2, nums = [1,2,_]

const calculate=()=>{
  const expected=[];
  nums.forEach((val,index)=>{
    const truth=expected.includes(val)
    if(!truth){
      expected.push(val)
    }
  })
  return expected
}

const result=calculate()
console.log("Output: "+result.length+', nums='+[result])

//Answer
///**
//  * @param {number[]} nums
//  * @return {number}
//  */
// const removeDuplicates=(nums)=>{
// let expectedNums=[]
//  nums.forEach((val,index)=>{
//     const truth=expectedNums.includes(val)
//     if(!truth){
//       expectedNums.push(val)
//     }
//
//   })
//     for(let i = 0; i < nums.length; i++){
//     nums[i]=expectedNums[i]
//     }
//    return expectedNums.length
//
// }
