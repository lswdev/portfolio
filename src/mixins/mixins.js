
function inputAnimation() {
  window.$('.ring').mouseover(function(){
    window.$('.input-intro > input').fadeIn(800);
  });
  // window.$('.input-intro > input').css('','');
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