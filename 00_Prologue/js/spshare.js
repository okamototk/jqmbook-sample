var bardata  = [
  [106,128,223,632,1004],    //　スマートフォン
  [1598,1612,1690,1219,1024] // スマートフォン以外
  ];

var opts = {
  stackSeries: true,
  seriesDefaults: {
    renderer: $.jqplot.BarRenderer,
  },
  series: [
    {label:'スマートフォン'},
    {label:'スマートフォン以外'},
  ],
  seriesColors: ["#888888","#DDDDDD"],
  legend: {
    show: true,
    location: 'nw',
  },
  axes: {
    xaxis: {
      renderer: $.jqplot.CategoryAxisRenderer,
      tickRenderer: $.jqplot.CanvasAxisTickRenderer ,
      ticks: ['2009上期','2009下期','2010上期','2010下期','2011上期'],
      tickOptions: {
        angle: -45,
        fontSize: '8pt'
      }
    },
    yaxis: {
      label:'出荷台数(万台)',
      labelRenderer: $.jqplot.CanvasAxisLabelRenderer,
      tickRenderer: $.jqplot.CanvasAxisTickRenderer,
      labelOptions: {
        fontSize: '8pt'
      }

    }
  }
};

$(document).on('pageshow','#p-spshare',function(e){
  spshareplot = $.jqplot('stackbarchart', bardata, opts);
});

$(window).on('orientationchange',function(e){
  spshareplot.replot();
});

$(document).on('pagehide',"#p-spshare",function(e){
  stackbarplot.destroy();
});
