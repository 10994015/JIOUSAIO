
$(function(){

  var H = $('.jiousaio').offset().top -500;
  // alert(H);

  $(window).scroll(function(){

    var N = $(window).scrollTop();
    console.log(N);

    if(N > H){
      $('.jiousaio').animate({bottom:'0',opacity:'1'},500);
    }
    
    if(N > 500){
       $('.toTop').animate({opacity:'1'},10);
    }
    if(N < 400){
       $('.toTop').animate({opacity:'0'},10);
    }
      if(N > 700){
      $('.header').animate({opacity:'1',transition: '.2s'},10);
    }
     if(N < 650){
      $('.header').animate({opacity:'0',transition: '.0s'},10);
    }
   
    
    if(N > 800){
      $('.pic1').animate({bottom:'0',opacity:'1'},500);
    }
    if(N > 1300){
      $('.pic2').animate({bottom:'0',opacity:'1'},500);
    }
    if(N > 1500){
      $('.portfolio').animate({bottom:'0',opacity:'1'},500);
    }
    if(N > 2400){
      $('.pic3').animate({bottom:'0',opacity:'1'},500);
    }
      if(N > 2500){
      $('.pic4').animate({bottom:'0',opacity:'1'},500);
    }


  })

  
  
})







