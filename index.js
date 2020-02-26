/* eslint-disable */
$(document).ready(function() {
    $win = $(window);
    $navbar = $('#header');
    $toogle = $('.toogle-button');
    let width = $navbar.width();
    toogle_onclik($win, $navbar, width);
    $win.resize(function() {
        toogle_onclik($win, $navbar, width);
    });

    $toogle.click(function() {
        $navbar.toggleClass('toogle-left');
    });
});

function toogle_onclik($win, $nabvar, width) {
    if ($win.width() <= 768) {
        $nabvar.css({ left: `-${width}px` });
    } else {
        $nabvar.css({ left: '0px' });
    }
}
// type js
let typed = new Typed('#typed', {
    strings: ['Front End Developer.', 'a Freelncer'],
    typeSpeed: 50,
    backSpeed: true,
    loop: true,
});
let typed2 = new Typed('#typed2', {
    strings: ['Developer.', 'Freelancer'],
    typeSpeed: 50,
    backSpeed: true,
    loop: true,
});
