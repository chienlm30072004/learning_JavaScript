// function isNumber(value){
//     var check ;
//     if(typeof value === 'number' && !isNaN(value)){
//         check =true;
//     }else{
//         check=false;
//     }
//     return check;
// }
// // Expected results:
// console.log(isNumber(999)); 
// console.log(isNumber('abc')); 
// console.log(isNumber('100')); 
function isNumber(value){
    var check;
    if(typeof value === 'number' && !isNaN(value)){
        check = true;
    }else if(typeof value === NaN){
        false
    }else{
        check = false;
    }
    return check;
}
// Expected results:
console.log(isNumber(999)); // true
console.log(isNumber('abc')); // false
console.log(isNumber('100')); // false
console.log(isNumber(NaN)); // false
console.log(isNumber(100 / 'abc')); // false