$(document).on('pageshow','#p-bubble',function(e){
  var bubbledata = [
       [4224273/100, 835338/100, 22954, "Docomo"],
       [3004640/100, 520414/100, 21858, "Softbank"],
       [3434545/100, 440676/100, 18418, "KDDI"]
  ];

  var opts = {
    title: 'H23年度決算報告比較',
    seriesDefaults:{
      renderer: $.jqplot.BubbleRenderer,
      rendererOptions: {
        bubbleAlpha: 0.6,
        highlightAlpha: 0.8
      },
      shadow: true,
      shadowAlpha: 0.05
    },
    axes: {
      xaxis: {
        label:'売上高(億)',
        labelRenderer:$.jqplot.CanvasAxisLabelRenderer,
        tickRenderer: $.jqplot.CanvasAxisTickRenderer,
        tickOptions:{angle:-60}
      },
      yaxis: {
        label:'経常利益(億)',
        labelRenderer:$.jqplot.CanvasAxisLabelRenderer,
        tickRenderer: $.jqplot.CanvasAxisTickRenderer,
      }
    },
  };

  $.jqplot.config.enablePlugins = true;
  bubbleplot = $.jqplot('bubblechart',[bubbledata],opts);
});
