describe('Tocheck the myinternethero app is working ', () => {
    
    beforeEach(() => {
    
    cy.visit('https://the-internet.herokuapp.com/');
    cy.get('.heading').should('have.text','Welcome to the-internet');
    
    });
    
    it('A/B Testing', () => {
    
    cy.get(':nth-child(1) > a').should('have.text','A/B Testing');
    cy.get(':nth-child(1) > a').click();
    cy.get('p').contains('Also known as split testing. This is a way in which businesses are able to simultaneously test and learn different versions of a page to see which text and/or functionality works best towards a desired outcome (e.g. a user action such as a click-through).');
    
    });
    
});