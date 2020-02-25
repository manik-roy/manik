$(document).ready(function(){
    $win = $(window);
    $navbar = $('#header');
    $toogle = $('.toogle-button')
    var width = $navbar.width();
    toogle_onclik($win, $navbar, width)
    $win.resize(function(){
        toogle_onclik($win, $navbar, width)
    })

    $toogle.click(function(){
        $navbar.toggleClass('toogle-left')
    })
})

function toogle_onclik($win, $nabvar, width) {
    if($win.width() <= 768) {
        $nabvar.css({left:`-${width}px`})
    } else {
        $nabvar.css({left:'0px'})
    }
}