# Cypress-TestFramework
Baby steps towards mastering cypress.io


# How to Start
1. Clone the project
2. `npm i - Install` all the dependencies
3. There are a lot dependencies that are not updated frequently in parallel with cypress. So while installing if you are seeing conflicts use `npm i --force`.
4. Run `npm test` to execute the tests in Test Runner | Run `npx cypress run` to execute the tests in CLI
5. To create HTML reports execute first `npm run test:cli` and then `npm run create:html:report`

# What the test cases do
1. TC001_REST_Assertion
    Calls a public API (https://pokeapi.co/api/v2/pokemon/pikachu), reading the properties for character name = pikachu.
    Asserts the response data has charactername = pikachu, move named 'mega-punch' and has a total moves = 96
2. TC002_Search_Wikipedia
    Open wikipedia. Assert page-title be 'Wikipedia'. 
    Search for 'Google'. 
    Assert page title and header content. Finally click on one of the images on the page so that it opens up in an enlarged view. 
3. TC003_AmazonUK_CreateWishlist
    Open www.Amazon.co.uk. Handle the 'accept cookie' pop-up. 
    Click on 'Create a new (wish)List' from the hover over menu against sign-in button.
    Assert the page url contains text 'wishlist/intro'
4. TC004_WebLogin
    Login to a web page (data driven).
5. TC005_REST+APIChaining
    Query the public API 'https://pokeapi.co/api/v2/pokemon/pikachu', read the character name.
    Pass the character name to a second public api 'https://api.nationalize.io/?name=<>' which returns the likely country-of-origin for the given name.
    Assert the response has the original name passed into it.
