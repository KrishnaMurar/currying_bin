var obj = {name:'Krishna'};



var detail = function(x){

 console.log(x+this.name);

}



detail.call(obj,'Good_Name= ');