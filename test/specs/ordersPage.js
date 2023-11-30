class ordersPage {
    constructor(browser) {
        this.browser = browser;
    }

    async open() {
        await this.browser.url('https://magento.softwaretestingboard.com/sales/order/history/');
    }

    async getOrdersCount() {
        const orderItems = await this.browser.$$('#maincontent > div.columns > div.column.main > div.order-products-toolbar.toolbar.bottom > div > p > span');
        return orderItems.length;
    }
}

module.exports = ordersPage;
