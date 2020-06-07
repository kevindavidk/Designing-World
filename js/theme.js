;(function($) {
    "use strict";
    
	//* mainNavbar
    function mainNavbar(){
        if ( $('#fixt_navbar').length ){ 
            var nav_offset_top = $('#fixt_navbar').offset().top; 
            if ( nav_offset_top == 0 ){
                nav_offset_top = 1
            }
             $('#fixt_navbar').affix({
                offset: {
                    top: nav_offset_top,
                }
            }); 
        };
    }; 
    
    //* Blog Heding Carosel
    function recentBlog(){
        if ( $('.recent_blog_carosel').length ){
            $('.recent_blog_carosel').owlCarousel({
                loop:true, 
                autoplay:false,
                margin: 30,
                items:1,
                center:true,
                nav:true,
                stagePadding: 300,
                smartSpeed: 1000,
                navText: ['<i class="lnr lnr-arrow-left"></i>','<i class="lnr lnr-arrow-right"></i>'], 
                responsiveClass:true,
                responsive:{
                    0:{
                        items:1,
                        margin: 0,
                        stagePadding: 0,
                    }, 
                    700:{
                        items:1,
                        stagePadding: 100,
                    },
                    767:{
                        items:1,
                        stagePadding: 150,
                    },
                    1200:{
                        items:1,
                        stagePadding: 300,
                    }
                }
                
            });
        };
    };    
    //* Tranding News Carosel
    function trandingNews(){
        if ( $('.tranding_news').length ){
            $('.tranding_news').owlCarousel({
                loop:true, 
                autoplay:false,
                margin: 30,
                items:3,
                center:true, 
                smartSpeed: 1000,  
                responsiveClass:true,
                responsive:{
                    0:{
                        items:1,
                        margin: 0,
                    }, 
                    580:{
                        items:2, 
                        center:false, 
                    },
                    991:{
                        items:3, 
                    }, 
                },
            });
        };
    };
    
    //* Tranding News Carosel
    function trandingFour(){
        if ( $('.tranding_news-2').length ){
            $('.tranding_news-2').owlCarousel({
                loop:true, 
                autoplay:false,
                margin: 30,
                items:4, 
                smartSpeed: 1000,  
                responsiveClass:true,
                responsive:{
                    0:{
                        items:1, 
                    },
                    580:{
                        items:2, 
                    },  
                    991:{
                        items:3, 
                    },
                    1192:{
                        items:4, 
                    }, 
                },
            }); 
        };
    };
    //* Tranding News Carosel
    function trandingOne(){
        if ( $('.tranding_news_one').length ){
            $('.tranding_news_one').owlCarousel({
                loop:true, 
                autoplay:false,
                margin: 30,
                items:4, 
                smartSpeed: 1000,  
                responsiveClass:true, 
                navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
                responsive:{
                    0:{
                        items:1, 
                    },
                    580:{
                        items:2, 
                    },  
                    991:{
                        items:3, 
                    },
                    1192:{
                        items:4, 
                    }, 
                },
            }); 
        };
    };
    
    //* Tranding News Carosel
    function recentNews(){
        if( $('#masonari_news, .projects_filters li, #portfolios').length ){
            $('#masonari_news').imagesLoaded(function(){
                $('#masonari_news').isotope({
                    itemSelector: '.news',
                    layoutMode: 'masonry',             
                })
            }); 
            
            // Activate isotope in container
            $("#portfolios").imagesLoaded( function() {
                $("#portfolios").isotope({
                    itemSelector: ".portfolio",
                    layoutMode: 'masonry',   
                }); 
            }); 
            // Add isotope click function
            $(".projects_filters li").on('click',function(){
                $(".projects_filters li").removeClass("active");
                $(this).addClass("active");

                var selector = $(this).attr("data-filter");
                $("#portfolios").isotope({
                    filter: selector,
                    animationOptions: {
                        duration: 450,
                        easing: "linear",
                        queue: false,
                    }
                });
                return false;
            });
        }
    } 
    
    //* Blog Heding Carosel
    function protfoliCarosel(){
        if ( $('.protfoli_carosel').length ){
            $('.protfoli_carosel').owlCarousel({
                loop:true, 
                autoplay:false, 
                items:4.5,
                nav:true, 
                smartSpeed: 1000,
                navText: ['<i class="lnr lnr-arrow-left"></i>','<i class="lnr lnr-arrow-right"></i>'], 
                responsiveClass:true,
                responsive:{
                    0:{
                        items:1, 
                    },
                    400:{
                        items:2, 
                    }, 
                    700:{
                        items:3,   
                    },
                    991:{
                        items:4.5, 
                    }, 
                },
            });
        };
    };
    
    //* Blog Heding Carosel
    function protfoliCaroseltow(){
        if ( $('.protfoli_carosel_tow').length ){
            $('.protfoli_carosel_tow').owlCarousel({
                loop:true, 
                autoplay:false, 
                items:4, 
                nav:true, 
                smartSpeed: 1000,
                navText: ['<i class="lnr lnr-arrow-left"></i>','<i class="lnr lnr-arrow-right"></i>'],
                
                responsiveClass:true,
                responsive:{
                    0:{
                        items:1, 
                    },
                    400:{
                        items:2, 
                    }, 
                    700:{
                        items:3,   
                    },
                    991:{
                        items:4, 
                    }, 
                },
            });
        };
    };
    
    //* nav_searchFrom
    function searchFrom(){
        if ( $('.nav_searchFrom').length ){  
             $('.nav_searchFrom').on('click',function(){
                $('.searchForm').toggleClass('show');
                return false
            });
            $('.form_hide').on('click',function(){
                $('.searchForm').removeClass('show')
            });
        };
    };
    
    //* Flexslider 
    function flexSlider(){
        if ( $('.jumboo_carousel').length ){  
              // Responsive
              function getGridSize() {
                return (window.innerWidth < 700) ? 1 : 
                       (window.innerWidth < 1000) ? 2 : 
                       (window.innerWidth < 1366) ? 3 : 4;
              };  
            $('.jumboo_carousel').flexslider({
                animation: "slide",
                controlNav: false, 
                animationLoop: false,
                slideshow: false,
                itemWidth: 400, 
                itemMargin: 0,
                maxItems: 4, 
                asNavFor: '.jumboo_slider',  
                minItems: getGridSize(),
                maxItems: getGridSize(),
                
            }); 
            $('.jumboo_slider').flexslider({
                animation: "fade",
                controlNav: false, 
                animationLoop: false,
                slideshow: false, 
            });
        };
    }; 
   
    //*  Main slider js 
    function home_main_slider(){
        if ( $('.slider_inner').length ){
            $('.slider_inner').camera({
                loader: true,
                navigation: true,
                autoPlay:false,
                time: 4000,
                loader: 'bar',
                playPause: false,
                pagination: false,
                thumbnails: false,
                overlayer: true,
                hover: false,  
                minHeight: '500px',
                barPosition: 'top',
            }); 
        }
    }
    //*  Main slider js 
    function home_main_slider2(){
        if ( $('.slider_inner_home').length ){
            $('.slider_inner_home').camera({
                loader: true,
                navigation: true,
                autoPlay:false,
                time: 4000,
                loader: 'bar',
                playPause: false,
                pagination: false,
                thumbnails: false,
                overlayer: true,
                hover: false,  
                minHeight: '700px',
                barPosition: 'top',
            }); 
        }
    }
     
    //* TnCaros Carosel
    function tnCaros(){
        if ( $('.tn_caros, .twitter_items').length ){
            $('.tn_caros, .twitter_items').owlCarousel({
                loop:true, 
                autoplay:false,  
                items:1,
                center:true,
                smartSpeed: 1000,  
            });
        };
    };
	
    //* Text-scrolling
    function textScrolling(){
        if ( $('.webTicker').length ){ 
			$(".webTicker").webTicker({ 
				duplicate:true,  
				startEmpty:false,  
				transition: "ease",
			}); 
        };
    };
    
    //* You Video
    function YouVideo(){
        if ( $('.video').length ){ 
			$(".video").simplePlayer({ 
            }); 
        };
    }; 
    //* You Audio
    function YouAudio(){
        if ( $('.audio-player').length ){  
            $(".audio-player").audioPlayer({
                mp3Src: "../vendors/Audio-Player/src/audio.mp3", 
                autoPlay: false
            });
        };
    }; 
    
    //* Magnificpopu
    function Magnificpopu(){
        if ( $('.popup').length ){   
            $('.popup').magnificPopup({
                type: 'inline', 
                fixedContentPos: false,
                fixedBgPos: true, 
                overflowY: 'auto', 
                closeBtnInside: true,
                preloader: false, 
                midClick: true,
                removalDelay: 300,
                mainClass:  'my-mfp-slide-bottom'
            });
        };
    };    
    
    // video Popup
    if ($("#video-item").length > 0){
        $("#video-item").magnificPopup({
            type: "iframe"
        });
    }
    
    /*Function Calls*/  
    mainNavbar ();
    new WOW().init(); 
    recentBlog ();
    trandingNews ();
    recentNews ();
    protfoliCarosel ();
    searchFrom ();
    protfoliCaroseltow ();
    flexSlider ();
    trandingFour ();
    home_main_slider ();
    home_main_slider2 ();
    tnCaros ();
	textScrolling ();
    YouVideo ();   
    YouAudio ();
    Magnificpopu ();
    trandingOne ();
})(jQuery);