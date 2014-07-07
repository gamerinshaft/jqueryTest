function header(){
  obj = $('#target');
  header = $('#header');
  _window = $(window);
  nowPosition = _window.scrollTop();
  var target = {
    top: obj.offset().top,
    left: obj.offset().left,
    height: obj.height()
  }
  var settings = {
    through: 30 //targetをどれくらいすぎてから出現させるか
  }

  function main(){
    diffPosition = _window.scrollTop();
    if(diffPosition - nowPosition > 0){
      console.log('sita');
      //下にスクロル
    }else{
      //上にスクロル
      console.log('ue');
    }
    nowPosition = diffPosition;


    // if($(window).scrollTop() > target.top + settings.through ){
    //   header.css({'display':'block', 'position':'fixed'});
    //   header.animate({
    //     'top' : '0'
    //   });
    //   console.log('おおきい');
    // }else{
    //   header.css({'position':'fixed','top' : -(target.height + 1)});
    //   console.log('ちいさい');
    // }
  }
  $(window).on('load resize scroll', main);
}

