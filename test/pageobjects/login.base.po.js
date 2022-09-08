
const Base = require('../pageobjects/base.po')

class Login extends Base{ 

    get username() {
        return $('#loginFrm_loginname');
    }
    get password() {
        return $('#loginFrm_password');
    }
    get submitButton() {
        return $('[title="Login"]');
    }
    get alertMsg(){
        return $('.alert-danger')
    }
    async openLogin(){
        await this.openPage();
        await this.logReg.click()
    }
    async login(credentials) {
        await this.username.setValue(credentials.username);
        await this.password.setValue(credentials.password);
        await this.submitButton.click();
    }
}
module.exports = {Login: new Login()}
