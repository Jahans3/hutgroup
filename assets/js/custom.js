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

//scroll handler to toggle classes.
window.addEventListener('scroll', stickyScroll, false);    

window.onload = function() {
    // Countdown timer
     var clock = document.getElementById("countdown-wrapper"),
            targetDate = new Date(2050, 00, 01); // Jan 1, 2050
     
    clock.innerHTML = countdown(targetDate).toString();

    setInterval(function(){
        clock.innerHTML = countdown(targetDate).toString();
    }, 1000);
}
