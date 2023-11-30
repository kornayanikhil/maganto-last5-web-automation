class loginPage {
    constructor(browser) {
        this.browser = browser;
    }

    async open() {
        await this.browser.url('https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/');
    }

    get usernameField() { return this.browser.$('#email'); }
    get passwordField() { return this.browser.$('#pass'); }
    get loginButton() { return this.browser.$('#send2'); }

    async login(username, password) {
        await this.usernameField.setValue(username);
        await this.passwordField.setValue(password);
        await this.loginButton.click();
    }

    async isLoggedIn() {
        const element = await this.browser.$('body > div.page-wrapper > header > div.panel.wrapper > div > ul > li.greet.welcome > span');
        return await element.isExisting();
    }

    async openUserAccountPage() {
        await this.browser.url('https://magento.softwaretestingboard.com/customer/account/');
    }

    async getUserInfoText() {
        const userInfoElement = await this.browser.$('#maincontent > div.columns > div.column.main > div.block.block-dashboard-info > div.block-content > div > div.box-content > p');
        return await userInfoElement.getText();
    }
}

module.exports = loginPage;
