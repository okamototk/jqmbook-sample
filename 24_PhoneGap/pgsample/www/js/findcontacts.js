function findContacts(key){
  obj = new ContactFindOptions();
  obj.filter = key;
  obj.multiple = true;
  
  onSuccess = function(contacts) {
    var name, tels, s;
    var s = "";
    if (contacts.length == 0) {
      console.log("検索結果なし");
    } else {
      console.log("検索件数"+contacts.length);
      for ( var i = 0; i < contacts.length; i++) {
        contact = contacts[i];
        name = contact.displayName;
        if (name == null) {
          // iOSの場合displayNameではなく、name.formattedを利用
          name = contact.name.formatted; 
        }
        tels = contact.phoneNumbers;
        s = s + '<div data-role="collapsible">' + 
        '<h3>'+name+'</h3>';
        // 電話番号の表示
        if(typeof(tels)!=="undefined" && tels!=null && tels.length!=0){
          s = s + '<h4>電話番号</h4>';
          for(j=0;j<tels.length;j++){
            s = s + '<a href="tel:'+tels[j].value+'">'+tels[j].value+'</a>('+tels[j].type+')<br />';
          }
        }
        
        emails = contact.emails;
        if(typeof(emails)!=="undefined" && emails!=null && emails.length!=0){
          s = s + '<h4>メールアドレス</h4>';
          for(j=0;j<emails.length;j++){
            s = s + '<a href="mailto:'+emails[j].value+'">'+emails[j].value+'</a>('+emails[j].type+')<br />';
          }
        }
        
         s = s + '</div>';
      }
    }
    $("#p-findcontact #output").html(s);
    $("#p-findcontact #output").trigger("create");
  };
  
  navigator.contacts.find([ "displayName", "nickname", "name",
                            "phoneNumbers", "emails", "urls", "note" ],
                            onSuccess,
   function(e) {
     document.getElementById('output').innerHTML = "Error: "
      + e.code;
  }, obj);
}

$(document).on("pageinit","#p-findcontact",    
 function(e) {
   $(this).on("keypress" ,"#search", function(e) {
   if (e.keyCode == $.mobile.keyCode.ENTER) {
     console.log("キーワード:"+this.value);
     findContacts(this.value);
   }; //if key event
 }); // keypressイベント

  deviceReady = false;
  document.addEventListener("deviceready", function(){
    console.log = function(msg) {
      $("#log").append(msg + "<br />");
    };
    deviceReady = true;
    console.log("デバイス:" + device.platform + " " + device.version);

  } , false);

  window.setTimeout(function() {
    if (!deviceReady) {
      alert("Cordovaの初期化に失敗しました");
    }
  }, 5000);

}); // pageinit

