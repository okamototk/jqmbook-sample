/***********グローバルイベント***************/
$(document).on('pagebeforeload',function(e, data) {
  console.log("global:pagebeforeload e:"+e);
  console.log("global:pagebeforeload data:"+dada);  
  $("#test").append('<input type="text" value="pagebeforeload">');
});

$(document).on('pageload',function(e,data) {
  console.log("global:pageload e:"+e);
  console.log("global:pageload ui:"+data);  
  $("#test").append('<input type="text" value="pageload">');
});

$(document).on('pagebeforechange',function(e,data) {
  console.log("global:pagebeforechange e:"+e);
  console.log("global:pagebeforechange data:"+data);
});

$(document).on('pagechange',function(e,data) {
  console.log("pagechange e:"+e);
  console.log("pagechange data:"+JSON.stringify(data));  
  $("#test").append('<input type="text" value="pagechange">');
});

/***********最初のページのイベント***************/

$(document).on('pagebeforecreate',"#p-1st",function(e,ui) {
  console.log("before: pagebeforecreate");
});

$(document).on('pagecreate',"#p-1st",function(e,ui) {
  console.log("before: pagecreate");
});

$(document).on('pageinit',"#p-1st",function(e,ui) {
  console.log("before: pageinit");
});

$(document).on('pagebeforeshow',"#p-1st",function(e,ui) {
  console.log(e.type+" e:"+e);
  console.log(e.type+" ui:"+ui);  
});

$(document).on('pagebeforehide',"#p-1st",function(e,ui) {
  console.log("before: pagebeforehide");
});

$(document).on('pagehide',"#p-1st",function(e,ui) {
  console.log("before: pagehide");
});

$(document).on('pageshow',"#p-1st",function() {
  console.log("before: pageshow");
});

$(document).on('pageremove',"#p-1st",function() {
  console.log("before: pageremove");
});

$(document).on('updatelayout',"#p-1st",function() {
  console.log("before: updatelayout");
});


$("#p-2nd").live('pagebeforecreate',function(e,ui) {
  console.log("event: pagebeforecreate");
  console.log("pagebeforecreate e:"+e);
  console.log("pagebeforecreate ui:"+ui);  
  $("#test").append('<input type="text" value="pagebeforecreate">');
});

$("#p-2nd").live('pagecreate',function(e,ui) {
  console.log("event: pagecreate");
  console.log("pagecreate e:"+e);
  console.log("pagecreate ui:"+ui);  
  
  $("#test").append('<input type="text" value="pagecreate">');
});

$("#p-2nd").live('pageinit',function(e,data) {
  console.log("event: pageinit");
  console.log("pageinit e:"+e);
  console.log("pageinit data:"+data);  

  $("#test").append('<input type="text" value="pageinit">');
});

$(document).on('pagebeforeshow',"#p-2nd",function(e,data) {
  console.log("pagebeforeshow e:"+e);
  console.log("pagebeforeshow data:"+data);
  $("#test").append('<input type="text" value="pagebeforeshow">');
});

$(document).on('pagebeforehide',"#p-2nd",function() {
  console.log("event: pagebeforehide");
});

  //--------------
$(document).on('pagehide',"#p-2nd",function() {
  console.log("event: pagehide"+$("#test").html());

});

$(document).on('pageshow',"#p-2nd",function() {
  console.log("event: pageshow");
});

$(document).on('pageremove',"#p-2nd",function() {
  console.log("event: pageremove"+$("#test").html());
});

$(document).on('updatelayout',"#p-2nd",function() {
  console.log("event: updatelayout");
});

