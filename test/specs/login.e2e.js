const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');
const internetPage = require('../pageobjects/internet.page.js');

describe('Interacting with elements', function() {

    it("Is footer Displayed",() => {
        console.log(internetPage.pagefooter.isDisplayed())
    })

    /*it('get text for element', () => {
        browser.url('/')
        internetPage.getLiText()
        internetPage.getSpecificElementText(3)
    });

    
    it('should login with valid credentials', async () => {
        await LoginPage.open();

        await LoginPage.login('tomsmith', 'SuperSecretPassword!');
        await expect(SecurePage.flashAlert).toBeExisting();
        await expect(SecurePage.flashAlert).toHaveTextContaining(
            'You logged into a secure area!');
    });*/
});


