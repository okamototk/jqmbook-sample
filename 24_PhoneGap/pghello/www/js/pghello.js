$(document).on("pageinit", "#p-phonegap",function(e){
  var deviceReady = false;
  document.addEventListener("deviceready", function(){
    deviceReady = true;

    // WP7.5はajaxを利用した画面遷移で戻るボタンが効かない
    if(device.platform==="WinCE"){
      $.mobile.ajaxEnabled = false;
    }
  } , false);

  window.setTimeout(function() {
    if (!deviceReady) {
      navigator.notification.alert("Cordovaの初期化に失敗しました");
    }
  }, 5000);

  $(this).on("vclick", "#btn",function(e){
    navigator.notification.alert("ボタンが押されました", function(){
      // okボタンが押された時の処理
    },"Hello", "OK");
  });

});