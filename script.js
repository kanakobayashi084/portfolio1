const swiper = new Swiper('.swiper',{
    loop: true,
    slidesPerView: 1,
    speed: 10000,
    allowTouchMove: false,
    autoplay: {
        delay: 0,
    }
});

/*
"use strict";
{
    const button =
    document.querySelector('.btn_hamburger');
    const nav =
    document.querySelector('.global_nav');

        button.addEventListener('click',
        function () {
            button.classList.toggle('open');
            nav.classList.toggle('open');
        });
}
*/
const pagetop =
document.querySelector('.Page-Top');

window.addEventListener('scroll' , () =>{
    let scroll_Y = window.scrollY;
    if(scroll_Y > 150) {
        pagetop.classList.add('active');
    }
    else {
        pagetop.classList.remove('active');                
    }
});

pagetop.addEventListener('click' , () =>{
    window.scroll ({
        top: 0,
        behavior: "smooth",
    });
});
