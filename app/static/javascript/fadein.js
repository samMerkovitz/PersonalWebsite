

    let tabPanes = document.getElementsByClassName("tab-header")[0].getElementsByTagName("div");

    for(let i=0;i<tabPanes.length;i++){
    tabPanes[i].addEventListener("click",function(){
        document.getElementsByClassName("tab-header")[0].getElementsByClassName("active")[0].classList.remove("active");
        tabPanes[i].classList.add("active");
        
        document.getElementsByClassName("tab-content")[0].getElementsByClassName("active")[0].classList.remove("active");
        document.getElementsByClassName("tab-content")[0].getElementsByTagName("div")[i].classList.add("active");
    })
    }


    $(document).ready(function(){

        /*! Fades in page on load */
        $('.welcome-header').css('display', 'none');
        $('.welcome-header').fadeIn(2000);

        $('.scrolldown').css('display', 'none');
        $('.scrolldown').fadeIn(6000);

        $('.nav-menu').css('display', 'none');
        $('.nav-menu').fadeIn(6000);
        
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


    $(window).scroll(function() {
        $('.fade-in').each(function() {
            var top_of_element = $(this).offset().top;
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
            var top_of_screen = $(window).scrollTop();

            if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element) && !$(this).hasClass('is-visible')) {
                $(this).addClass('is-visible');
                $('.scrolldown').fadeOut(2000);
            }
        });
    });

      
