$(function (){
    $myWidth = 75;
    $('html,body').height($(window).height()/100*100);
    $('.logo').height($(window).height());    
    $('.game').height($(window).height()/100*70);
   
    $('.row').hide(0);
    $('.logo').delay(5000).hide(0);
    $('.row').delay(3500).show(0);


    var editor = ace.edit("editor");
    editor.setTheme("ace/theme/monokai");
    editor.getSession().setMode("ace/mode/javascript");
    editor.getSession().setMode("ace/mode/c_cpp");
    editor.getSession().setMode("ace/mode/csharp");
    editor.getSession().setMode("ace/mode/python");
    editor.getSession().setMode("ace/mode/java");

    //editor.getValue(); // or session.getValue  //to get content

    
})

