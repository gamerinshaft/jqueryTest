Header = function(){
  //----------------------------------------------
  var target        = $('#target');
  var header        = $('#header');
  var $window       = $(window);
  var existing      = 'no';
  var animating     = 'no';
  var lastPosition  = $window.scrollTop();
  var targetThrough = 30;
  //----------------------------------------------

  var isDownerThanTarget = function(){
    return $(window).scrollTop() > target.offset().top + targetThrough;
  }

  var isScrollDown = function(){
    return diffPosition - lastPosition >= 0;
  }

  var isShowingHeader = function(){
    return existing == 'yes';
  }

  var isHidingHeader = function(){
    return existing == 'no';
  }

  var isAnimating = function(){
    return animating == 'yes';
  }

  var hideHeader = function(){
    var params = {'top' : -(header.height() + 1)};
    var duration = 400;
    var easing   = "swing";
    var complete = function(){
    };
    header.css({'display':'fixed'});
    header.animate(params, duration, easing, complete);
  }

  var showHeader = function(){
    var params = {'top' : '0'};
    var duration = 400;
    var easing   = "swing";
    var complete = function(){
    };
    header.css({'display':'block', 'position':'fixed'});
    header.animate(params, duration, easing, complete);
  }

  this.initialize = function(){
    header.css({'top' : -(header.height() + 1), 'position' : 'fixed'});
  }

  this.state = function(){
    diffPosition = $window.scrollTop();
    if(isDownerThanTarget()){
      if(isScrollDown()){
        if(isShowingHeader()){
          hideHeader();
        }
        existing = 'no';
      }else{
        if(isHidingHeader()){
          showHeader();
        }
        existing = 'yes';
      }
    }else{
      if(isShowingHeader()){
        hideHeader();
      }
      existing = 'no';
    }
    lastPosition = diffPosition;
  }
}

