```javascript
/* =====================================================
   MY ENGLISH BLOG
   Main JavaScript
   ===================================================== */


/* =====================================================
   1. SMOOTH NAVIGATION
   ===================================================== */

/*
    This function makes the page scroll smoothly
    when the user clicks on a navigation link.
*/

document.querySelectorAll('a[href^="#"]').forEach(function (link) {

    link.addEventListener("click", function (event) {

        const targetId = this.getAttribute("href");

        const target = document.querySelector(targetId);

        if (target) {

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});


/* =====================================================
   2. SCROLL ANIMATION
   ===================================================== */

/*
    Blog cards will appear with a small animation
    when they enter the screen.
*/

const cards = document.querySelectorAll(".post-card");


const observer = new IntersectionObserver(

    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                observer.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.15
    }

);


/*
    Start observing every blog card.
*/

cards.forEach(function (card) {

    observer.observe(card);

});


/* =====================================================
   3. CURRENT YEAR
   ===================================================== */

/*
    This automatically updates the year in the footer.
*/

const footerYear = document.querySelector(".footer p:last-child");


if (footerYear) {

    const currentYear = new Date().getFullYear();

    footerYear.textContent =
        `© ${currentYear} My English Blog`;

}

function togglePost(button) {
    const extraText = button.previousElementSibling;

    extraText.classList.toggle("show");

    if (extraText.classList.contains("show")) {
        button.textContent = "Read Less";
    } else {
        button.textContent = "Read More";
    }
}
```
