
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
var UserData; 

var config = {
    apiKey: "AIzaSyA0TxMMP_jDabR1MA9X-ccKV8I5FPGoQi8",
    authDomain: "tanksalgo.firebaseapp.com",
    databaseURL: "https://tanksalgo.firebaseio.com",
    projectId: "tanksalgo",
    storageBucket: "tanksalgo.appspot.com",
    messagingSenderId: "848660948616"
  };
  firebase.initializeApp(config);

  
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
 return  ListOfProblems[Math.floor(Math.random()*(ListOfProblems.length-1))]; 
}

function SubmissionChecker(question , answer)
{
  if (answer == question.Answer){
    return true; 
  }
  return false; 
}


