

$(document).ready(function() {
  
    var scrollLink = $('.menubuttons');
    
    // Smooth scrolling
    scrollLink.click(function(e) {
      e.preventDefault();
      let selector = $('body,html')
      console.log({selector});
      console.log({e});
      console.log(this.hash);
      let target = $(this.hash);
      console.log({target});
      selector.animate({
        scrollTop: target.offset().top
      }, 1000 );
    });
});