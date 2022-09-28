$(document).foundation();


$(document).ready(function() {
  /*$("html").niceScroll({styler:"fb",cursorcolor:"#000"});*/
	
	    
	
	$(".main-portfolio .wc_video a").each(function(index, element) {
		var file = $(this).attr('href');   
       // var file = $('input[type="file"]').val();
		var exts = ['png','jpg','jpeg','gif'];
		// first check if file field has any value
		if ( file ) {
		  // split file name at dot
		  var get_ext = file.split('.');
		  // reverse name to check extension
		  get_ext = get_ext.reverse();
		  // check file type is valid as given in 'exts' array
		  if ( $.inArray ( get_ext[0].toLowerCase(), exts ) > -1 ){
			$(this).parent('.wc_video').removeClass('wc_video');
			//$(this).removeClass('youtube');
		  } 
		}
    });   
    $(".main-portfolio .wc_video a").addClass("youtube");
	
	$('#rotatescroll').tinycircleslider({ interval: true, dotsSnap: true, dotsHide: false });
	
	
    //Examples of how to assign the Colorbox event to elements
	$(".group").colorbox({rel:'group', maxWidth:"100%", maxHeight:"90%"});
	$(".youtube").colorbox({iframe:true, innerWidth:640, innerHeight:390, maxWidth:"100%", maxHeight:"90%"});
	$(".inline").colorbox({inline:true, innerWidth:450, innerHeight:390, maxWidth:"100%", maxHeight:"90%"});
	
	
	
	
 // Feature Page 
    $(".feature-menu ul li").each(function(){
			$(this).find("a").click(function(){
			var hrf = $(this).attr("href");
				$('html, body').animate({
					scrollTop: $(hrf).offset().top
				}, 3000);
			});	
			});
			
		$('.arrow-down').click(function(){
		  	  var hrf = $(this).attr("href");
			  $('html, body').animate({ scrollTop: $(hrf).offset().top }, 1200);
			return false;
		  });	
			
 
	


    
	
	
	 $(".faq-question a").click(function(e) {
              $(this).toggleClass("active");
        });
	
$('.search-form div').click(function(){
		  if ($(".search-form div").hasClass("close_icon")) {
            $('.subscribe_form').slideUp(250);
			$(this).removeClass("close_icon").addClass("ser_icon");
			
        } else {
            $('.subscribe_form').slideDown(250);
			$(this).removeClass("ser_icon").addClass("close_icon");

			
        }
		
		
});

// wow = new WOW(
//       {
//         animateClass: 'animated',
//         offset:       100,
// 		iteration: 1,
//         callback:     function(box) {
//           console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
//         }
//       }
//     );
//     wow.init();
// 	
// 	
// 	
// 	
// 	
// 	
// 	
// 	});
//   



$('.home-slider').slick({
		dots: true,
        speed: 2000,
		arrows: false,
        slidesToShow: 1,
		autoplay: true,
		touchMove: true,
		 slide: 'li',
		
     });

$('.gallery-slider').slick({
		dots: true,
        speed: 2000,		
        slidesToShow: 1,
		autoplay: true,
		touchMove: true,
		 slide: 'li',
		
     });	
	 

	 
$('.motor-slider').slick({
  dots: false, 
  speed: 1500,
  slidesToShow: 4,
  autoplay: true,
  slidesToScroll: 1,
  slide: 'li',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 642,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }   
  ]
});	 









