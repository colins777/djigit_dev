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
        $('.schedule-slider').slick({
            dots: true,
            infinite: false,
            speed: 500,
            fade: true,
            cssEase: 'linear',
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
        });

    }


//remove symbols
    $("body").children().each(function() {
        document.body.innerHTML = document.body.innerHTML.replace(/\u2028/g, ' ');
    });

    slickSliders();



});
