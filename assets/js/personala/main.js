/*
 * Welcome to your personala's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you require will output into a single css file (app.css in this case)
import '../../css/personala/fonts.css';
import '../../css/personala/helpers.css';
import '../../css/personala/plugins.css';
import '../../css/personala/style.css';

import $ from 'jquery';
import './../../../node_modules/jquery-migrate/dist/jquery-migrate';
import './../../../node_modules/popper.js/dist/popper';
import './isotope.pkgd.min';
import 'bootstrap';
import './../../../node_modules/scrollit/scrollIt';
import './animated_headline';
import './jquery_waypoints';
import './../../../node_modules/jquery.counterup/jquery.counterup';
import './../../../node_modules/owl.carousel/dist/owl.carousel';
import './../../../node_modules/magnific-popup/dist/jquery.magnific-popup';
import './../../../node_modules/jquery.stellar/jquery.stellar';
import './../../../node_modules/bootstrap-validator/dist/validator';

$(function () {
    const wind = $(window);
    
    // scrollIt
    $.scrollIt({
        upKey: 38,                // key code to navigate to the next section
        downKey: 40,              // key code to navigate to the previous section
        easing: 'swing',          // the easing function for animation
        scrollTime: 600,          // how long (in ms) the animation takes
        activeClass: 'active',    // class given to the active nav element
        onPageChange: null,       // function(pageIndex) that is called when page is changed
        topOffset: -63            // offste (in px) for fixed top navigation
    });
    
    // navbar scrolling background
    wind.on("scroll", function () {

        const bodyScroll = wind.scrollTop(),
            navbar = $(".navbar"),
            logo = $(".navbar .logo> img");

        if (bodyScroll > 100) {

            navbar.addClass("nav-scroll");
            logo.attr('src', 'img/logo-dark.png');

        } else {

            navbar.removeClass("nav-scroll");
            logo.attr('src', 'img/logo-light.png');
        }
    });
    
    // progress bar
    wind.on('scroll', function () {
        $(".skills-progress span").each(function () {
            const bottom_of_object =
                $(this).offset().top + $(this).outerHeight();
            const bottom_of_window =
                $(window).scrollTop() + $(window).height();
            const myVal = $(this).attr('data-value');
            if (bottom_of_window > bottom_of_object) {
                $(this).css({
                    width: myVal
                });
            }
        });
    });

    // sections background image from data background
    const pageSection = $(".bg-img, section");
    pageSection.each(function () {

        if ($(this).attr("data-background")) {
            $(this).css("background-image", "url(" + $(this).data("background") + ")");
        }
    });

    // === owl-carousel === //

    // Testimonials owlCarousel
    $('.testimonials .owl-carousel').owlCarousel({
        items: 1,
        loop: true,
        margin: 15,
        mouseDrag: false,
        autoplay: true,
        smartSpeed: 500
    });

    // Blog owlCarousel
    $('.blog .owl-carousel').owlCarousel({
        loop: true,
        margin: 30,
        mouseDrag: false,
        autoplay: true,
        smartSpeed: 500,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            700: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });

    // magnificPopup
    $('.gallery').magnificPopup({
        delegate: '.link',
        type: 'image',
        gallery: {
            enabled: true
        }
    });

    // countUp
    $('.numbers .count').counterUp({
        delay: 10,
        time: 1500
    });
});


// === window When Loading === //

$(window).on("load", function () {

    const wind = $(window);

    // Preloader
    $(".loading").fadeOut(500);


    // stellar
    wind.stellar();
    
    // isotope
    const $gallery = $('.gallery');

    // $gallery.isotope({
    //     // options
    //     itemSelector: '.items'
    // });

    // filter items on button click
    $('.filtering').on('click', 'span', function () {

        const filterValue = $(this).attr('data-filter');
        $gallery.isotope({filter: filterValue});
        $(this).addClass('active').siblings().removeClass('active');
    });

    // contact form validator
    const $contact = $('#contact-form');
    $contact.validator();

    $contact.on('submit', function (e) {
        if (!e.isDefaultPrevented()) {
            const url = "contact.php";

            $.ajax({
                type: "POST",
                url: url,
                data: $(this).serialize(),
                success: function (data) {
                    const messageAlert = 'alert-' + data.type;
                    const messageText = data.message;

                    const alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>';
                    if (messageAlert && messageText) {
                        $contact.find('.messages').html(alertBox);
                        $contact[0].reset();
                    }
                }
            });
            return false;
        }
    });

});

$(document).ready(function() {
    $('[data-toggle="popover"]').popover();
});