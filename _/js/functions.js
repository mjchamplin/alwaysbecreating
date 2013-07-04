// Browser detection for when you get desparate. A measure of last resort.
// http://rog.ie/post/9089341529/html5boilerplatejs

// var b = document.documentElement;
// b.setAttribute('data-useragent',  navigator.userAgent);
// b.setAttribute('data-platform', navigator.platform);

// sample CSS: html[data-useragent*='Chrome/13.0'] { ... }


// remap jQuery to $
(function($){


/* trigger when page is ready */
$(document).ready(function (){

			$.backstretch("http://farm4.staticflickr.com/3821/9050490511_d803f18049_h.jpg");

			// calculating heights of elements relative to browser size
		    $("header.intro").css("height",$(window).height()*.8+"px");
		    $("div.intro-top").css("padding-top",$("header.intro").height()*.3+"px");
   	        $("div.glass").css("top",$(window).height()/5 +"px");

   	        $("section#three").css("min-height",$(window).height()*1.5+"px");


   	        // background changes when scroll to anchor
			var t = $("#three").offset().top;

			/* $(document).scroll(function(){
			    if($(this).scrollTop() > t)
			    {   
			        $('body').css({"background-image":"url('http://farm9.staticflickr.com/8412/8863127454_cc8d40aab3_h.jpg')"});
			    }
			});*/

			$(document).scroll(function(){
			    if($(this).scrollTop() > t)
			    {   
			        $.backstretch("http://dl.dropbox.com/u/515046/www/garfield-interior.jpg");
			    }
			});

			var tt = $("#one").offset().top+75;

			$(document).scroll(function(){
			    if($(this).scrollTop() > tt)
			    {   
			        $('#sticky').css({"opacity":".9"});
			    }
			});



});


/* optional triggers

$(window).load(function() {
	
});

$(window).resize(function() {
	
});

*/


})(window.jQuery);