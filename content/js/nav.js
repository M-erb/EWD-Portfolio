$(document).ready(function(){
  //toggle nav when the hamburger is clicked
  $('#m_nav_btn').click(function(){
    $('.mobile_nav_options').toggleClass('mobile_nav_open');
    $('#m_nav_btn').toggleClass('close_btn');
  });
  //Close the nav after a link is clicked
  $('.mobile_nav_options a').click(function(){
    $('.mobile_nav_options').toggleClass('mobile_nav_open');
    $('#m_nav_btn').toggleClass('close_btn');
  });
  //close nav if anything else is clicked besides the menu
  $(document).on('click', function(event) {
    if (!$(event.target).closest('#main_nav').length) {
      $('.mobile_nav_options').removeClass('mobile_nav_open');
      $('#m_nav_btn').removeClass('close_btn');
    }
  });
});
