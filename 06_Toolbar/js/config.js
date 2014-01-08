// 戻るボタンの設定
$(document).on('mobileinit', function(){
  $.mobile.page.prototype.options.addBackBtn   = true;
  $.mobile.page.prototype.options.backBtnText = "戻る";
});
