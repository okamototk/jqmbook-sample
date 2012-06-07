var bardata  = [
  [10,30,20,15], // 週刊ステップ
  [12,12,11,23]  // 週刊マシンガン
  ];

var opts = {
  title:'アンケート結果',
  seriesDefaults: {
    renderer: $.jqplot.BarRenderer,
  },
  series: [
    {label:'週刊ステップ'},
    {label:'週刊マシンガン'},
  ],
  legend: {
    show: true,
    location: 'ne',
  },
  axes: {
    xaxis: {
      renderer: $.jqplot.CategoryAxisRenderer,
      ticks: ['つまらない','普通','面白い','大変面白い'],
    }
  }
};

$(document).on("pageshow","#p-barchart",function(e){
  barplot = $.jqplot("barchart", bardata, opts);
});

$(window).on("orientationchange",function(ui,e){
  barplot.replot();
});

$(document).on("pagehide","#p-barchart",function(e){
  barplot.destroy();
});
