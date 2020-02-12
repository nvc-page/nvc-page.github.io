  var script_url_blog = "https://script.google.com/macros/s/AKfycbzRuPx5I3r6pbWWmn-ThsGao3u6LnKPl68HLdAOljIldgTLyw/exec";
  // print the returned data
  function ctrlq(e) {
    $("#loading").html(e.result);
    $("#loading").css("visibility", "visible");
    read_value();
  }

  //Prevent a click on a '#' link from jumping to top of page
  // $('body').delegate('a.blog-img, a.blog-name','click',function(e) {
  //     e.preventDefault();
  // });
  
  
  function read_value_blog() {
    $("#loading").css("visibility", "hidden");
    $('body').css('overflow-y', 'hidden');
    document.getElementById("loader-bg").style.visibility = "visible";
    document.getElementById("loader").style.visibility = "visible";
    var url = script_url_blog + "?action=read";
    var json
    var i, x="";
    $.getJSON(url, function (json) {
      for (i=json.records.length-3; i < json.records.length; i++) {
        var time_stamp = new Date(json.records[i].time_stamp);
          time_stamp = time_stamp.toLocaleDateString('en-US');
        $(".slide-blog-content").append("<div class=item><div class='col-md-4 col-sm-6 col-xs-12'><div class=article> <a href=blog.html class=blog-img style='background-image:url("+json.records[i].img_url1+");background-size: cover;background-position: center center;'><div class=overlay></div><div class=link> <span class=read>Read more</span> </div></a><div class=desc> <span class=meta>"+time_stamp+"</span><h2><a href=blog.html>"+json.records[i].blog_name+"</a></h2><div id='text-contentX'>"+json.records[i].text_1+"</div> </div></div></div></div>");
      }

      document.getElementById("loader-bg").style.visibility="hidden";
      document.getElementById("loader").style.visibility="hidden";
      $("#loading").css("visibility", "visible");
      $('body').css('overflow-y', '');
      //console.log(json.records.length)
    });
    
  }
  read_value_blog();
// 
//
var script_url_work = "https://script.google.com/macros/s/AKfycbwZyJ66M-y0B6xiwnNpu93c2OebQQDXLsHsECHyYpzB_sGlUxsj/exec";
  function read_value_work() {
    var url = script_url_work + "?action=read";
    var json
    var i, x="";
    $.getJSON(url, function (json) {
      for (i=json.records.length-3; i < json.records.length; i++) {
        var time_stamp = new Date(json.records[i].time_stamp);
        time_stamp = time_stamp.toLocaleDateString('en-US');
        
        $(".slide-work-content").append("<div class=item><div class='col-md-4 col-sm-6 col-xs-12'><div class=article> <a href=work.html class=blog-img style='background-image:url("+json.records[i].work_img+");background-size: cover;background-position: center center;'><div class=overlay></div><div class=link> <span class=read>Read more</span> </div></a><div class=desc> <span class=meta>"+time_stamp+"</span><h2><a href=blog.html>"+json.records[i].project_name+"</a></h2><div id='text-contentX'>"+json.records[i].content+"</div> </div></div></div></div>")
      }
      //console.log(json.records.length)
    });
    
  }
  read_value_work();
