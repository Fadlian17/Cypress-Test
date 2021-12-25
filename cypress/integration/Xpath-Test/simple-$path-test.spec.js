describe('Cypress.$ function', () => {
    before(function() {
        cy.visit('http://zero.webappsecurity.com/index.html')
    });

    it('Expose JQuery Elements in the Current Windows', () => {
        const signInButton = Cypress.$('#signin_button')
        signInButton.click()
    });
});