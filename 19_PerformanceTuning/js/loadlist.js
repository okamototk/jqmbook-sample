$(document).on("expand", "#collasible-list", function(e,data){
  if($.trim($("#list").html())==""){
    send={'json':JSON.stringify(['みかん','りんご','マンゴー'])};
    $.mobile.showPageLoadingMsg();
    $.ajax({
      type: "POST",
      url: "./json.php",
      data: "param1=123&param2=homuhomu",
      dataType: 'json',
      success: function(data){
        $.each(data,function(e){
          $('#list').append("<li>"+data[e]+"</li>");
        });
        $('#list').listview("refresh");
        $.mobile.hidePageLoadingMsg();
      },
      error: function(msg){
        alert(msg.responseText);
      }
    });
  }
});
