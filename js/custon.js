$(document).ready(function(){

    $('.owl-carousel').owlCarousel();

    let titulos = $('h4') // tag
   
    let itens = $('.featured-item') // class
    
    let destaques = $('#featured') // id

    $('.featured-item a').addClass('btn btn-dark');

    $('.featured-item:first h4').append('<span class="badge bg-primary">Novo</span>')

})