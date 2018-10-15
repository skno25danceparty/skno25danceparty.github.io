var MOBILE_WIDTH = 768;
var FRAME_RATE = 1/60; //fps
var ANIMATION_DURATION = 0.3 // time in seconds

var prevYPosition = 0;

window.addEventListener("load", () => {
  onResize();

  var navDotRadio = document.querySelectorAll(".nav-dot-radio");
  Array.prototype.forEach.call(navDotRadio, (radio) => {
    radio.addEventListener("click", () => {
      var id = radio.getAttribute("id");
      if (id === "up") {
        scrollToYPosition(window.innerHeight, 0);
      } else {
        scrollToYPosition(0, window.innerHeight);
      }
    });
  });

});

window.addEventListener("resize", onResize);

function onResize() {
  scrollToYPosition(0, 0);
  if (window.innerWidth > MOBILE_WIDTH) {
    window.addEventListener("scroll", autoScroll);
  } else {
    window.removeEventListener("scroll", autoScroll);
  }
}

function autoScroll() {
    var topDot = document.querySelector(".nav-dot-radio#up");
    var bottomDot = document.querySelector(".nav-dot-radio#down");
    if (!topDot || !bottomDot) {
      return;
    }
    var currYPosition = document.body.getBoundingClientRect().top;

    if (currYPosition - prevYPosition > 0) {
      checkRadio(topDot);
      scrollToYPosition(window.innerHeight, 0);
    } else {
      checkRadio(bottomDot);
      scrollToYPosition(0, window.innerHeight);
    }
    prevYPosition = currYPosition;
}

function checkRadio(radioElem) {
  if (!radioElem) {
    return;
  }
  radioElem.checked = true;
}

function scrollToYPosition(startY, endY) {
    // var distance = endY - startY;
    // var time = 0;
    //
    // function smoothScroll() {
    //   time = time + FRAME_RATE;
    //   var progress = (time) / ANIMATION_DURATION;
    //
    //   if (progress < 1) {
    //     window.scrollTo(0, startY + (progress * distance));
    //     window.requestAnimationFrame(smoothScroll);
    //   } else {
    //     window.scrollTo(0, endY);
    //   }
    // }
    //
    // window.requestAnimationFrame(smoothScroll);

    window.scrollTo(0, endY);
}
