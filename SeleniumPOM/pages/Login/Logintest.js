import { Builder, By, until } from "selenium-webdriver";

class LoginDetails {
    driver = null;

    async startBrowser() {
        this.driver = await new Builder().forBrowser("MicrosoftEdge").build();
    }

    elements() {
        return{
            username: () => this.driver.findElement(By.name('username')),
            password: () => this.driver.findElement(By.name('password')),
            loginButton: () => this.driver.findElement(By.xpath('//button[@type="submit"]')),
            dashboard: () => this.driver.findElement(By.xpath("//h6[@class='oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module']")),
            errorMessage: () => this.driver.findElement(By.css('.oxd-alert-content-text'))
        }
    }

    async navigateToLoginPage() {
        await this.startBrowser();
        await this.driver.get('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        await this.driver.wait(until.elementLocated(By.name('username')), 10000);
    }

    async login(username, password) {
        const el = this.elements();
        await el.username().clear();
        await el.username().sendKeys(username);
        await el.password().clear();
        await el.password().sendKeys(password);
        await el.loginButton().click();
    }

    async getDashboardText() {
        const el = this.elements();
        const dashboardElement = await this.driver.wait(until.elementLocated(By.xpath("//h6[@class='oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module']")), 5000);
        return dashboardElement.getText();
    }

    async getErrorMessageText() {
        const el = this.elements();
        const errorElement = await this.driver.wait(until.elementLocated(By.css('.oxd-alert-content-text')), 5000);
        return errorElement.getText();
    }

    async quit() {
        if (this.driver) {
            await this.driver.quit();
            this.driver = null;
        }
    }
}

export default new LoginDetails();
