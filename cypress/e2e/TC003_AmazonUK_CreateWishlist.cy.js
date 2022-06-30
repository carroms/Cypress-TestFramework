describe('Example to Demostrate how to hover over element in cypress', () => {

    it('Hover and Validate Text using trigger(\'mouseover\')', function () {
        //Open amazon.co.uk web page
        cy.visit('https://www.amazon.co.uk/')

        //Click on 'Accept Cookies' button
        cy.get('#sp-cc-accept').click()

        //Choose 'Create a List' from the hover over menu
        cy.get('[data-csa-c-content-id="nav_ya_signin"]').trigger('mouseover')
        cy.contains('Create a List').click()
        
        //Assert the page url contains text 'wishlist/intro'
        cy.url().should('include','wishlist/intro')
    })
})