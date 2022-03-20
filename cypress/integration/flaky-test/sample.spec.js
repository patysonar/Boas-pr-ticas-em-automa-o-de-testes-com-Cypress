describe('Flaky tests bad practice', () => {
  beforeEach(() => {
    cy.intercept(
      'GET',
      '**/search**',
      { fixture: "stories"} // isolando uma api externa - extracredit 1
    ).as('getStories')

    cy.visit('https://wlsf82-hacker-stories.web.app')
    // cy.wait('@getStories') // extra crdit 2 - removendo pq o cypress já espera as requisições

  })

  Cypress._.times(10, () => {
    it('shows a max of 5 buttons for the last searched terms', () => {
      const faker = require('faker')

      Cypress._.times(6, () => {
        cy.search(faker.random.word())
      })

     // cy.wait('@getStories') // extra crdit 2 - removendo pq o cypress já espera as requisições

      cy.get('.last-searches button')
        .should('have.length', 5)
    })
  })
})
