function target(){
  var obj = $('#target');
  oya = this;  var oya = this;
  this.top = obj.offset().top;
  this.left = obj.offset().left;
  function hikaku(){
    console.log($(window).scrollTop());
    console.log(oya.top);
    if($(window).scrollTop() > oya.top ){
      console.log('おおきいよ');
    }
  }
  $(window).on('load resize scroll', hikaku);
}

