describe('Write /Read Data Json /Data File', () => {
    it('should write data into JSON File', () => {
        cy.writeFile('log-test.json',{name:'Fadli',email:'test@gmail.com',age:19})
    });

    it('should write data into TXT File', () => {
        cy.writeFile('log-test.txt','hello test')
    });

    

    //read file 
    it('should read and verify data from JSON File', () => {
        cy.readFile('log-test.json')
        .its('age')
        .should('eq',19)
    });

    it('should read and verify data from text file', () => {
        cy.readFile('log-test.txt').should('eq','hello test')
    });

    //assert content type

    it('should read and verify browser document content', () => {
        cy.visit('https://www.example.com')
        cy.wait(2000)
        cy.document()
            .its('contentType')
            .should('equal','text/html')

        cy.document()
            .should('have.property','charset')
            .and('eq','UTF-8')
    });

});