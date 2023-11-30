class SearchPage {
    constructor(browser) {
        this.browser = browser;
    }

    async openSearchPage() {
        await this.browser.url('https://magento.softwaretestingboard.com/');
    }

    get categorySearch() {
        return this.browser.$('#ui-id-5 > span:nth-child(2)');
    }

    async clickCategorySearch() {
        const categorySearchButton = await this.categorySearch;
        await categorySearchButton.click();
    }
}

module.exports = SearchPage;
