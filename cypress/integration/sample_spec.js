describe('My first set of Cypress Tests', () => {

  it('Does not do a whole lot for this first test', () => {
    expect(true).to.equal(true);
  })

  it('Visits the kitchen sink', () => {
    cy.visit('https://example.cypress.io');
  })

  it('Finds an element', () => {
    cy.contains('type');
  })

  it('Clicks an element', () => {
    cy.contains('type').click();
  })

  it('Checks for correct url endpoint(s)', () => {
    cy.url()
      .should('include', '/commands/actions');
  })

  it('Finds an element(s) based on CSS class name', () => {
    cy.get('.action-email');
  })

  it('Interact with an element based on CSS class name', () => {
    cy.get('.action-email')
      .type('fake@email.com')
      .should('have.value', 'fake@email.com')
  })

});

// Arrange - setup initial app state
    // > visit a web page
    // > query for an element
  // Act - take an action
    // > interact with that element
  // Assert - make an assertion
    // > make an assertion about page content