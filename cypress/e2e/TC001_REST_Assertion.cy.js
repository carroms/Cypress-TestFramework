describe("Pokemon Test", () => {
    it('Check for character name: Pikachu', () => {
        //Issue the request
        cy.request({
            method: 'GET',
            url: 'https://pokeapi.co/api/v2/pokemon/pikachu',
        })
        .should((response) => {
            //Assert response code should be 200
            expect(response.status).to.eq(200)
            
            //Assert response body has the character name as 'pikachu'
            expect(response.body).to.have.nested.property('forms[0].name','pikachu')
            
            //Assert the first move pikachu has is called 'mega-punch'
            expect(response.body.moves[0].move).to.have.property('name','mega-punch')
            
            //Assert pikachu has a total of 96 moves
            expect(response.body.moves.length).to.be.eq(90)
            
            //Convert the json response to string and print on the log/console
            cy.log(JSON.stringify(response.body))
        })
        
    })
})



