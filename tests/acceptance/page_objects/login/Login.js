const {login_locators} = require('../../locators/login_locators/login_locators');


class Login {
    inpUserName (){
        return page.locator(login_locators.userName);
    }
    inpPassword(){
        return page.locator(login_locators.password);
    }
    rdoSingleUser(){
        return page.locator(login_locators.singleUser);
    }
    btnSignIn(){
        return page.locator(login_locators.singIn);
    }
}
module.exports={Login}