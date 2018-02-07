
var QuestionText = document.getElementById("theQuestion"); 
var Op1 = document.getElementById("option1"); 
var Op2 = document.getElementById("option2"); 
var Op3 = document.getElementById("option3"); 
var Op4 = document.getElementById("option4"); 
var Submissionbtn = document.getElementById("Submissionbtn"); 


function FillQuestion(question)
{
    var temp = question.Text;
    QuestionText.innerText = question.Text; 
    document.getElementById("triggerbtn").click();  
    Op1.innerHTML=question.Choices[0]; 
    Op2.innerHTML=question.Choices[1]; 
    Op3.innerHTML=question.Choices[2]; 
    Op4.innerHTML=question.Choices[3];  
}

// here it tests if the user clicked submit, fetches the radio button he picked with its number, compare with the question's answer 
// wether it is correct or false :D
Submissionbtn.addEventListener("click" , function()
{
var radios = document.getElementsByTagName('input');
var value;
for (var i = 0; i < radios.length; i++) {
    if (radios[i].type === 'radio' && radios[i].checked) {
        // get value, set checked flag or do whatever you need to
       value = radios[i].value;         
    }   
}
console.log("radio" , value*2 , "answer" , localStorage["CurrentAnswer"]*2);
if (parseInt(localStorage["CurrentAnswer"]) == parseInt(value))
    {
      console.log("well done");
      UserProfile.score+=5;         // update the user score with something 
    }
    else
    {
        console.log("wrong answer"); 
    }
    // var ref2 = database.ref().child("Users");

    // firebase.database().ref().child('/Users/' + UserProfile.userKey)
    //     .update({ Score: 20, Name: "shady" });
    loop();
    console.log(i); 

});
