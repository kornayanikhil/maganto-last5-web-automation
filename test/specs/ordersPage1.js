class OrdersPage1 {
    constructor(browser) {
        this.browser = browser;
    }

    async openOrderHistory() {
        await this.browser.url('https://magento.softwaretestingboard.com/sales/order/history/');
    }

    get orderItemLink() {
        return this.browser.$('#my-orders-table > tbody > tr > td.col.actions > a.action.view > span');
    }

    get orderDetailsSection() {
        return this.browser.$('#maincontent > div.columns > div.column.main > div.order-details-items.ordered');
    }

    async clickOrderItemLink() {
        const orderItem = await this.orderItemLink;
        await orderItem.click();
    }

    async isOrderDetailsVisible() {
        const orderDetails = await this.orderDetailsSection;
        return await orderDetails.isExisting();
    }
}

module.exports = OrdersPage1;
