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

// append js link
// schedule.js
link  = document.createElement('script');
link.src = 'js/schedule.js';
head.appendChild(link);

// append header and footer
window.addEventListener('load', init);
function init() {
    // append header
    let myelement = document.getElementsByTagName('header')[0];
    myelement.innerHTML += 
        '    <div class="container">' +
        '        <!-- logo -->' +
        '        <a class="headerItem logo" href="index.html">' +
        '            <img src="img/logo_nb.png" alt="LOGO">' +
        '            <span>ACH Nails Studio.</span>' +
        '        </a>' +
        '        <!-- menu -->' +
        '        <nav class="headerItem menu">' +
        '            <a href="member.html?p=appointment" class="appointment">Appointment</a>' +
        '            <a href="products.html" class="category">Category</a>' +
        '            <a href="information.html" class="info">Info</a>' +
        '            <a href="information.html?f=aboutACH" class="about">About</a>' +
        '        </nav>' +
        '        <!-- others -->' +
        '        <div class="headerItem others">' +
        '            <a href="#"><label for="search">Search</label></a>' +
        '            <a href="member.html" class="member"><label for="account">My Account</label></a>' +
        '            <a href="member.html?p=like" class="like"><label for="like"><img class="like" src="img/icon/heart_border.png" alt="愛心框框icon"></label></a>' +
        '        </div>' +
        '    </div>';

    // append footer
    myelement = document.getElementsByTagName('footer')[0];
    myelement.innerHTML += 
        '    <!-- web map and about -->' +
        '    <div class="container">' +
        '        <div class="footerItem webMap">' +
        '            <ul class="mapList">' +
        '                <!-- products category -->' +
        '                <li class="mapListItem products">' +
        '                    <span>樣式</span>' +
        '                    <a href="products.html?f=all">熱門款</a>' +
        '                    <a href="products.html?f=siallngle">優惠活動</a>' +
        '                    <a href="products.html?f=single">單色 | 跳色</a>' +
        '                    <a href="products.html?f=catEyes">貓眼 | 鏡面</a>' +
        '                    <a href="products.html?f=singleGradual">單色漸層</a>' +
        '                    <a href="products.html?f=frenchGradual">法式凝膠</a>' +
        '                    <a href="products.html?f=style">客製化造型</a>' +
        '                </li>' +
        '                <li class="mapListItem appointment">' +
        '                    <span>預約</span>' +
        '                    <a href="member.html?p=appointment">預約行事曆</a>' +
        '                    <a href="member.html?p=like">我的收藏</a>' +
        '                </li>' +
        '                <li class="mapListItem others">' +
        '                    <span>其他資訊</span>' +
        '                    <a href="information.html">價目表</a>' +
        '                    <a href="information.html?f=appointmentFlow">預約流程</a>' +
        '                    <a href="information.html?f=appointmentNotice">預約須知</a>' +
        '                    <a href="information.html?f=covid19">防疫公告</a>' +
        '                    <a href="information.html?f=faq">FAQ</a>' +
        '                </li>' +
        '                <li class="mapListItem about">' +
        '                    <div class="aboutItem description">' +
                                '<div class="icon ">' +
        '                            <img src="img/icon/line.png" alt="line icon">' +
        '                            <img src="img/icon/instagram.svg" alt="instagram icon">' +
                                '</div>' +
                                '<span>居家美甲工作室 | 預約制</span>' +
                                '<span>美甲師 | 寶尼</span>' +
                                '<span>饒河街觀光夜市(八德)站 | 步行 2 分鐘</span>' +
                                '<span>捷運松山站 | 步行 7 分鐘</span>' +
        '                    </div>' +
        '                    <img src="img/logo_nb.png" alt="LOGO" class="aboutItem logo">' +
        '                </li>' +
        '            </ul>' +
        '        </div>' +
        '    </div>' +
        '    <!-- copyright -->' +
        '    <div class="container">' +
        '        <div class="footerItem copyright">' +
        '            <span>ACH Nails Studio 2021 &copy</span>' +
        '            <a href="#">Back To Top ▲</a>' +
        '        </div>' +
        '    </div>';
}
