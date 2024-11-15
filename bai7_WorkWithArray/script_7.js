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
console.log('================================================================');
var total=0;
for(var key of games){
  total += key.participants;
}
console.log(total);
console.log('================================================================');
//map will loop along each element in the array
var a=1;
function dosomething(arr){
var func = arr.map(function(arr){
  console.log('lần thứ :',a);
  a+=1;
  return {
    name :`Chơi ${arr.name}`,
    participants: `Người tham gia ${arr.participants}`,
   }
})
return func;
}
console.log(dosomething(games));
console.log('================================================================');
//sol-problem by redure 
//always use function first element and second is element number for reduce if not will wrong   
//reduce(accumulator,currentValue,Currentindex,originalArray)
//1 how to reduce total number of elements 
function reducee(accumulator,currentValue){
 return accumulator+= currentValue.participants;
}
var totalpa = games.reduce(reducee, 0);
console.log(totalpa);

//2 how to reduce total number of elements 
var i=0;
var totalparticipants = games.reduce(function(total,game){
  i++;
  console.log('Lần chạy thứ ',i,total,game);
return total+= game.participants;
},0); //initial value
console.log(totalparticipants);
console.log('======================================================');
//
var numbers = [2,6,2,5,11];
var totalnumber = numbers.reduce(function(total,number){
  return total+=number;
},0);
console.log(totalnumber);
console.log('======================================================');
//
//làm phẳng mảng
var deepArray = [1,2,[3,4],5,6,[7,8,9]];
var flatArray = deepArray.reduce(function(flatoutput,devitem){
  return flatoutput.concat(devitem);
},[]);
console.log(flatArray);
console.log('======================================================');
var newtopics = [
  {
    topics:"front-end",
    courses:[
      {
        id:1,
        title:"HTML,CSS"
      },
      {
        id: 2,
        title:"JavaScript"
      }
    ]

  },
  {
    topic:"Backend",
    courses:[
    {
      id :1,
      title:"Java"
    },
    {
      id:2,
      title:"PHP"
    }
    ]
  }
];
var useconcat = newtopics.reduce(function(index,end){
  return index.concat(end.courses);
},[]);
console.log(useconcat);
//use map to load data on html
var mapdata = useconcat.map(function(tp){
  return `
  <div>
  <h2>Ngôn Ngữ :${tp.title}</h2>
  <p>ID: ${tp.id}</p>
  </div>
  `;
});
console.log(mapdata.join(' '));
console.log('homework================================================================');
var watchList = [
  {
    "Title": "Inception",
    "Year": "2010",
    "Rated": "PG-13",
    "Released": "16 Jul 2010",
    "Runtime": "148 min",
    "Genre": "Action, Adventure, Crime",
    "Director": "Christopher Nolan",
    "Writer": "Christopher Nolan",
    "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
    "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
    "Language": "English, Japanese, French",
    "Country": "USA, UK",
    "imdbRating": "8.8",
    "imdbVotes": "1,446,708",
    "imdbID": "tt1375666",
    "Type": "movie",
  },
  {
    "Title": "Interstellar",
    "Year": "2014",
    "Rated": "PG-13",
    "Released": "07 Nov 2014",
    "Runtime": "169 min",
    "Genre": "Adventure, Drama, Sci-Fi",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan, Christopher Nolan",
    "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
    "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    "Language": "English",
    "Country": "USA, UK",
    "imdbRating": "8.6",
    "imdbVotes": "910,366",
    "imdbID": "tt0816692",
    "Type": "movie",
  },
  {
    "Title": "The Dark Knight",
    "Year": "2008",
    "Rated": "PG-13",
    "Released": "18 Jul 2008",
    "Runtime": "152 min",
    "Genre": "Action, Adventure, Crime",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
    "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
    "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
    "Language": "English, Mandarin",
    "Country": "USA, UK",
    "imdbRating": "9.0",
    "imdbVotes": "1,652,832",
    "imdbID": "tt0468569",
    "Type": "movie",
  },
  {
    "Title": "Batman Begins",
    "Year": "2005",
    "Rated": "PG-13",
    "Released": "15 Jun 2005",
    "Runtime": "140 min",
    "Genre": "Action, Adventure",
    "Director": "Christopher Nolan",
    "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
    "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
    "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
    "Language": "English, Urdu, Mandarin",
    "Country": "USA, UK",
    "imdbRating": "8.3",
    "imdbVotes": "972,584",
    "imdbID": "tt0372784",
    "Type": "movie",
  },
  {
    "Title": "Avatar",
    "Year": "2009",
    "Rated": "PG-13",
    "Released": "18 Dec 2009",
    "Runtime": "162 min",
    "Genre": "Action, Adventure, Fantasy",
    "Director": "James Cameron",
    "Writer": "James Cameron",
    "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
    "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    "Language": "English, Spanish",
    "Country": "USA, UK",
    "imdbRating": "7.9",
    "imdbVotes": "876,575",
    "imdbID": "tt0499549",
    "Type": "movie",
  }
];
//find name is Christopher Nolan and averager raiting of it
function gettotalpoint(arr){
const filterName = arr.filter((movie)=>movie.Director == "Christopher Nolan");
const totalOfRaiting = filterName.reduce((totalnumbers,movie)=>totalnumbers + parseFloat(movie.imdbRating),0) ;
const averagePoints = filterName.length > 0 ? totalOfRaiting / filterName.length :0;
return averagePoints;
}
// Expected results
console.log(gettotalpoint(watchList)); // Output: 8.675
console.log('=============================  ===============================');
//nếu không dùng giá trị khởi tạo cho reduce nó sẽ tự lấy giá trị và thứ tự trong mảng  
const numbers2 = [1,2,3,4,5];
var i2=0;
//how to create a reduce 
//example
//
//array.prototype là tất cả các array đều dùng được hàm này
//luôn có 2 tham số là hàm được gọi lại và giá trị khởi tạo cho quá trinh tình toán
Array.prototype.reduce2 = function(callback,initialValue,index,array){
  var i=0;
  if(arguments.length<2){
    i=1;
    initialValue=this[0];
  }
  for(;i<this.length;i++){
    initialValue = callback(initialValue,this[i],i,this);
    console.log('tổng :',initialValue,'số của phần tử hiện tại :',this[i],'vị trí hiện tại của mảng :',i,'chính mảng đang được xử lý :',this);
  }
  return initialValue;
  }
  //sử dung hàm tự tạo
var totalOfNumbers2 = numbers2.reduce2((total,num)=>{
  i2++;
  // console.log('lần thứ :',i2,'Tổng :',total,'Số đang lặp tới là :',num);
  return total+num},0);
console.log(totalOfNumbers2);
console.log('==================================================================');
var arr = [
  ['name', 'Sơn Đặng'],
  ['age', 18],
];
function arrToObj(arr){
  var arrdefault=[];
  for(var i=0;i<arr.length;i++){
      arrdefault.push(arr[i]);
  }
  return arrdefault;
}
console.log(arrToObj(arr)); 






