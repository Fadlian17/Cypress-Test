describe('My First Simple Test with Cypress', () => {
    it( 'True should be True',()=>{

        expect(true).to.equal(true)  
    })

    it('5 should be 5',()=>{
        expect(5).to.equal(5)
    })

    describe('Another Describe Block',()=>{
        it('False should be False',()=>{
            expect(false).to.equal(false)
        })
    })
});