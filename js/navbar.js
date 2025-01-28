document.addEventListener("DOMContentLoaded", function () {
  fetch("navbar.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("navbar").innerHTML = data;

      // Highlight the active navbar link
      const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
      navLinks.forEach((link) => {
        const linkHref = link.getAttribute("href").replace("#", ""); // Remove hash for comparison
        if (linkHref === currentPage) {
          link.classList.add("active");
        } else {
          link.classList.remove("active");
        }
      });
    })
    .catch((error) => console.error("Error loading navbar:", error));
});

// Sticky Navbar
$(window).scroll(function () {
  if ($(this).scrollTop() > 0) {
    $(".navbar").addClass("nav-sticky");
    $(".cv-btn").addClass("nav-sticky");
  } else {
    $(".navbar").removeClass("nav-sticky");
    $(".cv-btn").removeClass("nav-sticky");
  }
});

// Smooth scrolling on the navbar links
$(".navbar-nav a").on("click", function (event) {
  if (this.hash !== "") {
    event.preventDefault();

    $("html, body").animate(
      {
        scrollTop: $(this.hash).offset().top - 45,
      },
      1500,
      "easeInOutExpo"
    );

    if ($(this).parents(".navbar-nav").length) {
      $(".navbar-nav .active").removeClass("active");
      $(this).closest("a").addClass("active");
    }
  }
});

// Open PDF function
function openPDF() {
  const url = "./Brooke-Cronin-cv.pdf";
  window.open(url, "_blank");
}
