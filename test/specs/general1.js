const assert = require('assert');
const { remote } = require('webdriverio');
const LoginPage = require('./loginPage'); 
const WishlistPage = require('./wishlistPage');
const OrdersPage = require('./ordersPage');
const OrdersPage1 = require('./ordersPage1');
const SearchResultsPage = require('./searchResultsPage');
const SearchPage = require('./searchPage');
const FilterPage = require('./filterPage');

describe('Login and User Accounts Page Test', () => {
    let browser;
    let loginPage;
    let wishlistPage;
    let ordersPage;
    let ordersPage1;
    let searchResultsPage;
    let searchPage;
    let filterPage;

    before(async () => {
        browser = await remote({
            capabilities: {
                browserName: 'chrome'
            }
        });
        loginPage = new LoginPage(browser); 
        wishlistPage = new WishlistPage(browser);
        ordersPage = new OrdersPage(browser);
        ordersPage1 = new OrdersPage1(browser);
        searchResultsPage = new SearchResultsPage(browser);
        searchPage = new SearchPage(browser);
        filterPage = new FilterPage(browser);
    });

    it('should log in successfully and view user account page', async () => {
        await loginPage.open();
        await loginPage.login('nikhilkornaya@gmail.com', 'Password@2001');

        const isLoggedIn = await loginPage.isLoggedIn();
        assert.equal(isLoggedIn, true);

        await loginPage.openUserAccountPage();
        const userInfoText = await loginPage.getUserInfoText();
        assert.equal(userInfoText, 'Nikhil k\nnikhilkornaya@gmail.com');
    });

    
    it('should view the items in the wishlist', async () => {
        await wishlistPage.open();

        const areItemsPresent = await wishlistPage.areItemsPresentInWishlist();
        assert.ok(areItemsPresent, 'No items found in the wishlist');
    });

    it('should view the number of orders', async () => {
        await ordersPage.open();

        const ordersCount = await ordersPage.getOrdersCount();
        assert.ok(ordersCount > 0, 'No orders found on the page');
    });

    it('should view the details of an order', async () => {
        await ordersPage1.openOrderHistory();
        await ordersPage1.clickOrderItemLink();

        const orderDetailsVisible = await ordersPage1.isOrderDetailsVisible();
        assert.ok(orderDetailsVisible, 'Order details not found after clicking');
    });

    it('should search for a product and display results', async () => {
        await searchResultsPage.openSearchPage();
        await searchResultsPage.setSearchValue('shirt');
        await searchResultsPage.clickSearchButton();

        const searchResultsDisplayed = await searchResultsPage.areSearchResultsDisplayed();
        assert.ok(searchResultsDisplayed, 'No search results found');
    });
    it('should search for a product', async () => {
        await searchPage.openSearchPage();
        await searchPage.clickCategorySearch();
    });
    
    it('should filter products by category', async () => {
        await filterPage.openCategoryFilterPage();
        await filterPage.clickCategorySubfilter();

        const filteredProducts = await filterPage.filteredProducts;
        await browser.pause(5000);
    });

    after(async () => {
        await browser.deleteSession();
    });
});


