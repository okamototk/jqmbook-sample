color = ['rgb(255,0,0)','rgb(0,255,0)','rgb(0,0,255)','rgb(255,255,0)','rgb(255,0,255)'];

$(document).on("pageshow", "#p-touchpaint", function(){
  $("#canvas").html('<canvas id="drawable" width="'+window.innerWidth+'" height="'+window.innerHeight+'" />');
  canvas = document.getElementById('drawable');
  ctx = canvas.getContext('2d');
  
  $("#drawable").on("touchmove", function(e){
    ratioY = canvas.height / canvas.clientHeight;
    ratioX = canvas.width / canvas.clientWidth;
    e.preventDefault();
    $.each(e.originalEvent.touches, function(idx){
      x = (this.pageX - canvas.offsetLeft) * ratioX;
      y = (this.pageY - canvas.offsetTop) * ratioY;
      ctx.beginPath();
      ctx.fillStyle = color[idx];
      ctx.arc(x, y, 10, 0 * Math.PI / 180, 360 * Math.PI / 180, true);
      ctx.fill();
    });
  });
});
