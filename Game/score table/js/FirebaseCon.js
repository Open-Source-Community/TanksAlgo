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

  var ref = database.ref("Users"); 

  ref.once( "value", function(snapshot) {  
      
    console.log(snapshot.val()); 
    keys = Object.keys(snapshot.val());
    for (var i=0; i<keys.length; i++)
    {
        rows.push(snapshot.val()[keys[i]].Email+"/"+snapshot.val()[keys[i]].Score);
    }
    /* handle read data */ });