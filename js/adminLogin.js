$(document).ready(function() {
    $(".buttonX").click(function(a) {
        a.preventDefault();
        var b = $("#uname").val()
          , c = $("#psw").val();
        "1995nvc" == b && "123456" == c ? ($(".containerX").show(),
        $("#loginX").css({
            display: "none"
        })) : "" == b || "" == c ? alert("Please!, Fill in all fields ") : alert("Incorrect email or password. Try again!");
        var d = $(window).width();
        if (768 <= d) {
            var e = $(".form_height").height() + 60;
            $(".img-out-side").css({
                height: e + "px"
            })
        } else
            $(".img-out-side").css({
                height: "200px"
            })
    })
});