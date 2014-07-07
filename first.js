Header = function(){
  obj = $('#target');
  header = $('#header');
  $window = $(window);
  val = 0;
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

  var isOnceShownHeader = function(){
    return val == 0;
  }

  var isOnceHideHeader = function(){
    return val == 1;
  }

  function initialize(){
    header.css({'top' : -(settings.height + 1), 'position' : 'fixed'})
  }



  function state(){
    diffPosition = $window.scrollTop();
    if(isDownerThanTarget()){
      if(isScrollDown()){
        if(!isOnceShownHeader()){
          header.css({'display':'fixed'});
          header.animate({'top' : -(settings.height + 1)});
        }
        val = 0;
      }else{
        if(!isOnceHideHeader()){
          header.css({'display':'block', 'position':'fixed'});
          header.animate({
            'top' : '0'
          });
        }
        val = 1;
      }
    }else{
      if(val == 1){
        header.animate({
          'top' : -(settings.height + 1)
        });
        val = 0;
      }
    }
    nowPosition = diffPosition;
  }
  $(window).on('load', initialize);
  $(window).on('resize scroll', state);
}

