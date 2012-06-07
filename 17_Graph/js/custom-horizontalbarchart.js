var bardata  = [
  [[10,1],[30,2],[20,3],[15,4]],
  [[12,1],[12,2],[11,3],[23,4]]
];

var opts = {
  title:'アンケート結果',
  seriesDefaults: {
    renderer: $.jqplot.BarRenderer,
    shadowAngle: 135,
    rendererOptions: {
      barDirection: 'horizontal'
    }
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
    yaxis: {
      renderer: $.jqplot.CategoryAxisRenderer,
      ticks: ['つまらない','普通','面白い','大変面白い'],
    }
  }
};

$(document).on('pageshow','#p-horizontalbarchart',function(e){
  barplot = $.jqplot('horizontalbarchart', bardata, opts);
});

$(window).on('orientationchange',function(e){
  barplot.replot();
});

$(document).on('pagehide',"#p-horizontalbarchart",function(e){
  barplot.destroy();
});
