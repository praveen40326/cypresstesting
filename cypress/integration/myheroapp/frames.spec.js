describe('iframe', () => {

it('single iframe', () => {

    cy.visit('https://demo.automationtesting.in/Frames.html');
    cy.get('.active').children('.analystic').should('have.text','Single Iframe ').as('singleframe')
    cy.get('@singleframe').click();
    cy.get('[id="Single"]').children('[id="singleframe"]').should('be.visible');

});
    const getIframetext = () => {
        return cy
        .get('iframe[id="singleframe"]')
        // Cypress yields jQuery element, which has the real
        // DOM element under property "0".
        // From the real DOM iframe element we can get
        // the "document" element, it is stored in "contentDocument" property
        // Cypress "its" command can access deep properties using dot notation
        // https://on.cypress.io/its
        .its('0.contentDocument').should('exist');

        }
        const getIframeBody = () => {
            // get the document
            return getIframetext()
            // automatically retries until body is loaded
            .its('body').should('not.be.undefined')
            // wraps "body" DOM element to allow
            // chaining more Cypress commands, like ".find(...)"
            .then(cy.wrap)
          }



          const getIframetextmulti = () => {
            return cy
            .get('#Multiple > iframe')
            // Cypress yields jQuery element, which has the real
            // DOM element under property "0".
            // From the real DOM iframe element we can get
            // the "document" element, it is stored in "contentDocument" property
            // Cypress "its" command can access deep properties using dot notation
            // https://on.cypress.io/its
            .its('0.contentDocument').should('exist');
    
            }
            const getIframeBodymulti = () => {
                // get the document
                return getIframetextmulti()
                // automatically retries until body is loaded
                .its('body').should('not.be.undefined')
                // wraps "body" DOM element to allow
                // chaining more Cypress commands, like ".find(...)"
                .then(cy.wrap)
              }
    

it('gets the post', () => {
    cy.visit('https://demo.automationtesting.in/Frames.html')
    // getIframeBody().find('#run-button').should('have.text', 'Try it').click()
    getIframeBody().find('[type="text"]').type("iframedemo");
   // getIframeBody().find('[type="text"]').should('have.text','iframedemo');
  })

it('iframeplugin', () => {
    cy.visit('https://demo.automationtesting.in/Frames.html')
    cy.get(':nth-child(2) > .analystic').click();
    // cy.get('#Multiple > iframe').find('.h5').should('have.text','Nested iFrames');
    // getIframeBody().find('.col-xs-6 > input').eq(1).should('be.visible');

    getIframeBody().find('[type="text"]').as('iframe');
    getIframeBodymulti().get('@iframe').type('iframenested', {force: true});  
       // cy.iframe().find('[type="text"]').type("iframedemo");

});
});