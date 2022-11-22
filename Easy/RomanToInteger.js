// Input: x = 121
// Output: true
const s = "MCMXCIV";
// const s = "MCMXCIV";
//Output=1994
const map = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
  IV:-2,
  IX:-2,
  XL:-20,
  XC:-20,
  CD:-200,
  CM:-200,
};
const romanToInt = (s) => {
  const t = [...s];
  let result=0;
  t.forEach((v,i)=>{
    result=map[v]+result
    if(map[v+t[i+1]]!==undefined){
      console.log(v+t[i+1]+": "+map[v+t[i+1]])
      result=result+map[v+t[i+1]]
    }
  })
  return result

};
const result = romanToInt(s);
console.log(result);

