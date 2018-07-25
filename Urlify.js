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
// let str = 'Battle of the Vowels: Hawaii vs. Grozny';
// let charToRemove = 'aeiou';

// function removeChar(str,charToRemove){
//   let newStr = '';
//   let found = false;
//   for(let i= 0; i< str.length;i++){
//     for(let j=0;j< charToRemove.length;j++){
//       if(str[i] === charToRemove[j]){             
//         found = true;        
//       }
//     }    
//     if(found === false){
//       newStr += str[i];      
//     }
//     found = false;
//   }    
//   console.log(newStr);
// }
// removeChar(str.toLowerCase(),charToRemove);

/************************************************** */

// let input = [1,3,9,4];
// function product(input){
//   let output = [1,1,1,1];
//   for(let i=0; i< input.length;i++){    
//     for(let j=0; j< input.length;j++){
//       if(i !== j){
//         output[i] = output[i] * input[j];
//       }
//     } 
//   }
//   console.log(output);
// }
// product(input);

/************************************************** */

// Pcik which ith and jth column would be made zero
let input = [[1,0,1,1,0],
  [0,1,1,1,0],
  [1,1,1,1,1],
  [1,0,1,1,1],
  [1,1,1,1,1]];
let ith =[];
let jth =[];
let output = [];

for(let i=0; i<input.length; i++){  
  output.push([...input[i]]);
  for(let j=0;j< input[i].length;j++){    
    if(input[i][j] === 0){
      ith.push(i);
      jth.push(j);
    }       
  }
}
//console.log(ith,jth);
console.log(output);
for( let i=0; i< ith.length; i++){
  for(let j=0; j< jth.length;j++){
    if(ith.includes(i) || jth.includes(j)){
      output[i][j] = 0;
    }else{
      output[i][j] = 1;
    }
  }
}

console.log(output);