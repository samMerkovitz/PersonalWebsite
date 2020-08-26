




    $(document).ready(function(){

        /*! Fades in page on load */
        $('.welcome-header').css('display', 'none');
        $('.welcome-header').fadeIn(2000);

        $('.scrolldown').css('display', 'none');
        $('.scrolldown').fadeIn(6000);

        $('.nav-menu').css('display', 'none');
        $('.nav-menu').fadeIn(6000);

        $('.scrolldown').fadeToggle(5000);

        
    });

    // The speed of the scroll in milliseconds
    const speed = 1000;

    $('a[href*="#"]')
      .filter((i, a) => a.getAttribute('href').startsWith('#') || a.href.startsWith(`${location.href}#`))
      .unbind('click.smoothScroll')
      .bind('click.smoothScroll', event => {
        const targetId = event.currentTarget.getAttribute('href').split('#')[1];
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          event.preventDefault();
          $('html, body').animate({ scrollTop: $(targetElement).offset().top - 150}, speed);
        }
      });


      function openNav() {
        document.getElementById("mySideNav").style.width = "250px";
      }
      
      /* Set the width of the side navigation to 0 */
      function closeNav() {
        document.getElementById("mySideNav").style.width = "0";
      }