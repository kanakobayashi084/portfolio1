const swiper = new Swiper('.swiper',{
    loop: true,
    slidesPerView: 2,
    speed: 6000,
    allowTouchMove: false,
    autoplay: {
        delay: 0,
    }
});

const pagetop_btn = document.querySelector(".Page_Top_button");

pagetop_btn.addEventListener("click" , scroll_top);
function scroll_top() {
    window.scroll({ top: 0, behavior: "smooth" });
}

