//test return
var isComfirm = confirm('Are you sure you want to accept this');
if (isComfirm) {
console.log('you are beautiful');
}else{
    console.log('you also are beautiful');
}
//1.Declaration function có thể gọi trước khi định nghĩa
function showMessage(){}
//2.Expression function không thể gọi trước khi định nghĩa
//type one
var fuc = function showExpression(){};
//type two
setTimeout(function showtimeup(){ });
//type three
var myObject = {
    myfunction: function showtimeout(){

    }
};
//----------------------------------------------------------------
//scanf + count +find + cut +change +uppercase +trim(bỏ khoảng trống)+Split()
var fullname = 'i will do something \"awwww\"  js js js\\                 ';
//count
console.log(fullname.length);
//find 
console.log(fullname.indexOf('w',5));
//search
console.log(fullname.search('w'));
//cut
console.log(fullname.slice(0))
//change
console.log(fullname.replace(/js/g,'JavaScript'));
//upper
console.log(fullname.toUpperCase());
//drop space
console.log(fullname.trim().length);
//Split()filter to add array
var languages = 'PHP,Java,JavaScript';
console.log(languages.split(','))
//get character by index
const fullname2 = 'Minh Chiến';

console.log(fullname2.charAt(2));
//----------------------------------------------------------------
//

