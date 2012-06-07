/* リストの要素を動的に追加する */
$(document).on("pageinit", "#p-listview-add", function(e) {
  // 正しい例
  $(this).on("click", "#addBtn", function(e) {
    var target = $("#addList");
    target.append("<li>追加要素</li>");
    target.listview("refresh");
  });
  // よくない例
  $(this).on("click", "#addBtnFail", function(e) {
    var target = $("#addList");
    target.append("<li>追加要素</li>");
    // リフレッシュしない
    // target.listview("refresh");
  });
});
