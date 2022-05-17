/// <reference types="Cypress" />
it('Abrir o site',()=>{
    cy.visit('https://age-finder.vercel.app/')

})
it('Prencheer a data', ()=>{
    cy.get('[data-cy="birthdate-date-field"]')
    .type('1978-02-26')
})