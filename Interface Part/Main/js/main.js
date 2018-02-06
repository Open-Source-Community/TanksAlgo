const config = {
    apiKey: "AIzaSyA0TxMMP_jDabR1MA9X-ccKV8I5FPGoQi8",
    authDomain: "tanksalgo.firebaseapp.com",
    databaseURL: "https://tanksalgo.firebaseio.com",
    projectId: "tanksalgo",
    storageBucket: "tanksalgo.appspot.com",
    messagingSenderId: "848660948616"
  };
  firebase.initializeApp(config);

$(document).ready(function()
{
    $(".loading").hide(200)	
	$(".w").fadeIn(4000);
	$(".img").animate({
		top:'27%',
	},3000)
	$(".img").fadeOut(1000)
	$(".s").delay(3000).animate({
		width:'400'
	},2000)
    $(".s").animate({
		height:'350'
	},2000)
    $(".s form").delay(3000).fadeIn(5000)
    $("h3").delay(3000).fadeIn(1000);
    if($(window).width() < 791)
    {
           $(".w").hide();
           $(".res .head").fadeIn(3000)
    }
})
//
firebase.auth().signOut(); 
var KeyPassing=null; 
var EmailInput = document.getElementById("EmailText"); 
var PasswordInput = document.getElementById("PasswordText"); 
const BtnLogin = document.getElementById("Login"); 
const BtnSignup = document.getElementById("Signup");  
const BtnSignout = document.getElementById("Signout"); 
//


BtnLogin.addEventListener('click' , e =>{
	const email = EmailInput.value; 
	const password = PasswordInput.value; 
	const auth = firebase.auth();

	const promise = auth.signInWithEmailAndPassword(email, password); 
	promise.catch( function(e){console.log(e.message)});

	EmailInput.value=""; 
	PasswordInput.value=""; 

	

	// welcoming the user
	setTimeout(function(){
		console.log(KeyPassing);
	if (KeyPassing!=null)	{
	window.location.href = "file:///C:/Users/'abc/Desktop/TanksAlgo/TanksAlgo/Interface%20Part/Level%20One/index.html?par1=" + KeyPassing;
	}
},3500); 
	

});

BtnSignup.addEventListener('click' , e=>{
	const email = EmailInput.value; 
	const password = PasswordInput.value; 
	const auth = firebase.auth();
	const promise = auth.createUserWithEmailAndPassword(email , password); 
	EmailInput.value=""; 
	PasswordInput.value="";

});



BtnSignout.addEventListener('click' , e =>{

	firebase.auth().signOut().then(function() {
		console.log("sign out is successfully made"); 
		EmailInput.value=""; 
		PasswordInput.value="";
	}).catch(e)
	{
		console.log(e.message); 
	}
});

firebase.auth().onAuthStateChanged(firebaseUser =>{
	if (firebaseUser)
	{
		console.log(firebaseUser.email);
		  
		// ** linking a new row of user to the user's ID *** ************* //  

		var database = firebase.database(); 
		var ref = database.ref("Users"); 
		//** check if the user's table has a row with this ID  * */

		ref.orderByChild("UserKey").equalTo(firebaseUser.uid).on("value" , snapshot =>{
			if (snapshot.val()!==null)
			{
				console.log("Exsisting user"); 
				KeyPassing = firebaseUser.uid; 
				console.log(KeyPassing , "keyPassing");   
			}
			else
			{
				var newUser = new UserData("Amr" , firebaseUser.email , firebaseUser.uid , 0 , 0); 
				newUser.pushUser(); 
				console.log("User X created Horray"); 
			}
		  })


	}
	else
	{
		const welcome = document.getElementById("welcome"); 
		welcome.innerHTML = "Welcome to TanksAlgo";
		console.log("Logged out"); 
	}
})

