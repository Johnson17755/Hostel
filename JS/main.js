 // Header Scroll
const nav = document.querySelector('.navbar');
window.onscroll = function () {
  if(document.documentElement.scrollTop > 50){
    nav.classList.add('header-scrolled')
  }else{
    nav.classList.remove('header-scrolled')
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
 const swiper = new Swiper('.mySwiper', {
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

 //our partner