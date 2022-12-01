const sentences = ["alice and bob love leetcode", "i think so too", "this is great thanks very much"]

const mostWordsFound=(sentences)=>{
  let max=0
  for(let i=0;i<sentences.length;i++){
    const counter=sentences[i].split(' ').length
    if(counter>max) max=counter
  }
  return max
}
const result = mostWordsFound(sentences);
console.log(result);
