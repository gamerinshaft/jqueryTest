var header = function(){
  obj     = $('#target');
  header  = $('#header');
  _window = $(window);
  val     = 0;
  foo     = 0;
  through = 30;
  nowPosition = _window.scrollTop();

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
    return diffPosition - nowPosition >= 0;
  }

  var isAlreadyShownHeader = function(){
    return val == 0;
  }

  var isAnimatingHeader = function(){
    return foo == 1;
  }

  var state = function(){
    diffPosition = _window.scrollTop();

    if(isDownerThanHeader()){
      if(isScrollingDownOrStopping()){
        if(!isAlreadyShownHeader()){
          header.css({'display':'fixed'});
          showHeader();
        }
        val = 0;
      }else{
        if(isAlreadyShownHeader()){
          header.css({'display':'block', 'position':'fixed'});
          hideHeader();
        }
        val = 1;
      }
    }else{
      if(!isAlreadyShownHeader()){
        showHeader();
        val = 0;
      }
    }
    nowPosition = diffPosition;
  }

  _window.on('load', initialize);
  _window.on('resize scroll', state);
}
