describe('Home page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
    cy.get('form[id=product-add-cart]').first().click()

  });

  it('has a title', () => {
    cy.get('h3[id=cart-title]').should('contain', 'Shopping Cart');
  });
  
  it('has a product', () => {
    cy.get('div[id=cart-item-0]').should('contain', '$');
  });
});