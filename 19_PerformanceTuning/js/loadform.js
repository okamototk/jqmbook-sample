function addList(){
  if(!isListLoaded){
    isListLoaded = true;
    $.ajax({
      type: "POST",
      url: "./formdata.html",
      data: "param1=123&param2=homuhomu",
      dataType: 'html',
      success: function(data){
        $("#collapsible-form").append(data);
        $("#collapsible-form").trigger("create");
      },
      error: function(msg){
        alert(msg.responseText);
      }
    });
  }
}
isListLoaded = false;
