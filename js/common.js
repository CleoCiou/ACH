// TODO: append css, js
//       add event listener
window.onload = init;
function init() {
    const head = document.getElementsByTagName('head')[0];
    // link font
    // link google fonts
    let link  = document.createElement('link');
    link.rel  = 'preconnect';
    link.href = 'https://fonts.googleapis.com';
    head.appendChild(link);
    link  = document.createElement('link');
    link.rel  = 'preconnect';
    link.href = 'https://fonts.gstatic.com';
    head.appendChild(link);
    link  = document.createElement('link');
    link.rel  = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/css2?family=Noto+Serif+TC:wght@200;400;500;600;700;900&family=Roboto+Mono:ital,wght@0,100;0,400;0,500;0,700;1,100;1,400;1,500;1,700&display=swap';
    head.appendChild(link);

    // link css
    // reset.css
    link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href='css/reset.css';
    head.append(link);
    // grid.css
    link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href='css/grid.css';
    head.append(link);
    // master.css
    link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href='css/master.css';
    head.append(link);
    // schedule.css
    link  = document.createElement('link');
    link.rel  = 'stylesheet';
    link.type = 'text/css';
    link.href = 'css/schedule.css';
    head.appendChild(link);
    // owl.carousel.css
    link  = document.createElement('link');
    link.rel  = 'stylesheet';
    link.type = 'text/css';
    link.href = 'css/owl.carousel.min.css';
    head.appendChild(link);
    // owl.theme.default.css
    link  = document.createElement('link');
    link.rel  = 'stylesheet';
    link.type = 'text/css';
    link.href = 'css/owl.theme.default.min.css';
    head.appendChild(link);

    // line js
    // jquery.js
    link = document.createElement('script');
    link.src = 'js/jquery-3.6.0.js';
    head.append(link);
    // schedule.js
    link  = document.createElement('script');
    link.src = 'js/schedule.js';
    head.appendChild(link);
    // owl.carousel.js
    link  = document.createElement('script');
    link.src = 'js/owl.carousel.min.js';
    head.appendChild(link);
}

// TODO: open window by grow size
//  with html id/class: 
//      *-popup (popup window name), pop-width/height (now pop up window)
//  id: element id which grow size
//  direction: width or height
//  percent: grow percent
function popupSize(id, attr, percent) {
    // reset all popup windows -- only one pop up window at the same time
    let el = document.querySelectorAll('[class*=-popup]');
    for (let i = 0; i < el.length; i++) {
        if (el.length !== 0) {
            el[i].removeAttribute('style');
        }
    }
    // pop up
    if (id !== null && attr !== null && percent !== null) {
        el = document.getElementById(id);
        el.style[attr] = percent;
    }
}
