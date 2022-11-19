const menuEmail = document.querySelector('.navbar-email');
const menuHamIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail');


menuEmail.addEventListener('click',toggleDesktopMenu);
menuHamIcon.addEventListener('click',togglemobileMenu);
menuCarritoIcon.addEventListener('click',togglecarritoaside);

function toggleDesktopMenu() {
    // menu del carrito esta cerrado
    const isAsideClosed = aside.classList.contains('inactive');
    //Si el menu del carrito esta abierto, procedemos a cerrar el menu del carrito
    if (!isAsideClosed) {
    aside.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}

function togglemobileMenu() {
    // menu del carrito esta cerrado
    const isAsideClosed = aside.classList.contains('inactive');
    //Si el menu del carrito esta abierto, procedemos a cerrar el menu del carrito
    if (!isAsideClosed) {
        aside.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');

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
    if (!isMenuDesktopClosed) {
        desktopMenu.classList.add('inactive');
    }
    aside.classList.toggle('inactive');
}

console.log('Js esta funcionando');