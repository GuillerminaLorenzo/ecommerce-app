describe('Home page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  });
  
  it('has a title', () => {
    cy.get('h3[id=homepage-title]').should('contain', 'EComm');
  });
})