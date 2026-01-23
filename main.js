document.addEventListener('DOMContentLoaded', () => {
});

document.getElementById("btnTopo").addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

new Swiper('.swiper', {
    loop: true,
    spaceBetween: 24,
    speed: 900,

    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },

    breakpoints: {
      320: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 3 },
    },
  });

