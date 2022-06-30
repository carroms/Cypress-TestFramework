
describe('Example to demonstrate API Chaining in Cypress', function () {

    it('Chain two API requests and validate the response', () => {
        //Query the pokeapi and get details for pikachu
        cy.request({
            method: 'GET',
            url: 'https://pokeapi.co/api/v2/pokemon/pikachu',
        }).then((response) => {
            //Read the character name from response body
            const name = response.body.forms[0].name           
            return name
        })
            //Pass the character name to the nationalize api and check it gives a proper response by trying to read the name in response body
            .then((name) => {
                cy.request({
                    method: 'GET',
                    url: 'https://api.nationalize.io/?name=' + name
                }).then((response) => {
                    expect(response.status).to.eq(200)
                    expect(response.body).to.have.property('name', name)                    
                })
            })
    })
})



