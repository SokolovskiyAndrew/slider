$('.sl').slick({
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,

    // prevArrow: $('.prev'),
    // nextArrow: $('.next')
    responsive: [{
            breakpoint: 1016,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 698,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 500,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});