// const root = [1,2,2,3,4,4,3]
const root = [1,2,2,null,3,null,3]
var isSymmetric = function(root) {
  let que = new Array();

  if(root==null)
    return true;


  que.push(root.left);
  que.push(root.right);
  let l,r;
  while(que.length>0){
    l=que.shift();
    r=que.pop();
    if(l==null&&r==null)
      continue;
    if(l==null||r==null)
      return false;
    if(l.val!=r.val)
      return false;
    que.unshift(l.right);
    que.unshift(l.left);
    que.push(r.left);
    que.push(r.right);
  }
  return true;
};

const result = isSymmetric(root);
console.log(result);
