
$('.burger-simple').on({
    click: function() {
        $('.burger-simple').toggleClass('burger-simple--active');
    }, mouseenter: function() {
        $('.burger-simple').addClass('burger-simple--hover');
    }, mouseleave: function() {
        $('.burger-simple').removeClass('burger-simple--hover');
    }
});
$('.burger-fancy').on({
    click: function() {
        $('.burger-fancy').toggleClass('burger-fancy--active');
    }, mouseenter: function() {
        $('.burger-fancy').addClass('burger-fancy--hover');
    }, mouseleave: function() {
        $('.burger-fancy').removeClass('burger-fancy--hover');
    }
});
$('.burger-sophisticate').on({
    click: function() {
        $('.burger-sophisticate').toggleClass('burger-sophisticate--active');
        if($('.burger-sophisticate').hasClass('burger-sophisticate--active')){
            $('.burger-sophisticate').addClass('burger-sophisticate--cross-active');
        }else{
            $('.burger-sophisticate').removeClass('burger-sophisticate--cross-active');
        }
    }, mouseenter: function() {
        $('.burger-sophisticate').addClass('burger-sophisticate--hover');
    }, mouseleave: function() {
        $('.burger-sophisticate').removeClass('burger-sophisticate--hover');
    }
});
