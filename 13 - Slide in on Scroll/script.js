// The debounce function forces a function to wait a certain amount of time before running again
// Therefore, it avoids the bad browser performance 
function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function () {
        var context = this,
            args = arguments;
        var later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

const sliderImages = document.querySelectorAll(".slide-in")

const checkSlide = (e) => {
    sliderImages.forEach(slideImage => {

        // current scroll position is in the halfway of the image. This works while scrolling down
        const slideInAt = (window.scrollY + window.innerHeight) - slideImage.height / 2

        // bottom of the image
        const imageBottom = slideImage.offsetTop + slideImage.height

        // the user scrolls more than halfway of the image
        const isHalfShown = slideInAt > slideImage.offsetTop;

        // the user scrolls and not passed the whole image
        const isNotScrolledPast = window.scrollY < imageBottom

        if (isHalfShown && isNotScrolledPast) {
            slideImage.classList.add("active")
        } else {
            slideImage.classList.remove("active")
        }

        // or ternary operator
        // isHalfShown && isNotScrolledPast ? slideImage.classList.add("active") : slideImage.classList.remove("active")
    })
}

window.addEventListener("scroll", debounce(checkSlide))