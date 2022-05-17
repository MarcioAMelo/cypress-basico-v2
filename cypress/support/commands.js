// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function(){
    const longText = 'Enfatiza-se que a implementação do código nos obriga à migração dos requisitos mínimos de hardware exigidos. Por conseguinte, a lei de Moore cumpre um papel essencial na implantação dos paradigmas de desenvolvimento de software. O incentivo ao avanço tecnológico, assim como a preocupação com a TI verde exige o upgrade e a atualização de alternativas aos aplicativos convencionais. No entanto, não podemos esquecer que a consulta aos diversos sistemas talvez venha causar instabilidade dos paralelismos em potencial.É claro que a utilização de SSL nas transações comerciais minimiza o gasto de energia da utilização dos serviços nas nuvens.A implantação, na prática, prova que o desenvolvimento contínuo de distintas formas de codificação otimiza o uso dos processadores do sistema de monitoramento corporativo.Todas estas questões, devidamente ponderadas, levantam dúvidas sobre se o novo modelo computacional aqui preconizado representa uma abertura para a melhoria de todos os recursos funcionais envolvidos.'
        cy.get('#firstName').type('Marcio')
        cy.get('#lastName').type('Melo')
        cy.get('#email').type('marcio@gmail.com')
        cy.get('#open-text-area').type(longText, {delay:0})
        cy.contains('button','Enviar').click()
        cy.get('.success').should('be.visible')
})