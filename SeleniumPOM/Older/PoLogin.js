// PoLogin.js
import { Builder, By, until } from "selenium-webdriver";

const driver = new Builder().forBrowser("MicrosoftEdge").build();

class LoginDetails {
    elements = {
        username: () => driver.findElement(By.name('username')),
        password: () => driver.findElement(By.name('password')),
        loginButton: () => driver.findElement(By.xpath('//button[@type="submit"]')),
        dashboard: () => driver.findElement(By.xpath("//h6[@class='oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module']"))
    };

    async login() {
        await driver.get('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        await driver.wait(until.elementLocated(By.name('username')), 5000);

        await this.elements.username().sendKeys('Admin');
        await this.elements.password().sendKeys('admin123');
        await this.elements.loginButton().click();

        const dashboard = await driver.wait(until.elementLocated(By.xpath("//h6[@class='oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module']")), 5000);
        return dashboard; // return the element
    }
}

export default new LoginDetails();
