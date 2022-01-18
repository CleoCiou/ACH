// TODO: link google font, css, js
// get head element
const head  = document.getElementsByTagName('head')[0];
// append google fonts link
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

// append css link
// reset.css
link  = document.createElement('link');
link.rel  = 'stylesheet';
link.type = 'text/css';
link.href = 'css/reset.css';
head.appendChild(link);
// grid.css
link  = document.createElement('link');
link.rel  = 'stylesheet';
link.type = 'text/css';
link.href = 'css/grid.css';
head.appendChild(link);
// master.css
link  = document.createElement('link');
link.rel  = 'stylesheet';
link.type = 'text/css';
link.href = 'css/master.css';
head.appendChild(link);
// schedule.css
link  = document.createElement('link');
link.rel  = 'stylesheet';
link.type = 'text/css';
link.href = 'css/schedule.css';
head.appendChild(link);
// title img
link  = document.createElement('link');
link.rel  = 'shortcut icon';
link.href = 'img/logo_50x50.png';
head.appendChild(link);

// append js link
// schedule.js
link  = document.createElement('script');
link.src = 'js/schedule.js';
head.appendChild(link);



// =============================================================
// function init()
// =============================================================
// - para
//     none
// - desctiption
//     create header, footer, calendar
// =============================================================
// - call from function
//     this file: window onload
// - para for function
//     none
// =============================================================
function init() {
    // append header
    let header = document.querySelectorAll('header')[0];
    header.innerHTML = `
        <input type="checkbox" id="check-nav">

        <a href="index.html" class="logo">
            <img src="img/logo_nb.png" alt="logo">
            <h1>ACH Nails Studio</h1>
        </a>
    
        <nav class="main-nav">
            <a href="index.html#news">最新活動</a>
            <a href="appointment.html">預約</a>
            <a href="product.html">樣式</a>
            <a href="information.html">其他資訊</a>
        </nav>
    
        <label for="check-nav" class="hb"></label>
    `;

    // append footer
    let footer = document.querySelectorAll('footer')[0];
    footer.innerHTML = `
        <input type="checkbox" id="check-category">
        <input type="checkbox" id="check-appointment">
        <input type="checkbox" id="check-others">

        <div class="container">
            <div class="row row-cols-1 row-cols-md-5">

                <div class="col category">
                    <label class="list-title" for="check-category">樣式</label>
                    <ul>
                        <li><a href="index.html#news">最新活動</a></li>
                        <li><a href="product.html">單色 | 跳色</a></li>
                        <li><a href="product.html">貓眼 | 鏡面</a></li>
                        <li><a href="product.html">單色漸層</a></li>
                        <li><a href="product.html">法式凝膠</a></li>
                        <li><a href="product.html">客製化造型</a></li>
                    </>
                </div>
                <div class="col appointment">
                    <label class="list-title" for="check-appointment">預約</label>
                    <ul>
                        <li><a href="appointment.html">立即預約</a></li>
                        <li><a href="index.html">預約行事曆</a></li>
                    </ul>
                </div>

                <div class="col others">
                    <label class="list-title" for="check-others">其他資訊</label>
                    <ul>
                        <li><a href="information.html">價目表</a></li>
                        <li><a href="information.html">預約流程</a></li>
                        <li><a href="information.html">預約須知</a></li>
                        <li><a href="information.html">防疫公告</a></li>
                        <li><a href="information.html">FAQ</a></li>
                    </ul>
                </div>

                <div class="col about">
                    <div class="item">
                        <div class="icon">
                            <img src="img/icon/line.png" alt="line icon">
                            <img src="img/icon/instagram.png" alt="instagram icon">
                        </div>
                        <span>居家美甲工作室 | 預約制</span>
                        <span>美甲師 | 寶尼</span>
                        <span>饒河街觀光夜市(八德)站 | 步行 2 分鐘</span>
                        <span>捷運松山站 | 步行 7 分鐘</span>
                    </div>
                </div>
            </div>
        </div>
        <!-- copyright -->
        <div class="container copyright">
            <div class="row justify-content-between">
                <span class="col-12">此網站僅於學習成果發表使用，若有任何問題請立即
                    <a href="mailto:a0930795302@gmail.com?subject = Feedback&body = Message">聯絡我們</a>。
                </span>
                <span class="col-6">ACH Nails Studio 2021 ©</span>
                <a class="col-6 back" href="#">▲ Back To Top</a>
            </div>
        </div>
    `;

    // append calendar with #schedule -- schedule.js
    if (document.getElementById('schedule') !== null) createCalendar();

    let footerAbout = document.querySelectorAll('footer .col.about')[0];
    footerAbout.addEventListener('click', function(){
        footerAbout.style.animation = 'rotate 1s';
    })
    footerAbout.addEventListener('animationend', function(e){
        // console.log(document.cookie);
        let cookie = document.cookie.split(';');
        if (cookie.indexOf(' footer=check') === -1) {
            alert('找到一張9折優惠券!');
            document.cookie = 'footer=check';
        }
        else {
            alert('這裡沒有東西了!');
        }
        e.target.removeAttribute('style');
    })
}

window.addEventListener('load', init);