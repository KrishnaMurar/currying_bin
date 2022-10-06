var Student = {age:20};



var detail = function(){

 console.log('age = '+this.age);

}



var bound = detail.bind(Student);

bound()