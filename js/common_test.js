$(document).ready(function () {

    let questions = [
        {question : '1 Где вЫ планируете открывать ресторан грузинской кухни?',
            input: '<input type="text" name="city" placeholder="Напишите страну и город, например: Украина, Киев">',
            answer : ''
        },

        {question : '2 Есть ли у вас опыт в бизнесе?',
            input: '<input type="text" name="city" placeholder="Напишите страну и город, например: Украина, Киев"><div class="buisiness-wrap">' +
                '<p>Да</p><input type="radio" name="buisiness" value="Да">' +
                '<p>Нет</p><input type="radio" name="buisiness" value="Нет"></div>',
            answer : ''

        },

        {question : '3 Какой формат ресторана вам интересен?',
            input: '                    <div>\n' +
                '                        <p>от 100 м2 с летней площадкой на теплый период</p>\n' +
                '                        <input type="radio" name="typesBuisiness" value="от 100 м2 с летней площадкой на теплый период">\n' +
                '                        <p>от 300 м2 с кальянным залом, караоке ﻿и летней площадкой на теплый период</p>\n' +
                '                        <input type="radio" name="typesBuisiness" value="от 300 м2 с кальянным залом">\n' +
                '                        <p>Точка — ﻿еда навынос</p>\n' +
                '                        <input type="radio" name="typesBuisiness" value="Точка — ﻿еда навынос">\n' +
                '                    </div>',
            answer : ''

        },

        {question : '4 Где вЫ планируете открывать ресторан грузинской кухни?',
            input: '<input type="text" name="city" placeholder="Напишите страну и город, например: Украина, Киев">',
            answer : ''
        },


    ];

    let quizAsk = $('.question');
    let answerWrap = $('.answer');

    let currentQuest = 0;
    let totalQuest = questions.length;
    let questIndex = 0;
    let userAnswers = [];

    //console.log(totalQuest);

    function loadQuestion (questIndex) {
        let q = questions[questIndex];
        let qQuest = questions[questIndex].question;
        let input = questions[questIndex].input;
        quizAsk.html(qQuest);
        answerWrap.html(input);
    }

    loadQuestion (questIndex);

    function changeSteps () {
       let steps = $('.quiz-steps__item');

           if (steps[questIndex].classList.contains('steps--active')) {
               return false;
           }
            else {
               $(steps[questIndex]).addClass('steps--active');
       }
    }

    function loadNextQuestion () {
        questIndex++;
        loadQuestion(questIndex);
    }

    function saveValues () {
        let form = $('form');
        form.action = 'https://google.com/search';
        form.method = 'GET';
        form.submit();
    }

    $('.button-next').click(function () {
        loadNextQuestion (questIndex);
        changeSteps ();
       // saveValues ();
    });

    let slickSliders = function () {
        $('.earnings-item--slider').slick({
            dots: false,
            infinite: false,
            speed: 500,
            fade: true,
            cssEase: 'linear',
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            prevArrow: '<div class="nav-arrow prev-arrow"><div class="arrow-inner-prev"></div></div>',
            nextArrow: '<div class="nav-arrow next-arrow"><div class="arrow-inner-next"></div></div>'
        });

        $('.graph-slider').slick({
            dots: true,
            infinite: false,
            speed: 500,
            fade: true,
            cssEase: 'linear',
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false
        });

        $('.reviews-people__slider').slick({
            dots: false,
            infinite: false,
            speed: 500,
            fade: true,
            cssEase: 'linear',
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            prevArrow: '<div class="reviews-arrow reviews-inner-prev"></div>',
            nextArrow: '<div class="reviews-arrow reviews-inner-next"></div>'
        });

        $('.reviews-bottom__slider').slick({
            dots: false,
            infinite: false,
            speed: 500,
            fade: true,
            cssEase: 'linear',
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            prevArrow: '<div class="nav-arrow prev-arrow"><div class="arrow-inner-prev"></div></div>',
            nextArrow: '<div class="nav-arrow next-arrow"><div class="arrow-inner-next"></div></div>'
        });

    }


//remove symbols
    $("body").children().each(function() {
        document.body.innerHTML = document.body.innerHTML.replace(/\u2028/g, ' ');
    });

    let changeNumslidesReviews = function () {

        let totalReviewsSlides = $('.reviews-people__slider-item').length;
       // console.log(totalReviewsSlides);

        $('.reviews-circle__second').text(totalReviewsSlides);

        let firstDigit = +$('.reviews-circle__first').text();
       // console.log(firstDigit);

        $('.reviews-inner-next').click(function (e) {

            if (firstDigit < totalReviewsSlides) {
                firstDigit++;
                $('.reviews-circle__first').text(firstDigit);
            }

        });

        $('.reviews-inner-prev').click(function (e) {

            if (firstDigit > 1) {
                firstDigit--;
                $('.reviews-circle__first').text(firstDigit);
            }
        })

    }

    let dropdownQusestions = function () {
        $('.questions-right').click(function () {

            if ((!$(this).find('.questions-right__triangle').hasClass('questions-right__triangle--rotate') ||
                (!$(this).siblings('.questions-left').hasClass('questions-left--bold'))
            )){
                $(this).find('.questions-right__triangle').addClass('questions-right__triangle--rotate');
                $(this).siblings('.questions-left').addClass('questions-left--bold');
            } else {
                $(this).find('.questions-right__triangle').removeClass('questions-right__triangle--rotate');
                $(this).siblings('.questions-left').removeClass('questions-left--bold');
            }

            $(this).siblings('.questions-answer').toggle();

        });
    };

    let quiz = function () {

        let backBtn = $('.quiz-form__btn--back'),
            nextBtn = $('.quiz-form__btn--forward'),
            firstQuestion = $('#quiz-question-1'),
            secondQuestion = $('#quiz-question-2'),
            thirdQuestion = $('#quiz-question-3'),
            fourthQuestion = $('#quiz-question-4'),
            index = 1;

        // if ((firstQuestion).hasClass('quiz-active')) {
        //     backBtn.addClass('not-active');
        //     $('.quiz-form__btn-wrap').css({'justify-content' : 'flex-end'})
        // }

        function loadQuestion (index) {

            if ($('#quiz-question-' + index ).hasClass('quiz-active')) {
                $('#quiz-question-' + index ).removeClass('quiz-active');
            } else {
                $('#quiz-question-' + index ).addClass('quiz-active');
            }

        }

            nextBtn.click(function (e) {
                e.preventDefault();
               index++;
                loadQuestion (index);
            });


        // nextBtn.click(function (e) {
        //     e.preventDefault();
        //     $('.quiz-question-1').removeClass('quiz-active');
        //     $('.quiz-question-2').addClass('quiz-active');
        // });
        //
        // if ((firstQuestion).hasClass('quiz-active')) {
        //     backBtn.addClass('not-active');
        //     $('.quiz-form__btn-wrap').css({'justify-content' : 'flex-end'})
        // }

    }


    function initMap() {
        map = new google.maps.Map(
            document.getElementById('map'),
            {center: new google.maps.LatLng(50.452121, 30.519472), zoom: 5,
                styles: [
                    {elementType: 'geometry', stylers: [{color: '#edecec'}]}, //main bg
                   // {elementType: 'geometry', stylers: [{color: '#f7f7f7'}]}, //main bg
                    {elementType: 'labels.text.stroke', stylers: [{color: '#E5E5E5'}]}, //name of cities
                   {elementType: 'labels.text.fill', stylers: [{color: '#ffffff'}]}, //color of countries name
                    {
                        featureType: 'administrative.locality',
                        elementType: 'labels.text.fill',
                        stylers: [{color: '#746855'}, {"visibility": "off"}]
                    },
                    {
                        featureType: 'poi',
                        elementType: 'labels.text.fill',
                        stylers: [{color: '#000000'}]
                    },
                    {
                        featureType: 'poi.park',
                        elementType: 'geometry',
                        stylers: [{color: '#f5f5f5'}]
                    },
                    {
                        featureType: 'poi.park',
                        elementType: 'labels.text.fill',
                        stylers: [{color: '#6b9a76'}]
                    },
                    {
                        featureType: 'road',
                        elementType: 'geometry',
                        stylers: [{color: '#f5f5f5'}]
                    },
                    {
                        featureType: 'road',
                        elementType: 'geometry.stroke',
                        stylers: [{color: '#e7e7e7'}]
                    },
                    {
                        featureType: 'road',
                        elementType: 'labels.text.fill',
                        stylers: [{color: '#9ca5b3'}]
                    },
                    {
                        featureType: 'road.highway',
                        elementType: 'geometry',
                        stylers: [{color: '#dfc7a4'}, {"visibility": "off"}]
                    },
                    {
                        featureType: 'road.highway',
                        elementType: 'geometry.stroke',
                        stylers: [{color: '#e7e7e7'}]
                    },
                    {
                        featureType: 'road.highway',
                        elementType: 'labels.text.fill',
                        stylers: [{color: '#f3d19c'}]
                    },
                    {
                        featureType: 'transit',
                        elementType: 'geometry',
                        stylers: [{color: '#e7e7e7'}]
                    },
                    {
                        featureType: 'transit.station',
                        elementType: 'labels.text.fill',
                        stylers: [{color: '#f5f5f5'}]
                    },
                    {
                        featureType: 'water',
                        elementType: 'geometry',
                        stylers: [{color: '#ffffff'}]
                    },
                    {
                        featureType: 'water',
                        elementType: 'labels.text.fill',
                        stylers: [{color: '#f5f5f5'}]
                    },
                    {
                        featureType: 'water',
                        elementType: 'labels.text.stroke',
                        stylers: [{color: '#fff'}]
                    }
                ]});

        var iconBase = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/';

        var icons = {
            parking: {
                icon: iconBase + 'parking_lot_maps.png'
            },
            kiev: {
                icon: 'img/map/pin-active.png'
            },
            odessa: {
                icon: 'img/map/pin.png'
            },
            almetyevsk: {
                icon: 'img/map/pin.png'
            }

        };

        var features = [
            {
                position: new google.maps.LatLng(50.452121, 30.519472),
                type: 'kiev'
            },

            {
                position: new google.maps.LatLng(46.483073, 30.735521),
                type: 'odessa'
            },

            {
                position: new google.maps.LatLng(54.899667, 52.273819),
                type: 'almetyevsk'
            }
        ];

        // Create markers.
        for (var i = 0; i < features.length; i++) {
            var marker = new google.maps.Marker({
                position: features[i].position,
                icon: icons[features[i].type].icon,
                map: map
            });
        };
    }

    slickSliders();
    changeNumslidesReviews();
    dropdownQusestions();

   initMap();
  quiz();



});


let dropdownQusestions = function () {
    $('.questions-right').click(function () {

        if ((!$(this).find('.questions-right__triangle').hasClass('questions-right__triangle--rotate') ||
            (!$(this).siblings('.questions-left').hasClass('questions-left--bold'))
        )){
            $(this).find('.questions-right__triangle').addClass('questions-right__triangle--rotate');
            $(this).siblings('.questions-left').addClass('questions-left--bold');
        } else {
            $(this).find('.questions-right__triangle').removeClass('questions-right__triangle--rotate');
            $(this).siblings('.questions-left').removeClass('questions-left--bold');
        }

        $(this).siblings('.questions-answer').toggle();

    });
};

let quiz = function () {

    let backBtn = $('.quiz-form__btn--back'),
        nextBtn = $('.quiz-form__btn--forward'),
        sections = $('.quiz-section'),
        currentSection = 0;


    //hide all section except first
    for (let i = 1; i < sections.length; i++) {
        sections[i].classList.add('not-active');
    }

    function loadQuestion (toHide, toShow) {
        sections[toShow].classList.remove('not-active');
        sections[toHide].classList.add('not-active');

        currentSection = toShow;
    };

    function showNextQuestion () {
        if (currentSection === sections.length - 1) {
            return;
            loadQuestion (currentSection, currentSection + 1);
        }
    };

    function showPrevQuestion () {
        if (currentSection === 0) {
            return;
            loadQuestion (currentSection, currentSection - 1);
        }
    };




    nextBtn.click(function (e) {
        e.preventDefault();
        showNextQuestion();

    });

    backBtn.click(function (e) {
        e.preventDefault();
        showPrevQuestion();
    })

};



$(document).ready(function () {

    let anchorNav = function () {
        $('body').on('click', '[href*="#anchor"]', function(e){
            let fixed_offset = 100;
            $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
            e.preventDefault();
        });
    }

    let slickSliders = function () {
        $('.earnings-item--slider').slick({
            dots: false,
            infinite: false,
            speed: 500,
            fade: true,
            cssEase: 'linear',
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            prevArrow: '<div class="nav-arrow prev-arrow"><div class="arrow-inner-prev"></div></div>',
            nextArrow: '<div class="nav-arrow next-arrow"><div class="arrow-inner-next"></div></div>'
        });

        $('.graph-slider').slick({
            dots: true,
            infinite: false,
            speed: 500,
            fade: true,
            cssEase: 'linear',
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false
        });

        $('.reviews-people__slider').slick({
            dots: false,
            infinite: false,
            speed: 500,
            fade: true,
            cssEase: 'linear',
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            prevArrow: '<div class="reviews-arrow reviews-inner-prev"></div>',
            nextArrow: '<div class="reviews-arrow reviews-inner-next"></div>'
        });

        $('.reviews-bottom__slider').slick({
            dots: false,
            infinite: false,
            speed: 500,
            fade: true,
            cssEase: 'linear',
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            prevArrow: '<div class="nav-arrow prev-arrow"><div class="arrow-inner-prev"></div></div>',
            nextArrow: '<div class="nav-arrow next-arrow"><div class="arrow-inner-next"></div></div>'
        });

        $('.ostrov-line__slider').slick({
            dots: false,
            infinite: false,
            speed: 500,
            fade: true,
            cssEase: 'linear',
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            prevArrow: '<div class="nav-arrow prev-arrow"><div class="arrow-inner-prev"></div></div>',
            nextArrow: '<div class="nav-arrow next-arrow"><div class="arrow-inner-next"></div></div>'
        });






    }


//remove symbols
    $("body").children().each(function() {
        document.body.innerHTML = document.body.innerHTML.replace(/\u2028/g, ' ');
    });

    let changeNumslidesReviews = function () {

        let totalReviewsSlides = $('.reviews-people__slider-item').length;
        // console.log(totalReviewsSlides);

        $('.reviews-circle__second').text(totalReviewsSlides);

        let firstDigit = +$('.reviews-circle__first').text();
        // console.log(firstDigit);

        $('.reviews-inner-next').click(function (e) {

            if (firstDigit < totalReviewsSlides) {
                firstDigit++;
                $('.reviews-circle__first').text(firstDigit);
            }

        });

        $('.reviews-inner-prev').click(function (e) {

            if (firstDigit > 1) {
                firstDigit--;
                $('.reviews-circle__first').text(firstDigit);
            }
        })

    }

    let dropdownQusestions = function () {
        $('.questions-right').click(function () {

            if ((!$(this).find('.questions-right__triangle').hasClass('questions-right__triangle--rotate') ||
                (!$(this).siblings('.questions-left').hasClass('questions-left--bold'))
            )){
                $(this).find('.questions-right__triangle').addClass('questions-right__triangle--rotate');
                $(this).siblings('.questions-left').addClass('questions-left--bold');
            } else {
                $(this).find('.questions-right__triangle').removeClass('questions-right__triangle--rotate');
                $(this).siblings('.questions-left').removeClass('questions-left--bold');
            }

            $(this).siblings('.questions-answer').toggle();

        });
    };

    let quiz = function () {

        let backBtn = $('.quiz-form__btn--back'),
            nextBtn = $('.quiz-form__btn--forward'),
            sections = $('.quiz-section'),
            progressBarElements = $('.quiz-num');
        currentSection = 0,
            index = 0;

        if (index === 0) {
            $('.quiz-form__btn--back').addClass('not-active');
        };

        //hide all section except first
        for (let i = 1; i < sections.length; i++) {
            sections[i].classList.add('not-active');
        };

        function loadQuestion (toHide, toShow) {
            sections[toShow].classList.remove('not-active');
            sections[toHide].classList.add('not-active');
            currentSection = toShow;
            if (index < 4) {
                progressBarElements[toHide].classList.remove('quiz-num--active');
                progressBarElements[toShow].classList.add('quiz-num--active');
            }

        };


        function showNextQuestion () {
            if (currentSection === sections.length - 1) {
                return;
            } else {
                loadQuestion (currentSection, currentSection + 1);
            }
        };

        function showPrevQuestion () {
            if (currentSection === 0) {
                return;
            } else {
                loadQuestion (currentSection, currentSection - 1);
            }
        };

        nextBtn.click(function (e) {
            e.preventDefault();
            index++;
            //console.log(index);
            showNextQuestion();

            if (index === 4) {
                $('.quiz-numbers').addClass('not-active');
                $('.quiz-bottom').addClass('not-active');
                nextBtn.addClass('not-active');
                backBtn.addClass('not-active');
                $('.quiz-btn-orrange').removeClass('not-active');
                $('.quiz-form .conf-politic').removeClass('not-active');
                $('.quiz-title').addClass('not-active');
                $('.quiz-title__final').removeClass('not-active');

            };

            if (index >= 1 && index < 4) {
                backBtn.removeClass('not-active');
            }
        });

        backBtn.click(function (e) {
            e.preventDefault();
            showPrevQuestion();
            index--;
            console.log (index);

            if (index >= 0) {
                $('.quiz-bottom').removeClass('not-active');
            };

            if (index < 4) {
                nextBtn.removeClass('not-active');
                $('.quiz-btn-orrange').addClass('not-active');
                $('.quiz-form .conf-politic').addClass('not-active');
            };

            if (index === 0) {
                backBtn.addClass('not-active');
            }
        })

    };


    function initMap() {
        map = new google.maps.Map(
            document.getElementById('map'),
            {center: new google.maps.LatLng(50.452121, 30.519472), zoom: 5,
                styles: [
                    {elementType: 'geometry', stylers: [{color: '#edecec'}]}, //main bg
                    // {elementType: 'geometry', stylers: [{color: '#f7f7f7'}]}, //main bg
                    {elementType: 'labels.text.stroke', stylers: [{color: '#E5E5E5'}]}, //name of cities
                    {elementType: 'labels.text.fill', stylers: [{color: '#ffffff'}]}, //color of countries name
                    {
                        featureType: 'administrative.locality',
                        elementType: 'labels.text.fill',
                        stylers: [{color: '#746855'}, {"visibility": "off"}]
                    },
                    {
                        featureType: 'poi',
                        elementType: 'labels.text.fill',
                        stylers: [{color: '#000000'}]
                    },
                    {
                        featureType: 'poi.park',
                        elementType: 'geometry',
                        stylers: [{color: '#f5f5f5'}]
                    },
                    {
                        featureType: 'poi.park',
                        elementType: 'labels.text.fill',
                        stylers: [{color: '#6b9a76'}]
                    },
                    {
                        featureType: 'road',
                        elementType: 'geometry',
                        stylers: [{color: '#f5f5f5'}]
                    },
                    {
                        featureType: 'road',
                        elementType: 'geometry.stroke',
                        stylers: [{color: '#e7e7e7'}]
                    },
                    {
                        featureType: 'road',
                        elementType: 'labels.text.fill',
                        stylers: [{color: '#9ca5b3'}]
                    },
                    {
                        featureType: 'road.highway',
                        elementType: 'geometry',
                        stylers: [{color: '#dfc7a4'}, {"visibility": "off"}]
                    },
                    {
                        featureType: 'road.highway',
                        elementType: 'geometry.stroke',
                        stylers: [{color: '#e7e7e7'}]
                    },
                    {
                        featureType: 'road.highway',
                        elementType: 'labels.text.fill',
                        stylers: [{color: '#f3d19c'}]
                    },
                    {
                        featureType: 'transit',
                        elementType: 'geometry',
                        stylers: [{color: '#e7e7e7'}]
                    },
                    {
                        featureType: 'transit.station',
                        elementType: 'labels.text.fill',
                        stylers: [{color: '#f5f5f5'}]
                    },
                    {
                        featureType: 'water',
                        elementType: 'geometry',
                        stylers: [{color: '#ffffff'}]
                    },
                    {
                        featureType: 'water',
                        elementType: 'labels.text.fill',
                        stylers: [{color: '#f5f5f5'}]
                    },
                    {
                        featureType: 'water',
                        elementType: 'labels.text.stroke',
                        stylers: [{color: '#fff'}]
                    }
                ]});

        var iconBase = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/';

        var icons = {
            parking: {
                icon: iconBase + 'parking_lot_maps.png'
            },
            kiev: {
                icon: 'img/map/pin-active.png'
            },
            odessa: {
                icon: 'img/map/pin.png'
            },
            almetyevsk: {
                icon: 'img/map/pin.png'
            }

        };

        var features = [
            {
                position: new google.maps.LatLng(50.452121, 30.519472),
                type: 'kiev'
            },

            {
                position: new google.maps.LatLng(46.483073, 30.735521),
                type: 'odessa'
            },

            {
                position: new google.maps.LatLng(54.899667, 52.273819),
                type: 'almetyevsk'
            }
        ];

        // Create markers.
        for (var i = 0; i < features.length; i++) {
            var marker = new google.maps.Marker({
                position: features[i].position,
                icon: icons[features[i].type].icon,
                map: map
            });
        };
    }

    $("a[href='#foodCort']").magnificPopup({
        mainClass: 'my-mfp-zoom-in',
        removalDelay: 300,
        type: 'inline'
    });


    $("a[href='#ostrov']").magnificPopup({
        mainClass: 'my-mfp-zoom-in',
        removalDelay: 300,
        type: 'inline'
    }, function () {
        $('.ostrov-line__slider--bottom').slick({
            dots: false,
            infinite: false,
            speed: 500,
            fade: true,
            cssEase: 'linear',
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            prevArrow: '<div class="nav-arrow prev-arrow"><div class="arrow-inner-prev"></div></div>',
            nextArrow: '<div class="nav-arrow next-arrow"><div class="arrow-inner-next"></div></div>'
        });
    });

    $("a[href='#fast-casual']").magnificPopup({
        mainClass: 'my-mfp-zoom-in',
        removalDelay: 300,
        type: 'inline'
    });

    $("a[href='#presentation']").magnificPopup({
        mainClass: 'my-mfp-zoom-in',
        removalDelay: 300,
        type: 'inline'
    });

    $("a[href='#inventure']").magnificPopup({
        mainClass: 'my-mfp-zoom-in',
        removalDelay: 300,
        type: 'inline'
    });

    $("a[href='#callback-form']").magnificPopup({
        mainClass: 'my-mfp-zoom-in',
        removalDelay: 300,
        type: 'inline'
    });

    function callbackForm () {


        let D = new Date(),
            //hour = D.getHours(),
            //day = D.getUTCDay();
            hour = 10,
            day = 7;

        //вихідний день
        if (day == 0 || day == 6) {
            $('#now-btn').css({'display' : 'none'});
            $('#intime-btn').addClass('btn--active');
            $('#intime-field').css({'display' : 'block'});

        } else {
            if (hour >= 10 && hour < 18 ) {

                $('#intime-field').css({'display' : 'none'});

                $('#now-btn').click(function () {
                    if ($(this).hasClass('btn--active')) {
                        return false;
                    } else {
                        $(this).addClass('btn--active');
                        $('#intime-btn').removeClass('btn--active');
                        $('#intime-field').css({'display' : 'none'});
                    };
                });

                $('#intime-btn').click(function () {
                    $(this).addClass('btn--active');
                    $('#intime-field').css({'display' : 'block'});
                    $('#now-btn').removeClass('btn--active');

                });

            } else {
                $('#now-btn').css({'display' : 'none'});
                $('#intime-btn').addClass('btn--active');
            }
        }
    }

    //Send form
    let userName = '';
    $("form").submit(function() { //Change
        var th = $(this);

        let formID =  $(this).attr('id');
        userName = $(this).find("input[name='client_name']").val();
        localStorage.setItem('username', userName);

        let callNow = $(this).find('#now-btn').hasClass('btn--active');
        // console.log(callNow);
        //console.log(userName);

        $.ajax({
            type: "GET",
            url: "/mail.php", //Change
            data: th.serialize()
        }).done(function() {
            setTimeout(function() {
                // Done Functions

                if (formID === 'fast-casual' || formID === 'presentation') {
                    window.location = "http://djigit.loc/form-success-name-4.html";
                } else if (formID === 'callback-form') {
                    if (callNow === true) {
                        window.location = "http://djigit.loc/form-success-name.html";
                    } else if (formID === 'callback-form') {
                        window.location = "http://djigit.loc/form-success-name-1.html";
                    }

                } else {

                }
            }, 1000);
        });
        return false;
    });

    let formName = localStorage.getItem('username');
    $('.form-change-name').text(formName);
    localStorage.removeItem('username');

    // let getSiteUrl = function() {
    //     let siteUrl = document.location.host;
    //     console.log(siteUrl);
    //     $('.back-tosite').attr('href', siteUrl);
    //
    // }

    anchorNav();
    slickSliders();
    changeNumslidesReviews();
    dropdownQusestions();
    initMap();
    quiz();
    callbackForm();
    // getSiteUrl();



});

/*Multistep Form*/
/*https://www.youtube.com/watch?v=saabXtJpEvY
    https://www.youtube.com/watch?v=8onWWl-k7Gw*/
