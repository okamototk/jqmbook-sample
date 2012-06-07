// LocalStorageから履歴の読み込み
var histories = null;
if("histories" in localStorage) {
  histories = JSON.parse(localStorage["histories"]); // ①
}else{
  histories = new Array(); // ②
}

// 初期表示時に履歴をリストビューに追加
$(document).on("pagebeforecreate", "#p-top", function(e) {
  for(i in histories) {
    $("#histories").append('<li class="history-record">' + histories[i].date + ":" + histories[i].distance + "m</li>");
  }
});

$(document).on("pageinit", "#p-top", function(e) {
  // Geolocation APIのオプション設定
  var geolocationOptions = {
    "enableHighAccuracy" : true, // 高精度位置情報の取得
    "maximumAge" : 0, // キャッシュの無効化
    "timeout" : 30000 // タイムアウトは30秒
  };
  var startPosition = null; // 開始位置
  var goalPosition = null; // 到着位置
  // 履歴を更新する関数
  var refreshHistories = function() {
    $(".history-record").remove(); // ③
    for(i in histories) {
      $("#histories").append('<li class="history-record">' + histories[i].date + ":" + histories[i].distance + "m</li>"); // ④
    }
    $("#histories").listview("refresh"); // ⑤
  };
  var map = null; // Google Map
  var START_ICON = "http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=S|0077FF|000000";
  var GOAL_ICON = "http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=G|FF7700|000000";
  // 移動開始ボタンクリック時の処理
  $(this).on("click", "#start", function(e) {
    $("#start").addClass("ui-disabled"); // 移動開始ボタンの無効化
    navigator.geolocation.getCurrentPosition(function(pos) {
      $("#goal").removeClass("ui-disabled"); // 到着ボタンの有効化 // ⑥
      // 画面上の経度、緯度、距離、地図をクリア // ⑦
      $("#start-latitude").html("");
      $("#start-longitude").html("");
      $("#goal-latitude").html("");
      $("#goal-longitude").html("");
      $("#distance").html("");
      $("#map").remove();
      // 開始位置を表示 // ⑧
      $("#start-latitude").html(pos.coords.latitude);
      $("#start-longitude").html(pos.coords.longitude);
      startPosition = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude); // ⑩
      // 地図を作成 // ⑨
      $("#map-wrapper").append('<div id="map" style="width: 100%; height: 250px;"></div>'); // ⑪
      var mapOptions = {
        zoom: 17, // ズーム倍率
        center: startPosition,
        mapTypeId: google.maps.MapTypeId.ROADMAP // 地図の種類(市街地図)
      };
      map = new google.maps.Map(document.getElementById("map"),mapOptions);
      new google.maps.Marker({map : map, position : startPosition, icon : START_ICON}); // ⑫
    }, function(e) {
      alert(e.message);
      $("#start").removeClass("ui-disabled"); // 移動開始ボタンの有効化
    }, geolocationOptions);
  });
  // 到着ボタンクリック時の処理
  $(this).on("click", "#goal", function(e) {
    $("#goal").addClass("ui-disabled"); // 到着ボタンの無効化
    navigator.geolocation.getCurrentPosition(function(pos) {
      $("#start").removeClass("ui-disabled"); // 移動開始ボタンの有効化 // ⑬
      // 移動距離の算出 // ⑭
      $("#goal-latitude").html(pos.coords.latitude);
      $("#goal-longitude").html(pos.coords.longitude);
      goalPosition = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude);
      var distance = Math.floor(google.maps.geometry.spherical.computeDistanceBetween(startPosition, goalPosition));
      $("#distance").html(distance + "m");
      // 到着位置のマーカーを配置 // ⑮
      new google.maps.Marker({map : map, position : goalPosition, icon : GOAL_ICON});
      // 開始位置と到着位置を地図に収める // ⑯
      var bounds = new google.maps.LatLngBounds(startPosition);
      bounds.extend(goalPosition);
      map.fitBounds(bounds);
      // 日時と距離を履歴に追加
      var now = new Date();
      var dateString = now.getFullYear() + "年" +  (now.getMonth() + 1) + "月" + now.getDate() + "日 ";
      dateString += now.getHours() + "時" + now.getMinutes() + "分";
      histories.push({"date" : dateString, "distance" : distance}); // ⑰
      localStorage["histories"] = JSON.stringify(histories); // ⑱
      refreshHistories();
    }, function(e) {
      alert(e.message);
      $("#goal").removeClass("ui-disabled"); // 到着ボタンの有効化
    }, geolocationOptions);
  });
  // 履歴削除ボタンクリック時の処理
  $(this).on("click", "#delete-histories", function(e) {
    histories = new Array();
    localStorage["histories"] = JSON.stringify(histories); // ⑲
    refreshHistories();
  });
});
