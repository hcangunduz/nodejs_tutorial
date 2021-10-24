const homepage = require('../pageobjects/homepage.page.js');

describe('Interacting with elements', function() {

    it('get text for element', () => {
        browser.url('/')
        homepage.getLiText()
        homepage.getSpecificElementText(3)
    });

    it("Is footer Displayed",() => {
        console.log(homepage.pagefooter.isDisplayed())
    })

    it("Is header exist",() => {
        console.log(homepage.pageheader.isExisting())
    })

    it("Is footer in viewport?",() => {
        console.log(homepage.pagefooter.isDisplayedInViewPort())
    })

    it("Is header in viewport?",() => {
        console.log(homepage.pageheader.isDisplayedInViewPort())
    })

    it("Is subheader enabled?",() => {
        console.log(homepage.subheader.isEnabled())
    })
    
    it("Click Element",() => {
       homepage.clickOnLink()
    })

    it('should click element', () => {
        browser.url('/')
        homepage.clickOnLink()
        expect(browser.getUrl()).equals('http://the-internet.herokuapp.com/abtest')
    })

    it('should get Text', () => {
        browser.url('/')
        expect(homepage.getSpecificElementText(1)).equals('A/B Testing')
    })

    it('should click checkbox', () => {
        homepage.clickCheckbox(1)
        expect(homepage.checkbox(1).isSelected()).equals(true)
    })

    it('should click checkbox', () => {
        homepage.clickLink(6)
        homepage.clickCheckbox(1)
        expect(homepage.checkboxes(1).isSelected()).equals(true)
    })

    it('should uncheck checkbox', () => {
        homepage.clickCheckbox(1)
        expect(homepage.checkboxes(1).isSelected()).equals(false)
    })

    it('should hover on figure', () => {
        browser.url(`${browser.options.baseUrl}/hovers`)
        homepage.hoverOnFigure(3)
        assert.equal("name: user1", homepage.getFigureDetailsText(3))
    }) 

});


