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
        '            <a href="#" class="appointment">Appointment</a>' +
        '            <a href="products.html" class="category">Category</a>' +
        '            <a href="#" class="info">Info</a>' +
        '            <a href="#" class="about">About</a>' +
        '        </nav>' +
        '        <!-- others -->' +
        '        <div class="headerItem others">' +
        '            <a href="#"><label for="search">Search</label></a>' +
        '            <a href="member.html"><label for="account">My Account</label></a>' +
        '            <a href="#"><label for="like"><img class="like" src="img/icon/heart_border.png" alt="愛心框框icon"></label></a>' +
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
        '                    <a href="#">熱門款</a>' +
        '                    <a href="#">優惠活動</a>' +
        '                    <a href="#">單色 | 跳色</a>' +
        '                    <a href="#">貓眼 | 鏡面</a>' +
        '                    <a href="#">單色漸層</a>' +
        '                    <a href="#">法式凝膠</a>' +
        '                    <a href="#">客製化造型</a>' +
        '                </li>' +
        '                <li class="mapListItem appointment">' +
        '                    <span>預約</span>' +
        '                    <a href="#">預約行事曆</a>' +
        '                    <a href="#">我的最愛</a>' +
        '                </li>' +
        '                <li class="mapListItem others">' +
        '                    <span href="#">其他資訊</span>' +
        '                    <a href="#">價目表</a>' +
        '                    <a href="#">預約流程</a>' +
        '                    <a href="#">預約須知</a>' +
        '                    <a href="#">防疫公告</a>' +
        '                    <a href="#">FAQ</a>' +
        '                </li>' +
        '                <li class="mapListItem about">' +
        '                    <div class="aboutItem description">' +
                                '<div class="icon flex item_center">' +
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
