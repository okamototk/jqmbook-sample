$(document).on('pageshow', '[data-role=page]', function(e) {
  var src = '//www.facebook.com/plugins/like.php?href=';
  src += encodeURIComponent(location.href);
  src += '&send=false&layout=button_count&width=200&show_faces=true&action=like&colorscheme=light&height=21';
  $('.like-btn').attr('src', src);
});
