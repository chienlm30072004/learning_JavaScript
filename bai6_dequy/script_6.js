function countdown(num) {
  if (num > 0) {
    console.log(num);
    return countdown(num - 1);
  }
  return num;
}
console.log(countdown(5));
console.log('============================================================')
//example about recursion
function countsomething(start,end,rb) {
if(start<=end) {
    rb(start);
    return countsomething(start+1,end,rb);
}
}
var arr = ['Jan', 'Feb', 'Mar'];
countsomething(0,arr.length - 1,function(index){
console.log(arr[index]);
});
//sol-problem by loop
function loop(number){
  count=1;
  for(var i =number;i>0;i--){
    count = count * i;
  }
  return count;
}
console.log(loop(5));
console.log('============================================================');
//sol-problem by recursion
 function recursion(number){
  if(number > 0){
    return number * recursion(number-1);
  }
  return 1;
 }
 console.log(recursion(5));