var data = [
  [[1,1],[2,2],[3,5],[4,2],[5,4]], // データ1
  [[1,6],[2,4],[3,3],[4,4],[5,5]]  // データ2
];

// プラグインの有効化
$.jqplot.config.enablePlugins = true;
var opts = {
  title: 'グラフタイトル',

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

$(document).on("pageshow", "#p-chartbasic", function(e){
  plot = $.jqplot("chart", data, opts);
});

$(window).on("orientationchange", function(e){
  plot.replot();
});

$(document).on("pagehide", "#p-chartbasic", function(e){
  plot.destroy();
});
