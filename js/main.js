$(document).ready(function(){
    $(window).scroll(function(){
        let barra = $(window).scrollTop();
        let posicion = barra * 0.05;
        console.log(barra);
        $('body').css ({
            'background-position': '0 -' + posicion + 'px'
        })
    });
});