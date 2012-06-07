$(document).on("pagebeforecreate",'[data-role=page]',function(e){
  $.ajaxSetup({cache : true});
  $.getScript('http://platform.twitter.com/widgets.js');
  $.ajaxSetup({cache : false});
});