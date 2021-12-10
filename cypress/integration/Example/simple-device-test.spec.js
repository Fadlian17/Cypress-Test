describe('should be a Device Test Ratio', () => {
    it('Device 720P', () => {
        cy.viewport(1200,720)
        cy.visit('http://www.example.com')
        cy.wait(3000)
    });
    it('Device 1800P', () => {
        cy.viewport(1980,1080)
        cy.visit('http://www.example.com')
        cy.wait(3000)
    });

    it('Device Iphone X', () => {
        cy.viewport('iphone-x')
        cy.visit('http://www.example.com')
        cy.wait(3000)
    });

    it('Device IPAD', () => {
        cy.viewport('ipad-mini')
        cy.visit('http://www.example.com')
        cy.wait(3000)
    });

    it('Device MAC', () => {
        cy.viewport('macbook-16')
        cy.visit('http://www.example.com')
        cy.wait(3000)
    });
});