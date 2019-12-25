var script_url = "https://script.google.com/macros/s/AKfycbzRuPx5I3r6pbWWmn-ThsGao3u6LnKPl68HLdAOljIldgTLyw/exec";
// print the returned data
function ctrlq(e) {
	$("#loading").html(e.result);
	$("#loading").css("visibility", "visible");
	read_value();
}
//Prevent a click on a '#' link from jumping to top of page
$('body').delegate('a.blog-img, a.blog-name','click',function(e) {
    e.preventDefault();
});

var i, x="";
function read_value() {
	$("#loading").css("visibility", "hidden");
  document.getElementById("loader-bg").style.visibility = "visible";
  document.getElementById("loader").style.visibility = "visible";
	var url = script_url + "?action=read";
  var json
	$.getJSON(url, function (json) {
		for (i in json.records) {
      var time_stamp = new Date(json.records[i].time_stamp);
          time_stamp = time_stamp.toLocaleDateString('en-US');
      x += '<div class="col-md-4"><div class="article"><a href="" class="blog-img" data-toggle="modal" data-target="#myModal"> <img class="img-responsive main-blog-img" src="'+json.records[i].img_url1+'" alt="'+json.records[i].blog_name+'" width="100%"><div class="overlay"></div><div class="link"> <span class="read">Read more</h2></div></a><div class="desc"><span class="meta store-time-stamp">'+time_stamp+'</span><h2><a href="" class="blog-name" data-toggle="modal" data-target="#myModal">'+json.records[i].blog_name+'</a></h2><div id="text-contentX">'+json.records[i].text_1+'</div></div><div class="store-url-2">'+json.records[i].img_url2+'</div><div class="store-url-3">'+json.records[i].img_url3+'</div><div class="store-text-2">'+json.records[i].text_2+'</div><div class="store-text-3">'+json.records[i].text_3+'</div></div></div>'
		}
    document.getElementById("loader-bg").style.visibility="hidden";
    document.getElementById("loader").style.visibility="hidden";
    $("#loading").css("visibility", "visible");
    $("#blog-container").html(x);
    //console.log(json)
  });
  
}
read_value();

//Insert data into modal
$('body').delegate('.article','click',function() {
  //var workImg = $(this).children(".work-img").css("background-image")
      //workImg = workImg.replace(/.*\s?url\([\'\"]?/, '').replace(/[\'\"]?\).*/, '');
  var blogName = $(this).find("a.blog-name").text();
  var text_1 = $(this).find("div#text-contentX").html();
  var img_url1 = $(this).find(".main-blog-img").attr("src");
  var img_url2 = $(this).find("div.store-url-2").text();
  var img_url3 = $(this).find("div.store-url-3").text();
  var text_2 = $(this).find("div.store-text-2").html();
  var text_3 = $(this).find("div.store-text-3").html();
  var timeStamp = new Date($(this).find(".store-time-stamp").text());
      timeStamp = timeStamp.toLocaleDateString('en-US');


  //console.log(img_url2)

  $(".modal-title").html(blogName);
  //time-stamp
  $(".time-stamp").html(timeStamp);
  //
  if (img_url1=='') {
    $(".image-1, .text-1").css({display:"none"})
  } else {
    $(".image-1").css({display:""})
    $(".image-1").attr("src", img_url1);
    $(".text-1").css({display:""})
    $(".modal-body .text-1").html(text_1);
  }
  if (img_url2=='') {
    $(".image-2, .text-2").css({display:"none"})
  } else {
    $(".image-2").css({display:""})
    $(".image-2").attr("src", img_url2);
    $(".text-2").css({display:""})
    $(".modal-body .text-2").html(text_2);
  }
  if (img_url3=='') {
    $(".image-3, .text-3").css({display:"none"})
  } else {
    $(".image-3").css({display:""})
    $(".image-3").attr("src", img_url3);
    $(".text-3").css({display:""})
    $(".modal-body .text-3").html(text_3);
  }
  //console.log(img_url2)
})

