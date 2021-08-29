'use strict';
let arr = [];
let num = 0;
function pushElement() {
  num = num + 1;
  arr.push(num);
  console.log(arr);
 
}
function popElement(){
    num=num-1;
    arr.pop(num);
    console.log(arr);
   
}