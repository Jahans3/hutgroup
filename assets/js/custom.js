/**
 ** STICKY NAV
 **/
var header             = document.querySelector('.header'),
    header_height      = getComputedStyle(header).height.split('px')[0],
    title              = document.querySelector('.sticky-nav'),
    fix_class          = 'sticky';


function stickyScroll() {

  if( window.pageYOffset > header_height) {
    title.classList.add(fix_class);
  }

  if( window.pageYOffset < header_height) {
    title.classList.remove(fix_class);
  }
}

//scroll handler to toggle classes
window.addEventListener('scroll', stickyScroll, false);    

/**
 ** COUNTDOWN TIMER
 **/

function countdownTimer() {
  var timer = new Date(),
      hours = timer.getHours(),
      minutes = timer.getMinutes(),
      seconds = timer.getSeconds(),
      base_hours = 20, // base 0, so 0-23hr day
      base_minutes = 60,
      base_seconds = 60;

      //formatting
      //check to see if we need to append a "0" for...
      //...hours
      if (base_hours-hours < 10) {
        //if we hit 0 on countdown
        if (base_hours-hours < 4) {
          hours_str = (base_hours-hours+24).toString();
        }
        else {
          hours_str = "0" + (base_hours-hours).toString();
        }
      } else {
        hours_str = (base_hours-hours).toString();
      }
      //...minutes
      if (base_minutes-minutes < 10) {
        minutes_str = "0" + (base_minutes-minutes).toString();
      } else {
        minutes_str = (base_minutes-minutes).toString();
      }
      //...seconds
      if (base_seconds-seconds < 10) {
        seconds_str = "0" + (base_seconds-seconds).toString();
      } else {
        seconds_str = (base_seconds-seconds).toString();
      }

      //append to containers
      document.getElementById("c-hours").innerHTML = hours_str;
      document.getElementById("c-minutes").innerHTML = minutes_str;
      document.getElementById("c-seconds").innerHTML = seconds_str;
}
//refresh countdown timer every second
setInterval(countdownTimer, 1000);

/**
 ** IMAGE MODAL
 **/
 var modal_wrapper = document.getElementById("image-modal-wrapper");
 document.getElementById("imgview-modal").onclick = function() {
  modal_wrapper.classList.add("modal-active");
}
 document.getElementById("aview-modal").onclick = function() {
  modal_wrapper.classList.add("modal-active");
}
document.getElementById("image-modal-wrapper").onclick = function () {
  modal_wrapper.classList.remove("modal-active");
}

/**
 ** TABBED PANELS
 **/
var left_tab_title = document.getElementById("left-tab-title"),
    right_tab_title = document.getElementById("right-tab-title"),
    left_tab = document.getElementById("left-tab"),
    right_tab = document.getElementById("right-tab");

document.getElementById("left-tab-title").onclick = function() {
  right_tab_title.classList.remove("active");
  right_tab.classList.remove("active");
  left_tab_title.classList.add("active");
  left_tab.classList.add("active");
}
document.getElementById("right-tab-title").onclick = function() {
  left_tab_title.classList.remove("active");
  left_tab.classList.remove("active");
  right_tab_title.classList.add("active");
  right_tab.classList.add("active");
}