!(function($) {
  "use strict";

  // Testimonial carousel (uses the Owl Carousel library)
  $(".testimonial-carousel").owlCarousel({
    autoplay: true,
    dots: false,
    loop: true,
    smartSpeed: 1200,
    margin:20,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      900: {
        items: 3
      }
    }
  });

})(jQuery);