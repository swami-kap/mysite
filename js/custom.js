$(document).ready(function(){
  if($(window).scrollTop()>50){
    $('.logo-text').hide();
  }
  else{
    $('.logo-text').show();
  }
  //   var groups = {};
  // $('.galleryItem').each(function() {
  //   var id = parseInt($(this).attr('data-group'), 10);
    
  //   if(!groups[id]) {
  //     groups[id] = [];
  //   } 
    
  //   groups[id].push( this );
  // });
  
  
//   $.each(groups, function() {
//     // $(this).magnificPopup({
//     //     type: 'image',
//     //     closeOnContentClick: true,
//     //     closeBtnInside: false,
//     //     gallery: { enabled:true }
//     $(this).magnificPopup({
//       items: {
//           src: '#popup-carousel-holder',
//           type: 'inline'
//       },
//       closeBtnInside: false
//      });    
// });
  // $('body').scrollspy({
  //   target: '#myNavigator',
  //   offset: 57
  // });
  $('a.galleryItem').magnificPopup({
    items: {
        src: '#popup-carousel-holder',
        type: 'inline'
    },
    closeBtnInside: false,
    closeOnContentClick:false,
    closeOnBgClick:false,
    preloader:true,
    enableEscapeKey:false
   }); 
  $(window).scroll(function(){
    if($(window).scrollTop()>50){
      $('.logo-text').slideUp(300);
    }
    else{
      $('.logo-text').slideDown(300);
    }
  })
  $("#myNavigator a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
  
      // Prevent default anchor click behavior
      event.preventDefault();
  
      // Store hash
      var hash = this.hash;
  
      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1000, function(){
  
      // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
  
    } // End if
  
  });
  function hidePortfolio (){
    $('#introImage').hide();
      $('#portfolio').hide();
  }
//   $(".nav-link").on("click", function(){
//     $(".navbar-nav").find(".active").removeClass("active");
//     $(this).addClass("active");
//     // if($(this).hasClass('services-link')){
//     //   hidePortfolio();
//     //   $('#contact').hide();
//     //   $('#about').hide();
//     //   $('#services').show();
//     // }
//     // else if($(this).hasClass('about-link')){
//     //   hidePortfolio();
//     //   $('#contact').hide();
//     //   $('#services').hide();
//     //   $('#about').show();
//     // }
//     // else if($(this).hasClass('contact-link')){
//     //   hidePortfolio();
//     //   $('#about').hide();
//     //   $('#services').hide();
//     //   $('#contact').show();
//     // }
//     // else{
//     //   $('#services').hide();
//     //   $('#contact').hide();
//     //   $('#about').hide();
//     //   $('#introImage').show();
//     //   $('#portfolio').show();
//     // }
//  });

// $("a.galleryItem").click(function(e) {
//   var magnificPopup = $.magnificPopup.instance; 
//   /* Espera carregar o lightbox */
//   var potraitMaxheight = $('.mfp-container').height()-50;
//   $('#popup-carousel .carousel-inner').empty();
//   for(var i=1 ; i< 8 ; i++) {
//     if(i!=5 && i!=7){
//       $('<div class="carousel-item"><img class="d-block w-100 my-auto" src="./images/thumbnails/' +i+ '.jpg">   </div>').appendTo('#popup-carousel .carousel-inner');
//     }
//     else{
//       $('<div class="carousel-item"><img class="d-block h-100 mx-auto" style=max-height:'+potraitMaxheight+'px; src="./images/thumbnails/' +i+ '.jpg">   </div>').appendTo('#popup-carousel .carousel-inner');
//     }
    
//   }
//   $('#popup-carousel .carousel-item').first().addClass('active');
//   $('#popup-carousel').carousel();
  
//   setTimeout(function() {
//       /* Swipe para a esquerda - Próximo */
//       $(".mfp-container").swipe( {
//         swipeLeft:function(event, direction, distance, duration, fingerCount) {
//           console.log("swipe right");
//           $('#popup-carousel').carousel("next");
//         },

//       /* Swipe para a direita - Anterior */
//       swipeRight:function(event, direction, distance, duration, fingerCount) {
//         console.log("swipe left");
//         $('#popup-carousel').carousel("prev");
//       },
//       });
//   }, 500);
// });


$("a.galleryItem").click(function(e) {
  var magnificPopup = $.magnificPopup.instance; 
  var landScapeImageHeight,landScapeImageWidth,portraitImageWidth,portraitImageHeight,isPortrait=false;
  /* Espera carregar o lightbox */
  $('#popup-carousel .carousel-inner').empty();
  $('#popup-carousel').height($('.mfp-container').height()-50);
  if($('#popup-carousel').height()<$('#popup-carousel').width()){
    isPortrait=false;
    
  //  landScapeImageHeight = $('#popup-carousel').height();
  //  landScapeImageWidth = (landScapeImageHeight/2)*3;
  //  portraitImageWidth = (landScapeImageHeight/3)*2;

    landScapeImageWidth = $('#popup-carousel').width();
    landScapeImageHeight = (($('#popup-carousel').width())/3)*2;
    portraitImageHeight = $('#popup-carousel').height();
    portraitImageWidth = ($('#popup-carousel').height()/3)*2;
  
}
  else{
    isPortrait=true;
  //   landScapeImageWidth = $('#popup-carousel').width(); 
  //  landScapeImageHeight =(landScapeImageWidth/3)*2;
  
  //  portraitImageHeight = (landScapeImageWidth/2)*3;
  landScapeImageWidth = $('#popup-carousel').width();
  landScapeImageHeight = (($('#popup-carousel').width())/3)*2;
  portraitImageHeight = $('#popup-carousel').height();
  portraitImageWidth = ($('#popup-carousel').height()/3)*2;
if(portraitImageWidth > $('#popup-carousel').width()){
  portraitImageWidth = $('#popup-carousel').width();
  portraitImageHeight = (portraitImageWidth/2)*3;
}
  }
  if(!isPortrait){
    for(var i=1 ; i< 8 ; i++) {
      if(i!=5 && i!=7){
        $('<div class="carousel-item justify-content-center align-self-center"><img class="d-block mx-auto " height='+landScapeImageHeight +' width='+landScapeImageWidth+' src="./images/thumbnails/' +i+ '.jpg">   </div>').appendTo('#popup-carousel .carousel-inner');   
      }
      else{
        $('<div class="carousel-item justify-content-center align-self-center"><img class="d-block mx-auto" height='+portraitImageHeight +' width='+portraitImageWidth+ ' src="./images/thumbnails/' +i+ '.jpg">   </div>').appendTo('#popup-carousel .carousel-inner');
      }
      
    }
  }
  else{
    for(var i=1 ; i< 8 ; i++) {
      if(i!=5 && i!=7){
        $('<div class="carousel-item justify-content-center align-self-center"><img class="d-block mx-auto my-auto" height='+landScapeImageHeight +' width='+landScapeImageWidth+' src="./images/thumbnails/' +i+ '.jpg">   </div>').appendTo('#popup-carousel .carousel-inner');   
      }
      else{
        $('<div class="carousel-item justify-content-center align-self-center"><img class="d-block mx-auto my-auto" height='+portraitImageHeight +' width='+portraitImageWidth+ ' src="./images/thumbnails/' +i+ '.jpg">   </div>').appendTo('#popup-carousel .carousel-inner');
      }
      
    }
  } 
  
  
  $('#popup-carousel .carousel-item').first().addClass('active');
  $('#popup-carousel').carousel();
 setTimeout(function() {
      $(".mfp-container").swipe( {
        swipeLeft:function(event, direction, distance, duration, fingerCount) {
          console.log("swipe right");
          slide("right");
         // $('#popup-carousel').carousel("next");
        },

      /* Swipe para a direita - Anterior */
      swipeRight:function(event, direction, distance, duration, fingerCount) {
        console.log("swipe left");
        slide("left");
        //$('#popup-carousel').carousel("prev");
      },
      });
  }, 500);
});


$('.carousel-control-prev').click(function(event){
  event.preventDefault();
  slide("left");
});
$('.carousel-control-next').click(function(event){
  event.preventDefault();
  slide("right");
});


function slide (direction) {
    
  if(direction=="right"){
    var current =  $('#popup-carousel .carousel-item.active');
    var nextIndex= $('#popup-carousel .carousel-item').index($('#popup-carousel .carousel-item.active')) +1;
    if(nextIndex > $('#popup-carousel .carousel-item').length-1){
      nextIndex=0;
    }
    var next =  $($('#popup-carousel .carousel-item')[nextIndex]);
   //setTimeout(function(){
    current.addClass('t');
   //},100)
    
    setTimeout(function(){
     current.removeClass('active');
     next.css('display','block');
     current.hide();
     next.removeClass('t');
     next.removeClass('t1');
     next.addClass('active');
     
     },300)
  }
  else{
  
    var previousIndex= $('#popup-carousel .carousel-item').index($('#popup-carousel .carousel-item.active')) -1;
    var current =$('#popup-carousel .carousel-item.active');
    if(previousIndex <0){
      previousIndex = $('#popup-carousel .carousel-item').length-1;
    }
    var prev = $($('#popup-carousel .carousel-item')[previousIndex]);
    current.addClass('t1');
    setTimeout(function(){
      current.removeClass('active');
      current.hide();
      prev.removeClass('t');
      prev.removeClass('t1');
      prev.addClass('active');
      prev.css('display','block');
     },300)
  }
}

$(window).resize(function(){

  
  /* Espera carregar o lightbox */
  setTimeout(function(){
    var landScapeImageHeight,landScapeImageWidth,portraitImageWidth,portraitImageHeight,isPortrait=false;
  $('#popup-carousel').height($('.mfp-container').height()-50);
  landScapeImageWidth = $('#popup-carousel').width();
  landScapeImageHeight = (($('#popup-carousel').width())/3)*2;
  portraitImageHeight = $('#popup-carousel').height();
  portraitImageWidth = ($('#popup-carousel').height()/3)*2;
  if($('#popup-carousel').height()>$('#popup-carousel').width()){
  if(portraitImageWidth > $('#popup-carousel').width()){
    portraitImageWidth = $('#popup-carousel').width();
    portraitImageHeight = (portraitImageWidth/2)*3;
  }
}

  $('#popup-carousel .carousel-item img').each(function( index, element){
    if(index !=4 && index!=6){
      $(element).width(landScapeImageWidth);
      $(element).height(landScapeImageHeight);
    }
    else{
      $(element).width(portraitImageWidth);
      $(element).height(portraitImageHeight);
    }
    
  })
  },100);
 
  

});

})