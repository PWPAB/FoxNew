const { browser } = require('@wdio/globals')
const loginPage = require('../pageobjects/login.page')
const productsPage = require('../pageobjects/products.page')

describe('Add and Remove to Cart Test', () => {
    before(async () => {
        await browser.url('https://www.saucedemo.com/');

        //Initialize variables
        const username = "standard_user";
        const password = "secret_sauce";

        //Enter valid credentials and the user should successfully login
        await loginPage.login(username, password);

        //Verify that the user successfully logged in and Products page is displayed
        await productsPage.verifyPageTitle("Products");
    })

    it('should add a single item in the cart', async () => {
        //Enter product name
        const itemName = "Sauce Labs Backpack";

        //Convert the all letters to lower case
        const lowerCaseItemName = itemName.toLocaleLowerCase(); 

        //Replace the spaces with hyphens in the product name to concatinate with the css selector
        const replacedItemName = await productsPage.replaceSpacesWithHyphens(lowerCaseItemName)

        //Click add to cart button using the product name with hyphens
        await productsPage.clickAddToCartButton(replacedItemName);

        //Click Shopping Cart Icon to display shopping cart page
        await productsPage.clickShoppingCartIcon();

        //Verify if the added product is correct
        await productsPage.getProductName(itemName);

        //Verify that the correct shopping cart badge count is displayed
        await productsPage.getBadgeCount("1");
    
    })

    it('should remove a single item in the cart', async () => {
        //Initialize product item
        const itemName = "Sauce Labs Backpack";

        //Convert the all letters to lower case
        const lowerCaseItemName = itemName.toLocaleLowerCase(); 

        //Replace the spaces with hyphens in the product name to concatinate with the css selector
        const replacedItemName = await productsPage.replaceSpacesWithHyphens(lowerCaseItemName)

        //Click remove item from the cart using the product name with hyphens
        await productsPage.clickRemoveFromCartButton(replacedItemName);

        //Verify that the cart is empty
        await productsPage.getCartEmpty();

        //Verify that the badge count is hidden
        await productsPage.getBadgeHidden();

    });

    
        
    
}) 


