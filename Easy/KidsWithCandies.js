const candies = [2,3,5,1,3], extraCandies = 3
// const candies = [4,2,1,1,2], extraCandies = 1
// const candies = [12,1,12], extraCandies = 10

const kidsWithCandies=(candies, extraCandies)=>{
  const result=[]
  let highCandies=0;
  for(let i=0;i<candies.length;i++){
    if(candies[i]>highCandies) {
      highCandies=candies[i]
      break;
    }
  }
  candies.forEach((v)=>{result.push((v+extraCandies)>=highCandies)})
  return result
}

const result = kidsWithCandies(candies, extraCandies);
console.log(result);
