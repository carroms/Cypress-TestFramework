describe("Pokemon Test", () => {
    it("Call Pikachu", () => {
        cy.request("https://pokeapi.co/api/v2/pokemon/pikachu")
        .then ((pikares) => {
            expect(pikares.status).to.eq(200)
            expect(pikares.body).to.have.property('abilities');
            expect(pikares).to.have.property('headers');

            expect(pikares.body).to.have.nested.property('forms[0].name','pikachu');
            expect(pikares.body.moves[0].move).to.have.property('name','mega-punch');

            const name = pikares.body.forms[0].name;
            assert.equal(name, 'pikachu');

        })
    })
})



describe('Example to demonstrate API Chaining in Cypress', function () {

    it('Chain two API requests and validate the response', () => {
        //Part 1
        cy.request({
            method: 'GET',
            url: 'https://pokeapi.co/api/v2/pokemon/pikachu',
        })
        .should((response) => {
            cy.log(JSON.stringify(response.body))
            expect(response.status).to.eq(200)
            expect(response.body).to.have.nested.property('forms[0].name','pikachu')
            expect(response.body.moves[0].move).to.have.property('name','mega-punch')
            expect(response.body.moves.length).to.be.eq(96)
        })
        
    })
})



