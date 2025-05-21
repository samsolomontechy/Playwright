import { Given, When, Then, After } from '@cucumber/cucumber';
import { expect } from 'chai';
import LoginDetails from '../../pages/Login/Logintest.js';

Given('I am on the OrangeHRM login page', { timeout: 20000 }, async function () {
    await LoginDetails.navigateToLoginPage();
});

When('I enter valid username and password', async function () {
    await LoginDetails.login('Admin', 'admin123');
});

When('I enter invalid username and password', async function () {
    await LoginDetails.login('wrongUser', 'wrongPass');
});

When('I click on the login button', async function () {
    // Already handled inside login()
});

Then('I should see the dashboard', async function () {
    const text = await LoginDetails.getDashboardText();
    expect(text).to.equal('Dashboard');
});

Then('I should see an error message', async function () {
    const errorText = await LoginDetails.getErrorMessageText();
    expect(errorText).to.include('Invalid credentials');
});

After(async function () {
    await LoginDetails.quit();
});
