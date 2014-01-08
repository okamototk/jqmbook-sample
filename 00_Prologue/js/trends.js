$(document).on("mobileinit", function(){
  $.mobile.page.prototype.options.addBackBtn = true;
  $.mobile.page.prototype.options.backBtnText = "戻る";
});

data  = [
  [["11/29/2009",0], ["12/06/2009",0], ["12/13/2009",0], ["12/20/2009",0], ["12/27/2009",0], ["01/03/2010",0], ["01/10/2010",0], ["01/17/2010",0], ["01/24/2010",0], ["01/31/2010",0], ["02/07/2010",0], ["02/14/2010",0], ["02/21/2010",0], ["02/28/2010",0], ["03/07/2010",0], ["03/14/2010",0], ["03/21/2010",0], ["03/28/2010",0], ["04/04/2010",0], ["04/11/2010",0], ["04/18/2010",0], ["04/25/2010",0], ["05/02/2010",0], ["05/09/2010",0], ["05/16/2010",0], ["05/23/2010",0], ["05/30/2010",0], ["06/06/2010",0], ["06/13/2010",0.4], ["06/20/2010",0.4], ["06/27/2010",0.4], ["07/04/2010",0.4], ["07/11/2010",0.4], ["07/18/2010",0.4], ["07/25/2010",0.4], ["08/01/2010",0.4], ["08/08/2010",0.6], ["08/15/2010",1.9], ["08/22/2010",1.1], ["08/29/2010",0.8], ["09/05/2010",1.0], ["09/12/2010",0.8], ["09/19/2010",0.8], ["09/26/2010",1.1], ["10/03/2010",1.0], ["10/10/2010",1.6], ["10/17/2010",3.9], ["10/24/2010",2.6], ["10/31/2010",2.3], ["11/07/2010",2.6], ["11/14/2010",2.8], ["11/21/2010",2.5], ["11/28/2010",2.7], ["12/05/2010",2.9], ["12/12/2010",2.8], ["12/19/2010",2.5], ["12/26/2010",2.2], ["01/02/2011",2.8], ["01/09/2011",3.0], ["01/16/2011",3.4], ["01/23/2011",3.8], ["01/30/2011",3.9], ["02/06/2011",4.2], ["02/13/2011",4.4], ["02/20/2011",4.3], ["02/27/2011",4.4], ["03/06/2011",4.6], ["03/13/2011",4.5], ["03/20/2011",4.9], ["03/27/2011",5.0], ["04/03/2011",5.2], ["04/10/2011",5.9], ["04/17/2011",5.8], ["04/24/2011",5.5], ["05/01/2011",5.9], ["05/08/2011",6.0], ["05/15/2011",5.9], ["05/22/2011",6.4], ["05/29/2011",6.4], ["06/05/2011",6.3], ["06/12/2011",6.5], ["06/19/2011",7.7], ["06/26/2011",7.6], ["07/03/2011",7.2], ["07/10/2011",7.6], ["07/17/2011",7.4], ["07/24/2011",7.5], ["07/31/2011",8.1], ["08/07/2011",7.7], ["08/14/2011",7.8], ["08/21/2011",8.1], ["08/28/2011",7.9], ["09/04/2011",8.0], ["09/11/2011",8.7], ["09/18/2011",8.7], ["09/25/2011",8.6], ["10/02/2011",8.9], ["10/09/2011",8.9], ["10/16/2011",9.5], ["10/23/2011",8.9], ["10/30/2011",9.1], ["11/06/2011",9.4], ["11/13/2011",11.2], ["11/20/2011",10.8], ["11/27/2011",10.5], ["12/04/2011",10.0], ["12/11/2011",10.5], ["12/18/2011",10.2], ["12/25/2011",7.7], ["01/01/2012",9.0], ["01/08/2012",10.7], ["01/15/2012",10.9], ["01/22/2012",11.0], ["01/29/2012",11.7], ["02/05/2012",11.7], ["02/12/2012",11.4]],
  [["11/29/2009",0], ["12/06/2009",0], ["12/13/2009",0], ["12/20/2009",0], ["12/27/2009",0], ["01/03/2010",0], ["01/10/2010",0], ["01/17/2010",0], ["01/24/2010",0], ["01/31/2010",0], ["02/07/2010",0], ["02/14/2010",0], ["02/21/2010",0], ["02/28/2010",0], ["03/07/2010",0], ["03/14/2010",0], ["03/21/2010",0], ["03/28/2010",0], ["04/04/2010",0], ["04/11/2010",0], ["04/18/2010",0], ["04/25/2010",0], ["05/02/2010",0], ["05/09/2010",0], ["05/16/2010",0], ["05/23/2010",0], ["05/30/2010",0], ["06/06/2010",0], ["06/13/2010",0.5], ["06/20/2010",1.0], ["06/27/2010",0.6], ["07/04/2010",0.6], ["07/11/2010",0.7], ["07/18/2010",1.0], ["07/25/2010",0.7], ["08/01/2010",0.8], ["08/08/2010",0.6], ["08/15/2010",0.9], ["08/22/2010",0.7], ["08/29/2010",0.9], ["09/05/2010",0.7], ["09/12/2010",0.8], ["09/19/2010",0.8], ["09/26/2010",0.8], ["10/03/2010",0.9], ["10/10/2010",0.9], ["10/17/2010",1.0], ["10/24/2010",1.1], ["10/31/2010",0.9], ["11/07/2010",1.1], ["11/14/2010",1.5], ["11/21/2010",1.3], ["11/28/2010",1.2], ["12/05/2010",1.2], ["12/12/2010",1.4], ["12/19/2010",1.2], ["12/26/2010",1.1], ["01/02/2011",1.3], ["01/09/2011",1.5], ["01/16/2011",1.5], ["01/23/2011",1.6], ["01/30/2011",1.7], ["02/06/2011",1.8], ["02/13/2011",1.9], ["02/20/2011",1.6], ["02/27/2011",1.6], ["03/06/2011",1.7], ["03/13/2011",1.9], ["03/20/2011",2.0], ["03/27/2011",2.2], ["04/03/2011",2.3], ["04/10/2011",2.6], ["04/17/2011",2.1], ["04/24/2011",2.5], ["05/01/2011",2.2], ["05/08/2011",2.5], ["05/15/2011",2.7], ["05/22/2011",2.8], ["05/29/2011",2.7], ["06/05/2011",2.6], ["06/12/2011",3.1], ["06/19/2011",3.2], ["06/26/2011",2.8], ["07/03/2011",2.9], ["07/10/2011",2.8], ["07/17/2011",2.9], ["07/24/2011",3.1], ["07/31/2011",3.2], ["08/07/2011",3.1], ["08/14/2011",3.3], ["08/21/2011",3.1], ["08/28/2011",3.1], ["09/04/2011",3.2], ["09/11/2011",3.2], ["09/18/2011",3.5], ["09/25/2011",3.3], ["10/02/2011",3.3], ["10/09/2011",3.2], ["10/16/2011",3.6], ["10/23/2011",3.6], ["10/30/2011",3.5], ["11/06/2011",3.9], ["11/13/2011",3.9], ["11/20/2011",3.4], ["11/27/2011",3.9], ["12/04/2011",3.3], ["12/11/2011",3.2], ["12/18/2011",3.5], ["12/25/2011",2.6], ["01/01/2012",3.4], ["01/08/2012",3.6], ["01/15/2012",3.5], ["01/22/2012",3.3], ["01/29/2012",4.0], ["02/05/2012",3.9], ["02/12/2012",4.0]],
  [["11/29/2009",0.5], ["12/06/2009",0.6], ["12/13/2009",0.7], ["12/20/2009",0.7], ["12/27/2009",0.7], ["01/03/2010",0.7], ["01/10/2010",0.6], ["01/17/2010",0.9], ["01/24/2010",1.0], ["01/31/2010",1.4], ["02/07/2010",1.1], ["02/14/2010",1.1], ["02/21/2010",1.1], ["02/28/2010",1.2], ["03/07/2010",1.1], ["03/14/2010",1.2], ["03/21/2010",1.3], ["03/28/2010",1.3], ["04/04/2010",1.4], ["04/11/2010",1.8], ["04/18/2010",1.4], ["04/25/2010",1.6], ["05/02/2010",1.4], ["05/09/2010",1.7], ["05/16/2010",1.7], ["05/23/2010",1.6], ["05/30/2010",1.6], ["06/06/2010",1.7], ["06/13/2010",3.0], ["06/20/2010",1.9], ["06/27/2010",1.8], ["07/04/2010",1.7], ["07/11/2010",1.9], ["07/18/2010",1.9], ["07/25/2010",2.0], ["08/01/2010",2.1], ["08/08/2010",2.0], ["08/15/2010",2.0], ["08/22/2010",2.0], ["08/29/2010",1.8], ["09/05/2010",1.9], ["09/12/2010",2.0], ["09/19/2010",1.8], ["09/26/2010",2.1], ["10/03/2010",2.1], ["10/10/2010",2.1], ["10/17/2010",2.1], ["10/24/2010",1.9], ["10/31/2010",1.9], ["11/07/2010",1.9], ["11/14/2010",1.8], ["11/21/2010",1.5], ["11/28/2010",2.1], ["12/05/2010",1.9], ["12/12/2010",1.8], ["12/19/2010",1.6], ["12/26/2010",1.1], ["01/02/2011",1.6], ["01/09/2011",1.8], ["01/16/2011",2.0], ["01/23/2011",1.8], ["01/30/2011",1.8], ["02/06/2011",1.7], ["02/13/2011",2.1], ["02/20/2011",1.7], ["02/27/2011",1.7], ["03/06/2011",1.7], ["03/13/2011",1.6], ["03/20/2011",1.6], ["03/27/2011",1.9], ["04/03/2011",1.5], ["04/10/2011",1.7], ["04/17/2011",1.3], ["04/24/2011",1.4], ["05/01/2011",1.5], ["05/08/2011",1.5], ["05/15/2011",1.5], ["05/22/2011",1.6], ["05/29/2011",1.4], ["06/05/2011",1.5], ["06/12/2011",1.5], ["06/19/2011",1.5], ["06/26/2011",1.3], ["07/03/2011",1.2], ["07/10/2011",1.3], ["07/17/2011",1.5], ["07/24/2011",1.3], ["07/31/2011",1.4], ["08/07/2011",1.2], ["08/14/2011",1.1], ["08/21/2011",1.2], ["08/28/2011",1.2], ["09/04/2011",1.3], ["09/11/2011",1.1], ["09/18/2011",1.2], ["09/25/2011",1.1], ["10/02/2011",1.0], ["10/09/2011",1.0], ["10/16/2011",1.1], ["10/23/2011",1.0], ["10/30/2011",0.9], ["11/06/2011",1.1], ["11/13/2011",1.0], ["11/20/2011",1.1], ["11/27/2011",0.8], ["12/04/2011",1.0], ["12/11/2011",1.0], ["12/18/2011",0.8], ["12/25/2011",0.9], ["01/01/2012",0.7], ["01/08/2012",0.9], ["01/15/2012",0.9], ["01/22/2012",0.7], ["01/29/2012",0.8], ["02/05/2012",1.0], ["02/12/2012",0.9]],
  [["11/29/2009",0], ["12/06/2009",0], ["12/13/2009",0], ["12/20/2009",0], ["12/27/2009",0], ["01/03/2010",0], ["01/10/2010",0], ["01/17/2010",0], ["01/24/2010",0], ["01/31/2010",0], ["02/07/2010",0], ["02/14/2010",0], ["02/21/2010",0], ["02/28/2010",0], ["03/07/2010",0], ["03/14/2010",0], ["03/21/2010",0], ["03/28/2010",0], ["04/04/2010",0], ["04/11/2010",0], ["04/18/2010",0], ["04/25/2010",0], ["05/02/2010",0], ["05/09/2010",0], ["05/16/2010",0], ["05/23/2010",0], ["05/30/2010",0], ["06/06/2010",0], ["06/13/2010",0], ["06/20/2010",0], ["06/27/2010",0], ["07/04/2010",0], ["07/11/2010",0], ["07/18/2010",0], ["07/25/2010",0], ["08/01/2010",0], ["08/08/2010",0], ["08/15/2010",0], ["08/22/2010",0], ["08/29/2010",0], ["09/05/2010",0], ["09/12/2010",0], ["09/19/2010",0], ["09/26/2010",0], ["10/03/2010",0], ["10/10/2010",0], ["10/17/2010",0], ["10/24/2010",0], ["10/31/2010",0], ["11/07/2010",0], ["11/14/2010",0], ["11/21/2010",0], ["11/28/2010",0], ["12/05/2010",0], ["12/12/2010",0], ["12/19/2010",0], ["12/26/2010",0], ["01/02/2011",0], ["01/09/2011",0], ["01/16/2011",0], ["01/23/2011",0], ["01/30/2011",0], ["02/06/2011",0], ["02/13/2011",0], ["02/20/2011",0], ["02/27/2011",0], ["03/06/2011",0], ["03/13/2011",0], ["03/20/2011",0], ["03/27/2011",0], ["04/03/2011",0], ["04/10/2011",0], ["04/17/2011",0], ["04/24/2011",0], ["05/01/2011",0], ["05/08/2011",0], ["05/15/2011",0], ["05/22/2011",0], ["05/29/2011",0], ["06/05/2011",0], ["06/12/2011",0], ["06/19/2011",0], ["06/26/2011",0], ["07/03/2011",0], ["07/10/2011",0], ["07/17/2011",0], ["07/24/2011",0], ["07/31/2011",0], ["08/07/2011",0], ["08/14/2011",0], ["08/21/2011",0], ["08/28/2011",0], ["09/04/2011",0], ["09/11/2011",0], ["09/18/2011",0], ["09/25/2011",0], ["10/02/2011",0], ["10/09/2011",0], ["10/16/2011",0], ["10/23/2011",0], ["10/30/2011",0], ["11/06/2011",0], ["11/13/2011",0], ["11/20/2011",0.3], ["11/27/2011",0.3], ["12/04/2011",0.3], ["12/11/2011",0.3], ["12/18/2011",0.3], ["12/25/2011",0.3], ["01/01/2012",0.3], ["01/08/2012",0.3], ["01/15/2012",0.3], ["01/22/2012",0.3], ["01/29/2012",0.3], ["02/05/2012",0.4], ["02/12/2012",0.3]],
];

$(document).on('pageshow', '#p-trend', function(e){
  opts = {
    series: [	
      {
        label:'jQuery Mobile',
        showMarker:false,
        color:"#004400",
      },
      {
        label:'Sencha Touch',
        showMarker:false,
        color:"#AA8888",
      },
      {
        label:'jQTouch',
        showMarker:false,
        color:"#BBBBEE",
      },
      {
        label:'Dojo Mobile',
        showMarker:false,
        color:"#DDDDDD",
      },
    ],

    legend: {
      show:true,
      location:'nw',
    },

    axes: {
      xaxis: {
        renderer:$.jqplot.DateAxisRenderer,
        tickRenderer: $.jqplot.CanvasAxisTickRenderer,
        tickOptions:{
          formatString:"'%y/%#m",
          angle:-45}
      },
      yaxis: {
        tickRenderer: $.jqplot.CanvasAxisTickRenderer,
      }
    },

    cursor:{zoom:true},
  };
  
  $.jqplot.config.enablePlugins = true;
  lineplot = $.jqplot('trendchart', data, opts);
 
  $(window).on('orientationchange',function(ui,e){
    lineplot.replot();
  })
})
