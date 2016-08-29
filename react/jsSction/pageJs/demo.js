import $ from 'jquery';

 
    var AnimEnd = 'animationend webkitAnimationEnd mozAnimationEnd MSAnimationEnd oAnimationEnd';
    //用css3的animation完成一个动画，当只有这个动画完成时才执行令一个事件，比如让动画保持在终止的状态或其他一些事件。
    var AtransitionEnd = 'transitionend webkitTransitionend mozTransitionend MSTransitionend oTransitionend';
    var nav = $('.nav');
    var navButton = $('.nav-el');
    var overlay = $('.overlay');

    /* On menu button click event */
    $(navButton).click(function(event){

        /* This conditional statement is here to prevent
        clicks on inactive buttons on IE10, as pointer-events
        cannot be applied on non-SVG elements */

        if ($(this).hasClass("inactive")) {

            event.preventDefault();

        } else {

            /* Remove old previous classes */
            $(navButton).removeClass('inactive_reverse active_reverse');
            $(overlay).removeClass('active active_reverse');

            /* Add classes on defined elements */
            $(this).siblings().addClass('inactive');
            $(this).addClass('active').find('span').fadeOut(1000);

            /* Activate related overlay */
            var o_target = $(this).data('id');
            $('#'+o_target).addClass('active');

            /* Prevent scrolling */
            $("body").addClass('noscroll');

        }

    // });

    /* On close button click event */
    $(".close").click(function(e){
        if( $('button', nav).hasClass('active') ){
            $('button', nav).find('span').delay(1000).fadeIn(1000);
        }
        /* Add *_reverse classes */
        $('.active', nav).removeClass('active').addClass('active_reverse');
        $('.inactive', nav).addClass('inactive_reverse');
        $(this).parent().addClass('active_reverse');
        /* Remove .noscroll and .inactive when animation is finished */
        $('.inactive_reverse').bind(AnimEnd, function(){

            $('body').removeClass('noscroll');
            $(navButton).removeClass('inactive');
            $('.inactive_reverse').unbind(AnimEnd);

        });

    });
});
