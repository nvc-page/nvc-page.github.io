var script_url = "https://script.google.com/macros/s/AKfycbwZyJ66M-y0B6xiwnNpu93c2OebQQDXLsHsECHyYpzB_sGlUxsj/exec";
// print the returned data
function ctrlq(e) {
	$("#loading").html(e.result);
	$("#loading").css("visibility", "visible");
	read_value();
}
// Prevent a click on a '#' link from jumping to top of page
$('body').delegate('a.work-img, a.view-details','click',function(e) {
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
		for (i=json.records.length-1; i >=0; i--) {
      //x+='<div class=col-md-12><div class="work-entry" data-toggle="modal" data-target="#myModal"> <a href=# class=work-img style=background-image:url('+json.records[i].work_img+')><div class=display-t><div class=work-name><h2>'+json.records[i].project_name+'</h2></div></div></a><div class="col-md-6 col-md-offset-3"><div class=desc><p id=text-contentX>'+json.records[i].content+'</p><p class=read><a href=#>View details</a></p></div></div><div class="store-url-2">'+json.records[i].img_url2+'</div><div class="store-url-3">'+json.records[i].img_url3+'</div><div class="store-text-2">'+json.records[i].text_2+'</div><div class="store-text-3">'+json.records[i].text_3+'</div><div class="store-time-stamp">'+json.records[i].time_stamp+'</div></div></div>' 
      var time_stamp = new Date(json.records[i].time_stamp);
          time_stamp = time_stamp.toLocaleDateString('en-US');
      //x+='<div class="col-sm-6 col-md-4"><div class="work-entry" data-toggle="modal" data-target="#myModal"> <a href=# class=work-img style=background-image:url('+json.records[i].work_img+');><div class=display-t><div class=work-name><h2 class="project-name">'+json.records[i].project_name+'</h2></div></div></a><div class="col-md-12"><div class=desc><div id=text-contentX>'+json.records[i].content+'</div><p class=read><a href="#" class="view-details">View details</a></p></div></div><div class="store-url-2">'+json.records[i].img_url2+'</div><div class="store-url-3">'+json.records[i].img_url3+'</div><div class="store-text-2">'+json.records[i].text_2+'</div><div class="store-text-3">'+json.records[i].text_3+'</div><div class="store-time-stamp project-time">'+time_stamp+'</div></div></div>' 

      x += '<div class="col-md-4 col-sm-6" ><div class="article"><a href="" class="blog-img" data-toggle="modal" data-target="#myModal"> <div style="background-image:url('+json.records[i].work_img+'); width:100%; height:250px; background-size:cover; background-position:center center"></div><div class="overlay"></div><div class="link"> <span class="read">Read more</h2></div></a><div class="desc"><span class="meta store-time-stamp">'+time_stamp+'</span><h2><a href="" class="blog-name" data-toggle="modal" data-target="#myModal">'+json.records[i].project_name+'</a></h2><div id="text-contentX">'+json.records[i].content+'</div></div><div class="store-url-2">'+json.records[i].img_url2+'</div><div class="store-url-3">'+json.records[i].img_url3+'</div><div class="store-text-2">'+json.records[i].text_2+'</div><div class="store-text-3">'+json.records[i].text_3+'</div></div></div>'
		}
    document.getElementById("loader-bg").style.visibility="hidden";
    document.getElementById("loader").style.visibility="hidden";
    $("#loading").css("visibility", "visible");
    $("#work-ex").html(x);
    //console.log(json)
  });
}
read_value();
//<img class="img-responsive main-blog-img" src="'+json.records[i].work_img+'" alt="'+json.records[i].project_name+'" width="100%" style="height:250px">
// Insert data into modal
$('body').delegate('.article','click',function() {
  var workImg = $(this).find(".blog-img div").css("background-image")
      workImg = workImg.replace(/.*\s?url\([\'\"]?/, '').replace(/[\'\"]?\).*/, '');
  var workName = $(this).find(".blog-name").text();
  var workContent = $(this).find("#text-contentX").html();
  var img_url2 = $(this).find("div.store-url-2").text();
  var img_url3 = $(this).find("div.store-url-3").text();
  var text_2 = $(this).find("div.store-text-2").html();
  var text_3 = $(this).find("div.store-text-3").html();
  var timeStamp = $(this).find(".store-time-stamp").text();

  $(".modal-title").html(workName);
  //time-stamp
  $(".time-stamp").html(timeStamp);
  //
  if (workImg=='') {
    $(".image-1, .text-1").css({display:"none"})
  } else {
    $(".image-1").css({display:""})
    $(".image-1").attr("src", workImg);
    $(".text-1").css({display:""})
    $(".modal-body div.text-1").html(workContent);
  }
  if (img_url2=='') {
    $(".image-2, .text-2").css({display:"none"})
  } else {
    $(".image-2").css({display:""})
    $(".image-2").attr("src", img_url2);
    $(".text-2").css({display:""})
    $(".modal-body div.text-2").html(text_2);
  }
  if (img_url3=='') {
    $(".image-3, .text-3").css({display:"none"})
  } else {
    $(".image-3").css({display:""})
    $(".image-3").attr("src", img_url3);
    $(".text-3").css({display:""})
    $(".modal-body div.text-3").html(text_3);
  }
  //console.log(workContent)
})
