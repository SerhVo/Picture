const sliders = (slides, dir, prev, next) => {
  let slideIndex = 1,
  paused = false;
  const items = document.querySelectorAll(slides);

  function showSlides(n) {
    if (n > items.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = items.length;
    }
    items.forEach((item) => {
      item.style.display = "none";
      item.classList.add("animated", "fadeIn");
    });
    items[slideIndex - 1].style.display = "block";
  }
  showSlides(slideIndex);

  function plusSlides(n) {
    showSlides((slideIndex += n));
  }
  try {
    const prevButton = document.querySelector(prev),
      nextButton = document.querySelector(next);

    prevButton.addEventListener("click", () => {
      plusSlides(1);

      items[slideIndex - 1].classList.remove("slideInRight");
      items[slideIndex - 1].classList.add("slideInLeft");
    });
    nextButton.addEventListener("click", () => {
      plusSlides(1);
      items[slideIndex - 1].classList.remove("slideInLeft");
      items[slideIndex - 1].classList.add("slideInRight");
    });
  } catch (e) {}

  function activateAnimation() {
    if (dir === "vertical") {
      paused = setInterval(function () {
        plusSlides(1);
        items[slideIndex - 1].classList.add("fadeInLeftBig");
      }, 5000);
    } else {
      paused = setInterval(function () {
        plusSlides(1);
        items[slideIndex - 1].classList.remove("slideInRight");
        items[slideIndex - 1].classList.add("slideInLeft");
      }, 5000);
    }
    };

  activateAnimation();
  items[0].parentNode.addEventListener("mouseenter", () => {
    clearInterval(paused);
  });
  items[0].parentNode.addEventListener("mouseleave", () => {
    activateAnimation();
  });
};
export default sliders;
