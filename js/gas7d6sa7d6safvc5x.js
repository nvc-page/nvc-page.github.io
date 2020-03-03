$(document).ready(function(){
    //$(".containerX").hide();
    $(".buttonX").click(function(e){
       e.preventDefault();
       var uname = $("#uname"). val();
       var psw = $("#psw"). val();
       if (uname=="1995nvc" && psw =="123456") {
          $(".containerX").show();
          $("#loginX").css({display: "none"});

    } else if (uname=="" || psw =="") {
       alert("Please!, Fill in all fields ")
    } else{
       alert("Incorrect email or password. Try again!")
    };
             


    var screenX = $(window).width();
    if (screenX >= 768) {
       var formHeight = $(".form_height").height()+60;
       $(".img-out-side").css({height:formHeight+"px"}) 
    } else{
    $(".img-out-side").css({height:"200px"}) 
    }


    });
});