$('body').on('click', '.navbar-brand', function(){
    if($('.sidebar').hasClass('visible')){
        $('.sidebar').removeClass('visible').addClass('not-visible')
    }else{
        $('.sidebar').addClass('visible').removeClass('not-visible');
    }
});