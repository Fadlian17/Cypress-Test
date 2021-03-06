describe('Browser Actions', () => {
    it('should load books website', () => {
        cy.visit('http://books.toscrape.com/index.html')
        cy.url().should('include','index.html')
        cy.log('Before Reload Website!')
        cy.reload()
        cy.log('After Reload Website!')
    });

    it('should click on travel category', () => {
        cy.get('a')
            .contains('Travel')
            .click()
        cy.get('h1').contains('Travel') 
    });

    it('should display correct number of books', () => {
        cy.get('.product_pod')
            .its('length')
            .should('eq',11)
    });

    it('should on Click Poetry Category', () => {
        cy.get('a')
          .contains('Poetry')
          .click()
    });

    it('should on Click Olio Book Detail', () => {
        cy.get('a')
          .contains('Olio')
          .click()
    });

    it('should have correct price tag', () => {
        cy.get('.price_color')
        .contains('£23.88')
    });
});