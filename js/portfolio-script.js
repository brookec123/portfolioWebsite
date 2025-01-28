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
            $('.cv-btn').addClass('nav-sticky');
        } else {
            $('.navbar').removeClass('nav-sticky');
            $('.cv-btn').removeClass('nav-sticky');
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

//     // Function to get project name from the HTML file name
// function getProjectNameFromFile() {
//     // Get the current file name from the URL
//     const fileName = window.location.pathname.split("/").pop(); // e.g., "garden-clicker.html"

//     // Remove the ".html" extension
//     const baseName = fileName.replace(".html", ""); // e.g., "garden-clicker"

//     // Replace dashes with spaces and capitalize each word
//     const projectName = baseName
//         .split("-") // Split by dashes
//         .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize each word
//         .join(" "); // Join back into a single string

//     return projectName;
// }

// const projectName = getProjectNameFromFile();
// // Fetch data and dynamically populate tags for the project
// document.addEventListener("DOMContentLoaded", () => {
//     fetch("data.json")
//         .then((response) => {
//             if (!response.ok) {
//                 throw new Error(`HTTP error! status: ${response.status}`);
//             }
//             return response.json();
//         })
//         .then((data) => {
//             const project = data.projects.find((proj) => proj.name === projectName);

//             if (project) {
//                 populateTags(project.tags);
//             } else {
//                 console.error(`Project ${projectName} not found!`);
//             }
//         })
//         .catch((error) => console.error("Error loading tags data:", error));
// });

// function populateTags(tags) {
//     console.log("Populating tags...");
//     const tagsContainer = document.querySelector(".project-tags");

//     if (!tagsContainer) {
//         console.error("Tags container not found!");
//         return;
//     }

//     tags.forEach((tagName) => {
//         console.log("Adding tag:", tagName);
//         const tagItem = document.createElement("button");
//         tagItem.textContent = "#"+tagName;
//         tagItem.classList.add("tag-button");
//         tagsContainer.appendChild(tagItem);
//     });

//     const paragraph = document.createElement("p");
//     tagsContainer.appendChild(paragraph);
// }

})(jQuery);


function openPDF() {
    const url = './Brooke-Cronin-CV.pdf';
    window.open(url, '_blank');
}

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

function setVideoTime(timeValue) {
    var vid = document.getElementById("video");
    vid.currentTime = timeValue;

    swiper.slideTo(0, 100);
}
