// プラグインの有効化
$.jqplot.config.enablePlugins = true;

// Ajaxでデータを取得するように関数を定義
var ajaxDataRenderer = function(url, plot, options) {
  var ret = null;
  $.ajax({
    async: false,
    url: url,
    dataType:"json",
    success: function(data) {
      ret = data;
    },
    error: function(XMLHttpRequest, textStatus, errorThrown){
      alert("読み込み失敗:"+errorThrown);
    }
  });
  return ret;
};


var opts = {
  title: 'グラフタイトル',
  dataRenderer: ajaxDataRenderer, // データをAjaxで取得するように設定
  series: [
    {
      label:'データ1',
      showMarker:false
    },
    {
      label:'データ2',
      showMarker:true
    },
  ],

  legend: {
    show:true,
    location:'ne',
  },

  axes: {
    xaxis: {
      label:'x軸ラベル',
      labelRenderer:$.jqplot.CanvasAxisLabelRenderer,
      tickRenderer: $.jqplot.CanvasAxisTickRenderer,
      tickOptions:{angle:-30}
    },
    yaxis: {
      label:'y軸ラベル',
      labelRenderer:$.jqplot.CanvasAxisLabelRenderer,
      tickRenderer: $.jqplot.CanvasAxisTickRenderer,
    }
  },
  cursor:{zoom:true}
};

$(document).on("pageshow", "#p-ajaxchart", function(e){
  // ajaxdata.jsonファイルを読み込んで表示
  plot = $.jqplot("linechart-ajax", "./ajaxdata.json", opts);
});

$(window).on("orientationchange", function(e){
  plot.replot();
});

$(document).on("pagehide", "#p-ajaxchart", function(e){
  plot.destroy();
});
