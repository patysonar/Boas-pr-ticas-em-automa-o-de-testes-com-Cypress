describe('Hardcoded assertion bad practice', () => {
  beforeEach(() => {
    cy.intercept(
      'GET',
      '**/search**',
      { fixture: 'stories' }
    ).as('getStories')

    cy.visit('https://hackernews-seven.vercel.app')
    cy.wait('@getStories')
  })

  it('searches', () => {
    const { hits } = require('../../fixtures/stories.json') // destruturação de objetos

    cy.search('cypress.io') // Fazer a busca
    cy.wait('@getStories') // Aguardar a busca

    cy.get('.table-row')    // filtra todos os hits
      .as('tableRows')
      .should('have.length', hits.length)
    hits.forEach((hit, index) => {  //Array pega todos os hits
      cy.get('@tableRows') // por ter colocado const hits estes trehos são apagados
        .eq(index) // passa o indice ao inves de hardcoded 
        .should('contain', hit.title)

    })
  })
})



// Para executar o stories.json --> npx cypress run --spec cypress/integration/hardcoded-assertion/sample.spec.js

// para executar hadcoded - sample.spec.js - > npm run cy:open
