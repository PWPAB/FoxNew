const { browser } = require('@wdio/globals')

class Login {

    //Get username field element
    get #txtUsername(){
        return $("#user-name");
    }

    //Get username error icon element
    get #iconErrorUsername(){
        return $("#user-name + svg");
    }

    //Get password field element
    get #txtPassword(){
        return $("#password");
    }

    //Get password error icon element
    get #iconErrorPassword(){
        return $("#password + svg");
    }

    //Get login button element
    get #btnLogin(){
        return $("#login-button");
    }

    //Get error message container element
    get #txtErrorMessage(){
        return $("div.error h3");
    }

    //Method for entering username
    async enterUsername(value) {
        const username = await this.#txtUsername;
        return await username.setValue(value);
    }

    //Method for entering password
    async enterPassword(value) {
        const password = await this.#txtPassword;
        return await password.setValue(value);
    }

    //Method for clicking the login button
    async clickLoginButton(value) {
        const button = await this.#btnLogin;
        return await button.click();
    }

    //Method for logging in
    async login(username, password) {
        await this.enterUsername(username);
        await this.enterPassword(password);
        await this.clickLoginButton();
    }

    //Method for verifying the error message in login page
    async verifyErrorMessage(message) {
        const errorMessage = await this.#txtErrorMessage;
        return await expect(errorMessage).toHaveText(message); 
    }

    //Method for verifying the error icon in username is existing
    async verifyUsernameErrorIcon(){
        const errorIcon = await this.#iconErrorUsername;
        return await expect(errorIcon).toBeExisting();
    }

    //Method for verifying the error icon in password is existing
    async verifyPasswordErrorIcon(){
        const errorIcon = await this.#iconErrorPassword;
        return await expect(errorIcon).toBeExisting();
    }
}

module.exports = new Login();