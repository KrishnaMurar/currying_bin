let multiply = function(x){
    return function(y){
    console.log(x*y);
}
}

let multiplyByThree = multiply(3);
multiplyByThree(8);
