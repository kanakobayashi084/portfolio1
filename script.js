const fades = document.querySelectorAll ('.fadeScreen');
fades.forEach( fadeScreen => {
    fadeScreen.classList.add('is-show');
});

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


const filterButtons = document.querySelectorAll('[data-filter]');
const categoryContents = document.querySelectorAll('[data-category]');

filterButtons.forEach((filterButton) => {
  filterButton.addEventListener('click', buttonSwitch);
  filterButton.addEventListener('click', categoryFilter);
});

function buttonSwitch() {
  filterButtons.forEach((filterButton) => {
    filterButton.classList.remove("activeOn");
    this.classList.add('activeOn');
  });
}

function categoryFilter() {
  const buttonCategory = this.dataset.filter;
  const targetContents = document.querySelectorAll('[data-category="' + buttonCategory + '"]');

  categoryContents.forEach((categoryContent) => {

    categoryContent.animate([{
        opacity: 0
      },
      {
        opacity: 1
      }
    ], {
      duration: 600,
      fill: 'forwards'
    });

    if (buttonCategory == 'all') {
      categoryContent.classList.add('is-show');
    } else {
      categoryContent.classList.remove("is-show");
      targetContents.forEach((targetContent) => {
        targetContent.classList.add('is-show');
      });
    }
  });
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
