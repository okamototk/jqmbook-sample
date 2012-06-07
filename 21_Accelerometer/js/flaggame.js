var FLAG_NUM = 5; // 旗の数
var BALL_PIXEL_PER_UPDATE; // ボールをイベント毎に移動させる距離

if(/(Android)/.test(navigator.userAgent)){
  BALL_PIXEL_PER_UPDATE = 5;
} else {
  // iOSはAndroidと加速度の向が逆
  BALL_PIXEL_PER_UPDATE = -5;
}

$(document).on("pageinit", "#p-top", function(e) {
  //ボールの初期位置を設定
  var BALL_SIZE = $('#ball').width(); // ボールの大きさ
  var FIELD_X_LIMIT = $("#field").width() - BALL_SIZE; // フィールドにボールを配置できるxの限界値
  var FIELD_Y_LIMIT = $("#field").height() - BALL_SIZE;// フィールドにボールを配置できるyの限界値
  var ballX = FIELD_X_LIMIT / 2;
  var ballY = FIELD_Y_LIMIT / 2;
  var startTime = 0;
  var timerContinue = false;
  var onDeviceMotion = function(e) {
    // 画面の向きによって、加速度センサーの値を補正してボールを動かす
    accel = e.accelerationIncludingGravity;
    if (window.orientation == 0) {
      ballX += -accel.x * BALL_PIXEL_PER_UPDATE;
      ballY += accel.y * BALL_PIXEL_PER_UPDATE;
    } else if (window.orientation == 90) {
      ballX += accel.y * BALL_PIXEL_PER_UPDATE;
      ballY += accel.x * BALL_PIXEL_PER_UPDATE;
    } else if (window.orientation == -90) {
      ballX += -accel.y * BALL_PIXEL_PER_UPDATE;
      ballY += -accel.x * BALL_PIXEL_PER_UPDATE;
    } else if (window.orientation == 180) {
      ballX += accel.x * BALL_PIXEL_PER_UPDATE;
      ballY += -accel.y * BALL_PIXEL_PER_UPDATE;
    }
    // フィールド外にボールがはみ出ないようにする
    ballX = Math.max(ballX, 0);
    ballX = Math.min(ballX, FIELD_X_LIMIT);
    ballY = Math.max(ballY, 0);
    ballY = Math.min(ballY, FIELD_Y_LIMIT);
    $("#ball").css("left", ballX + "px");
    $("#ball").css("top", ballY + "px");
    // ボールと各旗の衝突判定
    var checkCollision = function(flag) {
      if (flag.size() == 0) { // ④
        return false;
      }
      var flagX = flag.position().left;
      var flagY = flag.position().top;
      if(flagX - BALL_SIZE <= ballX && ballX <= flagX + BALL_SIZE &&
          flagY - BALL_SIZE <= ballY && ballY <= flagY + BALL_SIZE ) {
        return true; // ①
      }
      return false; // ②
    };
    // ボールと旗が衝突したら旗を消す
    for ( var i = 1; i <= FLAG_NUM; i++) {
      if (checkCollision($("#flag" + i))) {
        $("#flag" + i).remove(); // ③
      }
    }
    // 全ての旗が無くなったら、経過時間の表示を停止する
    if ($(".flag").size() == 0) {
      timerContinue = false;
    }
  };
  window.addEventListener("devicemotion", onDeviceMotion, true);
  $(this).on("click", "#start", function(e) {
    // 旗をフィールドに配置する
    $(".flag").remove();
    startTime = new Date().getTime();
    timerContinue = true;
    for ( var i = 1; i <= FLAG_NUM; i++) {
      $("#field").append('<div class="flag" id="flag' + i + '"/>'); // ⑤
      var randX = Math.floor(Math.random() * FIELD_X_LIMIT);
      var randY = Math.floor(Math.random() * FIELD_Y_LIMIT);
      $("#flag" + i).css("left", randX);
      $("#flag" + i).css("top", randY);
    }
    // 経過時間を10msec毎に画面に表示する
    (function timer() {
      $("#elasped").html((new Date().getTime() - startTime) / 1000);
      if (timerContinue) {
        setTimeout(timer, 10); // ⑥
      }
    })();
  });
});
