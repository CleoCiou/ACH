window.addEventListener('load', function() {
    // ========== quick start ==========
    let enter = document.querySelectorAll('.quick-start .logo')[0];
    let scrollback = true;
    enter.addEventListener('click', animate);
    enter.addEventListener('touchstart', animate);
    function animate() {
        document.querySelectorAll('.quick-start .panel.appointment')[0].classList.add('fade-left-top');
        document.querySelectorAll('.quick-start .panel.category')[0].classList.add('fade-right-bottom');
        document.querySelectorAll('.quick-start .logo')[0].classList.add('fade-bottom');
        setTimeout(() => {
            document.querySelectorAll('header .logo')[0].style.opacity = 1;
            setTimeout(() => {
                let cookie = document.cookie.split('; ');
                if (cookie.indexOf('enter=check') === -1) {
                    alert('掉出了一張7折優惠券!');
                    document.cookie = 'enter=check';
                }
                window.scrollTo({
                    top: document.querySelectorAll('.container.news')[0].offsetTop+30,
                    behavior: 'smooth',
                });
            }, 100);
            scrollback = true;
        }, 1000);
    }
    document.querySelectorAll('.container.news')[0].addEventListener('wheel', function(e) {
        newsScroll(e);
    })
    document.querySelectorAll('.container.news')[0].addEventListener('touchmove', function(e) {
        newsScroll(e);
    })
    function newsScroll(e) {
        if (e.deltaY < 0 && scrollback) {
            if (window.scrollY < document.querySelectorAll('.quick-start')[0].clientHeight) {
                scrollback = false;
                document.querySelectorAll('.quick-start .logo')[0].classList.remove('fade-bottom');
                document.querySelectorAll('.quick-start .panel.appointment')[0].classList.remove('fade-left-top');
                document.querySelectorAll('.quick-start .panel.category')[0].classList.remove('fade-right-bottom');
            }
        }
    }
    // ========== news ==========
    window.addEventListener('scroll', checkScroll);
    let setCarousel = true;
    let intervalId;
    function checkScroll() {
        let news = document.querySelectorAll('section.news')[0];
        let appointment = document.querySelectorAll('section.appointment')[0];
        if (window.scrollY > news.offsetTop && window.scrollY < appointment.offsetTop) {
            if (setCarousel) {
                setCarousel = false;
                intervalId = setInterval(() => {
                    changeItem('next', document.querySelectorAll('section.news')[0]);
                }, 5000);
            }
        }else {
            clearInterval(intervalId);
            setCarousel = true;
        }
    }
    // TODO: news carousel
    let lastBtn = document.querySelectorAll('.news .last-btn')[0];
    lastBtn.addEventListener('click', function() {
        changeItem('prev', document.querySelectorAll('section.news')[0]);
    });
    let nextBtn = document.querySelectorAll('.news .next-btn')[0];
    nextBtn.addEventListener('click', function() {
        changeItem('next', document.querySelectorAll('section.news')[0]);
    });
    // change item when click last, next button
    function changeItem(item, el) {
        // get all product
        let product = el.querySelectorAll('.news .product');
        // get now product
        let active = el.querySelectorAll('.product.active')[0];
        // get now product index from all product
        let nextActive = Array.from(product).indexOf(active);
        switch (item) {
            case 'prev':
                nextActive--;
                if (nextActive === -1) nextActive = product.length - 1;
                break;
            case 'next':
                nextActive++;
                if (nextActive === product.length) nextActive = 0;
                break;
        }
        // switch product
        let slider = document.querySelectorAll('.news .slider')[0];
        slider.style.left = -1 * (slider.clientWidth+50) * nextActive + 'px';
        active.classList.remove('active');
        product[nextActive].classList.add('active');
    }

    // ========== appointment block ==========
    // TODO: open appointment block
    let element = document.querySelectorAll('.appointment-btn');
    for (let i = 0; i < element.length; i++) {
        element[i].addEventListener('click', function(){
            let dialog = document.getElementsByClassName('appointmentBlock')[0];
            dialog.classList.remove('none');
            dialog.style.animation = "showDialog 1s 1";
        });
    }
    // TODO: close appointment block
    document.getElementById('closeAppointment').addEventListener('click', function(){
        let dialog = document.getElementsByClassName('appointmentBlock')[0];
        dialog.style.animation = "closeDialog 1s 1";
        setTimeout(() => {
            dialog.classList.add('none');
        }, 1000); 
    });
    // TODO: change img if selectd onchange
    let styleList = ['南雅奇岩',
                    '花樣中國紅',
                    '海洋傳說',
                    '大地水彩'];
    let imgList = ['img/products/nanya_rock.jpg',
                    'img/products/redflow.jpg',
                    'img/products/special2.jpg',
                    'img/products/special6.jpg' ]
    document.getElementById('style').addEventListener('change', function(){
        document.querySelectorAll('main .appointmentBlock .pic img')[0].src = imgList[styleList.indexOf(document.getElementById('style').value)];
    });
    // TODO: click btn -> change title and img
    let last = document.querySelectorAll('main .appointmentBlock .pic .last')[0];
    last.addEventListener('click', function(){
        let title = document.getElementById('style').value;
        let img = document.querySelectorAll('main .appointmentBlock .pic img')[0];
        let index = styleList.indexOf(title);
        index = ((index - 1) === -1) ? styleList.length - 1 : index - 1;
        document.getElementById('style').value = styleList[index];
        img.src = imgList[index];
    });
    let next = document.querySelectorAll('main .appointmentBlock .pic .next')[0];
    next.addEventListener('click', function(){
        let title = document.getElementById('style').value;
        let img = document.querySelectorAll('main .appointmentBlock .pic img')[0];
        let index = styleList.indexOf(title);
        index = ((index + 1) === styleList.length) ? 0 : index + 1;
        document.getElementById('style').value = styleList[index];
        img.src = imgList[index];
    });
    // TODO: confirm appointment and alert
    document.getElementById('confirmAppointment').addEventListener('click', function(){
        alert('預約成功!');
    });

    // ========== category ==========
    let imgs = [
        'img/products/special4.jpg',
        'img/products/nanya_rock.jpg',
        'img/products/special3.jpg',
        'img/products/special2.jpg',
        'img/products/redflow.jpg'
    ];
    let lastCtg = document.querySelectorAll('section.category .last-btn')[0];
    lastCtg.addEventListener('click', function() {
        changeCtg('prev');
    })
    let nextCtg = document.querySelectorAll('section.category .next-btn')[0];
    nextCtg.addEventListener('click', function() {
        changeCtg('next');
    })
    let ctg = document.querySelectorAll('section.category .category-list label');
    for (let i = 0; i < ctg.length; i++) {
        ctg[i].addEventListener('mousemove', function(e) {
            let inputId = e.target.htmlFor;
            if (document.getElementById(inputId).checked === false)
                changeCtg(document.getElementById(e.target.htmlFor));
        });
    }
    let ctgList = document.querySelectorAll('.category-list label');
    for (let i = 0; i < ctgList.length; i++) {
        ctgList[i].addEventListener('click', function() {
            location.href = 'product.html';
        })
    }
    document.querySelectorAll('.container.category .pic .select')[0].addEventListener('click', function() {
        location.href = 'product.html';
    })
    function changeCtg(item) {
        let category = document.querySelectorAll('input[name=category]');
        let active = document.querySelectorAll('input[name=category]:checked')[0];
        let index = Array.from(category).indexOf(active);
        switch (item) {
            case 'prev':
                index = (index === 0) ? category.length - 1 : index - 1;
                break;
            case 'next':
                index = (index === category.length - 1) ? 0 : index + 1;
                break;
            default:
                index = Array.from(category).indexOf(item);
        }
        document.querySelectorAll('section.category .pic')[0].classList.add('active');
        setTimeout(() => {
            document.querySelectorAll('section.category .pic img')[0].src = imgs[index];
            document.querySelectorAll('section.category .pic')[0].classList.remove('active');
        }, 1000);
        category[index].checked = true
    }
})
