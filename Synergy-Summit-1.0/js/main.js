(function ($) {
    $(function () {

        $('#navbar-toggle').click(function () {
            $('nav ul').slideToggle();
        });

        $('#navbar-toggle').on('click', function () {
            this.classList.toggle('active');
        });

        $('nav ul li a:not(:only-child)').click(function (e) {
            $(this).siblings('.navbar-dropdown').slideToggle("slow");

            $('.navbar-dropdown').not($(this).siblings()).hide("slow");
            e.stopPropagation();
        });

        $('html').click(function () {
            $('.navbar-dropdown').hide();
        });
    });
})(jQuery);

document.addEventListener("DOMContentLoaded", function () {

    window.addEventListener('scroll', function () {

        if (window.scrollY > 200) {
            document.getElementById('navbar_top').classList.add('fixed-top');
            // add padding top to show content behind navbar
            navbar_height = document.querySelector('.navbar').offsetHeight;
            document.body.style.paddingTop = navbar_height + 'px';
        } else {
            document.getElementById('navbar_top').classList.remove('fixed-top');
            // remove padding top from body
            document.body.style.paddingTop = '0';
        }
    });
});

// Header JS Ends

$(function () {
    $("#tabs").tabs();
});

jQuery(document).ready(function () {
    jQuery('.contact-form .form-control').on('focus', function () {
        jQuery(this).parent().addClass('focused');
    }).on('blur', function () {
        jQuery(this).parent().removeClass('focused');
    }).on('input', function () {
        jQuery(this).parent().addClass('inputted');
    });

});

$(document).ready(function () {
    $(document).click(function (e) {
        if (!$(e.target).is('.navbar, .navbar *')) {
            $('.navbar-collapse').collapse('hide');
        }
    });
});

$(".donor-agencies").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    navText: ['<i class="fa-solid fa-angle-left"></i>', '<i class="fa-solid fa-angle-right"></i>'],
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 2,
        },
        1000: {
            items: 2,
        },
    },
});
jQuery('.latest-article').owlCarousel({
    loop: true,
    margin: 20,
    autoplay: false,
    dots: false,
    nav: true,
    responsiveClass: true,
    autoHeight: true,
    autoplayTimeout: 3000,
    smartSpeed: 800,
    animateOut: 'fadeOut',
    navText: ["<i class='fa-solid fa-arrow-left'></i>", "<i class='fa-solid fa-arrow-right'></i>"],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
})
$(".globalAdvisor").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    center: true,
    navText: ['<i class="fa-solid fa-angle-left"></i>', '<i class="fa-solid fa-angle-right"></i>'],
    dots: false,
    autoplay: false,
    autoplayTimeout: 3000,
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 2,
        },
        1000: {
            items: 3,
        },
    },
});