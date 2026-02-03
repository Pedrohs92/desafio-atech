describe('Recuperação de Senha', () => {
  it('Validar recuperação de senha por CPF', () => {
    //1-acessar a url
    cy.visit('https://homolog-sigma.decea.mil.br/sigma-ui/login')
    //2-clicar na opção "Esqueceu sua senha?"
    cy.get('[data-test="forgot-password-link"]').click()
    //3-Selecionar o Radio Button: CPF
    cy.get('[value="CPF"]').click
    //4- Preencher o campo com: 320.100.318-22
    cy.get('#683468257').type('320.110.318-22')
    //5- Clicar em Enviar
    cy.contains('Enviar').click()
    //6- Validar que o envio foi realizado
    cy.contains( 'Solicitação enviada', { timeout: 10000})
    .should('be.visible')
  })


})
