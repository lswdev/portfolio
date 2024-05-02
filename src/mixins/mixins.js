
function inputAnimation() {
  window.$('.ring').mouseover(function(){
    window.$('.input-intro').fadeIn(800);
  });
}

function switchScreenAnimation() {

}

function pointerAnimation() {
  window.$(window).on('mousemove', (e) => {
    window.$(".cursor").css({
      top: e.pageY - 18 + "px",
      left: e.pageX - 18 + "px"
    });
  });
}

export { inputAnimation, switchScreenAnimation, pointerAnimation }