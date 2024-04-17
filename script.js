const fades = document.querySelectorAll ('.fadeScreen');
fades.forEach( fadeScreen => {
    fadeScreen.classList.add('is-show');
});
setTimeout(fades,600);


const hamburger = document.querySelector('.hamburger_menu');
const nav = document.querySelector('.global_nav');
  hamburger.addEventListener('click', function() {
    hamburger.classList.toggle("open"); //hamburgerにopenクラスを付け外しする
    nav.classList.toggle("open"); 
});

const swiper = new Swiper('.swiper',{
    loop: true,
    slidesPerView: 1,
    speed: 10000,
    allowTouchMove: false,
    autoplay: {
        delay: 0,
    }
});

const pagetop = document.querySelector('.Page-Top');
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
