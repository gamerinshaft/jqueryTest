Header = function(){
  var obj       = $('#target');
  var header    = $('#header');
  var $window   = $(window);
  var existing  = 0;
  var animating = 0;
  var through   = 30;
  var lastPos   = $window.scrollTop();

  var showHeader = function(){
    var params   = {top: 0};
    var duration = 400;
    var easing   = "swing";
    var complete = function(){
      animating  = 0;
      existing   = 1;
    };

    animating = 1;
    header.animate(params, duration, easing, complete);
  }

  var hideHeader = function(){
    var params   = {top: - (header.height() + 1)};
    var duration = 400;
    var easing   = "swing";
    var complete = function(){
      animating  = 0;
      existing   = 0;
    };

    animating = 1;
    header.animate(params, duration, easing, complete);
  }

  var isPositiveNumber = function(){
    return $window.scrollTop() >= 0;
  }

  var isDownerThanHeader = function(){
    return $window.scrollTop() > obj.offset().top + through;
  }

  var isScrollingDownOrStopping = function(){
    return $window.scrollTop() - lastPos >= 0;
  }

  var isAlreadyShownHeader = function(){
    return existing == 1;
  }

  var isAnimatingHeader = function(){
    return animating == 1;
  }

  this.onScroll = function(){
    if(isPositiveNumber){
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
    }
    lastPos = $window.scrollTop();
  }
}
