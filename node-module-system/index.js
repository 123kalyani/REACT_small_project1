
const operatorModule = require('./operator-module');

console.log("addition of a & b: ", operatorModule.addition(12, 12));
console.log("addition of a & b: ", operatorModule.subtraction(12, 12));

try{
    let result = operatorModule.divide(12,0);
    console.log("result of divide is: ",result);
    
}catch(error){

    console.log("caught an error: ", error.message);
    
}
