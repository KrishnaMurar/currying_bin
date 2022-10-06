var obj = {name:'Krishna'};



var detail = function(x,y){

 console.log(x+y+this.name);

}



var bound = detail.bind(obj);

bound('Good_Name= ','Dashing hero ')