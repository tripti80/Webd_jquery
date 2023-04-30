// lecture 9 


$(document).ready(function(){
    // $(window).scroll(function(){
    $('#box').scroll(function(){
        console.log("you are scrolling");
    });


    $(window).resize(function(){
        console.log("you are resizing window");
    });
});
