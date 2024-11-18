//includes method
//find in String by includes method 
//examle with String by excludes method
var title = 'Developer Web';
console.log(title.includes('Web'));
//examle with Array by excludes method
var cars = ['Rolls-Royce', 'Mercedes', 'Lexus', 'BMW', 'Audi'];

function checkCar(cars) {
   return cars.includes('Mercedes', 2);
}
console.log(checkCar(cars));
//work with callback()
// Expected results
// caculate(1, 2, sumCb) // Output: 3
// caculate(1, 2, subCb) // Output: -1
// caculate(1, 2, multiCb) // Output: 2
// caculate(3, 1, divCb) // Output: 3
function sumCb(a, b) {
    return a+b;
}
function subCb(a,b){
    return a-b;
}
function multiCb(a,b){
return b*a;
}
function divCb(a,b){
return a/b;
}
function caculate(a, b, cb) {
    return cb(a, b);
}
//work with callback() part 2
//create new a function map2
Array.prototype.map2 = function(callback){
    var Output=[]; 
    if(typeof callback === 'function'){
    for(var i=0; i<this.length;i++){
      var result = callback(this[i],i);
      Output.push(result);
    }
    return Output;
}else{
    return;
}
}
var htmls =cars.map2(function(car){
return `<h2>${car}</h2>`;
});
console.log(htmls);
console.log('=============================================================');
//use forech,find,filter,some,every,reduce
var courses = ['Javascript', 'PHP','Java'];
//create new a function forech to know how to foreach working 
Array.prototype.forEach2 = function(callback){
 //for in duyệt hết các elements 
 for(var index in this){   
    if(this.hasOwnProperty(index)){   
        // console.log('index: ' ,index);
        callback(this[index],index,this);
        }
    }
}
courses.forEach2(function(course,index,array){
console.log(course,index,array);
});
console.log('============================================================');
//create new a filter method 

var languages2 = [
    {
        name :'English',
        price: 200,
        isFinish: false,
    },
    {
        name :'Japanese',
        price: 300,
        isFinish: false

    },
    {
        name :'Franch',
        price: 400,
        isFinish: true

    },
];
Array.prototype.filter2 = function(callback){
    var Output = [];
    for(var index in this){
        if(this.hasOwnProperty(index)){
          var result =  callback(this[index],index,this);
          if(result){
         Output.push(this[index]);
          }
        }
    }
    return Output;
}
var testfilter2 = languages2.filter2(function(course,index,array){
    console.log(course,index,array);
    return course.price > 200;
});
console.log(testfilter2);
//create a new some method
Array.prototype.some2 = function(callback){
    for(var index in this){
        if(this.hasOwnProperty(index)){
            if(callback(this[index],index,this)){
            return true;
        }
    }
    }
    return false;
}
var testsome2 = languages2.some2(function(course){
    return course.isFinish;
});

console.log(testsome2);
console.log('================================================================');
//create a new every method
Array.prototype.every2 = function(callback){
    var results = true;
    for(var index in this){
        if(this.hasOwnProperty(index)){
            var resu = callback(this[index],index,this);
            if(!resu){    
            results= false;
            break;
            }
        }
    }
    return results;

}
var testevery = languages2.every2(function(course){
    return course.price>100;
});
console.log(testevery);