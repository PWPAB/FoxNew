const { browser } = require('@wdio/globals')
const loginPage = require('../pageobjects/login.page')

describe('Login Test for errors', () => {

    it('should show an error message that the credentials doesnt match', async () => {
        await browser.url('https://www.saucedemo.com/');

        //Initialize variables
        const username = "standard_user";
        const password = "incorrectpass";
        const errorMessage = "Epic sadface: Username and password do not match any user in this service";

        //Enter invalid credentials and click login
        await loginPage.login(username, password);

        //Verify error message that the credentials doesnt match
        await loginPage.verifyErrorMessage(errorMessage);
        
        //Verify error icon is existing in username field
        await loginPage.verifyUsernameErrorIcon();

        //Verify error icon is existing in password field
        await loginPage.verifyPasswordErrorIcon();
       
    })

    it('should show an error message that the user is locked-out', async () => {
        await browser.url('https://www.saucedemo.com/');

        //Initialize variables
        const username = "locked_out_user";
        const password = "secret_sauce";
        const errorMessage = "Epic sadface: Sorry, this user has been locked out.";

        //Enter invalid credentials and click login
        await loginPage.login(username, password);

        //Verify error message that the credentials doesnt match
        await loginPage.verifyErrorMessage(errorMessage);
        
         //Verify error icon is existing in username field
        await loginPage.verifyUsernameErrorIcon();

        //Verify error icon is existing in password field
        await loginPage.verifyPasswordErrorIcon();
        
   
    })
    
})