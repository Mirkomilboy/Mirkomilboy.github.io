$(document).ready(function(e) {

    $win = $(window);
    $navbar = $('#header');
    $toggle = $('.toggle-button');
    var width = $navbar.width();

    toggle_onclick($win, $navbar, width);

    $win.resize(function() {
        toggle_onclick($win, $navbar, width);
    });

    $toggle.click(function(e) {
        $navbar.toggleClass("toggle-left");
    })
});

function toggle_onclick($win, $navbar, width) {
    if($win.width() < 768){
        $navbar.css({left: `-${width}px`});
    } else {
        $navbar.css({left:'0px'})
    }
}

var typed = new Typed('#typed', {
    strings: [
        'Web Developer!',
        'PHP Backend Developer!',
        'Book Reader!'
    ],
    typeSpeed:60,
    backSpeed:60,
    loop: true
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


// style mode change

let theme = localStorage.getItem('theme')

if(theme == null) {
    setTheme('light')
} else {
    setTheme(theme)
}

let themeDots = document.getElementsByClassName('theme-dot');

for(var i=0; themeDots.length > i; i++) {
    themeDots[i].addEventListener('click', function() {
        let mode = this.dataset.mode
        setTheme(mode)
    })
}

function setTheme(mode) {
    if(mode == 'light') {
        document.getElementById('theme-style').href = 'css/default.css'
    }
    
    if(mode == 'blue') {
        document.getElementById('theme-style').href = 'css/blue.css'
    }

    if(mode == 'green') {
        document.getElementById('theme-style').href = 'css/green.css'
    }

    if(mode == 'purple') {
        document.getElementById('theme-style').href = 'css/purple.css'
    }

    localStorage.setItem('theme', mode)
}