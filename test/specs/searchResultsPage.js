class searchResultsPage {
    constructor(browser) {
        this.browser = browser;
    }

    async openSearchPage() {
        await this.browser.url('https://magento.softwaretestingboard.com/');
    }

    get searchInput() {
        return this.browser.$('#search');
    }

    get searchButton() {
        return this.browser.$('#search_mini_form > div.actions > button');
    }

    get searchResults() {
        return this.browser.$$('#maincontent > div.columns > div.column.main > div.search.results');
    }

    async setSearchValue(value) {
        const inputField = await this.searchInput;
        await inputField.setValue(value);
    }

    async clickSearchButton() {
        const button = await this.searchButton;
        await button.click();
    }

    async areSearchResultsDisplayed() {
        const results = await this.searchResults;
        return results.length > 0;
    }
}

module.exports = searchResultsPage;
