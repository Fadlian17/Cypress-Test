describe('Keyword search communication', () => {
    it('should submit search by keyword in custom search', () => {
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.get('#searchTerm').type('just some text {enter}')
    });
});