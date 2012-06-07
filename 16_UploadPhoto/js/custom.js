$(document).on("pageinit","#p-picup", function(e){ // ①
  $(this).on("click", "#upload-btn", function(e){
    // 現在のURL取得
    var indexUrl = window.location.href;
    // 現在のURLからupload.php へのURLに変換する
    var postUrl = window.location.href;
    if (!indexUrl.match(new RegExp("/$"))) {
      postUrl = postUrl.substring(0, postUrl.lastIndexOf("/") + 1);
    }
    postUrl = postUrl + "upload.php";
    // PicupのURLスキームの生成オプション // ②
    var options = {'referrername': escape('Sample'), // Picupに表示されるアプリケーション名
                   'purpose': escape('Upload Photo'), // Picupに表示されるメッセージ
                   'postImageParam': 'photo', // POST時のパラメータ名
                   'postURL': postUrl, // POST先のURL
                   'callbackURL': indexUrl, // アップロード後に開くURL
                  };
    // PicupのURLスキームの生成
    var picupUrl = Picup.urlForOptions("new", options);
    // Picupから処理が戻った際に実行するコールバック処理を設定する // ③
    Picup.callbackHandler = function(data) {
      var status = data.status;
      var picID = data.picID;
      if (status == "Complete") {
        // 成功した場合はindexページに移動することでリフレッシュする
        alert("アップロードに成功しました");
        window.location.href = indexUrl;
      } else {
        // Picupがエラーを返却した場合はダイアログを出す
        alert("アップロードに失敗しました");
      }
    };
    // Picupを起動する // ④
    window.open(picupUrl);
    // Picupから処理が戻った際のコールバック処理の実施
    if (Picup.callbackHandler) {
      Picup.currentHash = window.location.hash;
      Picup.hashObserverId = setInterval('Picup.checkHash()', 500);
    }
  });
});
