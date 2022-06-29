    describe('Search for Google Wiki page from Wikipedia website (Smoke)', () => {
        before(() => {
            cy.visit('https://wikipedia.org')
        })

        it('Validate Page Title', () => {
            cy.title().should('eq', 'Wikipedia')
        })

        it('Search for Google Wiki Page', () => {
            cy.get('#searchInput').type('google')
            cy.get('button[type="submit"]').click()
        })

        it('Validate Google Wiki Page has opened', () => {
            cy.get('h1#firstHeading').contains('Google')
            cy.title().should('eq', 'Google - Wikipedia')
            cy.get(':nth-child(2) > .infobox-image > .image > img').click()
                     
        })
    })
