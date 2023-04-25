window.onload = ()=>{
    const loader = document.getElementById('loader');
    loader.classList.add('loaded');
}

var _window = $(window),
    _header = $('.site-header'),
    heroBottom;

_window.on('scroll',function(){
    heroBottom = $('.body').height();
    if(_window.scrollTop() > heroBottom){
        _header.addClass('transform');   
}
    else{
        _header.removeClass('transform');   
}
});

_window.trigger('scroll');