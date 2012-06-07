$(document).on("pageshow","#p-candle",function(e){
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
    title: "2011年11月の日経平均",
    dataRenderer: ajaxDataRenderer,
    axes: {
      xaxis: {
        renderer:$.jqplot.DateAxisRenderer,
        tickRenderer: $.jqplot.CanvasAxisTickRenderer,
        tickOptions:{formatString:'%m/%e',angle:60},
        tickInterval: "1 weeks",
        min: "10-31-2011",
        max: "11-30-2011",
      },
      yaxis: {
        tickRenderer: $.jqplot.CanvasAxisTickRenderer,
        tickOptions:{formatString:'%d円',angle:45}
      }
    },

    series: [{
      renderer:$.jqplot.OHLCRenderer,
      rendererOptions:{ candleStick:true }
    }],

    highlighter: {
      show: true,
      showMarker:false,
      tooltipAxes: 'xy',
      yvalues: 4,
      formatString:'<table class="jqplot-highlighter"> \
        <tr><td>日付:</td><td>%s</td></tr> \
        <tr><td>始値:</td><td>%s</td></tr> \
        <tr><td>高値:</td><td>%s</td></tr> \
        <tr><td>安値:</td><td>%s</td></tr> \
        <tr><td>終値:</td><td>%s</td></tr></table>'
    },
    cursor:{zoom:true}
  };
  
  $.jqplot.config.enablePlugins = true;
  candleplot = $.jqplot('candlechart', './nikkeiave201111.json', opts);

});
