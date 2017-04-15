$(window).scroll(function(){
  //me defino scroll como variable, este scroll toma el tamaño de la ventana
  var scroll = $(this).scrollTop();

  $(".cajaFolio").css({ //esto no hace nada xD
    "transform" : "scale ()"
  });

  $(".logo").css({ //este mueve el logo del colegio de ingenieros, tomando en cuenta la velocidad del scroll
    "transform" : "translate(0px, "+ scroll/4+"%)"
  });

  $(".folio").css({
    "transform" : "translate(0px, "+ scroll/6+"%)"
  });

  $(".ingenieros").css({
    "transform" : "translate(0px, -"+ scroll/25 +"%)"
  });

 if ($(".imagenes-abajo ").length > 0) {
   if (scroll > ($(".imagenes-abajo").offset().top - ($(window).height() / 1.2)  )){
   $(".imagenes-abajo figure").each(function(i){
     setTimeout(function() {
     $(".imagenes-abajo figure").eq(i).removeClass("ocultar").addClass("mostrarse");
   }, (700 * (Math.exp(i * 0.14)))-700); //esta ecuacion nos permite el ciclo

   });}
 }

 if ($(".proyecto").length > 0){
   $(".proyecto").each(function(i){
     setTimeout(function() {
     $(".proyecto").eq(i).removeClass("ocultar").addClass("mostrarse");
   }, (700 * (Math.exp(i * 0.14)))-700); //esta ecuacion nos permite el ciclo

   });


 }




if (scroll > $(".menutop").offset().top){
  var nav = $('.menutop');
  var navHomeY = nav.offset().top;
  var isFixed = false;
  var $w = $(window);
  $w.scroll(function() {
      var scrollTop = $w.scrollTop();
      var shouldBeFixed = scrollTop > navHomeY;
      if (shouldBeFixed && !isFixed) {
          nav.css({
              position: 'fixed',
              top: 0,
              left: nav.offset().left,
              width: nav.width()
          });
          isFixed = true;
      }
      else if (!shouldBeFixed && isFixed)
      {
          nav.css({
              position: 'static'
          });
          isFixed = false;
      }
  });
  }


  //esta oscurece el periscopio

  if ($(".periscopio").length > 0) {
    if (scroll > $(".periscopio").offset().top - $(window).height()) {
      $(".periscopio").css({"background-position": "center " + (scroll - $(".periscopio").offset().top)+"px"});
      var opacity = (scroll - $(".periscopio").offset().top +400) / (scroll /5)
      $(".ventanaP").css({ "opacity" : opacity })}

  }

//mueve las tres noticias
 if ($(".noticias").length > 0) {
   if (scroll > $(".noticias").offset().top - $(window).height()+ 50) {
   var offset = Math.min(0, scroll - $(".noticias").offset().top + $(window).height() - 400);
   $(".uno").css({"transform" : "translate("+ offset +"px, "+Math.abs(offset * .2)+"px)"});

   $(".tres").css({"transform" : "translate("+Math.abs(offset) +"px, "+Math.abs(offset * .2)+"px)"});
 }
 }

 if ($(".footer").length > 0) {
   if (scroll > $(".footerDentro").offset().top - $(window).height()+ 50) {
     $(".footer").show();
        };
 }

  document.body.style.backgroundPosition = "0px " + (0 - (Math.max(document.documentElement.scrollTop, document.body.scrollTop) / 4)) + "px";

  });
