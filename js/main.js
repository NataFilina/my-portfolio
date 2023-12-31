window.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelectorAll(".tabs_item");
    tabs.forEach(elem => {
        elem.addEventListener("click", () => {
            tabs.forEach(otherItem => {
                if (otherItem.classList.contains("tabs_item_active")) {
                    otherItem.classList.remove("tabs_item_active");
                }
            })
            elem.classList.add("tabs_item_active");
        });
    });
    $('.carousel').slick({
        autoplay: true,
        autoplaySpeed: 5000,
        prevArrow: '<div class="carousel_arrow carousel_prev"><i class="fa-solid fa-chevron-left"></i></div>',
        nextArrow: '<div class="carousel_arrow carousel_next"><i class="fa-solid fa-chevron-right"></i></div>'
    });
    $('#callNowBtn').on('click', popupOpen);
    $('.popup_close').on('click', () => {
        $('.popup').removeClass('popup_active');
        $('body').css('overflow', 'visible');
    })
    function popupOpen() {
        $('.popup').addClass('popup_active');
        $('body').css('overflow', 'hidden');
    }
    $("a[href*='#']").on("click", function(e){
        var anchor = $(this);
        $('html, body').stop().animate({
          scrollTop: $(anchor.attr('href')).offset().top
        }, 777);
        e.preventDefault();
        return false;
    });
});
