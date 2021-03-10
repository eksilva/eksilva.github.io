describe('Portfolio tests', () => {

  it('Checks for returned content (200)', () => {
    cy.visit('https://eksilva.github.io/')
    cy.url().should('eq', 'https://kimosilva.com/')
  })

  it('Confirms header links nav to correct destinations', () => {
    
    cy.get('#heading-right a:first').should('have.attr', 'href', 'https://github.com/eksilva')

    cy.get('#heading-right a:first').next().should('have.attr', 'href', 'https://www.linkedin.com/in/erickimosilva/')

    cy.get('#heading-right a:first').next().next().should('have.attr', 'href', 'https://docs.google.com/document/d/1vWMHKhyiTENZ53PYHdRbLE2cBvVP6fu3rBd5YWx5HrY/edit?usp=sharing')

  })

  //it('', () => {})
})