
function addition(a,b){
    return a+b;
}

const subtraction = (a,b) => {
    return a-b;
}

function divide(a,b){
    if(b===0){
        throw new Error("Operator module says: Trying to divide by 0")
    }
    return a/b;
}

module.exports={
    addition, subtraction, divide
};