const nums = [3, 2, 2, 3], val = 3;
// const list1 = [], list2 = []
// const list1 = [], list2 = [0]
const removeElement = (nums, val) => {
  if(nums.length<1)return 0
  let expectedNums = [];
  nums.forEach(e => {if (e !== val) expectedNums.push(e);});

  for (let i = 0; i < nums.length; i++) {
    nums[i] = expectedNums[i];
  }
  return expectedNums.length;
};
const result = removeElement(nums, val);
console.log(result);
