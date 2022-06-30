    describe('Login to OrangeHRM website (E2E)', function () {
        before(function () {
            //Open this url at the beginning of test
            cy.visit('https://opensource-demo.orangehrmlive.com/')
            
            //Read the content of ./fixtures/testdata.json file
            cy.fixture('testdata').then(function (testdata) {
                this.testdata = testdata
            })
        })

        //Use the contents of testdata file previously read to fill in the login details
        it('Validate successful Login', function () {
            cy.get('#txtUsername').type(this.testdata.username)
            cy.get('#txtPassword').type(this.testdata.password)
            cy.get('#btnLogin').click()
            cy.get('#welcome').contains(this.testdata.welcomeText)
        })
    })

