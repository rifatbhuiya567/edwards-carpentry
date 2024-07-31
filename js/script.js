(function() {
    "use-strict";

    /**
     * Window Load Function
    */
    $(window).load(function(){
        $(".btt i").hide();
    });

    /**
     * Window Scroll Function
    */
    $(window).scroll(function(){
        let scrolling = $(this).scrollTop();

        if(scrolling > 80) {
            $(".main-header").addClass("shrink-header")
        }else{
            $(".main-header").removeClass("shrink-header")
        }
    
        if( scrolling > 200){
            $(".btt i").fadeIn(500);
        }
        else{
            $(".btt i").fadeOut(500);
        }
    });
      
    /**
     * 
     * BTT Click Action
    */
    $(".btt i").click(function(){
        $("html, body").animate({
            scrollTop:0
        },500)
    });

    /**
     * Responsive Toggle Dropdown
    */
    $(".toggle-dropdown-one").hide();
    $(".toggle-control-one").on("click", function () {
        $(".toggle-dropdown-one").toggle(500);
        $(".toggle-control-one").toggleClass("active");
        $(".dropdown-one-arrow").toggleClass("toggled");
    });

    $(".toggle-dropdown-two").hide();
    $(".toggle-control-two").on("click", function () {
        $(".toggle-dropdown-two").toggle(500);
        $(".toggle-control-two").toggleClass("active");
        $(".dropdown-two-arrow").toggleClass("toggled");
    });
}(jQuery))