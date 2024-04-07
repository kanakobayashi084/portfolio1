const swiper = new Swiper('.swiper',{
    loop: true,
    slidesPerView: 1,
    speed: 10000,
    allowTouchMove: false,
    autoplay: {
        delay: 0,
    }
});


const btn =
document.querySelector('.btn_hamburger');
    btn.addEventListener('click', function () {
        btn.classList.toggle('open');
});


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
