function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
       this.right = (right===undefined ? null : right)
        }
const sortedArrayToBST = (nums) => {
    if (nums.length === 0) {
        return null;
    }
    let middle = Math.floor(nums.length / 2);
    let root = new TreeNode(nums[middle]);
    root.left = sortedArrayToBST(nums.slice(0, middle));
    root.right = sortedArrayToBST(nums.slice(middle + 1));
    return root;
};
const nums=[-10,-3,0,5,9]
console.log(sortedArrayToBST(nums))