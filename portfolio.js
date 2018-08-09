
$(document).ready(function() {
    var scrollLink = $('.menubuttons');
    console.log(scrollLink)
    scrollLink.click(function(e) {
        e.preventDefault();
        $('#fullpage').animate({
            scrollTop: $(this.hash).offset().top
        }, 1000 );
    })

    let scrollPosition = 0;
    console.log(scrollPosition)
    $("#fullpage").scroll(function() {
        scrollPosition = $(this).scrollTop();
        console.log(scrollPosition)
        if (scrollPosition > 150) {
            $(".menu").css('background', 'rgba(0, 0, 0, .8)')
            $(".menubuttons").css('color', 'white')
        } else {
            $(".menu").css('background', 'rgba(0, 0, 0, .1')
            $(".menubuttons").css('color', 'white')
            $(".menubuttons").css('background', 'none')
        }
    })
})

// $(document).ready(function() {
//     $("a").on('click', function(e) {
//         if (this.hash !== "") {
//             e.preventDefault();
//             let hash = this.hash;
//             console.log(hash)
//             $('#fullpage').animate({
                
//                 scrollTop: $(hash).offset().top
                
//             }, 1000, function() {
//                 window.location.hash = hash;
//             })
//         }
//     })

// })