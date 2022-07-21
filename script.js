$(document).ready(function() {
    detectDevice()
    $(window).on("resize", function () {
        detectDevice();
        console.log(!!navigator.maxTouchPoints ? 'mobile' : 'computer');
    })

    colorModePreview('#color_mode');
    $("#color_mode").on("change", function () {
        colorModePreview(this);
    })
    blurMode('#checkMenu');
    $("#checkMenu").on("change", function () {
        blurMode(this);
    })
    const mediaChange = window.matchMedia("(min-width: 620px)");
    changeOnMedia(mediaChange);
    $(mediaChange).on("change", function () {
        changeOnMedia(this);
    })


    $("#aboutMenu").click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#about").offset().top - 50
        }, 800);
        $("#checkMenu").prop("checked", false);
        blurMode("#checkMenu");
    });
    
    $("#projectsMenu").click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#projects").offset().top - 50
        }, 800);
        $("#checkMenu").prop("checked", false);
        blurMode("#checkMenu");
    });
    
    $("#contactMenu").click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#contact").offset().top - 50
        }, 800);
        $("#checkMenu").prop("checked", false);
        blurMode("#checkMenu");
    });

    $("#logo").click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: 0
        }, 800);
        $("#checkMenu").prop("checked", false);
        blurMode("#checkMenu");
    });

});

function detectDevice() {
    if(!!navigator.maxTouchPoints) {
        $('#screen')[0].href = "computer.css";
    } else {
        $('#screen')[0].href = "mobile.css";
    }
}

function colorModePreview(ele) {
    if($(ele).prop("checked") == true){
        $('body').addClass('darkMode');
        $('body').removeClass('lightMode');
    }
    else if($(ele).prop("checked") == false){
        $('body').addClass('lightMode');
        $('body').removeClass('darkMode');
    }
}

function changeOnMedia(el) {
    if (el.matches) {
        $('#social1').addClass('reveal-18');
        $('#social1').removeClass('reveal-1');

        $('#social2').addClass('reveal-19');
        $('#social2').removeClass('reveal-3');

        $('#social3').addClass('reveal-20');
        $('#social3').removeClass('reveal-5');
        
        $('#menu2').addClass('reveal-3');
        $('#menu2').removeClass('reveal-4');
        
        $('#menu3').addClass('reveal-4');
        $('#menu3').removeClass('reveal-6');
        
        $('#menu4').addClass('reveal-5');
        $('#menu4').removeClass('reveal-8');

        $('#btnTheme').addClass('reveal-19');
        $('#btnTheme').removeClass('reveal-12');

        $('#firstTitle').addClass('reveal-10');
        $('#firstTitle').removeClass('reveal-1');
        $('#secondTitle').addClass('reveal-11');
        $('#secondTitle').removeClass('reveal-2');
        $('#btnContact').addClass('reveal-13');
        $('#btnContact').removeClass('reveal-4');
    } else {
        $('#social1').addClass('reveal-1');
        $('#social1').removeClass('reveal-18');
        
        $('#social2').addClass('reveal-3');
        $('#social2').removeClass('reveal-19');

        $('#social3').addClass('reveal-5');
        $('#social3').removeClass('reveal-20');
        
        $('#menu2').addClass('reveal-4');
        $('#menu2').removeClass('reveal-3');
        
        $('#menu3').addClass('reveal-6');
        $('#menu3').removeClass('reveal-4');
        
        $('#menu4').addClass('reveal-8');
        $('#menu4').removeClass('reveal-5');

        $('#btnTheme').addClass('reveal-12');
        $('#btnTheme').removeClass('reveal-19');

        $('#firstTitle').addClass('reveal-1');
        $('#firstTitle').removeClass('reveal-10');
        $('#secondTitle').addClass('reveal-2');
        $('#secondTitle').removeClass('reveal-11');
        $('#btnContact').addClass('reveal-4');
        $('#btnContact').removeClass('reveal-13');
    }
}

function blurMode(e) {
    const homePage = document.querySelector('.homePage').style;
    const mainPage = document.querySelector('.mainPage').style;
    if($(e).prop("checked") == true) {
        homePage.setProperty('--blur', 'blur(10px)');
        mainPage.setProperty('--blur', 'blur(10px)');
    } else if($(e).prop("checked") == false) {
        homePage.setProperty('--blur', 'none');
        mainPage.setProperty('--blur', 'none');
    }
}

const sideBar = document.querySelector('.socialList').style;

setTimeout(() => {
    sideBar.setProperty('--opacity', '1');
}, 1700);

setTimeout(() => {
    $('#firstTitle').addClass('reveal-1');
    $('#firstTitle').removeClass('reveal-10');
    $('#secondTitle').addClass('reveal-2');
    $('#secondTitle').removeClass('reveal-11');
    $('#btnContact').addClass('reveal-4');
    $('#btnContact').removeClass('reveal-13');
}, 1900);

const ratio = .12
const options = {
    root: null,
    rootMargin: '0px',
    threshold: ratio
}

const callback = function (entries, observer) {
    entries.forEach(function (entry) {
        if (entry.intersectionRatio > ratio) {
            entry.target.classList.add('reveal-visible')
            //observer.unobserve(entry.target)
        } else {
            entry.target.classList.remove('reveal-visible')
        }
    })
}

const observer = new IntersectionObserver(callback, options)
document.querySelectorAll('[class*="reveal-"]').forEach(function (e) {
    observer.observe(e)
})