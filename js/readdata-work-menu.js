
// 
//
var script_url_work = "https://script.google.com/macros/s/AKfycbwZyJ66M-y0B6xiwnNpu93c2OebQQDXLsHsECHyYpzB_sGlUxsj/exec";
  function read_value_work() {
    var url = script_url_work + "?action=read";
    var json
    var i, x="";
    $.getJSON(url, function (json) {
      for (i=json.records.length-6; i < json.records.length; i++) {
        $(".recent-work-done-menu").append('<a href="'+json.records[i].work_img+'" class="gallery image-popup-link text-center" style="background-image: url('+json.records[i].work_img+');padding:2px;"><span><i class="icon-search3"></i></span></a>')
      }
      console.log(json.records.length)
    });
    
  }
  read_value_work();