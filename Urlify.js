'use strict';

let arr = [];
let str = 'tauhida parveen';
for(let i = 0; i < str.length ; i++ ){      
  if(str.substring(i,i+1) === ' '){
    arr.push('%20');
  }else{
    arr.push(str.substring(i,i+1));
  }  
}
console.log(arr.join(''));

let arrOfNumber = [2,45,60,90,3,1,0,6,-1,5];
(function (arrOfNumber){
  let arr = [];
  for(let i =0,val = 5; i< arrOfNumber.length; i++){
    if(arrOfNumber[i] >= val){
      arr.push(arrOfNumber[i]);
    }
  }
  console.log(arr);
})(arrOfNumber);
