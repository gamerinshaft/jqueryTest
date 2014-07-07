Header = function(elms){
  var header         = $(elms.header);
  var target         = $(elms.target);
  var $window        = $(window);
  var existing       = false;
  var animating      = false;
  var lastPosition   = $window.scrollTop();
  var targetThrough  = elms.through;
  var latestPosition = $window.scrollTop();
  var isLowerThanTarget = function(){
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
    header.animate(params, duration, easing, complete());
  }

  this.onScroll = function(){
    latestPosition = $window.scrollTop();
    if(isLowerThanTarget()){
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

