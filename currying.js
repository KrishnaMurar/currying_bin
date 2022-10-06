let multiply = function(x,y){
    console.log(x*y);
}

let multiplyByThree = multiply.bind(this,3);
multiplyByThree(5);
