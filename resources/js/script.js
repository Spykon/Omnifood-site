/*PROVA FUNZIONAMENTO - in questa prova voglio che al click dell'intestazione (h1), ci sia un cambio del background-color in rosso*/

/*$(document).ready(function() {

    $('h1').click(function() {
        $(this).css('background-color', '#ff0000');
    })

});*/


/*Procedimento:
01) Vado in: http://imakewebthings.com/waypoints/guides/jquery-zepto/
02) Copio le istruzioni che mi interessano e le incollo qui sotto;
03) Seguo le istruzioni che ho copiato e creo l'effetto che desidero immettendo le varie informazioni;
04) imposto un "offset" che mi servirà per determinare un dato spazio di "separazione" in un dato punto
05) Verifico di aver compilato tutto correttamente
06) Provo se funziona l'effetto ricercato*/

$(document).ready(function() {

    /*For the sticky navigation*/
    $('.js--section-features').waypoint(function(direction) {
        if(direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '60px;'
    });

    /*
    var waypoints = $('#handler-first').waypoint(function(direction) {
        notify(this.element.id + ' hit 25% from top of window')
    }, {
    offset: '25%'
    })
    */



    /*Scroll on buttons*/
    /*Tramite questa funzionalità è possibile fare uno scorrimento della pagina. Cliccando su "I'm hungry" si viene trasportati nell'arco di un secondo (1000) nella sezione relativa gli abbonamenti*/
    $('.js--scroll-to-plans').click(function() {
        $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000);
    });

    /*Cliccando su "Show me more" si viene reindirizzati nella sezione relativa le informazioni*/
    $('.js--scroll-to-start').click(function() {
        $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);
    });


    /*Navigation Scroll from someone else - presa su internet: https://css-tricks.com/snippets/jquery/smooth-scrolling/ - NB: questi codici possono essere copiati da internet in quanto si tratta di codice già scritto - usandolo si vedrà che esso funziona correttamente - per verificare se funziona devo intervenire sul codice html e creare degli id da agganciare agli href in cui cliccherò per il rimando*/
    // Select all links with hashes
    $('a[href*="#"]')
      // Remove links that don't actually link to anything
      .not('[href="#"]')
      .not('[href="#0"]')
      .click(function(event) {
        // On-page links
        if (
          location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
          &&
          location.hostname == this.hostname
        ) {
          // Figure out element to scroll to
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          // Does a scroll target exist?
          if (target.length) {
            // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 1000, function() {
              // Callback after animation
              // Must change focus!
              var $target = $(target);
              $target.focus();
              if ($target.is(":focus")) { // Checking if the target was focused
                return false;
              } else {
                $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
              };
            });
          }
        }
      });



    /*ANIMATION ON SCROLL - con questa funzionalità permetto un'animazione ulteriore rispetto alcuni elemenenti della pagina, la funzionalià sottostante fa apparire le 4 descrizioni della sezione features*/
    $('.js--wp-1').waypoint(function(direction) {
        $('.js--wp-1').addClass('animated fadeIn'); /*Basta richiamare animated e poi il nome del tipo di animazione che ho scelto dalla pagina "animate.css"*/
    }, {
        offset: '50%'
    });


    $('.js--wp-2').waypoint(function(direction) {
        $('.js--wp-2').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });


    $('.js--wp-3').waypoint(function(direction) {
        $('.js--wp-3').addClass('animated fadeInUp');
    }, {
        offset: '50%'
    });


    $('.js--wp-4').waypoint(function(direction) {
        $('.js--wp-4').addClass('animated pulse');
    }, {
        offset: '50%'
    });



   /*MOBILE NAV*/

    $('.js--nav-icon').click(function() {
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');

        nav.slideToggle(200);

        if (icon.hasClass('ion-navicon-round')) {
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
    } else {
        icon.addClass('ion-navicon-round');
        icon.removeClass('ion-close-round');
    }
    });

});
