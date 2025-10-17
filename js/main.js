$(document).ready(function () {
    AOS.init({
        easing: 'ease',
        disable: 'mobile'
    });

    $(".header__nav a[href*='#']").on("click", function (e) {
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top
        }, 777);
        e.preventDefault();
        return false;
    });


    let lastScroll = 0;
    const header = document.querySelector('header.header');
    const scrollThreshold = 10;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (Math.abs(currentScroll - lastScroll) < scrollThreshold) return;

        if (currentScroll > lastScroll && currentScroll > header.offsetHeight) {
            header.classList.add('hide');
        } else {
            header.classList.remove('hide');
        }

        lastScroll = currentScroll;
    });


    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('active');
        } else {
            header.classList.remove('active');
        }
    });


    $('.menubtn').click(function () {
        $('body').addClass('hidden');
        $('.menuwrapper').addClass('show');
    })

    $('.close-menu').click(function () {
        $('body').removeClass('hidden');
        $('.menuwrapper').removeClass('show');
    })

    $('.header__nav ul li a').click(function () {
        $('body').removeClass('hidden');
        $('.menuwrapper').removeClass('show');
    })






});