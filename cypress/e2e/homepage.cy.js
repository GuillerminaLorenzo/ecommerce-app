describe('Home page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  });
  
  it('has a title', () => {
    cy.get('h3[id=homepage-title]').should('contain', 'EComm');
  });

  it('has products in nav bar', () => {
    cy.get('a[id=homepage-products]')
      .should('contain', 'Products')
      .click();

    cy.url().should("include", "/");
    cy.contains('h3[id=homepage-title]', 'EComm');
  });

  it('adds products to cart', () => {
    cy.get('form[id=product-add-cart]')
      .first()
      .should('contain', 'Add to cart')
      .click();

    cy.url().should("include", "/cart");
    cy.contains('h3[id=cart-title]', 'Shopping Cart');
  });
})