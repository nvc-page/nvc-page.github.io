var script_url = "https://script.google.com/macros/s/AKfycbwZyJ66M-y0B6xiwnNpu93c2OebQQDXLsHsECHyYpzB_sGlUxsj/exec";
function ctrlq(a) {
    // $("#loading").html(a.result),
    // $("#loading").css("visibility", "visible"),
    read_value()
}
$("body").delegate("a.work-img, a.view-details", "click", function(a) {
    a.preventDefault()
});
var i, x = "";
function read_value() {
    // $("#loading").css("visibility", "hidden"),
    // document.getElementById("loader-bg").style.visibility = "visible",
    // document.getElementById("loader").style.visibility = "visible";
    $.getJSON("https://script.google.com/macros/s/AKfycbwZyJ66M-y0B6xiwnNpu93c2OebQQDXLsHsECHyYpzB_sGlUxsj/exec?action=read", function(a) {
        for (i = a.records.length - 1; 0 <= i; i--) {
            var b = new Date(a.records[i].time_stamp);
            b = b.toLocaleDateString("en-US"),
            x += "<div class=\"col-md-4 col-sm-6 wow fadeInUp\" ><div class=\"article\"><a href=\"\" class=\"blog-img\" data-toggle=\"modal\" data-target=\"#myModal\"> <div style=\"background-image:url(" + a.records[i].work_img + "); width:100%; height:250px; background-size:cover; background-position:center center\"></div><div class=\"overlay\"></div><div class=\"link\"> <span class=\"read\">Read more</h2></div></a><div class=\"desc\"><span class=\"meta store-time-stamp\">" + b + "</span><h2><a href=\"\" class=\"blog-name\" data-toggle=\"modal\" data-target=\"#myModal\">" + a.records[i].project_name + "</a></h2><div id=\"text-contentX\">" + a.records[i].content + "</div></div><div class=\"store-url-2\">" + a.records[i].img_url2 + "</div><div class=\"store-url-3\">" + a.records[i].img_url3 + "</div><div class=\"store-text-2\">" + a.records[i].text_2 + "</div><div class=\"store-text-3\">" + a.records[i].text_3 + "</div><div class=\"store-text-4\">" + a.records[i].category + "</div><div class=\"store_time_stamp_finish\">" + a.records[i].time_stamp_finish + "</div></div></div>"
        }
        // document.getElementById("loader-bg").style.visibility = "hidden",
        // document.getElementById("loader").style.visibility = "hidden",
        // $("#loading").css("visibility", "visible"),
        $("#work-ex").html(x)
    })
}
read_value(),
$("body").delegate(".article", "click", function() {
    var a = $(this).find(".blog-img div").css("background-image");
    a = a.replace(/.*\s?url\([\'\"]?/, "").replace(/[\'\"]?\).*/, "");
    var b = $(this).find(".blog-name").text()
      , c = $(this).find("#text-contentX").html()
      , d = $(this).find("div.store-url-2").text()
      , e = $(this).find("div.store-url-3").text()
      , f = $(this).find("div.store-text-2").html()
      , g = $(this).find("div.store-text-3").html()
      , h = $(this).find(".store-time-stamp").text()
      , j = $(this).find(".store-text-4").text()
      , k = $(this).find(".store_time_stamp_finish").text();

      console.log(j, k)

      var k = new Date(k);
      k = k.toLocaleDateString("en-US"),

    $(".modalTitle").html(b),
    $(".modalService").html(j),
    $(".timeStart").html(h),
    $(".timeDone").html(k),
    $(".bodyContent").html(c),

    
    "" == a ? $(".image-1, .text-1").css({
        display: "none"
    }) : ($(".image-1").css({
        display: ""
    }),
    $(".image-1").attr("src", a),
    $(".text-1").css({
        display: ""
    }),
    $(".bodyContent").html(c)),
    "" == d ? $(".image-2, .text-2").css({
        display: "none"
    }) : ($(".image-2").css({
        display: ""
    }),
    $(".image-2").attr("src", d),
    $(".text-2").css({
        display: ""
    }),
    $(".modal-body div.text-2").html(f)),
    "" == e ? $(".image-3, .text-3").css({
        display: "none"
    }) : ($(".image-3").css({
        display: ""
    }),
    $(".image-3").attr("src", e),
    $(".text-3").css({
        display: ""
    }),
    $(".modal-body div.text-3").html(g))
});
