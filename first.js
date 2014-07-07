Header = function(){
  var obj     = $('#target');
  var header  = $('#header');
  var $window = $(window);
  var val     = 0;
  var foo     = 0;
  var through = 30;
  var lastPos = $window.scrollTop();

  var showHeader = function(){
    var params   = {top: 0};
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
    var params   = {top: - (header.height() + 1)};
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
    return $window.scrollTop() > obj.offset().top + through;
  }

  var isScrollingDownOrStopping = function(){
    return $window.scrollTop() - lastPos >= 0;
  }

  var isAlreadyShownHeader = function(){
    return val == 0;
  }

  var isAnimatingHeader = function(){
    return foo == 1;
  }

  this.onScroll = function(){
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
      if(isAlreadyShownHeader){
        console.log('wa');
        hideHeader();
      }
      console.log('ha');
    }

    lastPos = $window.scrollTop();
  }
}
