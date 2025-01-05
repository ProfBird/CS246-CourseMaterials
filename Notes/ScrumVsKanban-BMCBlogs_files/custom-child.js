(function($) {
    // Progress Bar JS started
        
        function addProgerssBarForScroll(){
            if($('body').hasClass('sticky-active')){
                //creating HTML
                var htmlProgerssBar = '<progress id="blog-progress-bar" class="blog-progress-bar" max="100" style="width: 100%;height: 5px;border: none;padding: 0px;margin: 0px;position: fixed;left: 0px;background-color: #ffffff00;" value="0"></progress>';
                //Appending HTML in sticky header
                $('#sticky_header').append(htmlProgerssBar); 
                          
                if($('#blog-progress-bar').length > 0) {
                    // Removing scroll event listenr to avoide html append
                    document.removeEventListener("scroll", addProgerssBarForScroll);
                    //Finding document height
                    var getDocHeight = function() {
                        var D = document;
                        return Math.max(
                            D.body.scrollHeight, D.documentElement.scrollHeight,
                            D.body.offsetHeight, D.documentElement.offsetHeight,
                            D.body.clientHeight, D.documentElement.clientHeight
                        )
                    }
                    window.onscroll = function(){
                        var scrollTop = $(window).scrollTop();
                        var winheight= window.innerHeight || (document.documentElement || document.body).clientHeight;
                        var winheight = winheight;
                        var docheight = getDocHeight();
                        var scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;                        
                        var trackLength = docheight - winheight;
                        var pctScrolled = scrollTop/trackLength * 100; // gets percentage scrolled (ie: 80 or NaN if tracklength == 0)
                        window.document.getElementById("blog-progress-bar").value = pctScrolled;
                       
                    }; 

                } 
            }                    
        }           
        document.addEventListener("scroll", addProgerssBarForScroll);                 
               
    // Progress Bar JS ends 

   
    
    })(jQuery);


// WEB-8639 code starts
    function deferResizeHeader(method) {
                if (window.jQuery)
                    method();
                else
                    setTimeout(function() { defer(method) }, 1000);
        }
        
        function resizeHeader(){ 
            jQuery.fn.clearBlurTwo = function() {
                jQuery(this).each(function (i, elem){              
                    var $elem = jQuery(elem);                             		
                    var height = 0;			
                    for(i=0; i < (elem.children.length); i++){
                        height = height + (elem.children[i].offsetHeight);                                     
                    }	
                    $elem.css('height', 'auto');
                    var isOdd = height % 2;
                    height = isOdd ? height - 1 : height;                
                    $elem.css( "height", height );
                });
            };
            jQuery('.vce-featured-info').clearBlurTwo();
            
            jQuery(window).resize(function (){
                jQuery('.vce-featured-info').clearBlurTwo();
            })       
        } 
    
        if((document.querySelectorAll('.vce-featured-info').length) > 0){
            deferResizeHeader(resizeHeader)
        }

            // WEB-8639 code Ends