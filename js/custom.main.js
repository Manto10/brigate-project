var  mybtn = document.getElementById("myBtn");

window.onscroll= function(){scrollfunction()};
function scrollfunction(){
    if(document.body.scrollTop>20 || document.documentElement.scrollTop>20){
      mybtn.style.display ="block";
    }else{
      mybtn.style.display ="none";
    }

    
}

function scrollbtn(){
      document.body.scrollTop=0;
      document.documentElement.scrollTop=0;
    }

    $(document).ready(function() {
      // grab the initial top offset of the navigation 
         var stickyNavTop = $('.primaryMenu').offset().top;
         
         // our function that decides weather the navigation bar should have "fixed" css position or not.
         var stickyNav = function(){
          var scrollTop = $(window).scrollTop(); // our current vertical position from the top
               
          // if we've scrolled more than the navigation, change its position to fixed to stick to top,
          // otherwise change it back to relative
          if (scrollTop > stickyNavTop) { 
              $('.primaryMenu').addClass('sticky');
          } else {
              $('.primaryMenu').removeClass('sticky'); 
          }
      };

      stickyNav();
      // and run it again every time you scroll
      $(window).scroll(function() {
          stickyNav();
      });


      //counter up jquery

      jQuery(document).ready(function($) {
        $('.counter').counterUp({
            delay: 10,
            time: 1000
        });
    });
  });

  /*
  var myNav = document.getElementById("primaryMenu");
  window.onscroll = function(){
      if(window.pageYOffset>100){
          myNav.style.position= "fixed";
          myNav.style.top= 0;
      }else{
          myNav.style.position ="absolute;"
          myNav.style.top= 100;

      }
  } 
  */