function countdown(num) {
  if (num > 0) {
    console.log(num);
    return countdown(num - 1);
  }
  return num;
}
console.log(countdown(5));
console.log('============================================================')
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