// const head = [1,2,3,4,5,6]
// const s = "tree"
// const s = "cccaaa"
const s = "Aabb"

const frequencySort =(s)=>  {
  const arr=[...s]
  const freq={}
  for(let i=0;i<arr.length;i++){
    if(!freq[arr[i]])freq[arr[i]]=1
    else{
      freq[arr[i]]=freq[arr[i]]+1
    }
  }
  let final=[]
  const res= Object.entries(freq).sort(([,a],[,b]) => b-a)
  for(let i=0;i<res.length;i++){
    for(let j=0;j<res[i][1];j++){
      final.push(res[i][0])
    }
  }
  return final.join('')
};

const result = frequencySort(s);
console.log(result);
