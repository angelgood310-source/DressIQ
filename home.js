/* ==========================
   DRESSIQ HOMEPAGE JAVASCRIPT
========================== */

// MOBILE NAVIGATION

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

menuToggle.addEventListener("click", function () {
    mainNav.classList.toggle("open");

    menuToggle.textContent =
        mainNav.classList.contains("open") ? "✕" : "☰";
});

// CLOSE MOBILE MENU AFTER CLICK

document.querySelectorAll("#mainNav a").forEach(function (link) {
    link.addEventListener("click", function () {
        mainNav.classList.remove("open");
        menuToggle.textContent = "☰";
    });
});


// HERO IMAGE SLIDER

const heroImages = [
    "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1100&q=85",

    "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1100&q=85",

    "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1100&q=85"
];

let currentSlide = 0;

const heroImage = document.getElementById("heroImage");
const slideNumber = document.getElementById("slideNumber");

function showSlide(index) {

    currentSlide =
        (index + heroImages.length) % heroImages.length;

    heroImage.style.opacity = "0";

    setTimeout(function () {

        heroImage.src = heroImages[currentSlide];

        heroImage.style.opacity = "1";

        slideNumber.textContent =
            "0" + (currentSlide + 1) + " / 03";

    }, 200);
}

document.getElementById("heroNext").addEventListener(
    "click",
    function () {
        showSlide(currentSlide + 1);
    }
);

document.getElementById("heroPrev").addEventListener(
    "click",
    function () {
        showSlide(currentSlide - 1);
    }
);


// NEWSLETTER FORM

const newsletterForm =
    document.getElementById("newsletterForm");

newsletterForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const email =
        document.getElementById("emailInput").value;

    document.getElementById("newsletterMessage").textContent =
        "Thank you! Welcome to the DressIQ fashion community.";

    newsletterForm.reset();

});


// BACK TO TOP BUTTON

const backTop = document.getElementById("backTop");

window.addEventListener("scroll", function () {

    if (window.scrollY > 400) {
        backTop.classList.add("show");
    } else {
        backTop.classList.remove("show");
    }

});

backTop.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// SIMPLE SCROLL ANIMATION

const sections = document.querySelectorAll(
    ".collection-card, .product-card, .editorial-content, .values div"
);

if ("IntersectionObserver" in window) {

    const observer = new IntersectionObserver(function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);

            }

        });

    }, {
        threshold: 0.15
    });

    sections.forEach(function (section) {
        observer.observe(section);
    });

} else {

    sections.forEach(function (section) {
        section.classList.add("visible");
    });

}