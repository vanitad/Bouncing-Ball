var btnStart = $('#btnStart');
var btnStop = $('#stop');
var radius = parseInt($('#circle').attr("r"));
var circle = $('#circle');
var height = $("#svg").height();
var width = $("#svg").width();
var extra = 5;
var newX = extra;
var newY = extra;
var animationFramReqId = undefined;


function start() {
  animationFramReqId = window.requestAnimationFrame(start);
  move();
}

function stop() {
  window.cancelAnimationFrame(animationFramReqId);
}

function move() {
  var cx = parseInt(circle.attr("cx"));
  var cy = parseInt(circle.attr("cy"));



  if (cy + radius >= height) {
    newY = -extra;
  }

  if (cx + radius  >= width) {
    newX = -extra;
  }

  if (cy - radius <= 0) {
    newY = extra;
  }
  if (cx - radius <= 0) {
    newX = extra;
  }


  cx += newX;
  cy += newY;
  circle.attr("cx", cx);
  circle.attr("cy", cy);
}
