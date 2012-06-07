var data = [
  [["11/01/2011",17.7],["11/02/2011",17.2],["11/03/2011",18.4],["11/04/2011",18.4],["11/05/2011",18.9],["11/06/2011",18.1],["11/07/2011",18.6],["11/08/2011",15.7],["11/09/2011",14.3],["11/10/2011",14.1],["11/11/2011",12.4],["11/12/2011",16.4],["11/13/2011",17.8],["11/14/2011",16.9],["11/15/2011",14],["11/16/2011",12.6],["11/17/2011",14.5],["11/18/2011",12.6],["11/19/2011",16.3],["11/20/2011",17.4],["11/21/2011",12.6],["11/22/2011",11.1],["11/23/2011",12.4],["11/24/2011",13.3],["11/25/2011",11.4],["11/26/2011",10.9],["11/27/2011",11],["11/28/2011",12.1],["11/29/2011",14.4],["11/30/2011",14.6]],
];

// プラグインの有効化
$.jqplot.config.enablePlugins = true;
var opts = {

  axes: {
    xaxis: {
      label:'日付',
      renderer:$.jqplot.DateAxisRenderer,
      labelRenderer:$.jqplot.CanvasAxisLabelRenderer,
      tickRenderer: $.jqplot.CanvasAxisTickRenderer,
      tickOptions:{
        formatString:"'%y/%#m/%#d",
        angle:-60}
    },
    yaxis: {
      label:'気温',
      labelRenderer:$.jqplot.CanvasAxisLabelRenderer,
      tickRenderer: $.jqplot.CanvasAxisTickRenderer,
    }
  },
  cursor:{zoom:true}
};

$(document).on("pageshow", "#p-dateaxis", function(e){
  plot = $.jqplot("linechart-dateaxis", data, opts);
});

$(window).on("orientationchange", function(e){
  plot.replot();
});

$(document).on("pagehide", "#p-dateaxis", function(e){
  plot.destroy();
});
