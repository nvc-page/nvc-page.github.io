<script>
(function() {
    // Sample variables
    var page_id = '352064654874520';
    var ref = '';
    var theme_color = '#fa3c4c';
    var logged_in_greeting = 'Liên hệ PGI ngay'; // Can be a Custom Constant Variable Sting
    var logged_out_greeting = 'Xin chào, PGI có thể giúp gì được cho bạn ạ?'; // Can be a Custom Constant Variable Sting

    // Do not edit
    var el = document.createElement('div');
    el.className = 'fb-customerchat';
    el.setAttribute('page_id', page_id);
    if (ref.length) {
        el.setAttribute('ref', ref);
    }
    el.setAttribute('theme_color', theme_color);
    el.setAttribute('logged_in_greeting', logged_in_greeting);
    el.setAttribute('logged_out_greeting', logged_out_greeting);
    document.body.appendChild(el);
})();
  
  // Facebook SDK for JavaScript : https://developers.facebook.com/docs/javascript/quickstart
    window.fbAsyncInit = function() {
    FB.init({
      appId      : '359181165117673',
      xfbml      : true,
      // autoLogAppEvents : true,
      version    : 'v8.0'
    });
    // autoLogAppEvents replacement with logPageView
    FB.AppEvents.logPageView();
  };
  
  // Customer Chat SDK : https://developers.facebook.com/docs/messenger-platform/discovery/customer-chat-plugin/sdk#install
  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "https://connect.facebook.net/vie_VN/sdk/xfbml.customerchat.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));
</script>