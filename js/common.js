let myelement = document.getElementsByClassName('header')[0];
myelement.innerHTML += 
'<div class="w1200 flex item_center">' +
'<!-- logo -->' +
    '<a href="homepage.html"><img class="logo" src="img/logo/logo_nb.png" alt="ACH Logo"></a>' +
    '<!-- menu -->' +
    '<nav class="menu grow">' +
        '<a href="#" class="appointment">預約</a>' +
        '<a href="products.html" class="product_list">樣式</a>' +
        '<a href="#" class="others">其他資訊</a>' +
        '<a href="#" class="about">關於</a>' +
    '</nav>' +
    '<!-- search -->' +
    '<input type="text" class="search" placeholder="&#128269;&#xFE0E; 搜尋..">' +
    '<!-- member -->' +
    '<div class="member">' +
        '<button class="like">&#9829;</button>' + 
        '<button class="login">&#9863;</button>' +
    '</div>' +
'</div>';

myelement = document.getElementsByClassName('footer')[0];
myelement.innerHTML += 
'<section class="webmap w1200">' +
'<ul class="maplist flex">' +
'    <li class="products flex col">' +
'        <a href="#">熱門款</a>' +
'        <a href="#">優惠活動</a>' +
'        <a href="#">單色 | 跳色</a>' +
'        <a href="#">貓眼 | 鏡面</a>' +
'        <a href="#">單色漸層</a>' +
'        <a href="#">法式凝膠</a>' +
'        <a href="#">造型款</a>' +
'    </li>' +
'    <li class="appointment flex col">' +
'        <a href="#">預約行事曆</a>' +
'        <a href="#">我的最愛</a>' +
'        <a href="#">價目表</a>' +
'    </li>' +
'    <li class="others flex col">' +
'        <a href="#">其他資訊</a>' +
'        <a href="#">預約流程</a>' +
'        <a href="#">預約須知</a>' +
'        <a href="#">防疫公告</a>' +
'        <a href="#">FAQ</a>' +
'    </li>' +
'    <li class="about flex">' +
'        <div class="item description grow flex col">' +
'            <div class="icon flex item_center">' +
'                <img src="img/icon/line.png" alt="">' +
'                <img src="img/icon/instagram.svg" alt="">' +
'            </div>' +
'            <span>居家美甲工作室 | 預約制</span>' +
'            <span>美甲師 | 寶尼</span>' +
'            <span>饒河街觀光夜市(八德)站 | 步行 2 分鐘</span>' +
'            <span>捷運松山站 | 步行 7 分鐘</span>' +
'        </div>' +
'        <img src="img/logo/logo_nb.png" alt="" class="item logo">' +
'    </li>' +
'</ul>' +
'</section>' +
'<section class="copyright">' +
'<div class="w1200 flex between">' +
'    <span class="copyright grow">ACH Nails Studio 2021 &copy;</span>' +
'    <a href="#">Back To Top ▲</a>' +
'</div>' +
'</section>';