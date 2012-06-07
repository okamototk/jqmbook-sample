// Andoroidブラウザのナビゲーションバーを隠す

if (navigator.userAgent.match(/Android|iPhone/i)){
  $(document).on("pagechange",function(e,data){
    // 1ピクセル下にずらしてアドレスバーを隠す
    var hide_addressbar=function(){
      if(document.body.scrollTop == 0){  
        window.scrollTo(0,1);
      }
    }

    // Androidの場合、
    // ページの縦幅がスクリーンの縦幅より狭い場合
    // ページの縦幅をスクリーンのサイズ+1して
    // スクロールできるようにする。
    if (navigator.userAgent.match(/Android/i)){
      var pageHeight = $(document).height();
      var windowHeight = window.outerHeight / window.devicePixelRatio;
      if (windowHeight >= pageHeight) {
        pageHeight = windowHeight+1;
        $('BODY').css('height',(pageHeight) + 'px');
      }
    }
    hide_addressbar();

    // スクロール時に強制的に1ピクセル下にずらす
    $(window).on('scrollstop', function() { 
      hide_addressbar();
    });
  });
}

