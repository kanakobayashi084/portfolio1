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

const btn = document.getElementsByClassName('tab_btn');
for(var i = btn.length -1; i >= 0; i--) {
    btnAction(btn[i],i);
}
function btnAction(btnDOM,btnId){
    btnDOM.addEventListener("click", function(){
    this.classList.toggle('activeOn');
    for (var i = btn.length -1; i >=0; i--) {
        if(btnId !== i){
            if(btn[i].classList.contains('activeOn')){
                    btn[i].classList.remove('activeOn');
            }
        }}
    })
}

window.addEventListener('scroll',function(){
    const scroll = window.scrollY;
    const windowHeight = window.innerHeight;
    const screens = document.querySelectorAll('.jsscroll');
    screens.forEach(function(jsscroll) {
    const distanceToscreens = jsscroll.offsetTop;
    if(scroll + windowHeight > distanceToscreens) {
        jsscroll.classList.add('is-active');
    }
});
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
