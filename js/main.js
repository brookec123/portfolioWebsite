(function ($) {
    "use strict";

    // loader
    var loader = function () {
        setTimeout(function () {
            if ($('#loader').length > 0) {
                $('#loader').removeClass('show');
            }
        }, 1);
    };
    loader();


    // Initiate the wowjs
    new WOW().init();


    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        return false;
    });


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $('.navbar').addClass('nav-sticky');
            $('.resume-btn').addClass('nav-sticky');
        } else {
            $('.navbar').removeClass('nav-sticky');
            $('.resume-btn').removeClass('nav-sticky');
        }
    });


    // Smooth scrolling on the navbar links
    $(".navbar-nav a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();

            $('html, body').animate({
                scrollTop: $(this.hash).offset().top - 45
            }, 1500, 'easeInOutExpo');

            if ($(this).parents('.navbar-nav').length) {
                $('.navbar-nav .active').removeClass('active');
                $(this).closest('a').addClass('active');
            }
        }
    });

    var btn = document.querySelector(".resume-btn");

    btn.addEventListener("mouseover", function () {
        this.textContent = "Download";
    })
    btn.addEventListener("mouseout", function () {
        this.textContent = "Resume";
    })

    // Typed Initiate
    if ($('.hero .hero-text h2').length == 1) {
        var typed_strings = $('.hero .hero-text .typed-text').text();
        var typed = new Typed('.hero .hero-text h2', {
            strings: typed_strings.split(', '),
            typeSpeed: 100,
            backSpeed: 20,
            smartBackspace: false,
            loop: true
        });
    }

    // Testimonials carousel
    $(".testimonials-carousel").owlCarousel({
        center: true,
        autoplay: true,
        dots: true,
        loop: true,
        responsive: {
            0: {
                items: 1
            }
        }
    });

    // Skills isotope and filter
    var skillsIsotope = $('.skills-container').isotope({
        itemSelector: '.skill-container',
        layoutMode: 'fitRows'
    });

    $('#skills-flters li').on('click', function () {
        $("#skills-flters li").removeClass('active');
        $(this).addClass('active');
        skillsIsotope.isotope({ filter: $(this).data('filter') });
    });

    // Search Skills
    document.getElementById('skillsSearch').addEventListener('input', function () {
        const searchQuery = this.value.toLowerCase();
        const skills = document.querySelectorAll('.skills-container .skill-container');

        skills.forEach(skill => {
            const skillName = skill.querySelector('.skill-name').textContent.toLowerCase();
            if (skillName.includes(searchQuery)) {
                skill.style.display = 'block';  // Show matching skills
            } else {
                skill.style.display = 'none';   // Hide non-matching skills
            }
        });
        skillsIsotope.isotope('layout');  // Update Isotope layout
    });

    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });
    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({ filter: $(this).data('filter') });
    });

    // Search Portfolio
    document.getElementById('portfolioSearch').addEventListener('input', function () {
        const searchQuery = this.value.toLowerCase();
        const projects = document.querySelectorAll('.portfolio-container .portfolio-item');

        projects.forEach(project => {
            const projectName = project.querySelector('.portfolio-text p').textContent.toLowerCase();
            if (projectName.includes(searchQuery)) {
                project.style.display = 'block';  // Show matching projects
            } else {
                project.style.display = 'none';   // Hide non-matching projects
            }
        });
    });


})(jQuery);

function openPDF() {
    // Replace 'path/to/your.pdf' with the path to your PDF file on the desktop
    const url = './Brooke-Cronin-resume.pdf';
    window.open(url, '_blank');
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}