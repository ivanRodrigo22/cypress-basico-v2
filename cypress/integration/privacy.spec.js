it('testa a página da política de privacidade de forma independente', function() {
    cy.visit('./src/privacy.html')

    cy.contains('Não salvamos dados').should('be.visible')
})