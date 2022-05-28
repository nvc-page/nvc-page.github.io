$(document).ready(function(){
    $(".footer").append('<div class="container"> <br><br><div class="collab"> <div class="row"> <div class="col-lg-12"> <p class="wow fadeInUp">Got an interesting project? I can help you.</p></div></div></div><br><div class="hr"> <div class="row"></div></div><br><br><div class="info"> <div class="row"> <div class="col-lg-4" id="personal"> <p class="wow fadeInUp">connect with me</p><h4 class="wow fadeInUp" data-wow-delay="0.2s">ig @1995nvc</h4> <br><br></div><div class="col-lg-4" id="media"> <p class="wow fadeInUp" data-wow-delay="0s">follow me</p><ul> <li id="fb" class="wow fadeInUp" data-wow-delay="0.4s"><a href="https://www.facebook.com/1995nvc/" style="text-decoration:none; color:white">fb</a> </li><li id="ig" class="wow fadeInUp" data-wow-delay="0.6s"><a href="https://www.instagram.com/1995nvc/" style="text-decoration:none; color:white">ig</a></li><li id="tw" class="wow fadeInUp" data-wow-delay="0.8s"><a href="https://www.twitter.com/1995nvc/" style="text-decoration:none; color:white">tw</a></li><li id="yt" class="wow fadeInUp" data-wow-delay="1s"><a href="https://www.youtube.com/channel/UC2J5MEP2AZ13yp8zhc-muHw" style="text-decoration:none; color:white">yt</a></li></ul> <br><br></div><div class="col-lg-4" id="address"> <p class="wow fadeInUp" data-wow-delay="0s">say hello</p><h4 class="wow fadeInUp" data-wow-delay="0.2s">heisca@outlook.com</h4> <br><br></div></div></div></div>');

    $("style").append("/*--------------- footer section --------------- */.collab{text-align: right;}.collab p{font-weight: lighter !important; margin-bottom: 20px;}.hr{background: rgba(255, 255, 255, 0.2); height: 1px;}.info h4{font-size: 18px; font-weight: lighter;}.info p{color: grey; font-weight: lighter;}.info li{font-weight: lighter; color: #fff; font-size: 18px; padding-left: 20px;}#fb::before{display: inline-block; content: ''; border-radius: 100%; height: 4px; width: 4px; margin-right: 6px; background: #3b5998;}#ig::before{display: inline-block; content: ''; border-radius: 100%; height: 4px; width: 4px; margin-right: 6px; background: #fcaf45;}#tw::before{display: inline-block; content: ''; border-radius: 100%; height: 4px; width: 4px; margin-right: 6px; background: #55acee;}#yt::before{display: inline-block; content: ''; border-radius: 100%; height: 4px; width: 4px; margin-right: 6px; background: #c4302b;}#media, #address{text-align: right;}#media ul{list-style: none;}#media ul li{display: inline-block;}@media(max-width: 768px){.collab, #personal, #media, #address{text-align: center;}.info ul{margin: 0 0 0 -22px; padding: 0;}};")

    $(".nav-bar").append('<nav> <span id="brand"> <a href="index.html">H Ξ I S Ɔ Λ</a> </span> <ul id="menu"> <li><a href="index.html">home<span>.</span></a></li><li><a href="work.html">work<span>.</span></a></li><li><a href="about.html">about me<span>.</span></a></li><li><a href="contact.html">contact<span>.</span></a></li></ul> <div id="toggle"> <div class="span">menu</div></div></nav> <div id="resize"> <div class="close-btn">close</div><ul id="menu"> <li><a href="index.html">home<span>.</span></a></li><li><a href="work.html">work<span>.</span></a></li><li><a href="about.html">about me<span>.</span></a></li><li><a href="contact.html">contact<span>.</span></a></li></ul> </div>')


    // navigation

    $("#toggle").click(function() {
        $(this).toggleClass('on');
        $("#resize").toggleClass("active");
    });

    $("#resize ul li a").click(function() {
        $(this).toggleClass('on');
        $("#resize").toggleClass("active");
    });

    $(".close-btn").click(function() {
        $(this).toggleClass('on');
        $("#resize").toggleClass("active");
    });

    // navigation ends here

    // nav animation

    TweenMax.from("#brand", 1, {
        delay: 0.4,
        y: 10,
        opacity: 0,
        ease: Expo.easeInOut
    })

    TweenMax.staggerFrom("#menu li a", 1, {
        delay: 0.4,
        opacity: 0,
        ease: Expo.easeInOut
    }, 0.1);

    // nav animation ends

    new WOW().init();
});



