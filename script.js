$(document).ready(function() {
    detectDevice()
    $(window).on("resize", function () {
        detectDevice();
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
    if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
        || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) { 
        $('#screen')[0].href = "mobile.css";
        $('#test').text("mobile");
    } else {
        $('#screen')[0].href = "computer.css";
        $('#test').text("computer");
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