function sumArray(numberArray){
    return numberArray.reduce((a,c)=>a+c,0);
}

module.exports.sumArray = sumArray;