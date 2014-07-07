Header = function(){
  obj = $('#target');
  header = $('#header');
  $window = $(window);
  existing = 'no';
  nowPosition = $window.scrollTop();
  var target = {
    top: obj.offset().top,
    left: obj.offset().left,
    height: obj.height()
  }
  var settings = {
    height: header.height(),
    through: 30
  }

  var isDownerThanTarget = function(){
    return $(window).scrollTop() > target.top + settings.through;
  }

  var isScrollDown = function(){
    return diffPosition - nowPosition >= 0;
  }

  var isShowingHeader = function(){
    return existing == 'yes';
  }

  var isHidingHeader = function(){
    return existing == 'no';
  }

  var hideHeader = function(){
    header.css({'display':'fixed'});
    header.animate({'top' : -(settings.height + 1)});
  }

  function initialize(){
    header.css({'top' : -(settings.height + 1), 'position' : 'fixed'})
  }

  function state(){
    diffPosition = $window.scrollTop();
    if(isDownerThanTarget()){
      if(isScrollDown()){
        if(isShowingHeader()){
          hideHeader();
        }
        existing = 'no';
      }else{
        if(isHidingHeader()){
          header.css({'display':'block', 'position':'fixed'});
          header.animate({
            'top' : '0'
          });
        }
        existing = 'yes';
      }
    }else{
      if(isShowingHeader()){
        hideHeader();
      }
      existing = 'no';
    }
    nowPosition = diffPosition;
  }
  $(window).on('load', initialize);
  $(window).on('resize scroll', state);
}

