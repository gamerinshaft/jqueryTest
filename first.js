var header = function(){
  obj     = $('#target');
  header  = $('#header');
  _window = $(window);
  val     = 0;
  foo     = 0;
  through = 30;
  lastPos = _window.scrollTop();

  var initialize = function(){
    header.css({'top' : -(header.height() + 1), 'position' : 'fixed'})
  }

  var showHeader = function(){
    var params   = {top: - (header.height() + 1)};
    var duration = 400;
    var easing   = "swing";
    var complete = function(){
      foo = 0;
      val = 0;
    };

    foo = 1;
    header.animate(params, duration, easing, complete);
  }

  var hideHeader = function(){
    var params   = {top: 0};
    var duration = 400;
    var easing   = "swing";
    var complete = function(){
      foo = 0;
      val = 1;
    };

    foo = 1;
    header.animate(params, duration, easing, complete);
  }

  var isDownerThanHeader = function(){
    return _window.scrollTop() > obj.offset().top + through;
  }

  var isScrollingDownOrStopping = function(){
    return _window.scrollTop() - lastPos >= 0;
  }

  var isAlreadyShownHeader = function(){
    return val == 0;
  }

  var isAnimatingHeader = function(){
    return foo == 1;
  }

  var state = function(){
    if(isDownerThanHeader()){
      if(isScrollingDownOrStopping()){
        if(!isAlreadyShownHeader() && !isAnimatingHeader()){
          header.css({'display':'fixed'});
          showHeader();
        }
      }else{
        if(isAlreadyShownHeader() && !isAnimatingHeader()){
          header.css({'display':'block', 'position':'fixed'});
          hideHeader();
        }
      }
    }else{
      if(!isAlreadyShownHeader() && !isAnimatingHeader()){
        showHeader();
      }
    }

    lastPos = _window.scrollTop();
  }

  _window.on('load', initialize);
  _window.on('resize scroll', state);
}
