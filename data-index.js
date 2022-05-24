var script_url_blog = "https://script.google.com/macros/s/AKfycbzRuPx5I3r6pbWWmn-ThsGao3u6LnKPl68HLdAOljIldgTLyw/exec";
function ctrlq(a) {
    $("#loading").html(a.result),
    $("#loading").css("visibility", "visible"),
    read_value()
}

// function read_value_blog() {
//     $("#loading").css("visibility", "hidden"),
//     $("body").css("overflow-y", "hidden"),
//     document.getElementById("loader-bg").style.visibility = "visible",
//     document.getElementById("loader").style.visibility = "visible";
//     var a;
//     $.getJSON("https://script.google.com/macros/s/AKfycbzRuPx5I3r6pbWWmn-ThsGao3u6LnKPl68HLdAOljIldgTLyw/exec?action=read", function(b) {
//         for (a = b.records.length - 6; a < b.records.length; a++) {
//             var c = new Date(b.records[a].time_stamp);
//             c = c.toLocaleDateString("en-US"),
//             $(".slide-blog-content").append("<div class=item><div class='col-md-4 col-sm-6 col-xs-12'><div class=article> <a href=blog.html class=blog-img style='background-image:url(" + b.records[a].img_url1 + ");background-size: cover;background-position: center center;'><div class=overlay></div><div class=link> <span class=read>Read more</span> </div></a><div class=desc> <span class=meta>" + c + "</span><h2><a href=blog.html>" + b.records[a].blog_name + "</a></h2><div id='text-contentX'>" + b.records[a].text_1 + "</div> </div></div></div></div>")
//         }
//         document.getElementById("loader-bg").style.visibility = "hidden",
//         document.getElementById("loader").style.visibility = "hidden",
//         $("#loading").css("visibility", "visible"),
//         $("body").css("overflow-y", "")
//     })
// }
// read_value_blog();


var script_url_work = "https://script.google.com/macros/s/AKfycbwZyJ66M-y0B6xiwnNpu93c2OebQQDXLsHsECHyYpzB_sGlUxsj/exec";
function read_value_work() {
    var a;
    $.getJSON("https://script.google.com/macros/s/AKfycbwZyJ66M-y0B6xiwnNpu93c2OebQQDXLsHsECHyYpzB_sGlUxsj/exec?action=read", function(b) {
        for (a = b.records.length - 4; a < b.records.length; a++) {
            var c = new Date(b.records[a].time_stamp);
            var numberClass = b.records.length-a
            c = c.toLocaleDateString("en-US"),
            $(".canhcanh").append("<div class='row'><div class='col-lg-7'></div><div class='col-lg-5 project project1 wow fadeInUp' onclick=location.href='work.html' style='background: url(" + b.records[a+3].work_img + ") no-repeat 50% 50%; filter: grayscale(100%); background-size: contain;'></div></div><div class='whitespace'></div><div class='row'><div class='col-lg-6 project project2 wow fadeInUp' onclick=location.href='work.html' style='background: url(" + b.records[a+2].work_img + ")no-repeat 50% 50%;filter: grayscale(100%);background-size: contain;'></div><div class='col-lg-6'></div></div><div class='whitespace'></div><div class='row'><div class='col-lg-7'></div><div class='col-lg-4 project project3 wow fadeInUp' onclick=location.href='work.html' style='background: url(" + b.records[a+1].work_img + ")no-repeat 50% 50%;filter: grayscale(100%);background-size: contain;'></div><div class='col-lg-1'></div></div><div class='whitespace'></div><div class='row'><div class='col-lg-1'></div><div class='col-lg-5 project project4 wow fadeInUp' onclick=location.href='work.html' style='background: url(" + b.records[a].work_img + ")no-repeat 50% 50%;filter: grayscale(100%);background-size: contain;'></div><div class='col-lg-6'></div></div>");
            
            //$(".canhcanh").append("<div class='whitespace'></div> <div class='row'> <div class='col-lg-8'> </div> <div class='col-lg-4 project project"+numberClass+" wow fadeInUp' onclick='location.href='project.html'' style='background: url(" + b.records[a].work_img + ") no-repeat 50% 50%;background-size: cover;'></div></div>")
        }
    })
}
read_value_work();



