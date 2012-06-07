BASE_URL="http://192.168.1.254/jqm/photoviewer/";
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
  // $.eachが終了した頃までタイマで待つ
  // PhotoSwipeを初期化
  iid = setInterval(function(){
    if(domInitialized){
      // イメージのリストの読み込みが終了したらPhotoSwipeの初期化を実行
      var currentPage = $(e.target),
      options = {cacheMode: Code.PhotoSwipe.Cache.Mode.normal},
      photoSwipeInstance = $("ul.gallery a", e.target).photoSwipe(options,  "ps-"+currentPage.attr('id'));

      // 画像一覧で画像を長押しされたらファイルを削除     
      $("ul.gallery li a").on("taphold", function(e){
        console.log("delete"+this);
        e.preventDefault();
        var src = $(this).attr("href");
        src = src.substring(BASE_URL.length);
        confirmDelete = confirm(src+"\nを削除しますか?");
        if(confirmDelete){
          $.get(BASE_URL + "delete.php?src="+src,function(e){});
          $(this).remove();
        }
      });
      clearInterval(iid);
    }
  },200);
});

$(document).on('pageinit', '#p-add-photo', function(e){
  
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

    // WP7ではparamsがないとboundaryがおかしくなる
    // (Cordovaの次のバージョンで修正予定)
    var params = new Object();
    params.value1 = "wp7workaround";
    params.value2 = "avoid bug";
    opts.params = params;

    opts.mimeType="image/jpeg";

    var ft = new FileTransfer();
    ft.upload(uri, BASE_URL+"upload.php", function(r){
      alert("ファイル:"+opts.fileName+"をアップロードしました");
      $("ul.gallery").append('<li><a href="'+BASE_URL+"images/"+filename+'" rel="external"><img src="'+BASE_URL+'thumb.php?path=images/'+filename+'" alt="'+filename+'"/></a></li>');//      $("#log").append(r);
      $.mobile.changePage("#p-gallery");
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
