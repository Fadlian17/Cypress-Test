describe('Simple Custom Command from support/command', () => {
    it('should login web application using custom Command ', () => {
        cy.visit('http://zero.webappsecurity.com/login.html')
        cy.login('username','password')
    });
});