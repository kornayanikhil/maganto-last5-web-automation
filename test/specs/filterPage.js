class CategoryFilterPage {
    constructor(browser) {
        this.browser = browser;
    }

    async openCategoryFilterPage() {
        await this.browser.url('https://magento.softwaretestingboard.com/men.html');
    }

    get categorySubfilter() {
        return this.browser.$('#narrow-by-list2 > dd > ol > li:nth-child(1) > a');
    }

    async clickCategorySubfilter() {
        const categorySubfilterButton = await this.categorySubfilter;
        await categorySubfilterButton.click();
    }

    get filteredProducts() {
        return this.browser.$('#maincontent > div.columns > div.column.main');
    }
}

module.exports = CategoryFilterPage;
