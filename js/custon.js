$(document).ready(function(){

    $('.owl-carousel').owlCarousel();

    let titulos = $('h4') // tag
   
    let itens = $('.featured-item') // class
    
    let destaques = $('#featured') // id

});

$('.featured-item a').addClass('btn btn-dark stretch-link');

$('.featured-item:first h4').append('<span class="badge bg-primary">Novo</span>');

$('.featured-item h4').click(function(){

    $(this).css({
        'color': '#f00',
        'background':'#ff0',
        'font-weight': '100'
    });
});
