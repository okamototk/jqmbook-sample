// 24_PhoneGap/photoviewer/serverフォルダを配置したWebサーバのURLを指定
// (URLの最後に「/」を入れる)
BASE_URL="http://192.168.1.1/jqmbook-sample/24_PhoneGap/photoviewer/server/";

var imgUrl = null;

// イメージのリストが読み込まれたかどうか
var domInitialized = false;

$(document).on('pagebeforecreate' ,'#p-gallery' ,function(e){
  
  console.log = function(msg){
    $("#log").append(msg+"<br />");
  }

  
  //list.phpから画像のリストを取得
  $.ajax({
    type:"GET",
    url:BASE_URL+ "list.php",
    dataType: "json",
    success: function(data){
      // 取得したリストをDOMへ追加
      $.each(data, function(key ,value){
        $("ul.gallery").append('<li><a href="'+BASE_URL+value+'" rel="external"><img src="'+BASE_URL+'thumb.php?path='+value+'" alt="'+key+'"/></a></li>');
      });
      domInitialized = true;
    },
    error: function(request,error,exception){
      console.log(error);
    }
  });
}).on('pageshow' ,'#p-gallery' ,function(e){
  // PhotoSwipeが初期化されているかチェック(lengthが0なら未初期化)
  if(Code.PhotoSwipe.instances.length==0){
    iid = setInterval(function(){
      // イメージのリストの読み込みが終了したらPhotoSwipeの初期化を実行
      if(domInitialized){
        clearInterval(iid);
        var currentPage = $(e.target),
        options = {cacheMode: Code.PhotoSwipe.Cache.Mode.normal},
        photoSwipeInstance = $("ul.gallery a", e.target).photoSwipe(options,  "ps-"+currentPage.attr('id'));
        
         // 画像一覧で画像を長押しされたらファイルを削除
         $(document).on("taphold", "ul.gallery li a", function(e){
          e.preventDefault();
          var src = $(this).attr("href");
          src = src.substring(BASE_URL.length);
          confirmDelete = confirm(src+"\nを削除しますか?");
          if(confirmDelete){
            $.get(BASE_URL + "delete.php?src="+src,function(e){});
            $(this).remove();
          }
        });
      }
    },2000);
  }
});

$(document).on('pageinit', '#p-add-photo', function(e){

  $.event.special.tap.tapholdThreshold = 700;

  $(this).on('click', '#capture', function(e){
    var sourceType;
    
    if($("#p-add-photo #sourceType").val()=="camera"){
      sourceType = navigator.camera.PictureSourceType.CAMERA;
    } else {
      sourceType = navigator.camera.PictureSourceType.PHOTOLIBRARY;   
    }
    
    navigator.camera.getPicture(
      function(data) {
        imgUrl = data;
        preview = $("#preview");
        preview.css("visibility","visible");
        preview.css("display" ,"block");
        preview.attr("src",imgUrl);
        $("#send").button("enable");
      },
      function(e) {
        console.log("写真が取得できませんでした: " + e);
      },
      { quality: 50, 
        destinationType: navigator.camera.DestinationType.FILE_URI,
        sourceType : sourceType}
     );
  });
  
  $(this).on('click', '#send', function(e){
    // 画像をアプロード
    upload(imgUrl);
    // 送信ボタンを無効に
    $("#send").button("disable");
  });
  
}).on("pagehide", "#p-add-photo" ,function(e){
  // プレビュー画面を非表示にする
  $("#preview").css("visibility","hidden");
  // 送信ボタンを無効に
  $("#send").button("disable");
});

function upload(uri){
  
  function handleFileEntry(fileEntry) {
    var opts = new FileUploadOptions();
    var filename = fileEntry.name;

    opts.fileKey="photo";

    if(/\./.test(filename)){
      opts.fileName=filename;        
    } else {
      opts.fileName=filename + ".jpg";
    }

    opts.mimeType="image/jpeg";

    var ft = new FileTransfer();
    ft.upload(uri, BASE_URL+"upload.php", function(r){
      alert("ファイル:"+opts.fileName+"をアップロードしました");
      location.reload();
    }, function(e){
      alert("アップロード失敗:"+e.code);
      $.mobile.changePage("#p-gallery");
    }, opts);    
  };

  // リソースのURIからファイル名を取得
  window.resolveLocalFileSystemURI(uri, handleFileEntry, function(e){
    alert("ファイル取得エラー:"+e);
    $.mobile.changePage("#p-gallery");
  });
  
}
