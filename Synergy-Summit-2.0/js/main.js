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

$("ul.press-tabs li").last().addClass("tab_last"), $(".footprint-section").length > 0 && ($description = $(".footprint-section .description"), $(".st1 ,.st0 ,.st4").hover(function () {
    $description.addClass("active");
    if ($('html').attr('lang') == "en") {
        var e = {
            AN: "Andaman and Nicobar",
            AP: "Andhra Pradesh",
            AR: "Arunachal Pradesh",
            AS: "Assam",
            BR: "Bihar",
            CD: "Chandigarh",
            CH: "Chhattisgarh",
            DHV: "Dadar & Nagar Haveli",
            DD: "Daman & Diu",
            DL: "Delhi",
            GA: "Goa",
            GJ: "Gujarat",
            HR: "Haryana",
            HP: "Himachal Pradesh",
            JK: "Jammu and Kashmir",
            LK: "Ladakh",
            JH: "Jharkhand",
            KA: "Karnataka",
            KL: "Kerala",
            LKD: "Lakshadweep",
            MP: "Madhya Pradesh",
            MH: "Maharashtra",
            MN: "Manipur",
            MG: "Meghalaya",
            MZ: "Mizoram",
            NG: "Nagaland",
            OD: "Odisha",
            PD: "Puducherry",
            PN: "Punjab",
            RJ: "Rajasthan",
            SK: "Sikkim",
            TN: "Tamil Nadu",
            TL: "Telangana",
            TP: "Tripura",
            UP: "Uttar Pradesh",
            UK: "Uttarakhand",
            WB: "West Bengal"
        };

    } else {
        var e = {
            AN: "à¤…à¤‚à¤¡à¤®à¤¾à¤¨ à¤”à¤° à¤¨à¤¿à¤•à¥‹à¤¬à¤¾à¤°",
            AP: "à¤†à¤‚à¤§à¥à¤° à¤ªà¥à¤°à¤¦à¥‡à¤¶",
            AR: "à¤…à¤°à¥à¤£à¤¾à¤šà¤² à¤ªà¥à¤°à¤¦à¥‡à¤¶",
            AS: "à¤…à¤¸à¤®",
            BR: "à¤¬à¤¿à¤¹à¤¾à¤°",
            CD: "à¤šà¤‚à¤¡à¥€à¤—à¤¢à¤¼",
            CH: "à¤›à¤¤à¥à¤¤à¥€à¤¸à¤—à¤¢à¤¼",
            DHV: "à¤¦à¤¾à¤¦à¤° à¤”à¤° à¤¨à¤—à¤° à¤¹à¤µà¥‡à¤²à¥€",
            DD: "à¤¦à¤®à¤¨ à¤”à¤° à¤¦à¥€à¤µ",
            DL: "à¤¦à¤¿à¤²à¥à¤²à¥€",
            GA: "à¤—à¥‹à¤µà¤¾",
            GJ: "à¤—à¥à¤œà¤°à¤¾à¤¤",
            HR: "à¤¹à¤°à¤¿à¤¯à¤¾à¤£à¤¾",
            HP: "à¤¹à¤¿à¤®à¤¾à¤šà¤² à¤ªà¥à¤°à¤¦à¥‡à¤¶",
            JK: "à¤œà¤®à¥à¤®à¥‚ à¤”à¤° à¤•à¤¶à¥à¤®à¥€à¤°",
            LK: "à¤²à¤¦à¥à¤¦à¤¾à¤–",
            JH: "à¤à¤¾à¤°à¤–à¤‚à¤¡",
            KA: "à¤•à¤°à¥à¤¨à¤¾à¤Ÿà¤•",
            KL: "à¤•à¥‡à¤°à¤²",
            LKD: "à¤²à¤•à¥à¤·à¤¦à¥à¤µà¥€à¤ª",
            MP: "à¤®à¤§à¥à¤¯ à¤ªà¥à¤°à¤¦à¥‡à¤¶",
            MH: "à¤®à¤¹à¤¾à¤°à¤¾à¤·à¥à¤Ÿà¥à¤°",
            MN: "à¤®à¤£à¤¿à¤ªà¥à¤°",
            MG: "à¤®à¥‡à¤˜à¤¾à¤²à¤¯",
            MZ: "à¤®à¤¿à¤œà¥‹à¤°à¤®",
            NG: "à¤¨à¤¾à¤—à¤¾à¤²à¥ˆà¤‚à¤¡",
            OD: "à¤“à¤¡à¤¿à¤¶à¤¾",
            PD: "à¤ªà¥à¤¡à¥à¤šà¥‡à¤°à¥€",
            PN: "à¤ªà¤‚à¤œà¤¾à¤¬",
            RJ: "à¤°à¤¾à¤œà¤¸à¥à¤¥à¤¾à¤¨",
            SK: "à¤¸à¤¿à¤•à¥à¤•à¤¿à¤®",
            TN: "à¤¤à¤®à¤¿à¤²à¤¨à¤¾à¤¡à¥",
            TL: "à¤¤à¥‡à¤²à¤‚à¤—à¤¾à¤¨à¤¾",
            TP: "à¤¤à¥à¤°à¤¿à¤ªà¥à¤°à¤¾",
            UP: "à¤‰à¤¤à¥à¤¤à¤° à¤ªà¥à¤°à¤¦à¥‡à¤¶",
            UK: "à¤‰à¤¤à¥à¤¤à¤°à¤¾à¤–à¤‚à¤¡",
            WB: "à¤ªà¤¶à¥à¤šà¤¿à¤® à¤¬à¤‚à¤—à¤¾à¤²"
        };


    }
    e[$(this).data("code")] ? $description.html(e[$(this).data("code")]) : $description.html($(this).attr("code"))
}, function () {
    $description.removeClass("active")
}), $(document).on("mousemove", function (e) {
    var a = $("#Gujarat, .guj").position().top - 230,
        t = $("#Gujarat, .guj").position().left - 10;
    $description.css({
        left: e.pageX - t,
        top: e.pageY - a
    })
})), $(".innerfootprint").length > 0 && ($description = $(".footprint-section .description"), $(".st1 ,.st0 ,.st4").hover(function () {
    $description.addClass("active");
    var e = {
        AN: "Andaman and Nicobar",
        AP: "Andhra Pradesh",
        AR: "Arunachal Pradesh",
        AS: "Assam",
        BR: "Bihar",
        CD: "Chandigarh",
        CH: "Chhattisgarh",
        DHV: "Dadar & Nagar Haveli",
        DD: "Daman & Diu",
        DL: "Delhi",
        GA: "Goa",
        GJ: "Gujarat",
        HR: "Haryana",
        HP: "Himachal Pradesh",
        JK: "Jammu and Kashmir",
        LK: "Ladakh",
        JH: "Jharkhand",
        KA: "Karnataka",
        KL: "Kerala",
        LKD: "Lakshadweep",
        MP: "Madhya Pradesh",
        MH: "Maharashtra",
        MN: "Manipur",
        MG: "Meghalaya",
        MZ: "Mizoram",
        NG: "Nagaland",
        OD: "Odisha",
        PD: "Puducherry",
        PN: "Punjab",
        RJ: "Rajasthan",
        SK: "Sikkim",
        TN: "Tamil Nadu",
        TL: "Telangana",
        TP: "Tripura",
        UP: "Uttar Pradesh",
        UK: "Uttarakhand",
        WB: "West Bengal"
    };
    e[$(this).data("title")] ? $description.html(e[$(this).data("title")]) : $description.html($(this).attr("data-title"))
}, function () {
    $description.removeClass("active")
}), $(document).on("mousemove", function (e) {
    var a = $("#Gujarat, .guj").position().top - 230,
        t = $("#Gujarat, .guj").position().left - 10;
    $description.css({
        left: e.pageX - t,
        top: e.pageY - a
    })
}))
jQuery('.partner-slider').owlCarousel({
    loop: true,
    margin: 30,
    autoplay: true,
    dots: true,
    nav: false,
    responsiveClass: true,
    autoHeight: true,
    autoplayTimeout: 7000,
    smartSpeed: 800,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      },
      1000: {
        items: 5
      }
    }
  })