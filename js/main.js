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
    new WOW().init(); x

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

    // Experience isotope and filter
    var experienceIsotope = $('.timeline').isotope({
        itemSelector: '.experience-container',
        layoutMode: 'vertical',
        getSortData: {
            category: '[class]'
        }
    });

    $('#experience-flters li').on('click', function () {
        $("#experience-flters li").removeClass('active');
        $(this).addClass('active');

        var filterValue = $(this).attr('data-filter');
        experienceIsotope.isotope({ filter: filterValue });
    });

    document.addEventListener("DOMContentLoaded", () => {
        // Fetch the JSON data
        fetch("data.json") // Adjust the path if needed
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then((data) => {
                populateSkills(data.skills);
            })
            .catch((error) => console.error("Error loading skills data:", error));
    });

    function populateSkills(skills) {
        console.log("Populating skills...");
        const skillsContainer = document.getElementById("skills-container");

        if (!skillsContainer) {
            console.error("Skills container not found!");
            return;
        }

        let skillCount = 0; // Initialize a counter to track the number of skills added

        skills.forEach((skill) => {
            console.log("Adding skill:", skill.name);
            const skillDiv = document.createElement("div");
            skillDiv.className = `col-lg-3 col-md-6 skill-container ${skill.type}`;
            skillDiv.style.marginBottom = "30px"; // Add space below each skill container
            skillDiv.innerHTML = `
            <div class="skill-item" style="padding: 10px;">
                ${skill.icon.startsWith("fa") || skill.icon.startsWith("fab") || skill.icon.startsWith("fas")
                    ? `<i class="${skill.icon}"></i>`
                    : `<img src="${skill.icon}" alt="${skill.name} Logo">`
                }
                <p class="skill-name">${skill.name}</p>
            </div>
        `;
            skillsContainer.appendChild(skillDiv);

            skillCount++; // Increment the counter

        });

        skillsContainer.style.marginBottom = ((skillCount / 6) * 200).toString() + "px";
    }



})(jQuery);
