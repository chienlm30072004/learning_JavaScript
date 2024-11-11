//demo type of loop (forech,every,some,find,filter,map,reduce)
var arr = [
  {id:1,name: 'Css',price:100},
  {id:2,name: 'JavaScript',price:200},
  {id:3,name: 'java',price:0},
  {id:2,name: 'JavaScript',price:200}
];
//for each
arr.forEach(function(arrs,index){
  console.log(index,arrs);
});
//every will return boolean type and if one of values is not specified it will return false
var isfree = arr.every(function(arrs,index){
  //if all courses have values === 0 it will return false
return arr.price===0 ;
});
console.log(isfree ? 'không có khóa nào free' :'Hình như có khóa học free');

console.log('=======================================================');
//find will return only one course
  var findsomething = arr.find(function(arrs,index){
      return arrs.name==='JavaScript' ;
    });
console.log(findsomething);

console.log('=======================================================');
//filter will return All element with values you want to filter
  var listArr = arr.filter(function(arrs,index){
      return arrs.name==='JavaScript' ;
    });
console.log(listArr);

//homework with fiter
console.log('======================================================');
const games = [
  { name: 'Cầu lông', participants: 2 },
  { name: 'Bóng chuyền', participants: 6 },
  { name: 'Quần vợt', participants: 2 },
  { name: 'Bóng rổ', participants: 5 },
  { name: 'Bóng đá', participants: 11 }
];
function getTeamSports(arr){
  var loop = arr.filter(function(arr){
    return arr.participants>5;
  });
  return loop;
}
getTeamSports(games);
console.log('==================================================================');
//map
var newconcerts = games.map(function(arr){
  return {
    name: `Chơi ${arr.name}`,
  } ;
});
console.log(newconcerts)


