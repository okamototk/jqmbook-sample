$(document).on("mobileinit", function(){
  // ページの遷移
  $.mobile.defaultPageTransition = "slide"
  // ダイアログの遷移
  $.mobile.defaultDialogTransition = "pop";
  // ダイアログの閉じるボタンのテキスト
  $.mobile.dialog.prototype.options.closeBtnText = "閉じる"
});
