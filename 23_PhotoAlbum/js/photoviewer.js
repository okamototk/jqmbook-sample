var domInitialized = false; // DOM初期化済みフラグ

$(document).on('pagebeforecreate', '#p-gallery', function(e) {
  //list.phpから画像のリストを取得
  $.ajax({
    type:"GET",
    url:"list.php",
    dataType: "json",
    success: function(data){
      // 取得したリストをDOMへ追加
      $.each(data, function(key ,value){
        $("ul.gallery").append('<li><a href="'+value+'" rel="external"><img src="thumb.php?path='+value+'" alt="'+key+'"/></a></li>');
      });
      domInitialized = true;
    }
  });
}).on('pageshow' ,'#p-gallery' ,function(e){
  // $.eachが終了した頃までタイマで待つ
  // PhotoSwipeを初期化
  iid = setInterval(function(){
    if(domInitialized){
      var currentPage = $(e.target),
      options = {cacheMode: Code.PhotoSwipe.Cache.Mode.normal},
      photoSwipeInstance = $("ul.gallery a", e.target).photoSwipe(options,  "ps-"+currentPage.attr('id'));

      // 画像一覧で画像を長押しされたらファイルを削除
      $("ul.gallery li a").on("taphold", function(e){
        e.preventDefault();
        var src = $(this).attr("href");
        confirmDelete = confirm(src+"\nを削除しますか?");
        if(confirmDelete){
          $.get("delete.php?src="+src,function(e){});
          $(this).remove();
        }
      });
      clearInterval(iid);
    }
  },200);
}).on('pageinit', '#p-gallery', function(e) {
  $.event.special.tap.tapholdThreshold = 700;
  // iOS4.x/5.xの場合はPicupを使用する
  if (navigator.userAgent.match(/(iPhone OS 4|iPhone OS 5)/i)) {
    // 追加ボタンのリンクを無効にする
    $('#add-photo-btn', this).attr('href', '#');
    // ヘッダの追加ボタンを押すと直接Picupを起動するようにする
    $(this).on('click', '#add-photo-btn', function() {
      // Picupのオプションを設定する
      var indexUrl = window.location.href;
      var postUrl = window.location.href;
      if (!indexUrl.match(new RegExp("/$"))) {
        postUrl = postUrl.substring(0, postUrl.lastIndexOf("/") + 1);
      }
      postUrl = postUrl + "upload.php";
      var options = {'referrername': escape('PhotoViewer'), // Picup に表示されるアプリケーション名
                     'purpose': escape('Upload Photo'), //Picup に表示されるメッセージ
                     'postImageParam': 'photo', // フィールド名
                     'postURL': postUrl, // post先 Javascriptで生成
                     'callbackURL': indexUrl, // アップロード後に開く URL
                    };
      var picupUrl = Picup.urlForOptions("new", options, Picup.windowname);
      // PicupからSafariに戻った際に実行するコールバック処理を設定する
      Picup.callbackHandler = function(data) {
        var status = data.status;
        var picID = data.picID;
        if (status == "Complete") {
          // indexページに移動する
          window.location.href = indexUrl;
        } else {
          // Picupがエラーを返却した場合はダイアログを出す
          alert("アップロードに失敗しました");
        }
      };
      // Picupの起動
      document.location = picupUrl;
      if (Picup.callbackHandler) {
          Picup.currentHash = window.location.hash;
          Picup.hashObserverId = setInterval('Picup.checkHash()', 500);
      }
      setTimeout(function() {
          if (confirm('iOSでの写真アップロードにはPicupが必要です。\nPicupをインストールしますか？')) {
            document.location = 'http://itunes.apple.com/jp/app/picup/id354101378';
          }
      }, 5000);
    });
  }
});
