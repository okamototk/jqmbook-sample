/* Dateboxの使用を切り替える */
$(document).on("pagebeforecreate", "#p-datebox", function(e) {
  var ua = navigator.userAgent;
  if (/(OS 4_[\d_]+ like Mac|Android|Windows Phone OS 7)/.test(ua) && !/CrMo/.test(ua)) {
    $("input[type=date]")
      .attr("data-role","datebox")
      .attr("data-options",'{"dateFormat": "YYYY/MM/DD", "fieldsOrderOverride": ["y", "m", "d"]}');
    $.getScript("http://dev.jtsage.com/cdn/datebox/latest/jquery.mobile.datebox.min.js", function(data,status) {
      $.getScript("http://dev.jtsage.com/cdn/datebox/i18n/jquery.mobile.datebox.i18n.ja.utf8.js", function(data,status) {
        $("#p-datebox").trigger("create");
      });
    });
  }
});
