$.jqplot.config.enablePlugins = true;
$(document).on('pageshow','#p-piechart',function(e){

  var piedata  = [['etc',2.1],['Android 2.1', 9.6],['Android 2.2', 35.3],['Android 2.3', 50.6],['Android 3.x', 2.4]];

  var opts = {
    title:'OSシェア',
    seriesDefaults: {
      renderer: jQuery.jqplot.PieRenderer, 
      rendererOptions: {
        showDataLabels: true,
        padding: 8
      }
    },
    legend :{ 
      show:true, 
      location: 'n',
      rendererOptions: {
        numberRows: 2
      },
    }
  }

  pieplot = $.jqplot('piechart', [piedata], opts);
});

