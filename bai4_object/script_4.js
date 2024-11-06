var gmail = 'gmail';
var student = {
name: 'Trần hảo',
age :20,
[gmail]:'lele@gmai;.com'
}
student.name = 'Hảo hán';
var mykey = 'name';
console.log(student[mykey]);
console.log('--------------------------------------------------')
//object constructor
function people(age,name,job){
    this.age = age;
    this.name = name;
    this.job = job;
}
//----------------------------------------------------------------
//addional className in constructor 
people.prototype.className = 'positions';
people.prototype.getName = function(){
    return this.name + " "+ this.job
}
console.log('--------------------------------------------------');
var people = new people(22,'đặng','student');
console.log(people,people.getName());
console.log(people.getName());
console.log('--------------------------------------------------');
//Object Date
var date = new Date();
console.log(date);
var year = date.getFullYear();
var day = date.getDay();
console.log(day+'\/'+year);
console.log('-----------------------------------------------');
function getNextYear(){
    var date = new Date();
    //return next year
    return date.getFullYear()+1;
};
console.log(getNextYear());
//---------------------------------------------------------
console.log('-----------------------------------------------');
//math object
//Pi
console.log(Math.PI);
//round làm tròn
console.log(Math.round(Math.PI));
//Giá trị tuyệt đối
console.log(Math.abs(-4));
//làm tròn trên
console.log(Math.ceil(Math.PI));
//làm tròn dưới
console.log(Math.floor(Math.PI));
//số ngẫu nhiên
console.log(Math.random());
//examples
var ranvalue =Math.floor(Math.random()*5);
var random = ["10 coins","20 coins","30 coins","40 coins","50 coins"];
console.log(random[ranvalue]);
console.log('-----------------------------------------------');
//random in gamem
var ranvalue = Math.floor(Math.random()*100);
if(ranvalue<5){
    console.log('Nâng Cấp Thành Công');
}
//
var array=[1,2,3,4,5,6,7,8,9];
function getRandomItem(array){
    return array[Math.floor(Math.random()*array.length)];
}
console.log(getRandomItem(array));