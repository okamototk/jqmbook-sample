function searchTweetsBy(hashTag) {
  $("#tweets ul").remove();
  $("#tweets").append('<ul data-role="listview" data-inset="true"></ul>');
  $.ajax({
    url : "http://search.twitter.com/search.json?q=%23" + hashTag,
    dataType : "jsonp",
    success : function(res) {
      $.each(res.results, function(key) {
        var html = '<img style="width:80px;height:80px;" src="' + res.results[key].profile_image_url + '"/>';
        html += "<h4>" + res.results[key].from_user + "</h4>";
        html += '<p style="white-space : normal;"></p>';
        $("#tweets ul").append('<li id="tweet' + key + '">' + html + "</li>");
        $("#tweet" + key + " p").text(res.results[key].text);
      });
      $("#tweets ul").listview();
    }
  });
};

$(document).on("pageinit", "#p-top", function(e) {
  $(this).on("keypress", "#search-tag", function(e) {
    if (e.keyCode == $.mobile.keyCode.ENTER) {
      var hashTag = $("#search-tag").val();
      if ("" == hashTag) return;
      searchTweetsBy(hashTag);
    }
  });
});