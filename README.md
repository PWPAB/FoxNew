# saucedemo
Automation Test Scripts for Saucedemo

Application Under Test: Sauce Demo URL: https://www.saucedemo.com/

Executing the spec files

1. Open the terminal

2. Type the following code 

To execute a specific spec file:
```
npx wdio run ./wdio.conf.js --spec test.login.js

Test Cases included in the run:

TC04_Verify that an error message is displayed when incorrect credentials are entered

TC05_Verify that a locked-out user cannot login, and an error message is displayed
```
```
npx wdio run ./wdio.conf.js --spec test.removeitem.js

Test Case included in the run:

TC03_Verify that user can remove an item from the products page
```
```
npx wdio run ./wdio.conf.js --spec test.shoppingcart.js

Test Cases included in the run:

TC01_Verify that a user can add a single item in the cart

TC02_Verify that a user can remove a single item in cart
```


Note that the spec files are located at ./test/specs
