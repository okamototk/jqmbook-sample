if(/(Android)/.test(navigator.userAgent)){
  DOWNLOAD_URL = "market://search?q=pname:com.twitter.android";
} else {
  DOWNLOAD_URL = "http://itunes.apple.com/jp/app/twitter/id333903271?mt=8&ls=1";
}

$(document).on("pageinit", "#p-top", function(e) {
  $(this).on("click", "#twitter-button", function(e) {
    $("#twitter-launcher").attr('src',"twitter://timeline");
    setTimeout(function(){
      location.href=DOWNLOAD_URL;
    },100);
  });
});