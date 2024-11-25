//javascript :browser | server (nodejs)
//browser : HTML -> DOM -> WEB API
//DOM IS WEB API 
//document is main of the web site
//Element ,Attribute,Text   All Attribute and Text also born from Element 
//can get element by id,class,tag,css selector,html collection 
//get element by id use to get or chang data of dom ...
//get element by name it the same with get element by id, but get by class name
var changText =document.getElementById('first');
console.log([changText]);
//get element by tagname use to get element of data card
var changTag =document.getElementsByTagName('h1')[0];
console.log([changTag]);
//get element by query and take element folow number of element
//use to take all element  it will return NodeList of elements
//type 1
var changquerySelector =document.querySelector('.div2 .header2:nth-child(2)');
console.log(changquerySelector);
console.log('----------------------------------------------------');
//type 2
var changquerySelector2 = document.querySelectorAll('.div2 .header2');
console.log(changquerySelector2[0]);
//homework 
console.log('----------------------------------------------------');
//take all elements in first dom card
var productsListElement = document.querySelector('.products-list');
console.log(productsListElement);
//take first element in dom card
var firstProductElement = document.querySelector('.product');
console.log(firstProductElement);
//take all button card in dom card
var buttonElements = document.querySelectorAll('button');
console.log(buttonElements);   
console.log('----------------------------------------------------================================');
//take element lie deep in the DOM card
var takeLi =document.querySelector('.box-1 .box-1-1 ul h1');
console.log(takeLi);
