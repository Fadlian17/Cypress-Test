class BasePage{
    static loadHomePage(){
        cy.visit('https://devexpress.github.io/testcafe/example/')
    }

    static wait(number){
        cy.wait(number)
    }
}

class HomePage extends BasePage{
    static scrollToBottom(){
        cy.get('#submit-button').scrollIntoView()
    }

    static scroolToTop(){
        cy.get('header').scrollIntoView()
    }
}

describe('Abstraction with Classess', () => {

    before(function() {
        //run before all test inside execute
        //setup data or context text
        //send or resest the database
        HomePage.loadHomePage()
    });

    after(function() {
        //run after all test inside ,describe block are done
        //test clean up
        //clean cookies and local storage
    });


    beforeEach(function(){
        //run before it block the describe
    });

    afterEach(function() {
        //run after it block the describe
    });

    it('1st IT TEST', () => {
        HomePage.scrollToBottom()
        HomePage.wait(5000)
        HomePage.scroolToTop()
        HomePage.wait(3000)
    });

    
    it('2nd IT TEST', () => {
        HomePage.scrollToBottom()
        HomePage.wait(5000)
        HomePage.scroolToTop()
        HomePage.wait(3000)
    });
});