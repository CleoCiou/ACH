function init() {
    let product = document.querySelectorAll('.product-list .product .pic');
    console.log(product);
    for (let i = 0; i < product.length; i++) {
        product[i].addEventListener('click', moveContainer);
    }
    function moveContainer () {
        let container = document.querySelectorAll('.container.product-list')[0];
        console.log(container);
        container.classList.add('showInfo');
    }
}

window.addEventListener('load', init);