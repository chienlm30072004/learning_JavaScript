
// //----------------------------------------------------------------
// var languages2 = ['javascript', 'Java','php'];
// //drop []
// console.log(languages2.toString());
// //drop elements last array
// console.log(languages2.pop());
// //Array accept all elements
// var languages = [];
// for (var i = 1; i <= 5; i++){
//     //push elements into languages arrayy
//     languages.push(i);
// }
// console.log(languages);
//----------------------------------------------------------------
// function joinWithCharacter(array, charactor) {
// return array.join(charactor);
// }  
    
//     // Ví dụ khi sử dụng
//     var cars = ['Honda', 'Mazda', 'Mercedes'];
    
//     var result = joinWithCharacter(cars, ' - ');
    
//     console.log(result); // Expected: "Honda - Mazda - Mercedes
//----------------------------------------------------------------
//lấy ra phần tử đầu tiên
function getLastElement(x){
    return x[0];
    
}
// Ví dụ sử dụng
var animals = ['Monkey', 'Tiger', 'Elephant'];
var result = getLastElement(animals);
console.log(result); // Expected: "Elephant"
console.log(animals); // Expected: ['Monkey', 'Tiger', 'Elephant']
//lấy phần tử cuối cùng

function getLastElement(x){
    return x[x.length-1];
    
}
// Ví dụ sử dụng
var animals = ['Monkey', 'Tiger', 'Elephant'];
var result = getLastElement(animals);

console.log(result); // Expected: "Elephant"
console.log(animals); // Expected: ['Monkey', 'Tiger', 'Elephant']

