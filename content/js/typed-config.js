$(function(){
  $(".typed").typed({
    strings: ["a Husband.", "a Father.", "a Developer.", "Michael Erb"],
    // Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
    stringsElement: null,
    typeSpeed: 50,
    startDelay: 1800,
    backSpeed: 30,
    backDelay: 1000,
    loop: true,
    loopCount: 1,
    showCursor: false,
    cursorChar: "|",
  });
});
