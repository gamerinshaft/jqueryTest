var header = function(){
  obj     = $('#target');
  header  = $('#header');
  _window = $(window);
  val     = 0;
  through = 30;
  nowPosition = _window.scrollTop();

  var initialize = function(){
    header.css({'top' : -(header.height() + 1), 'position' : 'fixed'})
  }

  var showHeader = function(){
    header.animate({top: - (header.height() + 1)});
  }

  var hideHeader = function(){
    header.animate({top: 0});
  }

  var isDownerThanHeader = function(){
    return _window.scrollTop() > obj.offset().top + through;
  }

  var isScrollingDownOrStopping = function(){
    return diffPosition - nowPosition >= 0;
  }

  var state = function(){
    diffPosition = _window.scrollTop();

    if(isDownerThanHeader()){
      if(isScrollingDownOrStopping()){
        if(val != 0){
          header.css({'display':'fixed'});
          showHeader();
        }
        val = 0;
      }else{
        if(val != 1){
          header.css({'display':'block', 'position':'fixed'});
          hideHeader();
        }
        val = 1;
      }
    }else{
      if(val == 1){
        showHeader();
        val = 0;
      }
    }
    nowPosition = diffPosition;
  }

  _window.on('load', initialize);
  _window.on('resize scroll', state);
}
