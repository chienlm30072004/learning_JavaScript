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
    rand.push(rand);
    }
    return rand;
}
console.log(ran(1,10,5));