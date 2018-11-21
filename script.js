  $(function() {
     // $('#phone').mask('+7(999)999-99-99');
    $li = $('.rslides').children();
      $i = 0
      
      $.each($li,function(){
          if ($i == 0) {
              $(this).addClass('first');
              $i++
          }
          else if ($i == 1) {
              $(this).addClass('active');
              $i++
          }
          else {
              $(this).addClass('last');
          }
      });
      
      $('.next').click(function(){
           $li = $('.rslides').children();
          $.each($li,function(){
              if ($(this).hasClass('first')){
                 $(this).toggleClass('first');
                 $(this).toggleClass('active');
                 }
            else if ($(this).hasClass('active')){
                      $(this).toggleClass('active');
                      $(this).toggleClass('last');
          }
      else {
          $(this).toggleClass('last');
          $(this).toggleClass('first');
      }
      })  
  });
      
      
       $('.perv').click(function(){
           $li = $('.rslides').children();
          $.each($li,function(){
              if ($(this).hasClass('first')){
                 $(this).toggleClass('first');
                 $(this).toggleClass('last');
                 }
            else if ($(this).hasClass('active')){
                      $(this).toggleClass('active');
                      $(this).toggleClass('first');
          }
      else {
          $(this).toggleClass('last');
          $(this).toggleClass('active');
      }
      })
      
  });
      
      
  });

