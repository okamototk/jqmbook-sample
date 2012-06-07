var FLAG_NUM = 5; // 旗の数
var BALL_PIXEL_PER_UPDATE = 5; // ボールをイベント毎に移動させる距離

$(document).on('pageinit','#p-flaggame',function(e) {
  //ボールの初期位置を設定
  var BALL_SIZE = $('#ball').width(); // ボールの大きさ
  var FIELD_X_LIMIT = $('#field').width() - BALL_SIZE; // フィールドにボールを配置できるxの限界値
  var FIELD_Y_LIMIT = $('#field').height() - BALL_SIZE;// フィールドにボールを配置できるyの限界値
  var ballX = FIELD_X_LIMIT / 2;
  var ballY = FIELD_Y_LIMIT / 2;
  var startTime = 0;
  var timerContinue = false;

  var onDeviceMotion = function(e) {
    // 画面の向きによって、加速度センサーの値を補正してボールを動かす
    accel = e;
	
	if ((typeof(window.orientation)==="undefined") || (window.orientation == 0)) {
	  // WP7.5はwindow.orientationが未定義
      ballX += -accel.x * BALL_PIXEL_PER_UPDATE;
      ballY += +accel.y * BALL_PIXEL_PER_UPDATE;
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

    $('#ball').css('left', ballX + 'px');
    $('#ball').css('top', ballY + 'px');

    // ボールと各旗の衝突判定
    var checkCollision = function(flag) {
      if (flag.size() == 0) {
        return false;
      }
      var flagX = flag.position().left;
      var flagY = flag.position().top;

      if(flagX - BALL_SIZE <= ballX && ballX <= flagX + BALL_SIZE &&
          flagY - BALL_SIZE <= ballY && ballY <= flagY + BALL_SIZE ) {
        return true;
      }
      return false;
    };

    // ボールと旗が衝突したら旗を消す
    for ( var i = 1; i <= FLAG_NUM; i++) {
      if (checkCollision($('#flag' + i))) {
        $('#flag' + i).remove();
      }
    }
    // 全ての旗が無くなったら、経過時間の表示を停止する
    if ($('.flag').size() == 0) {
      timerContinue = false;
    }
  };

  $(this).on('click','#start',function(ui, e) {
    // 旗をフィールドに配置する
    $('.flag').remove();
    startTime = new Date().getTime();
    timerContinue = true;
    for ( var i = 1; i <= FLAG_NUM; i++) {
      $('#field').append('<div class="flag" id="flag' + i + '"/>');
      var randX = Math.floor(Math.random() * FIELD_X_LIMIT);
      var randY = Math.floor(Math.random() * FIELD_Y_LIMIT);
      $('#flag' + i).css('left', randX);
      $('#flag' + i).css('top', randY);
    }

    // 経過時間を10msec毎に画面に表示する
    (function timer() {
      $('#elasped').html((new Date().getTime() - startTime) / 1000);
      if (timerContinue) {
        setTimeout(timer, 10);
      }
    })();
  });

  // Cordova初期化&加速度センサの設定
  document.addEventListener("deviceready", function(){
    wid = navigator.accelerometer.watchAcceleration(onDeviceMotion,function(e){
      navigator.notification.alert("加速度センサーの初期化に失敗しました");
    },{frequency: 50});
  } , false);

});
