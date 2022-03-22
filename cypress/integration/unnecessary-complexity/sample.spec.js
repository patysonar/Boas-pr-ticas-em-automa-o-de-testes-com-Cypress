describe('Unnecessary complexity anti-patter', () => {
  beforeEach(() => {
    cy.visit('https://bit.ly/2XSuwCW')

    if (Math.random() > 0.5) {  //seleciona o checkbox
      cy.get('#agree')
        .click()
      
    }
  })

  Cypress._.times(5, () => {  //Roda o teste 5 vezes
    it('checks the checkbox only if not checked', () => { // marca se não tiver marcado o checkbox
      cy.get('#agree')
        .check()
        .should('be.checked')
    })
  })
})

