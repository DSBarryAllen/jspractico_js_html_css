const menuEmail = document.querySelector('.navbar-email');
const menuHamIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const productDetailCloseIcon = document.querySelector('.product-detail-close');

const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const productDetailContainer = document.querySelector('#productDetail');

const cardsContainer = document.querySelector('.cards-container');


menuEmail.addEventListener('click',toggleDesktopMenu);
menuHamIcon.addEventListener('click',togglemobileMenu);
menuCarritoIcon.addEventListener('click',togglecarritoaside);
productDetailCloseIcon.addEventListener('click',closeProductDetailAside);

function toggleDesktopMenu() {
    // menu del carrito esta cerrado
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');
    //Si el menu del carrito esta abierto, procedemos a cerrar el menu del carrito
    if (!isAsideClosed) {
        shoppingCartContainer.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}

function togglemobileMenu() {
    // menu del carrito esta cerrado
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');
    //Si el menu del carrito esta abierto, procedemos a cerrar el menu del carrito
    if (!isAsideClosed) {
        shoppingCartContainer.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');
    closeProductDetailAside();
}

function togglecarritoaside() {
    // menu esta cerrado
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isMenuDesktopClosed = desktopMenu.classList.contains('inactive');
    //si el menu esta abierto, procedemos a cerrar el menu mobile
    //si el menudesktop esta abierto, procedemos a cerrar el menu desktop
    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    }
    const isproductDetailClose = productDetailContainer.classList.contains('inactive');
    if (!isproductDetailClose) {
        productDetailContainer.classList.add('inactive');
    }

    if (!isMenuDesktopClosed) {
        desktopMenu.classList.add('inactive');
    }
    shoppingCartContainer.classList.toggle('inactive');
}
function openProductDetailAside(){
    shoppingCartContainer.classList.add('inactive');
    productDetailContainer.classList.remove('inactive');
}
function closeProductDetailAside(){
    productDetailContainer.classList.add('inactive');
}


const productList = [];

productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Pantalla',
    price: 240,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Compu',
    price: 620,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
/*
<div class="product-card">
<img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
<div class="product-info">
  <div>
    <p>$120,00</p>
    <p>Bike</p>
  </div>
  <figure>
    <img src="./icons/bt_add_to_cart.svg" alt="">
  </figure>
</div>
</div>
*/


function RenderProducts(arr) {
    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        //product = {name, price, image} -> product.image
        const ProductImg = document.createElement('img');
        ProductImg.setAttribute('src',product.image);
        ProductImg.addEventListener('click',openProductDetailAside);
        

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');

        const productInfoDiv = document.createElement('div');

        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;

        const productName = document.createElement('p');
        productName.innerText = product.name;

        productInfoDiv.append(productPrice,productName);

        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src','./icons/bt_add_to_cart.svg');

        productInfoFigure.appendChild(productImgCart);

        productInfo.append(productInfoDiv, productInfoFigure);
        productCard.append(ProductImg, productInfo);
        cardsContainer.appendChild(productCard);
    };
}
RenderProducts(productList);