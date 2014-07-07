var header = function(){
  obj     = $('#target');
  header  = $('#header');
  _window = $(window);
  val     = 0;
  nowPosition = _window.scrollTop();

  var settings = {
    height: header.height(),
    through: 30
  }

  var initialize = function(){
    header.css({'top' : -(settings.height + 1), 'position' : 'fixed'})
  }

  var showHeader = function(){
    header.animate({top: - (settings.height + 1)});
  }

  var hideHeader = function(){
    header.animate({top: 0});
  }

  var state = function(){
    diffPosition = _window.scrollTop();

    if(_window.scrollTop() > obj.offset().top + settings.through ){
      if(diffPosition - nowPosition >= 0){
        if(val != 0){
          header.css({'display':'fixed'});
          header.animate({'top' : -(settings.height + 1)});
        }
        val = 0;
      }else{
        if(val != 1){
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

  _window.on('load', initialize);
  _window.on('resize scroll', state);
}
