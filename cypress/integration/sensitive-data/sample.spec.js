describe('Sensitive data bad practice', () => {
  beforeEach(() => {
    cy.visit('https://notes-serverless-app.com/login')
  })

  it('fills the form with sensitive data', () => {
    cy.get('#email').type(Cypress.env('user_email')) //Digitando dados sensiveis direto
    cy.get('#password').type(Cypress.env('user_password'), { log: false}) // esconder a digitação da senha
  })
})



//Aula - Dados sensíveis versionados
//Dados sensíveis, tais como contas de usuários, senhas, números de cartão de crédito, 
//dentre outros, não devem ser versionados por questões de segurança.
// Foi criado o arquivo Cypress.env.json para esconder os dados sensiveis
