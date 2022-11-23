
// const s='{)'
// const s="{[]}"
const s="()[]{}"
// const s='{}'
// const s='[]'
// const s='()'
const isValid = (s) => {
  const result=true;
  const temp=[...s]
  const validAnswers=['{}','[]','()']
  const stack=[temp[0]]
  const opening=[]
  const closing=[]
  const validOpening=['{','[','(']
  // const validClosing=['}',']',')']
  for(let i=0;i<temp.length;i++){
    if(validOpening.includes(temp[i])){
      opening.push(temp[i])
    }
    else(!validAnswers.includes(opening[opening.length-1]+temp[i]))
    {console.log(opening[opening.length-1]+temp[i])}
  }
 return result;
};


const result = isValid(s);
console.log(result);
