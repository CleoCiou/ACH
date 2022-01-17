let appointmentBtn = document.querySelectorAll('.appointment-btn');
for (let i = 0; i < appointmentBtn.length; i++) {
    appointmentBtn[i].addEventListener('click', function(){
        location.href = 'appointment.html';
    })
}

let span = document.querySelectorAll('.prodlist .category-list span');
for (let i = 0; i < span.length; i++) {
    span[i].addEventListener('click', function(e) {
        changeCtg(e);
    });
}
function changeCtg(e) {
    let activeSpan = document.querySelectorAll('.prodlist .category-list span.active')[0];

    activeSpan.classList.remove('active');
    e.target.classList.add('active');
}


let myRow = document.querySelectorAll('.prodlist .row')[0];
document.addEventListener('click', myEvent);

function myEvent(e) {
    // console.log(e.target.classList);
    if (e.target.tagName === 'IMG'){
        // console.log(myRow.classList.contains('small'));
        if(myRow.classList.contains('small'))
            changeImg(e);
        else {
            mvImg(e);
            cloneImg(e);
        }
    }
    else if (e.target.classList.contains('prodlist') || e.target.classList.contains('clone'))
        resetImg(e);
    else if (e.target.classList.contains('item'))
        document.querySelectorAll('.small')[0].classList.toggle('small-on-click');
}

let sideMenua = document.querySelectorAll('.side-menu a');
for (let i = 0; i < sideMenua.length; i++) {
    sideMenua[i].addEventListener('click', function(e) {
        let aActive = document.querySelectorAll('a.active')[0];
        aActive.classList.remove('active');
        e.target.classList.add('active');
    })
}


// ===============================================================================================
// function: myImg(img on click)
// - click img, if .row not move and scale to left bottom (.row.classlist not contains small)
// ===============================================================================================
// -- move and scale .row to left bottom (classlist.add: small)
// -- fade when move and scale (with class: fade-in, fade-out | function: toggleRow)
// -- change .row transition hv sec (classlist.add: transition)
// -- change body overflow to hidden
// -- change img on click opacity to half (classlist.add: active)
// -- show side menu
// ===============================================================================================
function mvImg(e) {
    // fade in / out animation
    myRow.classList.add('fade-out');
    myRow.addEventListener('animationend', toggleRow);

    // set body overflow
    // document.body.style.overflow = 'hidden';

    // set img opacity
    e.target.classList.add('active');

    // show side menu
    let sideMenu = document.querySelectorAll('.side-menu');
    sideMenu[0].classList.toggle('none');

    // add event listener to scroll
    window.addEventListener('scroll', changeSideMenu);
}

// ===============================================================================================
// function: cloneImg(img on click)
// - click img, if .row not move and scale to left bottom (.row.classlist not contains small)
// ===============================================================================================
// -- clone img, move and scale to right center
// -- show/update product info and other info (classlist.remove: none)
// ===============================================================================================
function cloneImg(e) {
    // .item > (.pic > img) + (.txt > h3 + p)
    let clone = e.target.parentNode.parentNode.cloneNode(true);
    clone.classList.add('clone');
    // show txt
    let txt = clone.querySelector('.txt');
    txt.classList.remove('none');
    // console.log(clone);
    clone.querySelectorAll('.appointment-btn')[0].addEventListener('click', function(){
        location.href = 'appointment.html';
    })
    let appendParent = document.querySelectorAll('.prodlist')[0];
    appendParent.appendChild(clone);
    // show product info and other info if display: none
    let none = document.querySelectorAll('.container.none');
    for (let i = 0; i < none.length; i++) {
        none[i].classList.remove('none');
    }

    // change product info ==========================
}

// ===============================================================================================
// function: resetImg(.prodlist)
// - click .prodlist
// ===============================================================================================
// -- recover .row to ori position and size (classlist.remove: small)
// -- fade when move and scale (with class: fade-in, fade-out | function: toggleRow)
// -- remove class for product info from .row (classlist.remove: small-on-click)
// -- change .row transition to none (classlist.remove: transtition)
// -- change body overflow to visible
// -- change img on click opacity to 1 (classlist.remove: active)
// -- remove clone item with animate =(X)
// -- hide product info and others info (classlist.add: none)
// -- hide side menu set active to first child
// ===============================================================================================
function resetImg(e) {
    myRow.classList.add('fade-out');
    myRow.addEventListener('animationend', toggleRow);
    document.querySelectorAll('.small')[0].classList.remove('small-on-click');

    // set img opacity
    let activeImg = document.querySelectorAll('img.active')[0];
    activeImg.classList.remove('active');

    // remove clone item
    let clone = document.querySelectorAll('.clone');
    if (clone.length === 1) {
        clone[0].remove();
    }

    // hide product info and others info
    let none = document.querySelectorAll('main .container:not(.prodlist)');
    for (let i = 0; i < none.length; i++) {
        none[i].classList.add('none');
    }
    
    // hide side menu
    let sideMenu = document.querySelectorAll('.side-menu');
    sideMenu[0].classList.toggle('none');

    // remove event listener to scroll
    window.removeEventListener('scroll', changeSideMenu);
}

// ===============================================================================================
// function: changeImg(img on click)
// - click img, if .row aleady move and scale to left bottom (.row.classlist contains small)
// ===============================================================================================
// -- change opacity img to which on click
// -- change big img to selected with animate =(X)
// ===============================================================================================
function changeImg(e) {
    document.querySelectorAll('.prodlist .col .active')[0].classList.remove('active');
    e.target.classList.add('active');
    let oriClone = document.querySelectorAll('.clone')[0];
    oriClone.remove();
    cloneImg(e);
}

// ===============================================================================================
// function: changeSideMenu()
// - scroll in product info
// ===============================================================================================
// -- hide small row(product list), if scroll on info section(class: .prodinfo, .otherinfo)
// -- change side menu style to section title
// ===============================================================================================
function changeSideMenu() {
    let sideMenu = document.querySelectorAll('.side-menu:not(.none) a');
    if (sideMenu.length > 0) {
        let activeMenu = document.querySelectorAll('.side-menu:not(.none) a.active')[0];
        let prodinfo = document.querySelectorAll('#prodinfo')[0];
        let otherinfo = document.querySelectorAll('#otherinfo')[0];
        if (window.scrollY > otherinfo.offsetTop-200) {
            if (Array.from(sideMenu).indexOf(activeMenu) !== 2) {
                activeMenu.classList.remove('active');
                sideMenu[2].classList.add('active');
                document.querySelectorAll('.side-menu')[0].style.top = '-1em';
            }
        }
        else if (window.scrollY > prodinfo.offsetTop-200) {
            if (Array.from(sideMenu).indexOf(activeMenu) !== 1) {
                activeMenu.classList.remove('active');
                sideMenu[1].classList.add('active');
                document.querySelectorAll('.side-menu')[0].style.top = '1em';
                document.querySelectorAll('.prodlist .small')[0].style.left = '-20%';
            }
        }
        else {
            if (Array.from(sideMenu).indexOf(activeMenu) !== 0) {
                activeMenu.classList.remove('active');
                sideMenu[0].classList.add('active');
                document.querySelectorAll('.side-menu')[0].style.top = '3em';
                document.querySelectorAll('.prodlist .small')[0].removeAttribute('style');
            }
        }
    }
    
}

// fade-in / fade-out and toggle .small
function toggleRow() {
    if (myRow.classList.contains('fade-out')) {
        myRow.classList.toggle('small');
        myRow.classList.remove('fade-out');
        myRow.classList.add('fade-in');
    }
    else if (myRow.classList.contains('fade-in')) {
        myRow.classList.remove('fade-in');
        myRow.classList.toggle('transition');
    }
}