const navslide = () => {
    const burger = document.querySelector('.burger')
    const nav = document.querySelector('.main-nav');

    burger.addEventListener('click' , () => {
        nav.classList.toggle('main-nav-active');
    });
}
navslide();


$('.slider').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});