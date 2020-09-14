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


    function initMap() {
        map = new google.maps.Map(
            document.getElementById('map'),
            {center: new google.maps.LatLng(50.43902809999999, 30.149361), zoom: 15,
                styles: [
                    {elementType: 'geometry', stylers: [{color: '#edecec'}]}, //main bg
                    {elementType: 'labels.text.stroke', stylers: [{color: '#DFE7FF'}]}, //name of cities
                    {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
                    {
                        featureType: 'administrative.locality',
                        elementType: 'labels.text.fill',
                        stylers: [{color: '#746855'}]
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
                        stylers: [{color: '#dfc7a4'}]
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
                        stylers: [{color: '#f5f5f5'}]
                    }
                ]});

        var iconBase =
            'https://developers.google.com/maps/documentation/javascript/examples/full/images/';

        var icons = {
            parking: {
                icon: iconBase + 'parking_lot_maps.png'
            },
            library: {
                icon: 'img/icons/map-marker.png'
            }

        };

        var features = [
            {
                position: new google.maps.LatLng(50.43902809999999, 30.149361),
                type: 'library'
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

   //AZ AZ initMap();



});
