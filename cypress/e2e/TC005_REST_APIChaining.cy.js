
describe('Example to demonstrate API Chaining in Cypress', function () {

    it('Chain two API requests and validate the response', () => {
        //Part 1
        cy.request({
            method: 'GET',
            url: 'https://pokeapi.co/api/v2/pokemon/pikachu',
        }).then((response) => {
            const name = response.body.forms[0].name           
            return name
        })
            //Part 2
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



