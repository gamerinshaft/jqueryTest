Header = function(main, key){
  var header         = $(main);
  var target         = $(key);
  var $window        = $(window);
  var existing       = false;
  var animating      = false;
  var lastPosition   = $window.scrollTop();
  var targetThrough  = 30;
  var latestPosition = $window.scrollTop();
  var isDownerThanTarget = function(){
    return $(window).scrollTop() > target.offset().top + targetThrough;
  }

  var isScrollDown = function(){
    return latestPosition - lastPosition > 0;
  }

  var hideHeader = function(){
    animating    = true;
    var params   = {'top' : -(header.height() + 1)};
    var duration = 400;
    var easing   = "swing";
    var complete = function(){
      existing  = false;
      animating = false;
    };
    header.css({'display':'fixed'});
    header.animate(params, duration, easing, complete());
  }

  var showHeader = function(){
    animating    = true;
    var params   = {'top' : '0'};
    var duration = 400;
    var easing   = "swing";
    var complete = function(){
     existing  = true;
     animating = false;
    };
    header.css({'display':'block', 'position':'fixed'});
    header.animate(params, duration, easing, complete());
  }

  this.initialize = function(){
    header.css({'top' : -(header.height() + 1), 'position' : 'fixed'});
  }

  this.onScroll = function(){
    latestPosition = $window.scrollTop();
    if(isDownerThanTarget()){
      if(isScrollDown()){
        if(existing && !animating){
          hideHeader();
        }
      }else{
        if(!existing && !animating){
          showHeader();
        }
      }
    }else{
      if(existing && !animating){
        hideHeader();
      }
    }
    lastPosition = $window.scrollTop();
  }
}

