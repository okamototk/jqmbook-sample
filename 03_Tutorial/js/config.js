/* Ajaxによる画面遷移の無効化を一括で指定出来るようにする */
$(document).on("mobileinit" ,function(){
  $.mobile.ignoreContentEnabled = true;
});
