var idioma = 0;
$('.onoffswitch-switch').click(function(){
  /*if (idioma == 0) {
    window.location.href = 'index_en.html';
    idioma = 1;
  }else{
    window.location.href = 'index.html';
    idioma = 0;
  }*/

});

$(window).scroll(function() {
        var pos = $('body').scrollTop();
        $('#pos').html(pos);
        if (pos>30) {
          $('.navbar-wrapper').addClass('navbar-scroll');
        }else{
          $('.navbar-wrapper').removeClass('navbar-scroll');
        };
      });

      $('#boton1').click(function(){
        $("#carrusel-box1").rcarousel( "goToPage", 0);
        $('html, body').animate({
          scrollTop: $("#container-carrousel").offset().top
        }, 2000);
        
      });

      $('#boton2').click(function(){
        $("#carrusel-box2").rcarousel( "goToPage", 0);  
        $('html, body').animate({
          scrollTop: $("#container-servicios").offset().top
        }, 2000);
        
      });

      $('#boton3').click(function(){
        $('html, body').animate({
          scrollTop: $("#container-casos").offset().top
        }, 2000);
      });

      $('#boton4').click(function(){
        $('html, body').animate({
          scrollTop: $(".container-contacto").offset().top
        }, 2000);
      });
      
      var options;
      if($(window).width() >1024){
        options =    {
          visible: 1,
          step: 1,
          speed: 200,
          auto: {
            enabled: true
          },
          width: 950,
          height: 680
        };
      }else{
        options =    {
          visible: 1,
          step: 1,
          speed: 200,
          auto: {
            enabled: true
          },
          width: 910,
          height: 680
        }; 
      }

      var options2;
      if($(window).width() >1024){
        options2 =    {
          visible: 1,
          step: 1,
          speed: 200,
          auto: {
            enabled: true
          },
          width: 950,
          height: 480,
          navigation: {
            next: "#ui-carousel-next2",
            prev: "#ui-carousel-prev2"
          }
        };
      }else{
        options2 =    {
          visible: 1,
          step: 1,
          speed: 200,
          auto: {
            enabled: true
          },
          width: 910,
          height: 480,
          navigation: {
            next: "#ui-carousel-next2",
            prev: "#ui-carousel-prev2"
          }
        }; 
      }

      $("#carrusel-box1").rcarousel(options);
      $("#carrusel-box2").rcarousel(options2);