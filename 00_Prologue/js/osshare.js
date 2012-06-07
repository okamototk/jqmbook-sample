$.jqplot.config.enablePlugins = true;

$(document).on('pageshow','#p-osshare',function(e){

  var piedata  = [['Android', 61.4],['iOS', 34.2],['Windows Phone', 3.9],['etc', 0.5]];

  var opts = {
    seriesDefaults: {
      renderer: jQuery.jqplot.PieRenderer, 
      rendererOptions: {
        showDataLabels: true,
        padding: 8
      },
    },
    seriesColors: ["#CCCCCC","#EEEEEE","#222222","#FFFFFF"],
    legend :{ 
      show:true, 
      location: 'n',
      rendererOptions: {
        numberRows: 1
      },
    },
  }

  pieplot = $.jqplot('osshare', [piedata], opts);
});

