$(document).ready(function() {
    colorModePreview('#color_mode');
    $("#color_mode").on("change", function () {
        colorModePreview(this);
    })
    blurMode('#checkMenu');
    $("#checkMenu").on("change", function () {
        blurMode(this);
    })
    const mediaChange = window.matchMedia("(min-width: 860px)");
    changeOnMedia(mediaChange);
    $(mediaChange).on("change", function () {
        changeOnMedia(this);
    })

    $("#aboutMenu").click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#about").offset().top - 50
        }, 800);
    });
    
    $("#projectsMenu").click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#projects").offset().top - 50
        }, 800);
    });
    
    $("#contactMenu").click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#contact").offset().top - 50
        }, 800);
    });

    $("#logo").click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: 0
        }, 800);
    });

});

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