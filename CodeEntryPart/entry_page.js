

var text = '{ "employees" : [' +
'{ "firstName":"John" , "lastName":"Doe" },' +
'{ "firstName":"Anna" , "lastName":"Smith" },' +
'{ "firstName":"Peter" , "lastName":"Jones" } ]}';

var obj = JSON.parse(text); 
var hexa=1; 

var code_string;  // this is the string that the code will be executed for the user
var result; // the final result the user's code gonna output to be compared with the test cases
$('.codesubmit').click(function myfun(){

code_string= document.getElementById('codearea').value; 

console.time("the user's code" ); 
code_handler(code_string); 
console.timeEnd("the user's code"); 
alert(result); 

})


function code_handler(code){

 
  eval(code); 

  return result; 
}
$('.codearea').append('// write down your code and in the end dont return anything just assign your answer // to a variable called result, here is an example\n '); 

$('.codearea').append('var x=20; \n result = x+300*2; \n');

$('.codearea').append('//try and submit, delete the code after to resumbit.'); 

