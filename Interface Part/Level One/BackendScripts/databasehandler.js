
function snapshotToArray(snapshot) {
  var returnArr = [];

  snapshot.forEach(function(childSnapshot) {
      var item = childSnapshot.val();
      item.key = childSnapshot.key;

      returnArr.push(item);
  });

  return returnArr;
};
// *** DataBase Intializer ***
// ** Variables for the Database  ** //
var UserKey; 
var ListOfProblems; 
var UserProfile ; 

var config = {
    apiKey: "AIzaSyA0TxMMP_jDabR1MA9X-ccKV8I5FPGoQi8",
    authDomain: "tanksalgo.firebaseapp.com",
    databaseURL: "https://tanksalgo.firebaseio.com",
    projectId: "tanksalgo",
    storageBucket: "tanksalgo.appspot.com",
    messagingSenderId: "848660948616"
  };
  firebase.initializeApp(config);

  var key; 
  var temp; 
  
  var database = firebase.database(); 

  var ref = database.ref("Problems"); 

  function returnAllProblems()
  {
    ref.once("value", function(snapshot) {
      console.log(snapshot.val());
      return snapshot.val(); 
    })
    
  }

function LimitBy(value)
{
    ref.orderByValue().limitToFirst(value).on("child_added", function(snapshot) {
      console.log(snapshot.val());
    });
  }
  
function QueryByAndWhat(attribute , value , type)
{
  ref.orderByChild(attribute).equalTo(value).once("value" , snapshot =>{
   // console.log( snapshot.val()); 
   if (type=="Users")
   {
     // user
     UserData = snapshot.val(); 
   }
   else if (type=="Problems")
   {
     // problems
   }
    //return snapshot.val(); 
  })
}
// test for the link
// TODO:  retrive all problems in a function 
// retrive user score , name
// 
UserKey = window.location.search; 
UserKey = UserKey.substring(6); 

ref = database.ref("Users");
QueryByAndWhat("UserKey" , UserKey , "Users");

ref=database.ref("Problems"); 
ref.orderByValue().once("value" , function(snapshot)
{
ListOfProblems= snapshotToArray(snapshot);
});
// random question fetching
function FetchQuestion()
{
  console.log(Math.floor(Math.random()*ListOfProblems.length-1)); 
  var randomnum = Math.floor(Math.random()*(ListOfProblems.length-1)); 
  if (randomnum>ListOfProblems.length-1)
  randomnum--; 

  var temp =ListOfProblems[randomnum];
   ListOfProblems.splice(randomnum,1); 
 return  temp; 
 console.log(ListOfProblems); 
}

console.log(UserKey); 


ref = database.ref("Users"); 
ref.orderByChild("UserKey").equalTo(UserKey).once("value" , snapshot =>
{ 
  // ** inject user data into a made object from UserCLass.js

  key = Object.keys(snapshot.val())[0];
  temp = snapshot.val(); 
  UserProfile = new UserData(temp[key].Name ,temp[key].Email,key , temp[key].Score ,temp[key].Problems_solved );
  console.log(UserProfile); 

})