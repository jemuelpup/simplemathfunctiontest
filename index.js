const sumArray = (numberArray) => numberArray.reduce((a,c)=>a+c,0);
const aveArray = (numberArray) => numberArray.reduce((a,c)=>a+c,0)/numberArray.length;
module.exports = {sumArray,aveArray}
