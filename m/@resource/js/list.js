	$(window).scroll(function () {
		 var scrollValue = $(document).scrollTop(); console.log(scrollValue); 
		 var archTop = $('.arch-arti').offset().top;
		});
		$(function(){
			 initPage();
			scrollJs();
			naviActi();
		});

		function initPage(){

  /*
  * Used in multiple functions
  */
  let docWidth = $(window).width();

  /*
  * Header scroll down/up function
  * https://codepen.io/josiahruddell/pen/piFfq
  * with edits to control timing and not fire on every scroll.
  */
  $(function(){
	    var lastScrollTop = 0, 
	        delta = 30,
	        header = $('header'),
	        goUp = $('#go-up'),
	        wentUp = true,
	        wentDown = false;
	    $(window).scroll(function(event){

	      if($('nav.mobile').hasClass('open')){
	        return false;
	      }
	      var st = $(this).scrollTop();

	      // if(Math.sign(st) <= 0){
	      //   return false;
	      // }
	       
	      if(Math.abs(lastScrollTop - st) <= delta)
	        return;

	      //console.log(st+' '+lastScrollTop);
	      
	      if (st > lastScrollTop){
	        // downscroll code
	        if(wentUp){
	          // header.addClass('js-hide');
	          // goUp.removeClass('js-hide');
	        }
	        wentUp = false;
	        wentDown = true;
	      } else {
	        // upscroll code
	        if(wentDown){
	          // header.removeClass('js-hide');
	          // goUp.addClass('js-hide');
	        }
	        wentUp = true;
	        wentDown = false;
	      }
	      lastScrollTop = st;
	    });
	  });

	  let goUp = $('#go-up');

	  goUp.click(function(e){
	    $('html,body').animate({scrollTop:0},500);
	    e.preventDefault();
	  })
		};

		let menuBtn = $('.m-menu-btn');

		function naviActi(){
		  menuBtn.click(function(e){
		    // $(this).toggleClass('on');
		    $('nav').toggleClass('active');
		    $('body').toggleClass('active');
		  });
		};
		function scrollJs(){
		  var winW = $(window).outerWidth();
		  var startchange = $('.color_change-view');
		  var offset = startchange.offset();
		  var headHeight = $('header').outerHeight() / 2;
		    $(document).scroll(function() { 
		      scroll_start = $(this).scrollTop();
		      if(scroll_start >= offset.top - headHeight) {
		        $('header').addClass('color_change-view');
		      } else if(scroll_start < offset.top - headHeight) {
		        $('header').removeClass('color_change-view');
		      };
		    });
		  }