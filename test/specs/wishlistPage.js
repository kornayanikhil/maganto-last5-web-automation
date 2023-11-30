class wishlistPage {
    constructor(browser) {
        this.browser = browser;
    }

    async open() {
        await this.browser.url('https://magento.softwaretestingboard.com/wishlist/');
    }

    get wishlistItems() { return this.browser.$$('#item_11955'); }

    async areItemsPresentInWishlist() {
        const wishlistItems = await this.wishlistItems;
        return wishlistItems.length > 0;
    }
}

module.exports = wishlistPage;
