Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function(){
    cy.get('#firstName').type('Fernando')
    cy.get('#lastName').type('Bernardes')
    cy.get('#email').type('borgesluizf@gmail.com')
    cy.get('#open-text-area').type('teste')
    cy.get('button[type="submit"]').click()
})

Cypress.Commands.add('Teste', function(){
    cy.get('#firstName').type('Fernando')
        cy.get('#lastName').type('Bernardes')
        cy.get('#email').type('borgesluizf@gmail.com')
        cy.get('#phone-checkbox').click()
        cy.get('#open-text-area').type('teste')
        
        cy.get('button[type="submit"]').click()

        cy.get('.error').should('be.visible')

        cy.get('#phone').type(51998114900)

        cy.contains('button', 'Enviar').click()

        cy.get('.success').should('be.visible')

})