var obj = {name:'Krishna'};



var detail = function(x,y){

 console.log(x+y+this.name);

}



detail.apply(obj,['Good_Name= ','Dashing ']);