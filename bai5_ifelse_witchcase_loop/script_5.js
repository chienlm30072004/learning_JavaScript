var array = [2,3,4,5,6,7,8];
function takeday(x){
    return x[Math.floor(Math.random() * array.length)];
}
if(takeday(array)===2){
    console.log("Là thứ 2");
}else if(takeday(array)===3){
    console.log("Là thứ 3");
}else if(takeday(array)===4){
    console.log("Là thứ 4");
}else if(takeday(array)===5){
    console.log("Là thứ 5");
}else if(takeday(array)===6){
    console.log("Là thứ 6");
}else if(takeday(array)===7){
    console.log("Là thứ 7");
}else {
console.log("Là Chủ Nhật");
}
//toán tử 3 ngôi
function register(age) {
    return age>=18? 'Bạn có thể bỏ phiếu' : 'Bạn chưa được bỏ phiếu';
}
console.log(register(17));
//for loop
//tạo là 1 khoảng random max và min
function ran(min, max,length) {
    var rand = [];
    for(var i=0;i<length;i++) {
    var a = Math.floor(Math.random()*(max-min)+min);
    rand.push(a);
    }
    return rand;
}
console.log(ran(1,10,5));
console.log('----------------------------------------------------------------');
//tính tổng mảng
function getsomthing(arr) {
    var result = 0;
    for (var i = 0; i < arr.length; i++) {
        result += arr[i];
    }
    return result;
}
console.log(getsomthing([1, 2, 3, 4])); // Kết quả sẽ là 10

console.log('--------------------------------------------------------------------');
//lấy price và cộng lại ----------------------------------
var orders1 = [
    {
        name: 'Khóa học HTML - CSS Pro',
        price: 3000000
    },
    {
        name: 'Khóa học Javascript Pro',
        price: 2500000
    },
    {
        name: 'Khóa học React Pro',
        price: 3200000
    }
]
function getTotal2(le){
    var result=0;
    for(var i = 0;i<le.length;i++){
        result += le[i].price;
    }
    return result;
}
console.log(getTotal2(orders1))
//for in json
console.log('--------------------------------------------------');
var object1 =
    {
    name: 'Nguyễn Tài',
    age: 18,
    job:'Student'
    }
for(var key in object1){
    console.log(object1[key]);
}
console.log('------------------------------------------------');
//key of array
var array1 = ['javascript', 'java','php'];
for(var key in array1){
    console.log(array1[key]);
}
//homework
function run(object) {
    var arr = [];
    for(var key in object){
arr.push(`Thuộc tính ${key} có giá trị ${object[key]}`);
    }
    return arr;
}

// Expected results:
console.log(run({ name: 'Nguyen Van A', age: 16 }));
// Output:
// [
//     "Thuộc tính name có giá trị Nguyen Van A",
//     "Thuộc tính age có giá trị 16"
// ]
console.log('================================================================')
//for/of loop with array
var orders2 = [
    {
        name: 'Khóa học HTML - CSS Pro',
        price: 3000000
    },
    {
        name: 'Khóa học Javascript Pro',
        price: 2500000
    },
    {
        name: 'Khóa học React Pro',
        price: 3200000
    }
]
for(var value of orders2) {
    console.log(value);
}
//for/of loop with object
var object2={
    name:'tò thị te',
    age : 17
 }

 for(var value of Object.keys(object2)) {
    console.log(object2[value]);
 }
 //while loop
 var numm = 0;
 while(numm < orders2.length) {
    console.log(orders2[numm]);
    numm ++;
 }
 console.log("================================================================")
 //do while loop kiểm tra đầu kiện sauu khi lập 1 lần
 var num2 = 0;
 do{
    console.log(orders2[num2]);
    num2++;
 }while(num2 <orders2.length);
// example about do while loop
// var i =0;
// var status = false;
// do{
// console.log("lần nạp thứ " ,i);
// i++;
// status = true;
// }while(status==true);

//use break and continue in loop to stop the loop
for(var i = 0 ; i < 10; i++) {
    if(i%2==0){
        continue;
    }else{
        console.log(i);
    }
}
//nested loop lặp lồng nhau
var mang = [
    [1,2],
    [3,4],
    [5,6]
]
for(var i=0;i<mang.length;i++){
    for(var j =0;j<mang[i].length;j++){
        console.log(mang[i][j]);
        console.log('ngắt');
    }
}
console.log('================================================================');
//lặp ngược
for(var i=30;i>0;i-=5){
    console.log(i);
}
console.log('================================================================');
//không đọc những phần tử giống nhau
//example ... để bỏ 1 kí tự
var arr1 = [1,2,3,1,2,3,1,2,3];
console.log([...(new Set(arr1))]);
