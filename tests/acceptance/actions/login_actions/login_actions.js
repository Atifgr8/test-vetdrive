const { expect } = require("@playwright/test")
const {config} = require('../../../config.js');
const { Login } = require('../../page_objects/login/Login.js');
const login = new Login();

class Login_actions {


    async navigate() {
        await page.goto(config.baseURL);
    }
    async login_vetDrive() {

        await login.inpUserName().fill(config.username)
        await login.inpPassword().fill(config.password);
        await login.rdoSingleUser().click();
        await login.btnSignIn().click();
        //[browserContext.setDefaultNavigationTimeout(90000)]("https://alpha.vetdrive.co/#/calendar/day/2022-08-18/")

        //await expect(page).toHaveURL('https://alpha.vetdrive.co/#/calendar/day/2022-08-16/')
        //setDefaultTimeout(30000)
        await page.waitForSelector('text=Choose Clinic',{
            timeout:200000}
        )
        await page.locator('text=Choose Clinic').click();
    }
    async loginFailed(userName, password) {
        await login.inpUserName().fill(userName)
        await login.inpPassword().fill(password);
        await login.rdoSingleUser().click()
        await login.btnSignIn().click();
        //let error = await page.$eval('[class="MuiTypography-root MuiTypography-caption MuiTypography-colorSecondary MuiTypography-alignCenter"]', (errortext) => errortext.textContent);
    }
}
module.exports = { LoginPage: Login_actions };