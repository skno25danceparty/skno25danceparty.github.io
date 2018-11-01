window.addEventListener("load", navDotListener);

function navDotListener() {
  var topDot = document.querySelector(".nav-dot-radio#up");
  var bottomDot = document.querySelector(".nav-dot-radio#down");

  window.addEventListener("scroll", () => {
    var top = Math.abs(document.body.getBoundingClientRect().top);
    var windowHeight = window.innerHeight;

    if (top >= 3 * windowHeight / 4) {
      bottomDot.checked = true;
    } else {
      topDot.checked = true;
    }

  });

  topDot.addEventListener("click", () => {
    documentScroll(Math.abs(document.body.getBoundingClientRect().top), 0);
  });

  bottomDot.addEventListener("click", () => {
    documentScroll(Math.abs(document.body.getBoundingClientRect().top), window.innerHeight);
  })
}

function documentScroll(from, to) {

  var currentIteration = 0;
  var distance = to - from;

  /**
   * get total iterations
   * 60 -> requestAnimationFrame 60/second
   * second parameter -> time in seconds for the animation
   **/
  var animIterations = Math.round(60 * 0.3);

  (function scroll() {
      var value = easeOutCubic(currentIteration, from, distance, animIterations);
      window.scrollTo(0, value);
      currentIteration++;
      if (currentIteration < animIterations) {
          requestAnimationFrame(scroll);
      }
  })();


}

//example easing functions
function linearEase(currentIteration, startValue, changeInValue, totalIterations) {
  return changeInValue * currentIteration / totalIterations + startValue;
}
function easeOutCubic(currentIteration, startValue, changeInValue, totalIterations) {
  return changeInValue * (Math.pow(currentIteration / totalIterations - 1, 3) + 1) + startValue;
}
