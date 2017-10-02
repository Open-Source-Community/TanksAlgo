

var code_string;
var result; 
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
