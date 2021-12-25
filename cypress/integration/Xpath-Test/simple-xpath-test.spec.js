describe('Xpaths with Cypress Example', () => {
    before(function() {
        cy.visit('http://zero.webappsecurity.com/index.html')
    });

    it('should click on web element using Xpath', () => {
        cy.xpath('//button[@id="signin_button"]').should('be.visible')
        cy.xpath('//button[@id="signin_button"]').click()
    });

    it('should display form login using Xpath ', () => {
        cy.xpath('//form').should('have.length',1)
    });
});