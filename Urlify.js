'use strict';

// let arr = [];
// let str = 'tauhida parveen';
// for(let i = 0; i < str.length ; i++ ){      
//   if(str.substring(i,i+1) === ' '){
//     arr.push('%20');
//   }else{
//     arr.push(str.substring(i,i+1));
//   }  
// }
// console.log(arr.join(''));
// /************************************************** */

// let arrOfNumber = [2,45,60,90,3,1,0,6,-1,5];
// (function (arrOfNumber){
//   let arr = [];
//   for(let i =0,val = 5; i< arrOfNumber.length; i++){
//     if(arrOfNumber[i] >= val){
//       arr.push(arrOfNumber[i]);
//     }
//   }
//   console.log(arr);
// })(arrOfNumber);
// /************************************************** */
// let arr1 = [1,3,6,8,11];
// let arr2 = [2,3,5,8,9,10];

// function mergeArray(arr1,arr2){
//   let len = arr1.length + arr2.length;
//   let arrMerge = [];
//   for(let i=0,index1=0,index2=0; i < len ; i++){
//     if(arr1[index1] && arr2[index2]){
//       if(arr1[index1] < arr2[index2]){      
//         arrMerge.push(arr1[index1]);
//         index1++; 
//       }else {
//         arrMerge.push(arr2[index2]);
//         index2++;
//       }    
//     }else if(arr1[index1] === undefined){
//       arrMerge.push(arr2[index2]);
//       index2++;
//     }else if(arr2[index2] === undefined){
//       arrMerge.push(arr1[index1]);
//       index1++; 
//     }
//   }
//   console.log(arrMerge);
// }

// mergeArray(arr1,arr2);
/************************************************** */
let str = 'Battle of the Vowels: Hawaii vs. Grozny';
let charToRemove = {a: 'a',e: 'e',i: 'i',o: 'o',u: 'u'};

function removeChar(str,charToRemove){
  let newArr =[];
  for(let i= 0; i< str.length;i++){
    if(!(str.substring(i,i+1) in charToRemove)){     
      newArr.push(str.substring(i,i+1));
    }
  }  
  console.log(newArr.join(''));
}
removeChar(str,charToRemove);