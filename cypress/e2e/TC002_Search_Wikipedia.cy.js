    describe('Search for Google Wiki page from Wikipedia website (Smoke)', () => {
        before(() => {
            //Run this step first. Open wikipedia homepage
            cy.visit('https://wikipedia.org')
        })

        //Assert the page title should have the word 'Wikipedia' in it
        it('Validate Page Title', () => {
            cy.title().should('eq', 'Wikipedia')
        })

        //Search for google on wikipedia (type 'google' and click 'search' button)
        it('Search for Google Wiki Page', () => {
            cy.get('#searchInput').type('google')
            cy.get('button[type="submit"]').click()
        })

        
        it('Validate Google Wiki Page has opened', () => {
            //Assert the H1-header field on the search result contain word 'Google'
            cy.get('h1#firstHeading').contains('Google')
            //Assert page title be 'Google - Wikipedia'
            cy.title().should('eq', 'Google - Wikipedia')
            //Click on an image so that it opens up
            cy.get(':nth-child(2) > .infobox-image > .image > img').click()
                     
        })
    })
