function header(){

  obj = $('#target');

  var target = {
    top: obj.offset().top,
    left: obj.offset().left
  }

  function hikaku(){
    console.log($(window).scrollTop());
    console.log(target.top);
    if($(window).scrollTop() > target.top ){
      console.log('おおきいよ');
    }
  }
  $(window).on('load resize scroll', hikaku);
}

