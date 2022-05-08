/// <reference types="Cypress" />




describe('Central de atendimento ao cliente tat', function () {
    beforeEach(function () {
        cy.visit('src/index.html')
    })
    it('verifica o título da aplicação', function () {

        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
    })
    it('prenche os campos obrigatórios e envia o formulário', function () {
        const longText = 'Enfatiza-se que a implementação do código nos obriga à migração dos requisitos mínimos de hardware exigidos. Por conseguinte, a lei de Moore cumpre um papel essencial na implantação dos paradigmas de desenvolvimento de software. O incentivo ao avanço tecnológico, assim como a preocupação com a TI verde exige o upgrade e a atualização de alternativas aos aplicativos convencionais. No entanto, não podemos esquecer que a consulta aos diversos sistemas talvez venha causar instabilidade dos paralelismos em potencial.É claro que a utilização de SSL nas transações comerciais minimiza o gasto de energia da utilização dos serviços nas nuvens.A implantação, na prática, prova que o desenvolvimento contínuo de distintas formas de codificação otimiza o uso dos processadores do sistema de monitoramento corporativo.Todas estas questões, devidamente ponderadas, levantam dúvidas sobre se o novo modelo computacional aqui preconizado representa uma abertura para a melhoria de todos os recursos funcionais envolvidos.'
        cy.get('#firstName').type('Marcio')
        cy.get('#lastName').type('Melo')
        cy.get('#email').type('marcio@gmail.com')
        cy.get('#open-text-area').type(longText, {delay:0})
        cy.get('.button[type="submit"]').click()
        cy.get('.success').should('be.visible')

    })
    it('exibir mensagem de erro ao submeter o formulário com um email com formatação errada', () => {
        cy.get('#firstName').type('Marcio')
        cy.get('#lastName').type('Melo')
        cy.get('#email').type('marcio@gmail,com')
        cy.get('#open-text-area').type('Test',{delay:0})
        cy.get('.button[type="submit"]').click()
        cy.get('.error').should('be.visible')
    })
    it('campo telefone continua vazio valor não numérico', ()=>{
        cy.get('#phone')
            .type('abcde')
            .should('have.value', '')
    })
    it('exibe mensagem de erro quando o telefone passa a ser obrigatório, mas não é preenchido',()=>{
        cy.get('#firstName').type('Marcio')
        cy.get('#lastName').type('Melo')
        cy.get('#email').type('marcio@gmail.com', {delay:0})
        cy.get('#phone-checkbox').click()
        cy.get('#open-text-area').type('Test',{delay:0})
        cy.get('.button[type="submit"]').click()
        cy.get('.error').should('be.visible')
    })
    it.only('prenche e limpa os campos nome, sobrenome, email e telefone', ()=>{
        cy.get('#firstName')
            .type('marcio')
            .clear()
            .should('have.value', '')
        cy.get('#lastName')
            .type('melo')
            .clear()
            .should('have.value', '')
        cy.get('#email')
            .type('marcio@gmail.com')
            .clear()
            .should('have.value','')
            cy.get('#open-text-area')
                .type('teste,teste')
                .clear()
                .should('have.value', '')
    })




})