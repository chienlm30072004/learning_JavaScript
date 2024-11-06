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
//for in ---------------------
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