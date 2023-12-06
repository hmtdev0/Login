document.addEventListener('DOMContentLoaded', () => {
    // top menu bars
    var top_account_btn = document.getElementById('top-accounts-dropdown');
    document.getElementById('top_account_btn').addEventListener('mouseover', function () {

        top_account_btn.style.display = 'block';
        top_account_btn.addEventListener('mouseover', function () {
            top_account_btn.style.display = 'block';
        });
    });


    // displaying none
    document.getElementById('top_account_btn').addEventListener('mouseout', function () {
        top_account_btn.style.display = 'none';
        top_account_btn.addEventListener('mouseout', function () {
            top_account_btn.style.display = 'none';
        });
    });










    // navbar
    // shopping cart
    var shopping_cart = document.getElementById('shopping-cart');
    document.getElementById('cart_button').addEventListener('mouseover', function () {

        shopping_cart.style.display = 'block';
        shopping_cart.addEventListener('mouseover', function () {
            shopping_cart.style.display = 'block';
        });
    });


    // displaying none
    document.getElementById('cart_button').addEventListener('mouseout', function () {
        shopping_cart.style.display = 'none';
        shopping_cart.addEventListener('mouseout', function () {
            shopping_cart.style.display = 'none';
        });
    });
    // shopping ends




    // navbar accounts
    var account_nav = document.getElementById('account-nav');
    document.getElementById('account_nav_btn').addEventListener('mouseover', function () {

        account_nav.style.display = 'block';
        account_nav.addEventListener('mouseover', function () {
            account_nav.style.display = 'block';
        });
    });


    // displaying none
    document.getElementById('account_nav_btn').addEventListener('mouseout', function () {
        account_nav.style.display = 'none';
        account_nav.addEventListener('mouseout', function () {
            account_nav.style.display = 'none';
        });
    });






    // search bar displaying
    var search_btn = document.getElementById('search_btn');
    var search_bar = document.getElementById('search_bar');
    var search_bar_close = document.getElementById('search_bar_close');

    search_btn.addEventListener('click', function () {
        search_bar.style.display = 'block';
    });

    search_bar_close.addEventListener('click', function () {
        search_bar.style.display = 'none';
    });



    // main navbar
    var navbar_open_btn = document.getElementById('navbar-close-btn');
    var navbar_menu_bar = document.getElementById('navbar-menu');
    var nav_close_btn = document.getElementById('nav-close-btn');

    navbar_open_btn.addEventListener('click', function () {
        navbar_menu_bar.style.display = 'block';
    });

    nav_close_btn.addEventListener('click', function () {
        navbar_menu_bar.style.display = 'none';
    });
});