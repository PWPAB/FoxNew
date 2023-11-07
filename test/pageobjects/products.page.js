const { browser } = require('@wdio/globals')

class Products {
    
    //Get page title
    get #txtPageTitle(){
        return $("span.title");
    }

    //Get item description
    get #divProductDescription(){
        return $("inventory_item_desc");
    }

    //Get shopping cart icon link
    get #btnShoppingCart(){
        return $("a.shopping_cart_link");
    }

    get #badgeShoppingCart(){
        return $("span.shopping_cart_badge");
    }

    //Get single product
    get #divProductName() {
        return $("div.inventory_item_name");
    }

    //Method for clicking add to cart button depending on the itemName
    async btnAddToCart(itemName) {
        return await $(`button[id=add-to-cart-${itemName}]`); 
    }

     //Method for clicking remove to cart button depending on the itemName
     async btnRemoveToCart(itemName) {
        return await $(`button[id=remove-${itemName}]`); 
    }

    //Method for verifying page title
    async verifyPageTitle(title) {
        const pageTitle = await this.#txtPageTitle;
        return await expect(pageTitle).toHaveText(title);
    }

    //Method for clicking add to cart button
    async clickAddToCartButton(itemName) {
        const button = await this.btnAddToCart(await itemName);
        return await button.click();
    }

    //Method for clicking remove from cart button
    async clickRemoveFromCartButton(itemName) {
        const button = await this.btnRemoveToCart(await itemName);
        return await button.click();
    }

    //Method for clicking Shopping Cart Icon
    async clickShoppingCartIcon() {
        const shoppingCart = await this.#btnShoppingCart;
        return shoppingCart.click();
    }

    //Method for getting single product name
    async getProductName(item){
        const productName = await this.#divProductName;
        return await expect(productName).toHaveText(item);
    }

    //Method for getting shopping cart badge count
    async getBadgeCount(count){
        const cartCount = await this.#badgeShoppingCart;
        return await expect(cartCount).toHaveText(count);
    }

    //Method for checking that the badge count is hidden
    async getBadgeHidden(){
        const cartCount = await this.#badgeShoppingCart;
        return await expect(cartCount).not.toBeExisting();
    }

     //Method for checking that the cart is empty
     async getCartEmpty(){
        const productName = await this.#divProductName;
        return await expect(productName).not.toBeExisting();
    }

    /**
     * Convert spaces with hyphens
     * example: Sauce Labs Backpack => Sauce-Labs-Backpack
     */
    async replaceSpacesWithHyphens(text) {
        const replacedText = text.replace(/\s+/g, '-');
        return replacedText;
    }
}

module.exports = new Products();
