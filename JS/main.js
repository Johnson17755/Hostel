 // Header Scroll
const nav = document.querySelector('.navbar');
window.onscroll = function () {
  if(document.documentElement.scrollTop > 50){
    nav.classList.add('header-scrolled');
  }else{
    nav.classList.remove('header-scrolled');
  }
}
 // Nav hid
 const navBar = document.querySelectorAll('.nav-link');
 const navCollapse  = document.querySelector('.navbar-collapse.collapse');
 navBar.forEach(function(a){
    a.addEventListener('click', function(){
      navCollapse.classList.remove('show');
    })
 });
 //swiper slider
 var swiper = new Swiper('.mySwiper', {
    direction: 'vertical',
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    autoplay: {
      delay: 3500,
    },
  });
  
 //counter design
document.addEventListener('DOMContentLoaded', () => {
  function counter(id, start, end, duration){
    let obj = document.getElementById(id),
    current = start,
    range = end - start,
    increase = end > start ? 1 : -1,
    step = Math.abs(Math.floor(duration / range)),
    timer = setInterval(() => {
      current += increase; // Fix variable name here
      obj.textContent = current;
      if(current == end){
        clearInterval(timer);
      }
    }, step);
  }
  counter("count1", 0 , 1287, 3000);
  counter("count2", 100 , 1527, 2780);
  counter("count3", 0 , 1893, 3000);
  counter("count4", 0 , 7988, 3000);
});

 //our partner
 var swiper = new Swiper('.our-partner', {
  slidesPerView: 5,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 2000,
  },
  breakpoints: {
    991: {
      slidesPerView: 5,
      spaceBetween: 10,
    },
    767: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    320: {
      slidesPerView: 2,
      spaceBetween: 8,
    },
  },
});


