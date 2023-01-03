
// const score = [10,3,8,9,4]
const score = [5,4,3,2,1]
const findRelativeRanks =(score)=>  {
  const mapScore={
    1:"Gold Medal",
    2:"Silver Medal",
    3:"Bronze Medal"
  }

  score.forEach((v,i)=>{
    if(mapScore.includes(v))score[i]=mapScore
  })
  return result
};

const result = findRelativeRanks(score);
console.log(result);
