// TODO: appen product

// products info
let productNames = ['單色|跳色', '貓眼|鏡面', '單色漸層', '法式漸層', '客製化造型'];
let productEngNames = ['single', 'catEyes', 'singleGradual', 'frenchGradual', 'style'];
let productPrice = ['NT $900', 'NT $1,000', 'NT $1,100', 'NT $1,200', 'NT $1,300'];
letProductDescription = ['Merry Merry Christmas\nLonley Lonely Christmas\n寫了卡片不知該給誰\n讓Bonnie陪你過聖誕節'
                            ,'有一種弦律，叫做大自然，\n他不比命運交響曲的豪邁，也不同田園交響曲的柔情。'
                            ,'看那海水那樣藍，藍的醉人，藍的勾魂奪魄，\n那海水蕩漾著，有一種非凡的動感。'
                            ,'大自然的浪漫總讓人衝動，五月的雨同樣富有激情，\n湧入大地的懷抱，洗滌萬物的心靈，飄落的花瓣是春的縮影。'
                            ,'一道黑色的屏障，鋪天蓋地占據半個天空，\n人們屏住呼吸，驚恐地低頭前行，似乎是誰吞嗜了日月，\n是一枝黑色曼陀羅。'
                        ];
                        
for (let i = 1; i < 20; i++){
    let node = document.getElementById('products');
    let item = document.createElement('div');
    item.classList.add('productsItem');
    item.classList.add('product');
    item.classList.add(productEngNames[i%5]);
    node.appendChild(item);
    // appen #products > .item child node
    node = item;

    // product link
    item = document.createElement('a');
    item.classList.add('productLink');
    item.href = 'product.html';
    node.appendChild(item);

    node = item;
    // product img
    item = document.createElement('img');
    item.classList.add('productItem');
    // item.src = 'img/products/hand/' + i + '.jpeg';
    item.src = 'img/products/create/' + i + '.jpg';
    node.appendChild(item);
    
    // product info
    item = document.createElement('div');
    item.classList.add('txt');
    item.classList.add('productItem');
    node.appendChild(item);
    node = item;

    // product category
    item = document.createElement('p');
    item.innerText = productNames[i%5] + ' ' + productEngNames[i%5].charAt(0).toUpperCase() + productEngNames[i%5].slice(1);
    item.classList.add('category');
    node.appendChild(item);
    // product name
    item = document.createElement('h3');
    item.innerText = '樣式名稱' + i;
    item.classList.add('productName');
    node.appendChild(item);
    // product description
    item = document.createElement('p');
    item.classList.add('description');
    item.innerText = letProductDescription[i%5];
    node.appendChild(item);
    // product price
    item = document.createElement('p');
    item.classList.add('price');
    item.innerText = productPrice[i%5];
    node.appendChild(item);
    
    // btn.last
    item = document.createElement('button');
    item.classList.add('last');
    item.onclick = changeImg;
    node.appendChild(item);
    // btn.next
    item = document.createElement('button');
    item.classList.add('next');
    item.onclick = changeImg;
    node.appendChild(item);
}

// TODO: last / next btn onclick, change product img.
function changeImg() {
    let node = this.parentElement;
    node = node.querySelector('img');
    // replace img/hand/xxx.jpeg to img/create/xxx.jpg
    if (node.src.includes('hand'))
        node.src = node.src.replace('hand', 'create').replace('jpeg', 'jpg');
    else if (node.src.includes('create'))
    node.src = node.src.replace('create', 'hand').replace('jpg', 'jpeg');
}