/* リストの要素を動的に追加する */
$(document).on("pageinit", "#p-button-js", function(e) {
  $(this).on("click", "#bdis", function(e) {
    $("#bbtn").button("disable");  // 無効にする
  }).on("click", "#bena", function(e) {
    $("#bbtn").button("enable"); // 有効にする
  }).on("click", "#adis", function(e) {
    $('#abtn').addClass('ui-disabled');  // 無効にする
  }).on("click", "#aena", function(e) {
    $('#abtn').removeClass('ui-disabled');  // 有効にする
  });
});

