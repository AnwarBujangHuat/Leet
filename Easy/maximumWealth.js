const accounts = [[1,5],[7,3],[3,5]]

const maximumWealth=(accounts)=>{
  let wealth=0
  for(let i=0;i<accounts.length;i++){
    const current=accounts[i].reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    if(current>wealth){
      wealth=current
    }
  }
  return wealth;
}
const result = maximumWealth(accounts);
console.log(result);
