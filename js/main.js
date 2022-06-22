$(document).ready(function(){
    $('.slider-section__slider').slick({
        'dots' : true,
        'appendArrows' : '.slider-section__arrows',
        'prevArrow' : '<button class="custom-prev"></button>',
        'nextArrow' : '<button class="custom-next"></button>',
        'appendDots' : '.slider-section__dots',
        'vertical' : true,
        'verticalSwiping' : true,
        customPaging: function(slider, i) {
            return '<button class="tab"><span class="dot-before"></span><span class="dot-descr">' + $(slider.$slides[i]).find('.slide__header').text() + '<span class="dot-number">'+ $(slider.$slides[i]).find('.slide__number').text() +'</span></span><span class="dot-after"></span></button>';
        },
        'responsive' : [
            {
                breakpoint: 768,
                settings : {
                    verticalSwiping: false
                }
            }
        ]
    });
});