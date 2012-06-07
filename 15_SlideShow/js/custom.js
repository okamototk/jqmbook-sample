$(document).on('pageshow', '#p-gallery', function(e){
  var currentPage = $(e.target);
  photoSwipeInstance = $("ul.gallery a", e.target).photoSwipe({},  currentPage.attr('id'));
}).on('pagehide', '#p-gallery', function(e){
  var currentPage = $(e.target),
  photoSwipeInstance = window.Code.PhotoSwipe.getInstance(currentPage.attr('id'));
  if (typeof photoSwipeInstance != "undefined" && photoSwipeInstance != null) {
    window.Code.PhotoSwipe.detatch(photoSwipeInstance);
  }
});
