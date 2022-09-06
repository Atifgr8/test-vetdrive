const {Given, When, Then} = require('@cucumber/cucumber')
const { expect } = require("@playwright/test");
const { LoginPage } = require('../../tests/acceptance/actions/login_actions/login_actions.js');

const loginPage = new LoginPage();

Given('User launched VetDrive login page', async function(){

    await loginPage.navigate();
})
When('User logged in vetDrive using the valid username and the valid password', async function(){
    await loginPage.login_vetDrive();
})
Then('Calender page should be Open', async function(){

    const locator = page.locator('text=Choose Clinic');
    await expect(locator).toHaveText("Choose Clinic");

})

When('User logged in VetDrive using the valid username {string} and the wrong password {string}', async function(userName, password){
    await loginPage.loginFailed(userName, password);
})

When('User logged in VetDrive using the wrong username {string} and the valid password {string}', async function(userName, password){
    await loginPage.loginFailed(userName, password);
})

When('User logged in VetDrive using the wrong username {string} and the wrong password {string}', async function(userName, password){
    await loginPage.loginFailed(userName, password);
})

Then('User should not get logged in', async function(){
    const locator = page.locator('.ViewLogin__error');
    await expect(locator).toHaveText("Please try again");
})