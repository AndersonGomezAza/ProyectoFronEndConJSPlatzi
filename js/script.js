const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const btnMenuMobile = document.querySelector('#btnMenuMobile');
const mobileMenu = document.querySelector('.mobile-menu');
const navbarCartIcon = document.querySelector('.navbar-shopping-card');
const cartDetail = document.querySelector('.cart-detail');
const productDetail = document.querySelector('.product-detail');
const closeAsideProduct = document.querySelector(".product-detail-close");
const asideProduct = document.querySelector(".product-detail");

navEmail.addEventListener('click', toggleDesktopMenu)
btnMenuMobile.addEventListener('click', toggleMobileMenu)
navbarCartIcon.addEventListener('click', toggleCartDetail)
closeAsideProduct.addEventListener('click', closeProductDetailAside)


const productList = [];

productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Esto es un texto Descriptivo del producto Bike'    
});
productList.push({
    name: 'Pantalla',
    price: 220,
    image: 'https://www.lg.com/cac_en/images/monitors/md07543961/D-1.jpg',
    description: 'Esto es un texto Descriptivo del producto Pantalla'    
});
productList.push({
    name: 'Computador',
    price: 620,
    image: 'https://exitocol.vtexassets.com/arquivos/ids/5347301-800-auto?v=637438626358370000&width=800&height=auto&aspect=true',
    description: 'Esto es un texto Descriptivo del producto computador'    
});
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Esto es un texto Descriptivo del producto Bike'    
});
productList.push({
    name: 'Pantalla',
    price: 220,
    image: 'https://www.lg.com/cac_en/images/monitors/md07543961/D-1.jpg',
    description: 'Esto es un texto Descriptivo del producto Pantalla'    
});
productList.push({
    name: 'Computador',
    price: 620,
    image: 'https://exitocol.vtexassets.com/arquivos/ids/5347301-800-auto?v=637438626358370000&width=800&height=auto&aspect=true',
    description: 'Esto es un texto Descriptivo del producto computador'    
});
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Esto es un texto Descriptivo del producto Bike'    
});
productList.push({
    name: 'Pantalla',
    price: 220,
    image: 'https://www.lg.com/cac_en/images/monitors/md07543961/D-1.jpg',
    description: 'Esto es un texto Descriptivo del producto Pantalla'    
});
productList.push({
    name: 'Computador',
    price: 620,
    image: 'https://exitocol.vtexassets.com/arquivos/ids/5347301-800-auto?v=637438626358370000&width=800&height=auto&aspect=true',
    description: 'Esto es un texto Descriptivo del producto computador'    
});

function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
    cartDetail.classList.add('inactive');
    asideProduct.classList.add('inactive');
}

function toggleMobileMenu() {
    mobileMenu.classList.toggle('inactive');
    cartDetail.classList.add('inactive');
    asideProduct.classList.add('inactive');
}

function toggleCartDetail() {
    cartDetail.classList.toggle('inactive');
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    asideProduct.classList.add('inactive');
}


function showProducts(arrayProduct) {
    for (const product of arrayProduct) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
            const imgProduct = document.createElement('img');
            imgProduct.setAttribute('src', product.image);
            imgProduct.classList.add('product-img')
            imgProduct.addEventListener('click', openProductDetailAside)

            const productInfo = document.createElement('div');
            productInfo.classList.add('content-product');
    
                const productInfoDiv = document.createElement('div');
    
                    const productPrice = document.createElement('p');
                    productPrice.innerText = '$' + product.price;
                    const productName = document.createElement('p');
                    productName.innerText = product.name;
                
                productInfoDiv.append(productPrice, productName);
    
                const productFigure = document.createElement('figure');
                    
                    const iconFigurePath = './icons/bt_add_to_cart.svg'
                    const imgFigure = document.createElement('img');
                    imgFigure.setAttribute('src', iconFigurePath);
    
                productFigure.appendChild(imgFigure);
            
            productInfo.append(productInfoDiv, productFigure);
        
        productCard.append(imgProduct, productInfo);
    
        const cardsContainer = document.querySelector('.cards-container');
        cardsContainer.appendChild(productCard);
    }
}

function openProductDetailAside() {
    asideProduct.classList.remove('inactive');
    cartDetail.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive');
}

function closeProductDetailAside() {
    asideProduct.classList.add('inactive');
}

showProducts(productList);
