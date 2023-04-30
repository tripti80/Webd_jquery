// lecture 8 

$(document).ready(function(){
  $('#sname,#sclass,#scountry').focus(function(){
    $(this).css('background-color','lime');
  });

  $('#sname,#sclass,#scountry').blur(function(){
    $(this).css('background-color','');
  });

  $('#scountry').change(function(){  //use with select box
    // $(this).css('background-color','pink');
    var a =$(this).val(); //here we got scountry's val bcz this is the value of forms
    //in forms we take value(val) not the html
    $('#test').html(a);
  });


  //this will only run with the input event(name & Class) and not with Country
  $('#sname,#sclass').select(function(){
    $(this).css('background-color','yellow');
  });


  $('#sform').submit(function(){
    alert("Form submitted");
  });

});
