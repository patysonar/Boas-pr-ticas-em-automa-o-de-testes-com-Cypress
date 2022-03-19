describe('Browser testing bad practice - Sample 1', () => {
  beforeEach(() => {
    cy.visit('https://notes-serverless-app.com')
  })

  it('directs the user to the login page when clicking the login link', () => {
    cy.contains('.nav a', 'Login')
      .should('have.attr', 'href', '/login')
      .and('not.have.attr', 'target')    //verifica que uma propriedade não existe você pode usar
  })
})

// para executar use: 
// npx cypress run --spec cypress/integration/browser-testing/sample1.spec.js para executar o teste em modo headless, 
// ou npm run cy:open, para abrir o Cypress em modo interativo.