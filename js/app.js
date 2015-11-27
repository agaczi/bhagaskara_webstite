//STICKY MENU

$(document).ready(function(){

    function stickyMenu() {
        var menu = $(".menu");
        var menuStartPosition = menu.offset().top;
        var spacer = $("#stickyMenu");

        $(window).on("scroll", function (event) {
            if ($(window).scrollTop() > menuStartPosition) {
                menu.parent().addClass("sticky");
                spacer.height(menu.outerHeight());
            } else {
                menu.parent().removeClass("sticky");
                spacer.height(0);
            }
        });

    }
    stickyMenu();



////SLIDER MENU

    var member = document.getElementsByClassName('memberPhoto');
    function gallerySliderMenu() {

        var allPictures = $(".gallery li");
        var nextImage = $(".nextArrow");
        var prevImage = $(".prevArrow");
        var currentImage = 1;

        allPictures.addClass('opacity');
        allPictures.eq(currentImage).removeClass('opacity');

        nextImage.on("click", function () {

            currentImage++;
            if (currentImage >= allPictures.length) {
                currentImage = 0;
            }
            allPictures.removeClass('opacity2').addClass('opacity');
            allPictures.eq(currentImage).removeClass('opacity').addClass('opacity2')
            ourSkills(member, currentImage);

        });

        prevImage.on("click", function () {

            currentImage--;
            if (currentImage < 0) {
                currentImage = allPictures.length - 1;
            }
            allPictures.removeClass('opacity2').addClass('opacity');
            allPictures.eq(currentImage).removeClass('opacity').addClass('opacity2')
            ourSkills(member, currentImage);
        });

    }
    gallerySliderMenu();




    // VALIDATION FORMULAIRE


    function checkValidate() {

        var imie = $('#form').find("input#name");
        var email = $('#form').find("input#email");
        var textarea = $('#form').find("#text");
        var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;

        var nameSpan = $('#form').find("span.formName");
        var emailSpan = $('#form').find("span.formEmail");
        var textSpan = $('#form').find("span.formText");


        $(".buttonSendMessage").click(function () {

            console.log("DKHDHD");
            //sprawdzenie poprawnosci imienia

            if ((imie.val().length >= 3) && (imie.val().length <= 10)) {
                console.log('ok')
            }
            else {
                console.log("bład");
                nameSpan.show();
            }

            // sprawdzenie poprawnosci e-mail
            if (re.test(email.val())) {
                console.log('ok')
            }
            else {
                console.log("bład");
                emailSpan.show();
            }

            // sprawdzenie poprawnosci wiadomosci
            if ((textarea.val().length > 0) && (textarea.val().length <= 100)) {
                console.log('ok')
            }
            else {
                console.log("bład");
                textSpan.show();
            }
        })
    }
    checkValidate();

    //QUOTES SLIDER MENU

    function slickMenu() {
        $('.quotesSlider1').slick({
            dots: true,
            infinite: true,
            slidesToScroll: 1,
            autoplay: true
        })

    }

    slickMenu();

    function ourSkills(member, number){
        console.log(member[number]);

        var web = $(member[number]).data("web");
        var graphic = $(member[number]).data("graphic");
        var html = $(member[number]).data("html");
        var ui = $(member[number]).data("ui");

        //console.log(member);
        //console.log(web);
        //console.log(graphic);
        //console.log(html);
        //console.log(ui);

        var webStripe = document.getElementsByClassName('skillBoxWeb');
        var idWeb = $(webStripe).find('.partial');
        var percentageWeb = $(webStripe).find('.percentage');

        var graphicStripe = document.getElementsByClassName('skillBoxGraphic');
        var idGraphic = $(graphicStripe).find('.partial');
        var percentageGraphic = $(graphicStripe).find('.percentage');


        var htmlStripe = document.getElementsByClassName('skillBoxHTML');
        var idHTML = $(htmlStripe).find('.partial');
        var percentageHTML = $(htmlStripe).find('.percentage');


        var uiStripe = document.getElementsByClassName('skillBoxUI');
        var idStripe = $(uiStripe).find('.partial');
        var percentageUI = $(uiStripe).find('.percentage');



        //console.log(idWeb);
        //console.log(idGraphic);
        //console.log(idHTML);
        //console.log(idStripe);


        idWeb.animate({
            width: web
        },800)
        idGraphic.animate({
            width: graphic
        },800)
        idHTML.animate({
            width: html
        },800)
        idStripe.animate({
            width: ui
        },800)

        $(percentageWeb[0]).text(web);
        $(percentageGraphic[0]).text(graphic);
        $(percentageHTML[0]).text(html);
        $(percentageUI[0]).text(ui);


    }

    ourSkills(member, 1);
});




