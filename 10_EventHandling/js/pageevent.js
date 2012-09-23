/***********グローバルイベント***************/

$(document).on('pagebeforeload',function(e, data) {
  console.log("pagebeforeload");
  console.log(e);
  console.log(data);
});

$(document).on('pageload',function(e,data) {
  console.log("pageload");
  console.log(e);
  console.log(data);
});

$(document).on('pagebeforechange',function(e,data) {
  console.log("pagebeforechange");
  console.log(e);
  console.log(data);
});

$(document).on('pagechange',function(e,data) {
  console.log("pagechange");
  console.log(e);
});

/***********最初のページのイベント***************/

$(document).on('pagebeforecreate',"#p-1st",function(e,ui) {
  console.log("1st: pagebeforecreate");
  console.log(e);
  console.log(ui);
});

$(document).on('pagecreate',"#p-1st",function(e,ui) {
  console.log("1st: pagecreate");
  console.log(e);
  console.log(ui);
});

$(document).on('pageinit',"#p-1st",function(e,ui) {
  console.log("1st: pageinit");
  console.log(e);
  console.log(ui);
});

$(document).on('pagebeforeshow',"#p-1st",function(e,ui) {
  console.log("1st: pagebeforeshow");
  console.log(e);
  console.log(ui);
});

$(document).on('pagebeforehide',"#p-1st",function(e,ui) {
  console.log("1st: pagebeforehide");
  console.log(e);
  console.log(ui);
});

$(document).on('pagehide',"#p-1st",function(e,ui) {
  console.log("1st: pagehide");
  console.log(e);
  console.log(ui);
});

$(document).on('pageshow',"#p-1st",function() {
  console.log("1st: pageshow");
});

$(document).on('pageremove',"#p-1st",function() {
  console.log("1st: pageremove");
});

/***********2ページ目のイベント***************/

$(document).on('pagebeforecreate',"#p-2nd",function(e,ui) {
  console.log("2nd: pagebeforecreate");
  console.log(e);
  console.log(ui);
});

$(document).on('pagecreate',"#p-2nd",function(e,ui) {
  console.log("2nd: pagecreate");
  console.log(e);
  console.log(ui);
});

$(document).on('pageinit',"#p-2nd",function(e,data) {
  console.log("2nd: pageinit");
  console.log(e);
  console.log(data);
});

$(document).on('pagebeforeshow',"#p-2nd",function(e,data) {
  console.log("2nd: pagebeforeshow");
  console.log(e);
  console.log(data);
});

$(document).on('pagebeforehide',"#p-2nd",function() {
  console.log("2nd: pagebeforehide");
});

$(document).on('pagehide',"#p-2nd",function() {
  console.log("2nd: pagehide");
});

$(document).on('pageshow',"#p-2nd",function() {
  console.log("2nd: pageshow");
});

$(document).on('pageremove',"#p-2nd",function() {
  console.log("2nd: pageremove");
});
