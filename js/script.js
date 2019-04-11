$(document).ready(function () {

    $('#max').css('display', 'none')
    $('li img').click(function (e) {
      if (window.innerWidth < 900) return;
    
      $('li img').css('border', 'none')
      var url = e.target.src
      $(e.target).css('border', "3px solid blue")
      $('#media li').css('display', 'block')
      $('#media img').css('width', '75px')
      $('#thumb').attr('src', url)
      $('#max').css('display', 'block')
  
    });
  
    $('#thumb').click(function (e) {
      $('#max').css('display', 'none')
      $('#media li').css('display', 'inline-block')
      $('li img').css('border', 'none')
      $('#media img').css('width', '130px')
    });
  
    $(window).resize(function(){
        if (window.innerWidth < 900){
            $('#max').css('display', 'none')
            $('#media li').css('display', 'inline-block')
            $('li img').css('border', 'none')
            $('#media img').css('width', '130px')
        }
    })
  });
  