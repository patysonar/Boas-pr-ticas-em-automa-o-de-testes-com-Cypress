describe('Browser testing bad practice', () => {
  beforeEach(() => {
    cy.intercept(
      'GET',
      '**/search**',
      {fixture:'stories'}
    ).as('getStories')

    cy.visit('https://hackernews-seven.vercel.app')
    cy.wait('@getStories')
  })

  it('tests a browser feature instead of an app feature', () => {
    cy.get('.table-row a')
      .first()
      .should('have.attr','href', 'https://example.com/lc-jg')
      .and('not.have.attr', 'target','blank')  // Verificar que elemento possui os valores corretos para as propriedades href e target

    // Assert that a new tab was opened in the correct URL
  })
})

//Documentação Cypress: https://docs.cypress.io/guides/references/trade-offs#Multiple-tabs