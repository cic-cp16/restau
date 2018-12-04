document.addEventListener('DOMContentLoaded', function() {
    
    var elems = document.querySelectorAll('.sidenav');
    
    var instances = M.Sidenav.init(elems);
    
    M.Carousel.init(document.querySelectorAll('.carousel'));
    M.ScrollSpy.init(document.querySelectorAll('.scrollspy'));

  });