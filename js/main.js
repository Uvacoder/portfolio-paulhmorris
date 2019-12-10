$( document ).ready(function() {
  
  $('body').fadeIn(1200);

  $('.name-div').slideDown(1000);
  $('.proj-div').delay(400).slideDown(1000);
  $('.git-div').delay(800).slideDown(1000);
  $('.email-div').delay(1200).slideDown(1000);
});

$('.git-div').hover(
  function() {
    $('.git').animate({"width":"0%"},200);
    $('.git-icon').animate({"opacity":"1","margin-left":"2rem"},250);
    },
    function() {
      $('.git').animate({"width":"100%"},300);
      $('.git-icon').animate({"opacity":"0","margin-left":"0"},300);
    }
);

$('.email-div').hover(
  function() {
    $('.email').animate({"height":"0%"},300);
    },
    function() {
      $('.email').animate({"height":"100%"},300);
    }
);

$(".proj-div").click(function (e) { 
  $('.proj-div h2').addClass('active');
  $('.name-div h2').removeClass('active');
  $(".main-wrapper").animate({"left":"-5000px"},700);
  $(".project-wrapper").css("display", "flex").animate({"right":"0"},700);
});

$(".name-div").click(function (e) { 
  $('.name-div h2').addClass('active');
  $('.proj-div h2').removeClass('active');
  $(".project-wrapper").animate({"right":"-5000px"},700);
  $(".main-wrapper").css("display", "flex").animate({"left":"0px"},700);
});

$('html').click(function(e) {console.log(e.target)})