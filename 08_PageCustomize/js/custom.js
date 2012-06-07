/* ボタンクリックでダイアログを閉じる */
$(document).on("pageinit", "#p-dialog-close-js", function(e) {
  $(this).on("click", "#dialog-close-btn", function(e) {
    $(".ui-dialog").dialog("close");
  });
});

/* JavaScriptによる画面遷移 */
$(document).on("pageinit", "#p-change-page", function(e) {
  $(this).on("click", "#change-page-btn", function(e) {
    $.mobile.changePage("index.html");
  });
  $(this).on("click", "#change-page-btn-dom", function(e) {
    $.mobile.changePage($("#p-change-page-dom"));
  });
  $(this).on("click", "#change-page-btn-with-animation", function(e) {
    $.mobile.changePage("index.html", {transition: "flip", reverse: false});
  });
});
